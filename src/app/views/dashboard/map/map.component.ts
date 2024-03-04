import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MapOlService } from 'src/app/core/services/map-ol.service';
import Swal from 'sweetalert2';
declare var ol: any;
declare var shp: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    standalone: true,
    imports: [NgClass, FormsModule, ReactiveFormsModule]
})
export class MapComponent {
    olService = inject(MapOlService);
    urlFile = new FormControl('');
    drawTypeSelect = new FormControl('none');
    formatSaveSelect = new FormControl('');
    nameSearchLocation = new FormControl('');
    optionsSelect = signal<any[]>([]);
    optionsFormatSave = signal<any[]>([]);
    map: any;
    draw: any;
    vectorLayers: any[] = [];
    markersLayer: any;
    sourceVector: any;
    ActiveMarkersLayer = false;
    configProjection = { source: 'EPSG:4326' };

    ngOnInit(): void {
        this.optionsSelect.set(this.olService.optionsSelect);
        this.optionsFormatSave.set(this.olService.formatSave);
    }

    ngAfterViewInit(): void {
        this.initMap();
        this.initMarkerLayer();
        this.initMapClickEvent();
    }

    initMap(): void {
        this.sourceVector = new ol.source.Vector();
        this.map = this.olService.initMap(this.sourceVector)
    }

    activeClickEvent() {
        this.ActiveMarkersLayer = !this.ActiveMarkersLayer;
        if(this.ActiveMarkersLayer){
            this.drawTypeSelect.setValue('none');
            this.onChangeDrawType()
        }
    }

    initMapClickEvent(): void {
        this.map.on('click', (event: any) => {
            const coordinates = event.coordinate;
            if (this.ActiveMarkersLayer) {
                this.addMarker(coordinates);
            }
        });
    }

    initMarkerLayer(): void {
        this.markersLayer = new ol.layer.Vector({
            source: new ol.source.Vector(),
            style: new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0.5, 1],
                    src: 'https://www.gstatic.com/mapspro/images/stock/102-pink.png',
                }),
            }),
        });
        this.map.addLayer(this.markersLayer);
    }

    addMarker(coordinates: any): void {
        const markerFeature = new ol.Feature(new ol.geom.Point(coordinates));
        this.markersLayer.getSource().addFeature(markerFeature);
    }

    onChangeDrawType(): void {
        if (this.draw) this.map.removeInteraction(this.draw);

        const selectedDrawType = this.drawTypeSelect.value;

        if (selectedDrawType !== 'none') {
            this.draw = new ol.interaction.Draw({
                source: this.sourceVector,
                type: selectedDrawType
            });
            this.map.addInteraction(this.draw);
        }
    }


    onFileSelected(event: any): void {
        const file: File = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => this.processFile(e.target.result, file.name);
            reader.readAsArrayBuffer(file);
        }
    }

    processFile(data: ArrayBuffer, fileName: string): void {
        const fileExtension = fileName.toLowerCase().split('.').pop();

        switch (fileExtension) {
            case 'zip':
                this.processShapefile(data, fileName);
                break;
            case 'geojson':
            case 'kml':
            case 'gpx':
                this.processVectorData(data, fileName, new ol.format[fileExtension.toUpperCase()]());
                break;
            default:
                Swal.fire({
                    icon: 'error',
                    title: 'Formato no soportado',
                    text: 'El formato de archivo no es compatible. Por favor, seleccione un archivo Shapefile, GeoJSON, KML o GPX.'
                });
        }
    }

    processShapefile(data: ArrayBuffer, fileName: string): void {
        shp(data).then((geojson: any) => {
            const features = new ol.format.GeoJSON().readFeatures(geojson);
            this.addVectorLayer(features, fileName);
        });
    }

    processVectorData(data: ArrayBuffer, fileName: string, format: any): void {
        const features = format.readFeatures(new TextDecoder().decode(data), {
            featureProjection: this.map.getView().getProjection(),
            dataProjection: this.configProjection.source
        });

        this.addVectorLayer(features, fileName);
    }

    addVectorLayer(features: any, fileName: string): void {
        const vectorLayer = new ol.layer.Vector({
            source: new ol.source.Vector({ features }),
            name: fileName
        });

        this.vectorLayers.push(vectorLayer);
        this.map.addLayer(vectorLayer);
        this.map.getView().fit(vectorLayer.getSource().getExtent(), this.map.getSize());
    }

    removeLayer(index: number): void {
        const removedLayer = this.vectorLayers.splice(index, 1)[0];
        this.map.removeLayer(removedLayer);
    }

    saveChanges(): void {
        var features = this.sourceVector.getFeatures();

        if (features.length === 0) {
            alert('No hay geometrías para guardar.');
            return;
        }

        var format;
        var mimeType;
        switch (this.formatSaveSelect.value) {
            case 'geojson':
                format = new ol.format.GeoJSON();
                mimeType = 'application/json';
                break;
            case 'kml':
                format = new ol.format.KML();
                mimeType = 'application/vnd.google-earth.kml+xml';
                break;
            case 'gpx':
                format = new ol.format.GPX();
                mimeType = 'application/gpx+xml';
                break;
            default:
                alert('Formato no compatible.');
                return;
        }

        var serializedData = format.writeFeatures(features, {
            featureProjection: 'EPSG:3857', // Proyección del mapa
            dataProjection: 'EPSG:4326' // Proyección de los datos
        });

        console.log(serializedData);
    }

    getModifiedFeatures(): any[] {
        const modifiedFeatures: any[] = [];
        this.vectorLayers.forEach((layer: any) => {
            const source = layer.getSource();
            source.forEachFeature((feature: any) => {
                if (feature.get('status') === 'modified') {
                    modifiedFeatures.push(feature.clone());
                }
            });
        });
        return modifiedFeatures;
    }

    showSuccessMessage(): void {
        Swal.fire({
            icon: 'success',
            title: 'Cambios Guardados',
            text: 'Los cambios se han guardado exitosamente.'
        });
    }

    loadFileFromURL(url: any): void {
        if (url) {
            fetch(url)
                .then(response => response.arrayBuffer())
                .then((data: any) => {
                    this.processFile(data, url.split('/').pop())
                })
                .catch(error => {
                    console.error('Error loading file from URL', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error de carga',
                        text: 'Hubo un error al cargar el archivo desde la URL.'
                    });
                });
            this.urlFile.setValue('')
        }
    }

    serachLocation(){
        const search = this.nameSearchLocation.value;
        if(search){
            var url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(search);

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        var result = data[0];
                        var coordinates = [parseFloat(result.lon), parseFloat(result.lat)];

                        this.map.getView().setCenter(ol.proj.fromLonLat(coordinates));
                        this.map.getView().setZoom(10);
                    } else {
                        alert('Lugar no encontrado');
                    }
                })
                .catch(error => console.error('Error en la búsqueda:', error));
        }
    }
}

/*

https://s3-us-west-2.amazonaws.com/s.cdpn.io/1717245/2007SanDiegoCountyFires.kml
 */
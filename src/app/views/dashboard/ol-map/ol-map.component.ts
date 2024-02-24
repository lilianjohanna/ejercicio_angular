import { Component, ElementRef, ViewChild } from '@angular/core';
declare var ol: any;
declare var shp: any;

@Component({
    selector: 'app-ol-map',
    standalone: true,
    imports: [],
    templateUrl: './ol-map.component.html'
})
export class OlMapComponent {
    @ViewChild('map', { static: true }) mapElement!: ElementRef;
    private map: any;
    private drawLayer: any;
    private draw: any;

    ngOnInit(): void {
        this.initMap();
    }

    private initMap(): void {
        this.drawLayer = new ol.layer.Vector({
            source: new ol.source.Vector(),
        });

        this.map = new ol.Map({
            target: this.mapElement.nativeElement,
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                }),
                this.drawLayer,
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([0, 0]),
                zoom: 2,
            }),
        });
    }

    onGeometryTypeChange(): void {
        this.map.removeInteraction(this.draw);

        const geometryTypeSelect = document.getElementById('geometryTypeSelect') as HTMLSelectElement;
        if (geometryTypeSelect.value === 'Shapefile') {
            const fileInput = document.getElementById('fileInput') as HTMLInputElement;
            fileInput.accept = '.zip';
        } else {
            // Restaurar aceptación de todos los tipos de archivos
            const fileInput = document.getElementById('fileInput') as HTMLInputElement;
            fileInput.accept = '';
        }

        this.draw = new ol.interaction.Draw({
            source: this.drawLayer.getSource(),
            type: geometryTypeSelect.value,
        });

        this.map.addInteraction(this.draw);
    }

    onFileInputChange(event: any): void {
        const file = event.target.files[0];

        if (file) {
            const geometryTypeSelect = document.getElementById('geometryTypeSelect') as HTMLSelectElement;

            if (geometryTypeSelect.value === 'Shapefile' && file.name.endsWith('.zip')) {
                this.readShapefile(file);
            }
        }
    }

    private readShapefile(file: any): void {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            const arrayBuffer = e.target.result;

            shp(arrayBuffer).then((geojson: any) => {
                const features = new ol.format.GeoJSON().readFeatures(geojson);
                this.drawLayer.getSource().addFeatures(features);
                this.map.getView().fit(this.drawLayer.getSource().getExtent(), this.map.getSize());
            });
        };

        reader.readAsArrayBuffer(file);
    }
}

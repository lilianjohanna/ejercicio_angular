import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
declare var ol: any;
declare var shp: any;

@Injectable({
    providedIn: 'root'
})
export class MapOlService {

    optionsSelect = [{
        value: 'none',
        label: 'Tipo de dibujo'
    },
    {
        value: 'Point',
        label: 'Point'
    },
    {
        value: 'LineString',
        label: 'LineString'
    },
    {
        value: 'Polygon',
        label: 'Polygon',
    }
    ]
    formatSave = [
        {
            value: 'geojson',
            label: 'geojson'
        },
        {
            value: 'kml',
            label: 'kml'
        },
        {
            value: 'gpx',
            label: 'gpx'
        }
    ]

    initMap(sourceVector: any) {
        const center = ol.proj.fromLonLat([-74.006, 40.7128]);

        return new ol.Map({
            target: 'map',
            view: new ol.View({ center, zoom: 10 }),
            layers: [
                new ol.layer.Tile({ source: new ol.source.OSM() }),
                new ol.layer.Vector({ source: sourceVector })
            ]
        });
    }

}

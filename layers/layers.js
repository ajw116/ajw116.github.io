var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'Thunderforest Landscape',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>,&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
}),
new ol.layer.Tile({
    'title': 'Stamen Watercolor',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
}),
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
})
]
});
var format_OtagoRC = new ol.format.GeoJSON();
var features_OtagoRC = format_OtagoRC.readFeatures(geojson_OtagoRC, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtagoRC = new ol.source.Vector();
jsonSource_OtagoRC.addFeatures(features_OtagoRC);var lyr_OtagoRC = new ol.layer.Vector({
                source:jsonSource_OtagoRC, 
                style: style_OtagoRC,
                title: "OtagoRC"
            });var format_OtagoLakes = new ol.format.GeoJSON();
var features_OtagoLakes = format_OtagoLakes.readFeatures(geojson_OtagoLakes, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtagoLakes = new ol.source.Vector();
jsonSource_OtagoLakes.addFeatures(features_OtagoLakes);var lyr_OtagoLakes = new ol.layer.Vector({
                source:jsonSource_OtagoLakes, 
                style: style_OtagoLakes,
                title: "OtagoLakes"
            });

lyr_OtagoRC.setVisible(true);lyr_OtagoLakes.setVisible(true);
var layersList = [baseLayer,lyr_OtagoRC,lyr_OtagoLakes];
lyr_OtagoRC.set('fieldAliases', {'RegionalC': 'RegionalC', });
lyr_OtagoLakes.set('fieldAliases', {'Lake': 'Lake', 'MainCatch': 'MainCatch', 'Methods': 'Methods', 'MoreInfo': 'MoreInfo', });
lyr_OtagoRC.set('fieldImages', {'RegionalC': 'TextEdit', });
lyr_OtagoLakes.set('fieldImages', {'Lake': 'TextEdit', 'MainCatch': 'TextEdit', 'Methods': 'TextEdit', 'MoreInfo': 'TextEdit', });
lyr_OtagoRC.set('fieldLabels', {'RegionalC': 'no label', });
lyr_OtagoLakes.set('fieldLabels', {'Lake': 'header label', 'MainCatch': 'header label', 'Methods': 'header label', 'MoreInfo': 'header label', });

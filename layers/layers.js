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
var format_LakesOtago = new ol.format.GeoJSON();
var features_LakesOtago = format_LakesOtago.readFeatures(geojson_LakesOtago, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LakesOtago = new ol.source.Vector();
jsonSource_LakesOtago.addFeatures(features_LakesOtago);var lyr_LakesOtago = new ol.layer.Vector({
                source:jsonSource_LakesOtago, 
                style: style_LakesOtago,
                title: "LakesOtago"
            });var format_OtagoRC = new ol.format.GeoJSON();
var features_OtagoRC = format_OtagoRC.readFeatures(geojson_OtagoRC, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtagoRC = new ol.source.Vector();
jsonSource_OtagoRC.addFeatures(features_OtagoRC);var lyr_OtagoRC = new ol.layer.Vector({
                source:jsonSource_OtagoRC, 
                style: style_OtagoRC,
                title: "OtagoRC"
            });

lyr_LakesOtago.setVisible(true);lyr_OtagoRC.setVisible(true);
var layersList = [baseLayer,lyr_LakesOtago,lyr_OtagoRC];
lyr_LakesOtago.set('fieldAliases', {'Lake': 'Lake', 'MainCatch': 'MainCatch', 'Methods': 'Methods', 'MoreInfo': 'MoreInfo', });
lyr_OtagoRC.set('fieldAliases', {'RegionalC': 'RegionalC', });
lyr_LakesOtago.set('fieldImages', {'Lake': 'TextEdit', 'MainCatch': 'TextEdit', 'Methods': 'TextEdit', 'MoreInfo': 'TextEdit', });
lyr_OtagoRC.set('fieldImages', {'RegionalC': 'TextEdit', });
lyr_LakesOtago.set('fieldLabels', {'Lake': 'header label', 'MainCatch': 'header label', 'Methods': 'header label', 'MoreInfo': 'header label', });
lyr_OtagoRC.set('fieldLabels', {'RegionalC': 'no label', });

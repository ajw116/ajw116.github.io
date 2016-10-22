var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
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
            });

lyr_LakesOtago.setVisible(true);
var layersList = [baseLayer,lyr_LakesOtago];
lyr_LakesOtago.set('fieldAliases', {'Lake': 'Lake', 'MainCatch': 'MainCatch', 'Methods': 'Methods', 'MoreInfo': 'MoreInfo', });
lyr_LakesOtago.set('fieldImages', {'Lake': 'TextEdit', 'MainCatch': 'TextEdit', 'Methods': 'TextEdit', 'MoreInfo': 'TextEdit', });
lyr_LakesOtago.set('fieldLabels', {'Lake': 'header label', 'MainCatch': 'header label', 'Methods': 'header label', 'MoreInfo': 'header label', });

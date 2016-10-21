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
var format_TOPOGRAPHIC_TOPO250_Lakesany = new ol.format.GeoJSON();
var features_TOPOGRAPHIC_TOPO250_Lakesany = format_TOPOGRAPHIC_TOPO250_Lakesany.readFeatures(geojson_TOPOGRAPHIC_TOPO250_Lakesany, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPOGRAPHIC_TOPO250_Lakesany = new ol.source.Vector();
jsonSource_TOPOGRAPHIC_TOPO250_Lakesany.addFeatures(features_TOPOGRAPHIC_TOPO250_Lakesany);var lyr_TOPOGRAPHIC_TOPO250_Lakesany = new ol.layer.Vector({
                source:jsonSource_TOPOGRAPHIC_TOPO250_Lakesany, 
                style: style_TOPOGRAPHIC_TOPO250_Lakesany,
                title: "TOPOGRAPHIC_TOPO250_Lakes any"
            });

lyr_TOPOGRAPHIC_TOPO250_Lakesany.setVisible(true);
var layersList = [baseLayer,lyr_TOPOGRAPHIC_TOPO250_Lakesany];
lyr_TOPOGRAPHIC_TOPO250_Lakesany.set('fieldAliases', {'SUFI': 'SUFI', 'COUNT_SRC': 'COUNT_SRC', 'NAME': 'NAME', 'CREATED_DT': 'CREATED_DT', 'MODIFIEDDT': 'MODIFIEDDT', 'LAKE_TYPE': 'LAKE_TYPE', 'GROUP_NAME': 'GROUP_NAME', 'LAKE_AREA': 'LAKE_AREA', 'LAKE_TOTLR': 'LAKE_TOTLR', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TOPOGRAPHIC_TOPO250_Lakesany.set('fieldImages', {'SUFI': 'TextEdit', 'COUNT_SRC': 'TextEdit', 'NAME': 'TextEdit', 'CREATED_DT': 'TextEdit', 'MODIFIEDDT': 'TextEdit', 'LAKE_TYPE': 'TextEdit', 'GROUP_NAME': 'TextEdit', 'LAKE_AREA': 'TextEdit', 'LAKE_TOTLR': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TOPOGRAPHIC_TOPO250_Lakesany.set('fieldLabels', {'SUFI': 'no label', 'COUNT_SRC': 'no label', 'NAME': 'no label', 'CREATED_DT': 'no label', 'MODIFIEDDT': 'no label', 'LAKE_TYPE': 'no label', 'GROUP_NAME': 'no label', 'LAKE_AREA': 'no label', 'LAKE_TOTLR': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });

var size = 0;

var styleCache_TOPOGRAPHIC_TOPO250_Lakesany={}
var style_TOPOGRAPHIC_TOPO250_Lakesany = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(134,220,253,0.85)"})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_TOPOGRAPHIC_TOPO250_Lakesany[key]){
        var text = new ol.style.Text({
              font: '9.75px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_TOPOGRAPHIC_TOPO250_Lakesany[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_TOPOGRAPHIC_TOPO250_Lakesany[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};
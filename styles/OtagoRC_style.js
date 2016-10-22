var size = 0;

var styleCache_OtagoRC={}
var style_OtagoRC = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: [10,5], lineCap: 'square', lineJoin: 'bevel', width: 1}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_OtagoRC[key]){
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
        styleCache_OtagoRC[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_OtagoRC[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LV_1 = new ol.format.GeoJSON();
var features_LV_1 = format_LV_1.readFeatures(json_LV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LV_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LV_1.addFeatures(features_LV_1);
var lyr_LV_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LV_1, 
                style: style_LV_1,
                interactive: true,
                title: '<img src="styles/legend/LV_1.png" /> LV'
            });
var format_TEST_2 = new ol.format.GeoJSON();
var features_TEST_2 = format_TEST_2.readFeatures(json_TEST_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEST_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEST_2.addFeatures(features_TEST_2);
var lyr_TEST_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TEST_2, 
                style: style_TEST_2,
                interactive: true,
    title: 'TEST<br />\
    <img src="styles/legend/TEST_2_0.png" /> New<br />\
    <img src="styles/legend/TEST_2_1.png" /> Old<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_LV_1.setVisible(true);lyr_TEST_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LV_1,lyr_TEST_2];
lyr_LV_1.set('fieldAliases', {'id': 'id', });
lyr_TEST_2.set('fieldAliases', {'id': 'id', 'الكود': 'الكود', 'النوع': 'النوع', 'الشرك': 'الشركة المنفذة', 'الصور': 'صورة العمود', });
lyr_LV_1.set('fieldImages', {'id': 'TextEdit', });
lyr_TEST_2.set('fieldImages', {'id': 'TextEdit', 'الكود': 'TextEdit', 'النوع': 'TextEdit', 'الشرك': 'TextEdit', 'الصور': 'ExternalResource', });
lyr_LV_1.set('fieldLabels', {'id': 'no label', });
lyr_TEST_2.set('fieldLabels', {'id': 'inline label', 'الكود': 'inline label', 'النوع': 'inline label', 'الشرك': 'inline label', 'الصور': 'inline label', });
lyr_TEST_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
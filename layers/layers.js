var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_sud_kivu_1 = new ol.format.GeoJSON();
var features_sud_kivu_1 = format_sud_kivu_1.readFeatures(json_sud_kivu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sud_kivu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sud_kivu_1.addFeatures(features_sud_kivu_1);
var lyr_sud_kivu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sud_kivu_1, 
                style: style_sud_kivu_1,
                popuplayertitle: 'sud_kivu',
                interactive: true,
                title: '<img src="styles/legend/sud_kivu_1.png" /> sud_kivu'
            });
var format_SUDKIVUBIEN_2 = new ol.format.GeoJSON();
var features_SUDKIVUBIEN_2 = format_SUDKIVUBIEN_2.readFeatures(json_SUDKIVUBIEN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUDKIVUBIEN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUDKIVUBIEN_2.addFeatures(features_SUDKIVUBIEN_2);
var lyr_SUDKIVUBIEN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUDKIVUBIEN_2, 
                style: style_SUDKIVUBIEN_2,
                popuplayertitle: 'SUD KIVU BIEN',
                interactive: true,
    title: 'SUD KIVU BIEN<br />\
    <img src="styles/legend/SUDKIVUBIEN_2_0.png" /> 58 - 281<br />\
    <img src="styles/legend/SUDKIVUBIEN_2_1.png" /> 281 - 1887<br />\
    <img src="styles/legend/SUDKIVUBIEN_2_2.png" /> 1887 - 4201<br />\
    <img src="styles/legend/SUDKIVUBIEN_2_3.png" /> 4201 - 11700<br />\
    <img src="styles/legend/SUDKIVUBIEN_2_4.png" /> 11700 - 24858<br />' });
var format_Centrodes_3 = new ol.format.GeoJSON();
var features_Centrodes_3 = format_Centrodes_3.readFeatures(json_Centrodes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrodes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrodes_3.addFeatures(features_Centrodes_3);
var lyr_Centrodes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centrodes_3, 
                style: style_Centrodes_3,
                popuplayertitle: 'Centroïdes',
                interactive: true,
                title: '<img src="styles/legend/Centrodes_3.png" /> Centroïdes'
            });
var format_secteur33_4 = new ol.format.GeoJSON();
var features_secteur33_4 = format_secteur33_4.readFeatures(json_secteur33_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secteur33_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secteur33_4.addFeatures(features_secteur33_4);
var lyr_secteur33_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_secteur33_4, 
                style: style_secteur33_4,
                popuplayertitle: 'secteur 33',
                interactive: true,
    title: 'secteur 33<br />\
    <img src="styles/legend/secteur33_4_0.png" /> (Agricole)<br />\
    <img src="styles/legend/secteur33_4_1.png" /> (Bois)<br />\
    <img src="styles/legend/secteur33_4_2.png" /> (Commerce)<br />\
    <img src="styles/legend/secteur33_4_3.png" /> (Minier)<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_sud_kivu_1.setVisible(true);lyr_SUDKIVUBIEN_2.setVisible(true);lyr_Centrodes_3.setVisible(true);lyr_secteur33_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_sud_kivu_1,lyr_SUDKIVUBIEN_2,lyr_Centrodes_3,lyr_secteur33_4];
lyr_sud_kivu_1.set('fieldAliases', {});
lyr_SUDKIVUBIEN_2.set('fieldAliases', {'NOM': 'NOM', 'TYPE': 'TYPE', 'CODE_INS': 'CODE_INS', 'SCE_SEM': 'SCE_SEM', 'SCE_GEO': 'SCE_GEO', 'MODIF': 'MODIF', 'SURFACE': 'SURFACE', 'ORIGINE': 'ORIGINE', });
lyr_Centrodes_3.set('fieldAliases', {'NOM': 'NOM', 'TYPE': 'TYPE', 'CODE_INS': 'CODE_INS', 'SCE_SEM': 'SCE_SEM', 'SCE_GEO': 'SCE_GEO', 'MODIF': 'MODIF', 'SURFACE': 'SURFACE', 'ORIGINE': 'ORIGINE', });
lyr_secteur33_4.set('fieldAliases', {'NOM': 'NOM', 'SURFACE': 'SURFACE', 'SECTEURS': 'secteurs d\'activités ', });
lyr_sud_kivu_1.set('fieldImages', {});
lyr_SUDKIVUBIEN_2.set('fieldImages', {'NOM': 'TextEdit', 'TYPE': 'TextEdit', 'CODE_INS': 'Range', 'SCE_SEM': 'TextEdit', 'SCE_GEO': 'TextEdit', 'MODIF': 'DateTime', 'SURFACE': 'TextEdit', 'ORIGINE': 'TextEdit', });
lyr_Centrodes_3.set('fieldImages', {'NOM': '', 'TYPE': '', 'CODE_INS': '', 'SCE_SEM': '', 'SCE_GEO': '', 'MODIF': '', 'SURFACE': '', 'ORIGINE': '', });
lyr_secteur33_4.set('fieldImages', {'NOM': 'TextEdit', 'SURFACE': 'TextEdit', 'SECTEURS': 'ValueMap', });
lyr_sud_kivu_1.set('fieldLabels', {});
lyr_SUDKIVUBIEN_2.set('fieldLabels', {'NOM': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'CODE_INS': 'no label', 'SCE_SEM': 'no label', 'SCE_GEO': 'no label', 'MODIF': 'no label', 'SURFACE': 'inline label - always visible', 'ORIGINE': 'no label', });
lyr_Centrodes_3.set('fieldLabels', {'NOM': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'CODE_INS': 'no label', 'SCE_SEM': 'no label', 'SCE_GEO': 'no label', 'MODIF': 'no label', 'SURFACE': 'inline label - always visible', 'ORIGINE': 'no label', });
lyr_secteur33_4.set('fieldLabels', {'NOM': 'inline label - always visible', 'SURFACE': 'inline label - always visible', 'SECTEURS': 'inline label - always visible', });
lyr_secteur33_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
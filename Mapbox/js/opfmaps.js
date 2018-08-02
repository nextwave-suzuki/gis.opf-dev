/************************************************************************
 L.Control
 - OPF.Control.Zoomlevel
 ************************************************************************/
L.Control.Zoomlevel = L.Control.extend({
    options: {
        id: 'zoomlevel',
        position: 'bottomright',
    },
    onAdd: function () {

        var container = L.DomUtil.create('div');
        //var gauge = L.DomUtil.create('div');
        container.id = this.options.id;
        container.style.width = '100px';
        container.style.background = 'rgba(255,255,255,0.5)';
        container.style.textAlign = 'left';
        map.on('zoomstart zoom zoomend', function (ev) {
            container.innerHTML = 'Zoom level: ' + map.getZoom();
        })
        //container.appendChild(gauge);

        return container;
    },
    onRemove: function () {
        alert('onRemove');
    }
});
L.control.zoomlevel = function (options) {
    return new L.Control.Zoomlevel(options);
};

/************************************************************************
 L.Control
 - OPF.Control.Centerlat
 ************************************************************************/
L.Control.Centerlat = L.Control.extend({
    options: {
        id: 'centerlat',
        position: 'bottomright',
    },
    onAdd: function () {

        var container = L.DomUtil.create('div');
        //var gauge = L.DomUtil.create('div');
        container.id = this.options.id;
        container.style.width = '200px';
        container.style.background = 'rgba(255,255,255,0.5)';
        container.style.textAlign = 'left';
        map.on('move', function (ev) {
            container.innerHTML = map.getCenter();
        })
        //container.appendChild(gauge);

        return container;
    },
    onRemove: function () {
        alert('onRemove');
    }
});
L.control.centerlat = function (options) {
    return new L.Control.Centerlat(options);
};


// 背景図
var baseMaps = {};
var aros = L.gsiLayer('aros');
baseMaps[aros.discription] = aros;
var arosmapbox = L.gsiLayer('arosmapbox');
baseMaps[arosmapbox.discription] = arosmapbox;
var arosnatural = L.gsiLayer('arosnatural');
baseMaps[arosnatural.discription] = arosnatural;
var ort = L.gsiLayer('ort');
baseMaps[ort.discription] = ort;
var esr = L.gsiLayer('esr');
baseMaps[esr.discription] = esr;
var osm = L.gsiLayer('osm');
baseMaps[osm.discription] = osm;
var osm_3dopf = L.gsiLayer('osm_3dopf');
baseMaps[osm_3dopf.discription] = osm_3dopf;
var gsi_std = L.gsiLayer('gsi_std');
baseMaps[gsi_std.discription] = gsi_std;

// オーバーレイ
var overlay = {};
var osm = L.gsiLayer('osm');
overlay[osm.discription] = osm;
var osm_3dopf = L.gsiLayer('osm_3dopf');
overlay[osm_3dopf.discription] = osm_3dopf;
var gsi_std = L.gsiLayer('gsi_std');
overlay[gsi_std.discription] = gsi_std;
//var gsi_ccm1 = L.gsiLayer('gsi_ccm1');//表示されない
//overlay[gsi_ccm1.discription] = gsi_ccm1;
var gsi_lakedata = L.gsiLayer('gsi_lakedata');
overlay[gsi_lakedata.discription] = gsi_lakedata;
var gsi_afm = L.gsiLayer('gsi_afm');
overlay[gsi_afm.discription] = gsi_afm;
var gsi_lcmfc2 = L.gsiLayer('gsi_lcmfc2');
overlay[gsi_lcmfc2.discription] = gsi_lcmfc2;
var gsi_lum4bl_capital = L.gsiLayer('gsi_lum4bl_capital');
overlay[gsi_lum4bl_capital.discription] = gsi_lum4bl_capital;
var gsi_relief = L.gsiLayer('gsi_relief');
overlay[gsi_relief.discription] = gsi_relief;
var gsi_anaglyphmap_gray = L.gsiLayer('gsi_anaglyphmap_gray');
overlay[gsi_anaglyphmap_gray.discription] = gsi_anaglyphmap_gray;
var gsi_gmld_ptc2 = L.gsiLayer('gsi_gmld_ptc2');
overlay[gsi_gmld_ptc2.discription] = gsi_gmld_ptc2;
var gsi_jikizu2015_chijiki_d = L.gsiLayer('gsi_jikizu2015_chijiki_d');
overlay[gsi_jikizu2015_chijiki_d.discription] = gsi_jikizu2015_chijiki_d;
var nasa_Temp = L.gsiLayer('nasa_Temp');
overlay[nasa_Temp.discription] = nasa_Temp;
var nasa_Snow = L.gsiLayer('nasa_Snow');
overlay[nasa_Snow.discription] = nasa_Snow;
var nasa_Aerosol = L.gsiLayer('nasa_Aerosol');
overlay[nasa_Aerosol.discription] = nasa_Aerosol;
var nasa_Chlorophyll = L.gsiLayer('nasa_Chlorophyll');
overlay[nasa_Chlorophyll.discription] = nasa_Chlorophyll;

// geojson
//var json = L.jsonLayer('ike');
/*
var counties = $.ajax({
    url: 'https://dev.samai.net/api/v1.1/poljp/18/234003/96270.geojson',
    dataType: 'json',
    success: console.log("County data successfully loaded."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
})

$.when(counties).done(function () {
    json = L.geoJSON(counties.responseJSON);
    overlay['json'] = json;
    // レイヤー設定
    L.control.opacityLayers(baseMaps, overlay).addTo(map);
});
*/
/*
var geojsonFeature = [
    { "type": "Feature", "geometry": { "type": "Point", "coordinates": [141.359174, 43.052454] }, "properties": { "name": "森美術館" } }
];
var json = L.geoJson(geojsonFeature);
overlay['ファイト'] = json;
var geojsonFeature = [
    { "type": "Feature", "geometry": { "type": "Point", "coordinates": [141.359174, 43.052454] }, "properties": { "name": "森美術館" } }
];
var json = L.geoJson(geojsonFeature);
overlay['一発'] = json;
*/
//json.setOpacity(50);
/*var options = L.setOptions(json, {
    attribution: '一発',
    maxZoom: 20,
    //maxNativeZoom: type.max,
    //minZoom: type.min,
    errorTileUrl: 'img/nodata.gif'
});
L.TileLayer.prototype.initialize.call(json, '', options);*/

// Mapbox Token
L.mapbox.accessToken = mapbox_token;

// 全体地図
var map = L.mapbox.map('map', 'mapbox'
    //, {
    //tileLayer: false,
    //featureLayer : false,
    //gridLayer : false,
    //legendControl : false,
    //shareControl: ,
    //accessToken: ,
    //attributionControl:
    //}
);
map.setView([43.052454, 141.359174], 12);
ort.addTo(map);
/*var map = new L.mapbox.map('map', {
    //center: new L.LatLng(34.2005075, 131.4918, 10.39), //山口県の周防
    center: new L.LatLng(43.052454, 141.359174),  //ビットスター
    zoom: 12,
    //layers: [aros]
    layers: [ort]
});*/

//####
//# 右上
// ズームコントロール
map.zoomControl.setPosition('topright');//L.mapbox.map 用
// レイヤー（透過付）コントロール
opacitylayersCntrol = L.control.opacityLayers(baseMaps, overlay);
map.addControl(opacitylayersCntrol);

//####
//# 左上
// 3Dボタン
//L.easyButton('fa-star', function () { alert('button works') }).addTo(map);
d3Control = L.easyButton({
    id: 'id-for-the-button',  // an id for the generated button
    position: 'topleft',      // inherited from L.Control -- the corner it goes in
    type: 'replace',          // set to animate when you're comfy with css
    leafletClasses: true,     // use leaflet classes to style the button?
    states: [{                 // specify different icons and responses for your button
        stateName: '3dViewer',
        onClick: function (button, map) {
            window.location.href = './index3d.html';
        },
        title: '3D Mapbox gl',
        icon: 'fa-globe'
    }]
});
map.addControl(d3Control);
/*
L.easyButton('fa-globe', { title: 'click to make inactive' }, function (btn, map) {
    window.location.href = './index3d.html';
    //alert( map.getCenter());
    //helloPopup.setLatLng(map.getCenter()).openOn(map);
}).addTo(map);*/
//L.easyButton('fa-star', function () { alert('button works') }).addTo(map);
//L.easyButton('fa-star', function () { alert('button works') }).addTo(map);


//####
//# 左下
// スケールコントロール
scaleControl = L.control.scale({
    position: 'bottomleft',//'bottomleft'
    maxWidth: 100,
    metric: true,
    imperial: true,
    updateWhenIdle: true,
});
map.addControl(scaleControl);

// ズームレベルコントロール
zoomlevelControl = L.control.zoomlevel({
    id: 'zoomlevel',
    position: 'bottomleft'
});
map.addControl(zoomlevelControl);
$("#zoomlevel").html('Zoom level: ' + map.getZoom());

// 中心座標コントロール
/*centerlatControl = L.control.centerlat({
    id: 'centerlat',
    position: 'bottomleft'
});
map.addControl(centerlatControl);
$("#centerlat").html(map.getCenter());
*/

/************************************************************************
 map events
************************************************************************/
map.on('click', function (ev) {
});
map.on('move', function (ev) {
});
map.on('zoomend', function (ev) {
});
map.on('baselayerchange', function (ev) {
});


// ジオコーダーコントロール
/*geocoderControl = L.mapbox.geocoderControl(('mapbox.places'), {
    keepOpen: true,//false
    //accessToken:,
    autocomplete: true,//false
});
map.addControl(geocoderControl);*/

/*
var counties = $.ajax({
    url: "https://dev.samai.net/api/v1.1/poljp/18/234003/96270.geojson",
    dataType: "json",
    success: console.log("County data successfully loaded."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
})
$.when(counties).done(function () {
    overlay['リポビタン'] = L.geoJSON(counties.responseJSON);
    // レイヤー設定
    L.control.opacityLayers(baseMaps, overlay).addTo(map);
});
*/
/*
var geojsonLayerWells = new L.GeoJSON();
function loadGeoJson(data) {
    console.log(data);
    geojsonLayerWells.addData(data);
};

$.ajax({
    url: geoJsonUrl,
    dataType: 'jsonp',
    success: loadGeoJson
});
*/
/*
var json = L.uGeoJSONLayer({
    endpoint: "https://dev.samai.net/api/v1.1/poljp/18/234003/96270.geojson"
});
*/
//overlay['リポビタン'] = json;

//ベクトルタイル設定
/*var vec = new L.TileLayer.d3GeoJSON(
    "http://cyberjapandata.gsi.go.jp/xyz/experimental_rdcl/{z}/{x}/{y}.geojson",
    {
        "attr": {
            "class": function (d) {
                return d.properties.rID;
            },
            "stroke-width": 4,
            "stroke": "black"
        },
        "style": {
            "cursor": "pointer"
        },
        "layerName": "vectile",
        "onClick": function (d) {
            alert(JSON.stringify(d.properties, null, " "));
        }
    }
);
overlay['a'] = vec;*/
/*
//$.getJSON('https://img.opf-dev.jp/api/v1.1/jpborders/{z}/{x}/{y}.geojson', function (data) {
$.getJSON('https://dev.samai.net/api/v1.1/poljp/18/234003/96270.geojson', function (data) {
    var json = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            var field = '名称: ' + '' + '<br>' +
            '住所: ' + '' + '<br>' +
            '電話番号: ' + '' + '<br>' +
            '<a href="' + '' + '" target="_blank">ホームページ</a>';

            layer.bindPopup(field);
        }
    });
    overlay['GeoJSONファイル'] = json;
    // レイヤー設定
    L.control.opacityLayers(baseMaps, overlay).addTo(map);
});
*/
/*
// スライダーバーメニュー
var header = '<h1 class="cstm-slidmenu-header">メニュー</h1>';
var contents = '<ul class="cstm-slidmenu-content">';
//contents += '<li><i class=""></i><a href="/index.html">2D</a></li>';
contents += '<li><i class=""></i><a href="./index3d.html">3D</a></li>';
//contents += '<li><i class="fab fa-github"></i><a href="https://bitstar.jp/" target="_blank">ビットスター</a></li>';
contents += '</ul>';

// SlideMenu
var sldMenuOpt = {
    width: '200px',
    height: '100%'
}
L.control.slideMenu(header + contents, sldMenuOpt).addTo(map);
*/


/*
L.easyButton('idbtn', function (btn, easyMap) {
    //popup.setLatLng(easyMap.getCenter()).openOn(easyMap);
}).addTo(map);
L.easyButton('idbtn', function (btn, easyMap) {
    //popup.setLatLng(easyMap.getCenter()).openOn(easyMap);
}).addTo(map);
*/
//L.control.sample('idtxt', { position: 'bottomright' });
/*
    function range_onchange() {
        var a = document.getElementsByName('range');
        alert(a.range.value);
    }
*/
/************************************************************************
 L.Control
 - OPF.Control.Coordinate
 ************************************************************************/
L.Control.Coordinate = L.Control.extend({
    options: {
        id: 'coordinate',
        position: 'bottomright',
    },
    onAdd: function () {
        var container = L.DomUtil.create('div');
        //var gauge = L.DomUtil.create('div');
        container.id = this.options.id;
        container.style.width = '120px';
        container.style.background = 'rgba(255,255,255,0.5)';
        container.style.textAlign = 'left';
		//20180827クリックした点の座標表示
		map.on('click', function(e) {
		    var lat = e.latlng.lat.toFixed(6);
		    var lon = e.latlng.lng.toFixed(6);

			//座標　360より大きいor-360より小さい場合の処理
			if(lon>360){
				var cnt = Math.floor(lon/360);
				lon = lon - cnt * 360;
			}else if(lon<-360){
				var cnt = Math.floor((lon * -1)/360);
				lon = lon + cnt * 360;
			}
			//東経180を超えたときの西経、その逆も
			if(lon>180){
				lon = lon - 360;
			}else if(lon<-180){
				lon = lon + 360;
			}

            container.innerHTML = '経度： ' + lon + '<br />緯度： ' + lat + "<br />UTM ポイント：" + cnvKeiidoToUtm(lon,lat);
		});
        return container;
    },
    onRemove: function () {
        alert('onRemove');
    }
});
L.control.coordinate = function (options) {
    return new L.Control.Coordinate(options);
};

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


// ベースマップ
var baseMaps = {};
//var aros = L.tlsLayer('aros');
//baseMaps[aros.discription] = aros;
//var arosmapbox = L.tlsLayer('arosmapbox');
//baseMaps[arosmapbox.discription] = arosmapbox;
var arostrue = L.tlsLayer('arostrue');
baseMaps[arostrue.discription] = arostrue;
var arosnatural = L.tlsLayer('arosnatural');
baseMaps[arosnatural.discription] = arosnatural;

//var esr = L.tlsLayer('esr');
//baseMaps[esr.discription] = esr;
//var osm = L.tlsLayer('osm');
//baseMaps[osm.discription] = osm;
var osm_img = L.tlsLayer('osm_img');
baseMaps[osm_img.discription] = osm_img;
//var osm_3dopf = L.tlsLayer('osm_3dopf');
//baseMaps[osm_3dopf.discription] = osm_3dopf;
//var gsi_ort = L.tlsLayer('gsi_ort');
//baseMaps[gsi_ort.discription] = gsi_ort;
//var gsi_std = L.tlsLayer('gsi_std');
//baseMaps[gsi_std.discription] = gsi_std;

// オーバーレイ
var overlay = {};

// AROS
var aroshyou = L.tlsLayer('aroshyou');
overlay[aroshyou.discription] = aroshyou;
var aroscolorheight = L.tlsLayer('aroscolorheight');
overlay[aroscolorheight.discription] = aroscolorheight;
var aroshill = L.tlsLayer('aroshill');
overlay[aroshill.discription] = aroshill;
var arosslope = L.tlsLayer('arosslope');
overlay[arosslope.discription] = arosslope;
//var osm = L.tlsLayer('osm');
//overlay[osm.discription] = osm;
var osm_img = L.tlsLayer('osm_img');
overlay[osm_img.discription] = osm_img;
//var osm_3dopf = L.tlsLayer('osm_3dopf');
//overlay[osm_3dopf.discription] = osm_3dopf;
var gsi_std = L.tlsLayer('gsi_std');
overlay[gsi_std.discription] = gsi_std;
//var gsi_ccm1 = L.tlsLayer('gsi_ccm1');//表示されない
//overlay[gsi_ccm1.discription] = gsi_ccm1;
var gsi_lakedata = L.tlsLayer('gsi_lakedata');
overlay[gsi_lakedata.discription] = gsi_lakedata;
var gsi_afm = L.tlsLayer('gsi_afm');
overlay[gsi_afm.discription] = gsi_afm;
var gsi_lcmfc2 = L.tlsLayer('gsi_lcmfc2');
overlay[gsi_lcmfc2.discription] = gsi_lcmfc2;
var gsi_lum4bl_capital = L.tlsLayer('gsi_lum4bl_capital');
overlay[gsi_lum4bl_capital.discription] = gsi_lum4bl_capital;
var gsi_relief = L.tlsLayer('gsi_relief');
overlay[gsi_relief.discription] = gsi_relief;
var gsi_anaglyphmap_gray = L.tlsLayer('gsi_anaglyphmap_gray');
overlay[gsi_anaglyphmap_gray.discription] = gsi_anaglyphmap_gray;
var gsi_gmld_ptc2 = L.tlsLayer('gsi_gmld_ptc2');
overlay[gsi_gmld_ptc2.discription] = gsi_gmld_ptc2;
var gsi_jikizu2015_chijiki_d = L.tlsLayer('gsi_jikizu2015_chijiki_d');
overlay[gsi_jikizu2015_chijiki_d.discription] = gsi_jikizu2015_chijiki_d;
//var nasa_Temp = L.tlsLayer('nasa_Temp');
//overlay[nasa_Temp.discription] = nasa_Temp;
//var nasa_Snow = L.tlsLayer('nasa_Snow');
//overlay[nasa_Snow.discription] = nasa_Snow;
//var nasa_Aerosol = L.tlsLayer('nasa_Aerosol');
//overlay[nasa_Aerosol.discription] = nasa_Aerosol;
//var nasa_Chlorophyll = L.tlsLayer('nasa_Chlorophyll');
//overlay[nasa_Chlorophyll.discription] = nasa_Chlorophyll;

// geojson
//var json = L.jsonLayer('ike');
/*
var counties = $.ajax({
    url: 'http://nextsv09/webHidakaSyougaishien/data.json',
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
    //L.control.opacityLayers(baseMaps, overlay).addTo(map);
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
arostrue.addTo(map);

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
// ジオコーダーコントロール
geocoderControl = L.mapbox.geocoderControl(('mapbox.places'), {
    keepOpen: true,//false
    //accessToken:,
    autocomplete: true,//false
});
map.addControl(geocoderControl);
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
// インポートボタン
var style = { color: 'magenta', opacity: 1.0, fillOpacity: 0.5, weight: 2, clickable: false };
L.Control.FileLayerLoad.LABEL = '<img class="icon" src="images/impjson.jpg" alt="file icon" width="18" height="18" padding="4"/>';


function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}


L.control.fileLayerLoad({
    fitBounds: true,
    layerOptions: {
        style: style,
        pointToLayer: function (feature, latlng) {
            // 名称・内容情報を作成する
            if (feature.properties._markerType === "Icon") {
                var geojsonMarkerOptions = {
                    iconUrl: 'my-icon.png',
                    iconSize: [10, 10],
                    iconAnchor: [10, 10],
                };

                var iconUrl = feature.properties["_iconUrl"];
                var iconSize = (feature.properties["_iconSize"]);
                var iconAnchor = (feature.properties["_iconAnchor"]);
                var iconName = (feature.properties["name"]);

                geojsonMarkerOptions.iconUrl = iconUrl;
                geojsonMarkerOptions.iconSize = (iconSize[0] === 0 || iconSize[1] === 0) ? [10, 10] : iconSize;
                geojsonMarkerOptions.iconAnchor = (iconAnchor[0] === 0 || iconAnchor[1] === 0) ? [10, 10] : iconAnchor;

                return new L.marker(latlng, { icon: new L.Icon(geojsonMarkerOptions) }).bindPopup(iconName);

            } else if (feature.properties._markerType === "CircleMarker") {
                var geojsonMarkerOptions = {
                    radius: 8,
                    fillColor: "#ff7800",
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                };

                return new L.circleMarker(latlng, geojsonMarkerOptions);

            } else if (feature.properties._markerType === "Circle") {
                var geojsonMarkerOptions = {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                };

                return new L.circle(latlng, geojsonMarkerOptions);

            } else if (feature.properties._markerType === "DivIcon") {
                //時間なく未対応
                //var geojsonMarkerOptions = {
                //        className:'current-location-icon',
                //        html: feature.properties._html,
                //        iconAnchor:[0,0],
                //        iconSize:null,
                //        popupAnchor:[0,0]
                //};
                //var iconUrl = feature.properties["_iconUrl"];
                //var iconSize = (feature.properties["_iconSize"]);
                //var iconAnchor = (feature.properties["_iconAnchor"]);
                //var iconName = (feature.properties["name"]);
    
                //geojsonMarkerOptions.iconUrl = iconUrl;
                //geojsonMarkerOptions.iconSize = (iconSize[0] === 0 || iconSize[1] === 0) ? [10, 10] : iconSize;
                //geojsonMarkerOptions.iconAnchor = (iconAnchor[0] === 0 || iconAnchor[1] === 0) ? [10, 10] : iconAnchor;
    
                //return new L.marker(latlng, { icon: new L.Icon(geojsonMarkerOptions) }).bindPopup(iconName);
                
            }

        },
        onEachFeature: function (feature, layer) {

            if (!feature.properties) {
                return;
            }

            onEachFeature(feature, layer);

            // 名称・内容情報を作成する
            var figureInfo = { name: null, description: null, keyValues: [] };
            var geoJSONKeys = {
                "_color": true,
                "_opacity": true,
                "_weight": true
            };

            if (feature.properties["name"]) {
                figureInfo.name = $.trim(feature.properties["name"]);
            }

            if (feature.properties["description"]) {

                figureInfo.text = $.trim(feature.properties["description"]);

            } else {
                
                //for (var key in feature.properties) {
    
                //    if (!feature.properties[key]) {
                //        continue;
                //    }
    
                //    if (key !== "" && key !== "name" && !geoJSONKeys[key]) {
                //        figureInfo.keyValues.push({
                //            key: key,
                //            value: feature.properties[key]
                //        });
                //    }
                //}
            }


            if (feature.properties && figureInfo.name) {
                layer.bindPopup(figureInfo.name);
            } else {
            }
        }
    },
}).addTo(map);

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

// ズームレベルコントロール
coordinateControl = L.control.coordinate({
    id: 'coordinate',
    position: 'bottomleft'
});
map.addControl(coordinateControl);

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





/*
L.Control.FileLayerLoad.LABEL = '<img class="icon" src="folder.svg" alt="file icon"/>';
control = L.Control.fileLayerLoad({
    fitBounds: true,
    layerOptions: {
        style: style,
        pointToLayer: function (data, latlng) {
            return L.circleMarker(
                latlng,
                { style: style }
            );
        }
    }
});
control.addTo(map);
control.loader.on('data:loaded', function (e) {
    var layer = e.layer;
    console.log(layer);
});*/
/*
var style = { color: 'magenta', opacity: 1.0, fillOpacity: 0.5, weight: 2, clickable: false };
L.Control.FileLayerLoad.LABEL = '<img class="icon" src="folder.svg" alt="file icon" width="18" height="18" padding="4"/>';
L.Control.fileLayerLoad({
    fitBounds: true,
    layerOptions: {
        style: style,
        pointToLayer: function (data, latlng) {
            return L.circleMarker(latlng, { style: style });
        }
    },
}).addTo(map);
*/

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
var counties = $.ajax({
    url: "https://gist.githubusercontent.com/maptastik/df8e483d5ac1c6cae3dc4a7c02ea9039/raw/9cd46849bddcfa90aab240772a12275408d6d8d0/kyCounties.geojson",
    dataType: "json",
    success: console.log("County data successfully loaded."),
    error: function (xhr) {
        alert(xhr.statusText)
    }
});
json = L.geoJSON(counties.responseJSON);
overlay['json'] = json;
// レイヤー設定
L.control.opacityLayers(baseMaps, overlay).addTo(map);
*/
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

//  fileLayer
/*(function (window) {
    'use strict';

    function initMap() {
        var control;
        var L = window.L;

        var style = {
            color: 'red',
            opacity: 1.0,
            fillOpacity: 1.0,
            weight: 2,
            clickable: false
        };
        L.Control.FileLayerLoad.LABEL = '<img class="icon" src="folder.svg" alt="file icon"/>';
        control = L.Control.fileLayerLoad({
            fitBounds: true,
            layerOptions: {
                style: style,
                pointToLayer: function (data, latlng) {
                    return L.circleMarker(
                        latlng,
                        { style: style }
                    );
                }
            }
        });
        control.addTo(map);
        control.loader.on('data:loaded', function (e) {
            var layer = e.layer;
            console.log(layer);
        });
    }

    window.addEventListener('load', function () {
        initMap();
    });
}(window));*/
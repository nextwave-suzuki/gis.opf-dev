var mapbox_token = 'pk.eyJ1Ijoic3V6dWtpdGFrYWZ1bWkiLCJhIjoiY2pqZjczMHgzMnN1cjNwdGVlanplajlvbCJ9.E2PUAt5YLri8Cy-JH_QFZw';

/**** 試験環境タイルサーバー***/
/*## img.opf-dev
    AROS：https://img.opf-dev.jp/arostest/{z}/{x}/{y}.png

//## 3d.opf-dev
    Open Street Map：https://3d.opf-dev.jp/osmjpn/{z}/{x}/{y}.png
*/
(function (L) {
    L.TlsLayer = L.TileLayer.extend({
        statics: {
            type: {
            ///////////////// 試験環境 /////////////////
                // AROS
                aros: {
                    url: 'https://img.opf-dev.jp/arostest/{z}/{x}/{y}.png'
                    , ext: 'png', min: 8, max: 13, discription: 'AROS GDAL(試験環境img.opf-dev.jp)'
                    , attribution: 'opf'
                },
                arosmapbox: {
                    url: 'https://img.opf-dev.jp/asia_japan/{z}/{x}/{y}.png'
                    , ext: 'png', min: 8, max: 13, discription: 'AROS Mapbox MB tiles(試験環境img.opf-dev.jp)'
                    , attribution: 'opf'
                },
                arostrue: {
                    url: 'https://img.opf-dev.jp/true/{z}/{x}/{y}.png'
                    , ext: 'png', min: 8, max: 13, discription: 'AROS true(試験環境img.opf-dev.jp)'
                    , attribution: 'opf'
                },
                arosnatural: {
                    url: 'https://img.opf-dev.jp/natural/{z}/{x}/{y}.png'
                    , ext: 'png', min: 8, max: 13, discription: 'AROS natural(試験環境img.opf-dev.jp)'
                    , attribution: 'opf'
                },
                aroshyou: {
                    url: 'https://img.opf-dev.jp/aw3d30/{z}/{x}/{y}.png'
                    , ext: 'png', min: 6, max: 12, discription: 'AROS 標高30mメッシュ(試験環境img.opf-dev.jp)'
                    , attribution: 'opf'
                },
                aroscolorheight: {
                    url: 'https://img.opf-dev.jp/colorheight/{z}/{x}/{y}.png'
                    , ext: 'png', min: 6, max: 12, discription: 'AROS 高低差着彩図(試験環境img.opf-dev.jp)'
                    , attribution: 'opf'
                },
                aroshill: {
                    url: 'https://img.opf-dev.jp/hill/{z}/{x}/{y}.png'
                    , ext: 'png', min: 6, max: 12, discription: 'AROS 影(試験環境img.opf-dev.jp)'
                    , attribution: 'opf'
                },
                arosslope: {
                    url: 'https://img.opf-dev.jp/slope/{z}/{x}/{y}.png'
                    , ext: 'png', min: 6, max: 12, discription: 'AROS 傾斜角陰影図(試験環境img.opf-dev.jp)'
                    , attribution: 'opf'
                },
                // Open Street Map
                osm_img: {
                    url: 'https://img.opf-dev.jp/osmjpn/{z}/{x}/{y}.png'
                    , ext: 'png', min: 2, max: 17, discription: 'Open Street Map(試験環境img.opf-dev.jp)'
                    , attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                },
                osm_3dopf: {
                    url: 'https://3d.opf-dev.jp/osmjpn/{z}/{x}/{y}.png'
                    , ext: 'png', min: 2, max: 17, discription: 'Open Street Map(試験環境3d.opf-dev.jp)'
                    , attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                },


            ///////////////// 本家 /////////////////
                // Open Street Map
                osm: {
                    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    , ext: 'png', min: 2, max: 17, discription: 'Open Street Map(本家)'
                    , attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                },
                // 国土地理院
                gsi_ort: {
                    url: 'http://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg'
                    , ext: 'jpg', min: 15, max: 17, discription: 'オルソ画像(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                gsi_std: {
                    url: 'http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
                    , ext: 'png', min: 2, max: 17, discription: '標準地図(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                gsi_ccm1: {
                    url: 'URL：https://cyberjapandata.gsi.go.jp/xyz/ccm1/{z}/{x}/{y}.png'
                    , ext: 'png', min: 5, max: 15, discription: '沿岸海域土地条件図（平成元年以降）(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                gsi_lakedata: {
                    url: 'https://cyberjapandata.gsi.go.jp/xyz/lakedata/{z}/{x}/{y}.png'
                    , ext: 'png', min: 5, max: 15, discription: '湖沼データ(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                gsi_afm: {
                    url: 'https://cyberjapandata.gsi.go.jp/xyz/afm/{z}/{x}/{y}.png'
                    , ext: 'png', min: 5, max: 15, discription: '活断層図(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                gsi_lcmfc2: {
                    url: 'https://cyberjapandata.gsi.go.jp/xyz/lcmfc2/{z}/{x}/{y}.png'
                    , ext: 'png', min: 5, max: 15, discription: '治水地形分類図(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                gsi_lum4bl_capital: {
                    url: 'https://cyberjapandata.gsi.go.jp/xyz/lum4bl_capital1994/{z}/{x}/{y}.png'
                    , ext: 'png', min: 5, max: 15, discription: '宅地利用動向調査-首都圏(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                gsi_relief: {
                    url: 'https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png'
                    , ext: 'png', min: 5, max: 15, discription: '色別標高図5-15(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                gsi_anaglyphmap_gray: {
                    url: 'https://cyberjapandata.gsi.go.jp/xyz/anaglyphmap_gray/{z}/{x}/{y}.png'
                    , ext: 'png', min: 5, max: 15, discription: 'アナグリフ2-16(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                gsi_gmld_ptc2: {
                    url: 'https://cyberjapandata.gsi.go.jp/xyz/gmld_ptc2/{z}/{x}/{y}.png'
                    , ext: 'png', min: 5, max: 15, discription: '植生（樹木被覆率）0-7(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                gsi_jikizu2015_chijiki_d: {
                    url: 'https://cyberjapandata.gsi.go.jp/xyz/jikizu2015_chijiki_d/{z}/{x}/{y}.png'
                    , ext: 'png', min: 5, max: 15, discription: '磁気図4-8(地理院地図)'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },
                // Esri
                esr: {
                    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                     , ext: 'jpg', min: 15, max: 17, discription: 'オルソ画像(Esri.WorldImagery)'
                     , attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                },
                // Nasa
                nasa_Temp: {
                    url: 'https://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_Land_Surface_Temp_Day/default//GoogleMapsCompatible_Level7/{z}/{y}/{x}.png'
                     , ext: 'png', min: 5, max: 15, discription: 'MODIS_Terra_Land_Surface_Temp_Day(nasa)'
                     , attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.'
                },
                nasa_Snow: {
                    url: 'https://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_Snow_Cover/default//GoogleMapsCompatible_Level8/{z}/{y}/{x}.png'
                     , ext: 'png', min: 5, max: 15, discription: 'MODIS_Terra_Snow_Cover(nasa)'
                     , attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.'
                },
                nasa_Aerosol: {
                    url: 'https://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_Aerosol/default//GoogleMapsCompatible_Level6/{z}/{y}/{x}.png'
                     , ext: 'png', min: 5, max: 15, discription: 'MODIS_Terra_Aerosol(nasa)'
                     , attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.'
                },
                nasa_Chlorophyll: {
                    url: 'https://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_Chlorophyll_A/default//GoogleMapsCompatible_Level7/{z}/{y}/{x}.png'
                     , ext: 'png', min: 5, max: 15, discription: 'MODIS_Terra_Chlorophyll_A(nasa)'
                     , attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.'
                },
                json: {
                    url: 'https://dev.samai.net/api/v1.1/jpborders/18/234003/96270.geojson'
                     , ext: 'png', min: 5, max: 15, discription: 'geoJson'
                     , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },

                //jiki: {url: 'https://cyberjapandata.gsi.go.jp/xyz/jikizu2015_chijiki_d/{z}/{x}/{y}.png'
                //     , ext: 'png', min: 2, max: 17, discription: '地理院地図（磁気図）' 
                //     , attribution: '<a href="http://portal.cyberjapan.jp/help/termsofuse.html" target="_blank">国土地理院</a>'
                //     },
                //pale: { ext: 'png', min: 12, max: 17, discription: '淡色地図' },
                //blank: { ext: 'png', min: 5, max: 14, discription: '白地図' },
                //english: { ext: 'png', min: 5, max: 8, discription: 'English Version' },
                //relief: { ext: 'png', min: 5, max: 15, discription: '色別標高図' },
                //gazo1: { ext: 'jpg', min: 15, max: 17, discription: '国土画像情報（第一期：1974～1978年撮影）' },
                //gazo2: { ext: 'jpg', min: 15, max: 17, discription: '国土画像情報（第二期：1979～1983年撮影' },
                //gazo3: { ext: 'jpg', min: 15, max: 17, discription: '国土画像情報（第三期：1984～1986年撮影）' },
                //gazo4: { ext: 'jpg', min: 15, max: 17, discription: '国土画像情報（第四期：1988～1990年撮影）' }
            }//end type
        }, //end statics
        mapkey: null,
        discription: null,
        initialize: function (key) {
            var type = L.TlsLayer.type[key];
            if (!type)
                return;
            this.mapkey = key
            this.discription = type.discription
            var url = type.url;
            var options = L.setOptions(this, {
                attribution: type.attribution,
                //minZoom: type.min,
                //maxZoom: type.min,
                //maxNativeZoom: type.max,
                errorTileUrl: 'img/nodata.gif'
            });
            L.TileLayer.prototype.initialize.call(this, url, options);
        } //end init
    }); //end extend
    L.tlsLayer = function (key) {
        return new L.TlsLayer(key);
    };

    /* jsonLayer */
    L.TileLayer.d3GeoJSON = L.TileLayer.extend({
        tileNodes: null,
        onAdd: function (map) {
            this._map = map;
            L.TileLayer.prototype.onAdd.call(this, map);
            this._path = d3.geo.path().projection(function (d) {
                var point = map.latLngToLayerPoint(new L.LatLng(d[1], d[0]));
                return [point.x, point.y];
            });
            this.on("tileunload", function (d) {
                if (d.tile.xhr) d.tile.xhr.abort();
                if (d.tile.nodes) d.tile.nodes.remove();
                d.tile.nodes = null;
                d.tile.xhr = null;
            });
        },
        onRemove: function (map) {
            d3.selectAll(".d3-geojson-layer").remove();
        },
        _loadTile: function (tile, tilePoint) {
            var self = this;
            this._adjustTilePoint(tilePoint);

            if (!tile.nodes && !tile.xhr) {
                tile.xhr = d3.json(this.getTileUrl(tilePoint), function (error, geojson) {
                    if (error) {
                        console.log(error);
                    } else {

                        if (self.options.filter) {
                            var tmp;
                            tmp = geojson.features.filter(self.options.filter);
                            geojson.features = tmp;
                        }

                        tile.xhr = null;
                        tile.nodes = d3.select(map._container).select("svg").append("g")
                            .attr("class", "d3-geojson-layer leaflet-zoom-hide");
                        tile.nodes.selectAll("path")
                        .data(geojson.features).enter()
                        .append("path")
                        .attr("d", self._path)
                        .attr(self.options.attr)
                        .style(self.options.style)
                        .on("click", self.options.onClick)
                        .on("mouseover", self.options.onMouseover)
                        .on("mouseout", self.options.onMouseoute)
                        ;
                    }
                });
            }
        }
    });

    /* jsonLayer */
    L.JsonLayer = L.TileLayer.extend({
        statics: {
            type: {
                // ベースマップ（背景図）
                ike: {
                    url: "https://dev.samai.net/api/v1.1/poljp/18/234003/96270.geojson"
                    , dataType: "json"
                    , success: console.log("County data successfully loaded.")
                    , discription: '池原さん'
                    , attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
                },


            }//end type
        }, //end statics
        mapkey: null,
        discription: null,
        initialize: function (key) {
            var type = L.JsonLayer.type[key];
            if (!type)
                return;
            this.mapkey = key
            this.discription = type.discription
            var url = type.url;
            var counties = $.ajax({
                url: url,
                dataType: type.dataType,
                success: type.success,
                error: function (xhr) {
                    alert(xhr.statusText)
                }
            })

            $.when(counties).done(function () {
                abcdefg = L.geoJSON(counties.responseJSON);
                
            });
        } //end init
    }); //end extend

    L.jsonLayer = function (key) {
        return new L.JsonLayer(key);
    };
})(L);



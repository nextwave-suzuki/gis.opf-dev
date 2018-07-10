(function (L) {
    L.GsiLayer = L.TileLayer.extend({
        statics: {
            type: {
                ort: {url: 'http://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg'
                     , ext: 'jpg', min: 15, max: 17, discription: '地理院地図（オルソ画像）' 
                     , attribution: '<a href="http://portal.cyberjapan.jp/help/termsofuse.html" target="_blank">国土地理院</a>'
                     },
                esr: {url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                     , ext: 'jpg', min: 15, max: 17, discription: 'Esri.WorldImagery' 
                     , attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                     },

                osm: {url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                     , ext: 'png', min: 2, max: 17, discription: 'オープンストリートマップ' 
                     , attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     },
                std: {url: 'http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
                     , ext: 'png', min: 2, max: 17, discription: '地理院地図（地図情報）' 
                     , attribution: '<a href="http://portal.cyberjapan.jp/help/termsofuse.html" target="_blank">国土地理院</a>'
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
            var type = L.GsiLayer.type[key];
            if (!type)
                return;
            this.mapkey = key
            this.discription = type.discription
            var url = type.url;//"http://cyberjapandata.gsi.go.jp/xyz/" + key + "/{z}/{x}/{y}." + type.ext;
            var options = L.setOptions(this, {
                attribution: type.attribution,
                maxZoom: 20,
                //maxNativeZoom: type.max,
                //minZoom: type.min,
                errorTileUrl: 'img/nodata.gif'
            });
            L.TileLayer.prototype.initialize.call(this, url, options);
        } //end init
    }); //end extend
    L.gsiLayer = function (key) {
        return new L.GsiLayer(key);
    };
})(L);
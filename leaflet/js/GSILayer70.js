(function (L) {
    L.GsiLayer = L.TileLayer.extend({
        statics: {
            type: {
                ort: {url: 'http://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg'
                     , ext: 'jpg', min: 15, max: 17, discription: '�n���@�n�}�i�I���\�摜�j' 
                     , attribution: '<a href="http://portal.cyberjapan.jp/help/termsofuse.html" target="_blank">���y�n���@</a>'
                     },
                esr: {url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                     , ext: 'jpg', min: 15, max: 17, discription: 'Esri.WorldImagery' 
                     , attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                     },

                osm: {url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                     , ext: 'png', min: 2, max: 17, discription: '�I�[�v���X�g���[�g�}�b�v' 
                     , attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     },
                std: {url: 'http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
                     , ext: 'png', min: 2, max: 17, discription: '�n���@�n�}�i�n�}���j' 
                     , attribution: '<a href="http://portal.cyberjapan.jp/help/termsofuse.html" target="_blank">���y�n���@</a>'
                     },
                //jiki: {url: 'https://cyberjapandata.gsi.go.jp/xyz/jikizu2015_chijiki_d/{z}/{x}/{y}.png'
                //     , ext: 'png', min: 2, max: 17, discription: '�n���@�n�}�i���C�}�j' 
                //     , attribution: '<a href="http://portal.cyberjapan.jp/help/termsofuse.html" target="_blank">���y�n���@</a>'
                //     },
                //pale: { ext: 'png', min: 12, max: 17, discription: '�W�F�n�}' },
                //blank: { ext: 'png', min: 5, max: 14, discription: '���n�}' },
                //english: { ext: 'png', min: 5, max: 8, discription: 'English Version' },
                //relief: { ext: 'png', min: 5, max: 15, discription: '�F�ʕW���}' },
                //gazo1: { ext: 'jpg', min: 15, max: 17, discription: '���y�摜���i�����F1974�`1978�N�B�e�j' },
                //gazo2: { ext: 'jpg', min: 15, max: 17, discription: '���y�摜���i�����F1979�`1983�N�B�e' },
                //gazo3: { ext: 'jpg', min: 15, max: 17, discription: '���y�摜���i��O���F1984�`1986�N�B�e�j' },
                //gazo4: { ext: 'jpg', min: 15, max: 17, discription: '���y�摜���i��l���F1988�`1990�N�B�e�j' }
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
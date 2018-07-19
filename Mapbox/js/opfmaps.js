/************************************************************************
 設定
 ************************************************************************/

var GSI = {
    ClientMode: {}
	, Modal: {}
	, Draw: {}
	, Edit: {}
	, Control: {}
	, Utils: {
	    Browser: {}
	}
	, GLOBALS: {}
	, TEXT: {}
};

var CONFIG = {};

/************************************************************************
 設定：メニュー：情報
 ************************************************************************/
CONFIG.MAPMENU = {
    title: '情報'
};

/************************************************************************
  window読み込み時
 ************************************************************************/
function initialize() {
    // パラメータ解析
    //GSI.GLOBALS.queryParams = new GSI.QueryParams({ queryString: GSI.ClientMode.queryString });
    //if (GSI.GLOBALS.queryParams.getInit()) {
        //initialize_proc();
    //}
};

function initialize_proc() {
    // 地図メニュー
    new GSI.MapMenu(
      GSI.GLOBALS.map
    , CONFIG.MAPMENU
    , {
        visible: ctrlSetting.infoMenu.visible
        , rootEffect: CONFIG.EFFECTS.MENU.ROOT
        , otherEffect: CONFIG.EFFECTS.MENU.OTHER
        , onMenuItemClick: function (id) {

            GSI.GLOBALS.viewListDialog.show();
            GSI.GLOBALS.layerTreeDialog.show();
        }
    }
    );

    // トップボタン生成
    var elem = $('<a>')
        .attr({ 'href': 'javascript:void(0);' })
        .html(treeConfig.title)
        .addClass('menu_btn')
        .click(L.bind(this.onItemClick, this));
    var a = new GSI.Control.Button(elem[0], { position: 'top' + this.options.position });
    a.addTo(this.map);
}

/************************************************************************
 L.Control
 - GSI.Control.Button
 ************************************************************************/
GSI.Control.Button = L.Control.extend({
    options: {
        position: 'topleft',
        maxWidth: "300px"
    },
    initialize: function (elem, options) {
        this._button = {};
        this.elem = elem;
        this.options.position = options.position;
        this.setButton(options);
    },
    onAdd: function (map) {
        this._map = map;
        var container = L.DomUtil.create('div', '');

        this._container = container;

        this._update();
        return this._container;
    },
    onRemove: function (map) {
    },
    setButton: function (options) {
        var button = {
            'text': options.text,
            'onClick': options.onClick,
            'class': options.className
        };

        this._button = button;
        this._update();
    },
    destroy: function () {
        this._button = {};
        this._update();
    },
    _update: function () {
        if (!this._map) {
            return;
        }

        this._container.innerHTML = '';
        this._makeButton(this._button);

    },
    _makeButton: function (button) {
        var newButton = this.elem;
        this.elem.style.color = '#fff';
        $(this._container).append(newButton);
        L.DomEvent
          .addListener(newButton, 'click', L.DomEvent.stop);
        L.DomEvent.disableClickPropagation(newButton);
        return newButton;

    }
});


$(document).ready(initialize);












L.Control.Sample = L.Control.extend({
    options: {
        // topright, topleft, bottomleft, bottomright
        position: 'topright'
    },
    initialize: function (options) {
        // constructor
        L.Util.setOptions(this, options);
        /*this._button = {};
        //this.elem = elem;
        this.options.position = options.position;
        this.setButton(options);*/
    },
    onAdd: function (map) {
        // happens after added to map
        var controlElementTag = 'div';
        var controlElementClass = 'menu_btn';
        var controlElement = L.DomUtil.create(controlElementTag, controlElementClass);

        // Continue implementing the control here.

        return controlElement;
    },
    onRemove: function (map) {
        // when removed
    },
    setButton: function (options) {
        var button = {
            'text': 'レイヤ',
            'onClick': options.onClick,
            'class': options.className
        };

        this._button = button;
        //this._update();
    }
});

L.control.sample = function (id, options) {
    return new L.Control.Sample(id, options);
}


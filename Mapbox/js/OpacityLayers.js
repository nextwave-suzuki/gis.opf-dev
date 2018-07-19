L.Control.OpacityLayers = L.Control.Layers.extend({
    _addItem: function (obj) {
        var label = L.Control.Layers.prototype._addItem.call(this, obj);

        if (!obj.overlay || !obj.layer.setOpacity) {
            return label;
        }
        input = document.createElement('input');
        input.type = 'range';
        input.min = 0;
        input.max = 100;
        input.value = 50;
        input.layerId = L.stamp(obj.layer);
        if (this._map.hasLayer(obj.layer)) {
            input.style.display = 'block';
        } else {
            input.style.display = 'none';
        }

        L.DomEvent.on(input, 'change', this._onInputClick, this);
        //document.body.appendChild(input);
        label.appendChild(input);
        return label;
    },
    _onInputClick: function () {
        var i, input, obj,
            inputs = this._form.getElementsByTagName('input'),
            inputsLen = inputs.length;

        this._handlingClick = true;

        for (i = 0; i < inputsLen; i++) {
            input = inputs[i];

            obj = undefined;
            for (j = 0; j < this._layers.length; j++) {
                if (this._layers[j].layer._leaflet_id == input.layerId) {
                    obj = this._layers[j];
                    break;
                }
            }
            //obj = this._layers[input.layerId];

            if (obj === undefined) {
                continue;
            }else if (input.type == 'range' && this._map.hasLayer(obj.layer)) {
                input.style.display = 'block';
                obj.layer.setOpacity(input.value / 100.0);
                continue;
            } else if (input.type == 'range' && !this._map.hasLayer(obj.layer)) {
                input.style.display = 'none';
                continue;
            }

            if (input.checked && !this._map.hasLayer(obj.layer)) {
                this._map.addLayer(obj.layer);

            } else if (!input.checked && this._map.hasLayer(obj.layer)) {
                this._map.removeLayer(obj.layer);
            } //end if
        } //end loop

        this._handlingClick = false;

        this._refocusOnMap();
    }
});
L.control.opacityLayers = function (baseLayers, overlays, options) {
    return new L.Control.OpacityLayers(baseLayers, overlays, options);
};

L.Map.include({

	getLayerAtLatLng: function(latlng, lng) {
		latlng = L.latLng(latlng, lng);

		return this.layerAt(latLngToContainerPoint(latlng));
	},

	getLayerAt: function(point, y) {
		point = L.point(point, y);

		// Ignore points outside the map
		if (!this.getSize().contains(point)) { return; }

		var mapPos = this._container.getBoundingClientRect();

		var viewportPoint = L.point(mapPos.left, mapPos.top).add(point);

		var el = document.elementFromPoint(viewportPoint.x, viewportPoint.y);

		return this._getLayerFromDOMElement(el);
	},

	_getLayerFromDOMElement: function(el) {
		if ((!el) || el === this._container) {
			// Stop the search when the map container itself is reached (meaning no
			// layer at the requested point) or the container is undefined (the
			// DOM elements were traversed up to the Document, meaning the map
			// is invisible e.g. because CSS)
			return;
		}

		var id = L.stamp(el);
		if (id in this._targets) {

			/// TODO: Extra logic for canvas, maybe another call to getLayerAt

			return this._targets[id];
		}

		return this._getLayerFromDOMElement(el.parentElement);
	}

});

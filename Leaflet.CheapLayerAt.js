
L.Map.include({

	getLayerAtLatLng: function(lat, lng) {
		latlng = L.latLng(lat, lng);
		return this.getLayerAt(this.latLngToContainerPoint(latlng).x, this.latLngToContainerPoint(latlng).y);
	},

	getLayersAtLatLng: function(lat, lng) {
		latlng = L.latLng(lat, lng);
		return this.getLayersAt(this.latLngToContainerPoint(latlng).x, this.latLngToContainerPoint(latlng).y);
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

	getLayersAt: function(point, y) {
		point = L.point(point, y);

		// Ignore points outside the map
		if (!this.getSize().contains(point)) { return; }

		var mapPos = this._container.getBoundingClientRect();

		var viewportPoint = L.point(mapPos.left, mapPos.top).add(point);

		var els = this._getElementsFromPoint(viewportPoint.x, viewportPoint.y);
		var out = [];
		for(var i = 0; i < els.length; i += 1) {
			var lay = this._getLayerFromDOMElement(els[i]);
			if(lay) out.push(lay);
		}
		return out;
	},

	_getElementsFromPoint: function(x, y) {
		var stack = [], el;
		var i = 1000; // prevent from infinite loop
		do {
			el = document.elementFromPoint(x, y);
			stack.push(el);
			el.style.pointerEvents = 'none';
		}while(el.tagName !== 'HTML' && i--);

		// clean up
		for(var i  = 0; i < stack.length; i += 1){
			stack[i].style.pointerEvents = '';
		}

		return stack;
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

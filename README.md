# Leaflet.CheapLayerAt

A cheap replacement of point-in-polygon calculations for LeafletJS maps



This [LeafletJS](http://www.leafletjs.com) plugin allows developers to query the
map for the layer which is under a given point in the map. It's "cheap" because
it covers some use cases more efficiently than point-in-polygon queries, but it
won't work on all circumstances.


See the [demo](http://ivansanchez.github.io/Leaflet.CheapLayerAt/demo.html).


## Why use CheapLayerAt

* Does not need computationally expensive algorithms
* Very small code size (1/20th of leaflet-pip)

## Why *not* use CheapLayerAt

* `<canvas>` layers will prevent it from working
* Only works on SVG vectors, markers and image overlays
* Only retrieves the top-most layer
* Might have sub-pixel accuracy problems
* Ignores tile layers
* Only works within the visible map bounds

## Usage

The plugin adds two functions to `L.Map`:

### `map.getLayerAt(point)`

Given an instance of `L.Point`, representing the pixel coordinates relative to the
top left corner of the map container, returns the `L.Layer` under that pixel, or
`undefined` if there is no layer under that pixel.

If there is more than one layer under that pixel, this function will return the
top-most one, according to the DOM. e.g. if there is a marker icon over a polygon,
the marker will be returned and the polygon will be ignored.

The `point` parameter must be contained within the map size. Will return `undefined`
if `point` is outside the map viewport size.

### `map.getLayerAtLatLng(latlng)`

Given an instance of `L.LatLng`, returns the top-most layer containing that lat-lng.

Will return `undefined` if the `latlng` is outside the current map viewport bounds.


## Legalese

---

"THE BEER-WARE LICENSE":
<ivan@sanchezortega.es> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.

---





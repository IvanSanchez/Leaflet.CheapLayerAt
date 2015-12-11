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




## Legalese

---

"THE BEER-WARE LICENSE":
<ivan@sanchezortega.es> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.

---





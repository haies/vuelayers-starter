<template>
  <div>
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
            data-projection="EPSG:4326" style="height: 400px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <div style="padding: 20px">
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div>
  </div>
</template>

<script>


  // or individual components

  import Vue from 'vue'
  import { Map, TileLayer, OsmSource, Geoloc } from 'vuelayers'
  import 'vuelayers/lib/style.css' // needs css-loader

  Vue.use(Map)
  Vue.use(TileLayer)
  Vue.use(OsmSource)
  Vue.use(Geoloc)
  export default {
    data () {
      return {
        zoom: 2,
        center: [0, 0],
        rotation: 0,
        geolocPosition: undefined,
      }
    },
  }
</script>

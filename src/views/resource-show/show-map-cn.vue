<template>
  <div id="mapContainer">
    <vl-map ref="map" v-bind="mapOptions">
      <ol-view v-bind="mapViewOptions" :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"/>
      <ol-wmts-layer-cn v-bind="cnOpt"/>

    </vl-map>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Map } from 'vuelayers'
  import 'vuelayers/lib/style.css' // needs css-loader
  import { WmtsLayerCn } from './components'
  import MapUrl from './components/map-urls'
  import OlView from './components/ol-map-view'

  Vue.use(Map)
  Vue.use(WmtsLayerCn)
  Vue.use(OlView)
  export default {
    name: "show-map",
    provide:function() {
      return {
        getMap:this.getMap
      }
    },
    data() {
      return {
        zoom: 8,
        center: [120, 29],
        rotation: 0,
        cnOpt: MapUrl.cn.vector,
        mapViewOptions: {
          maxZoom: 20,
          projection: 'EPSG:4326'
        },
        mapOptions: {
          controls: false,
          'load-tiles-while-animating': true,
          'load-tiles-while-interacting': true
        }
      }
    }
  }
</script>

<style scoped>
  #mapContainer {
    width: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
  }
</style>

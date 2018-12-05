<template>
  <div id="mapContainer">
    <el-button @click="handleSwitch">Switch</el-button>
    <vl-map ref="map" v-bind="mapOptions" @pointermove="onPointerMove">
      <ol-view v-bind="mapViewOptions"/>
      <vl-layer-tile>
        <vl-source-wms ref="mapSource" v-bind="opt">
        </vl-source-wms>
      </vl-layer-tile>

    </vl-map>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Map, TileLayer, WmsSource } from 'vuelayers'
  import 'vuelayers/lib/style.css' // needs css-loader
  import MapUrl from './components/map-urls'
  import OlView from './components/ol-map-view'

  Vue.use(Map)
  Vue.use(TileLayer)
  Vue.use(WmsSource)
  Vue.use(OlView)
  export default {
    name: "show-map",
    provide: function() {
      return {
        getMap: this.getMap
      }
    },
    data() {
      return {
        zoom: 8,
        // center: [120, 29],
        rotation: 0,
        opt: {
          serverType: 'geoserver',
          url: 'http://map.haies.cn/geoserver/njq/wms',
          layers: 'njq:njq_sys_xzqh',
          projection: 'EPSG:4326'
        },
        opts: [
          {
            serverType: 'geoserver',
            url: 'http://map.haies.cn/geoserver/njq/wms',
            layers: 'njq:njq_sys_xzqh',
            projection: 'EPSG:4326'
          },
          {
            serverType: 'geoserver',
            url: 'http://map.haies.cn/geoserver/geoCity/wms',
            layers: 'geoCity:item',
            projection: 'EPSG:4326'
          }
        ],
        mapViewOptions: {
          maxZoom: 20,
          zoom: 8,
          center: [120, 29],
          projection: 'EPSG:4326'
        },
        mapOptions: {
          controls: false,
          'load-tiles-while-animating': true,
          'load-tiles-while-interacting': true,
        }
      }
    },
    methods: {
      getMap: function(found) {
        let vm = this

        function checkForMap() {
          if (vm.$refs.map) {
            found(vm.$refs.map)
          } else {
            setTimeout(checkForMap, 50)
          }
        }

        checkForMap()
      },
      handleSwitch() {
        setTimeout(() => {
          if (this.opt.url === this.opts[0].url) {
            this.opt = this.opts[1]
          } else {
            this.opt = this.opts[0]
          }
          this.$refs.mapSource.recreate()
        }, 0)
      },
      onPointerMove({ pixel }) {
        this.$refs.map.$map.getTargetElement().style.cursor =
          this.$refs.map.$map.hasFeatureAtPixel(pixel) ? 'pointer' : '';
      }
    },
    watch: {
      type(type) {
        if (type == "image") {
          this.zjOpt = MapUrl.zj.image
          this.zjAnOpt = MapUrl.zj.imageAn
          this.cnOpt = MapUrl.cn.image
          this.cnAnOpt = MapUrl.cn.imageAn
        } else {
          this.zjOpt = MapUrl.zj.vector
          this.zjAnOpt = MapUrl.zj.vectorAn
          this.cnOpt = MapUrl.cn.vector
          this.cnAnOpt = MapUrl.cn.vectorAn
        }
      },
      extent(newVal, oldVal) {
        this.$store.dispatch('SetLastExtent', oldVal).then()
      }
    },
    computed: {
      type() {
        return this.$store.getters.type
      },
      extent() {
        return this.$store.getters.extent
      }
    },
    mounted() {
      setTimeout(() => {
        this.opt = this.opts[1]
        this.$refs.mapSource.recreate()
      }, 0)
      this.$store.dispatch('SetExtent', [118.02, 27.14, 122.83, 31.18]).then()
      this.$refs.map.$createPromise.then(() => {
        this.$refs.map.$map.render()
        this.$store.dispatch('SetMap', this.$refs.map.$map).then()
      })
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

  .resource-show-container {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
</style>

import { WmtsSource } from 'vuelayers'
import MapUrl from './map-urls'
import _ from 'lodash'

const DEFAULT_OPTS = {
  url: {
    type: String,
    default: MapUrl.zj.vector.url
  },
  layerName: {
    type: String,
    default: MapUrl.zj.vector.layerName
  },
  styleName: {
    type: String,
    default: 'default'
  },
  matrixSet: {
    type: String,
    default: 'TileMatrixSet0'
  },
  format: {
    type: String,
    default: 'image/png'
  },
  projection: {
    type: String,
    default: 'EPSG:4326'
  },
  maxZoom: {
    type: Number,
    default: 20
  }
}

const DEFAULT_OPTS_CN = {
  url: {
    type: String,
    default: MapUrl.cn.vector.url
  },
  layerName: {
    type: String,
    default: MapUrl.cn.vector.layerName
  },
  styleName: {
    type: String,
    default: 'default'
  },
  matrixSet: {
    type: String,
    default: 'c'
  },
  format: {
    type: String,
    default: 'tiles'
  },
  projection: {
    type: String,
    default: 'EPSG:4326'
  },
  maxZoom: {
    type: Number,
    default: 20
  }
}
const props = _.assign({}, WmtsSource.Source.props, DEFAULT_OPTS)

const watch = {
  url: function() {
    // this.refresh()
    this.recreate()
  }
}
const WmtsSourceWarpper = {
  mixins: [WmtsSource.Source],
  name: 'ol-wmts-source',
  props,
  watch,
  render: h => h()
}

const index = {
  Source: WmtsSourceWarpper,
  install: function(Vue) {
    Vue.component(WmtsSourceWarpper.name, WmtsSourceWarpper)
  }
}

export default index
export { WmtsSourceWarpper, DEFAULT_OPTS, DEFAULT_OPTS_CN }

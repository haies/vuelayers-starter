import { TileLayer } from 'vuelayers'
import { DEFAULT_OPTS_CN, WmtsSourceWarpper } from './ol-wmts-source'
import _ from 'lodash'

const props = _.assign({}, TileLayer.Layer.props, WmtsSourceWarpper.props, DEFAULT_OPTS_CN)

const Layer = {
  mixins: [TileLayer.Layer],
  name: 'ol-wmts-layer-cn',
  props,
  render: function(h) {
    return h(WmtsSourceWarpper.name, {
      props: this.$props
    })
  }
}
const index = {
  Layer: Layer,
  install: function(Vue) {
    Vue.component(WmtsSourceWarpper.name, WmtsSourceWarpper)
    Vue.component(Layer.name, Layer)
  }
}

export default index

import { Map } from 'vuelayers'
import _ from 'lodash'
import Easing from 'ol/easing'

const props = _.assign(
  {},
  Map.View.props,
  {
    extent: {
      type: Array,
      default: function() {
        return []
      }
    }
  })
const watch = {
  extent: function(extent) {
    if (extent.length !== 4) return
    const options = _.assign({}, {
      constrainResolution: true,
      padding: [5, 0, 5, 0],
      duration: 800,
      easing: Easing.inAndOut
    })
    this.$createPromise.then(() => this.fit(extent, options))
  }
}
const View = {
  mixins: [Map.View],
  name: 'ol-view',
  props,
  watch,
  render: function(h) {
    return h => h()
  }
}
const index = {
  View: View,
  install: function(Vue) {
    Vue.component(View.name, View)
  }
}

export default index

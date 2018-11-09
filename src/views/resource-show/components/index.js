import WmtsLayerCn from './ol-wmts-layer-cn'
import WmtsSource from './ol-wmts-source'
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.use(WmtsLayerCn, options)
  Vue.use(WmtsSource, options)
}
export default plugin
export {
  plugin as install,
  WmtsLayerCn,
  WmtsSource
}

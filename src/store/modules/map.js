const map = {
  state: {
    type: 'vector',
    zoom: 8,
    extent: [],
    last_extent: [],
    center: [],
    map: {}
  },
  mutations: {
    SET_TYPE: (state, type) => {
      state.type = type
    },
    SET_ZOOM: (state, zoom) => {
      state.zoom = zoom
    },
    SET_EXTENT: (state, extent) => {
      state.extent = extent
    },
    SET_LAST_EXTENT: (state, extent) => {
      state.last_extent = extent
    },
    SET_CENTER: (state, center) => {
      state.center = center
    },
    SET_MAP: (state, map) => {
      state.map = map
    }
  },
  actions: {
    SetType: ({ commit }, type) => {
      commit('SET_TYPE', type)
    },
    SetZoom: ({ commit }, zoom) => {
      commit('SET_ZOOM', zoom)
    },
    SetExtent: ({ commit }, extent) => {
      commit('SET_EXTENT', extent)
    },
    SetLastExtent: ({ commit }, extent) => {
      commit('SET_LAST_EXTENT', extent)
    },
    ZoomLastExtent: ({ commit, state }) => {
      commit('SET_EXTENT', state.last_extent)
    },
    SetCenter: ({ commit }, center) => {
      commit('SET_CENTER', center)
    },
    SetMap: ({ commit }, map) => {
      commit('SET_MAP', map)
    },
    Zoom2Detail: ({ commit }, { type, status, item }) => {
      const scale = 0.01
      const [x, y] = item.location
      const extent = [x - scale, y - scale, x + scale, y + scale]
      commit('SET_SEARCH_RESULT_ITEM', item)
      commit('SET_EXTENT', extent)
      commit('CHANGE_SEARCH_STATUS', status)
    }
  }
}
export default map

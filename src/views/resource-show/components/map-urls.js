const MapUrl = {
  cn: {
    vector: {
      url: 'http://t{0-6}.tianditu.gov.cn/vec_c/wmts',
      layerName: 'vec'
    },
    vectorAn: {
      url: 'http://t{0-6}.tianditu.gov.cn/cva_c/wmts',
      layerName: 'cva'
    },
    image: {
      url: 'http://t{0-6}.tianditu.gov.cn/img_c/wmts',
      layerName: 'img'
    },
    imageAn: {
      url: 'http://t{0-6}.tianditu.gov.cn/cia_w/wmts',
      layerName: 'cia'
    }

  },
  zj: {
    vector: {
      url: 'http://srv{0-6}.zjditu.cn/ZJEMAP_2D/wmts',
      layerName: 'TDT_ZJEMAP'
    },
    vectorAn: {
      url: 'http://srv{0-6}.zjditu.cn/ZJEMAPANNO_2D/wmts',
      layerName: 'ZJEMAPANNO'
    },
    image: {
      url: 'http://srv{0-6}.zjditu.cn/ZJDOM_2D/wmts',
      layerName: 'ZJDOM_2D'
    },
    imageAn: {
      url: 'http://srv{0-6}.zjditu.cn/ZJDOMANNO_2D/wmts',
      layerName: 'ZJDOMANNO_2D'
    }
  }
}
export default MapUrl

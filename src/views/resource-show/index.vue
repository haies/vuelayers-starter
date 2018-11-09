<template>
  <div class="resource-show-container">
    <resource-show></resource-show>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import ResourceShow from './show-map'
import ResourceShow from './show-map'

export default {
  name: 'ResourceShows',
  components: { ResourceShow },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
<style>
  /*#map{*/
    /*height: calc(100vh - 84px);*/
  /*}*/
  #map{
    width: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
  }
</style>

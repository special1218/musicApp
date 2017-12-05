<template>
  <div id="app">
    <mu-tabs :value="activeTab" @change="handleTabChange">
	    <mu-tab value="tab1" title="流行歌曲"/>
	    <mu-tab value="tab2" title="歌单"/>
	    <mu-tab value="tab3" title="排行榜"/>
	    <mu-tab value="tab4" title="playlist"/>
	  </mu-tabs>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
      this.$router.push({path:val})
    }
  }
}
</script>

<style scoped="scoped">
/*.mu-tabs {
    background-color: #EC3D3E;
}*/
</style>

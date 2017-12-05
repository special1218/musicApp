<template>
  <div id="app">
    
    <banner></banner>
    <song></song>
    <mv></mv>
    
  </div>
</template>

<script>
	
	import banner from './body01/banner.vue'
	import song from './body01/song.vue'
	import mv from './body01/mv.vue'
	
export default {
  name: 'app',
  data () {
    return {
      arr:[]
    }
  },
  components:{
  	banner:banner,
  	song:song,
  	mv:mv
  }
}
</script>

<style scoped="scoped">

</style>

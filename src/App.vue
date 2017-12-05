<template>
	<div id="app">

		<div id="header" v-if="show">
			<head1></head1>
			<nav1></nav1>
		</div>
		<router-view></router-view>

	</div>
</template>

<script>
	import head from './components/head/head.vue'
	import nav from './components/nav/nav.vue'
	import body from './components/body/body01.vue'

	export default {
		name: 'app',
		data() {
			return {
				show:true,
				arr: []
			}
		},
		components: {
			head1: head,
			nav1: nav,
			body1: body
		},
		watch:{
			$route(val){
				if(val.path.slice(0,4)!='/tab'){
					this.show=false
				}else{
					this.show=true
				}
			}
		}
	}
</script>

<style scoped="scoped">
#header{
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 50;
}
</style>
<template>
	<div id="app">
		<mu-appbar title="Music">
			<mu-flat-button label="Special+WuSi" slot="right" />
		</mu-appbar>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				arr: []
			}
		}
	}
</script>

<style scoped="scoped">
/*.mu-appbar {
	background: #ec3d3e;
}*/
</style>
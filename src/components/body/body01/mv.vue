<template>
	<div id="app">
<h1>mv</h1>
		<mu-flexbox wrap="wrap">
			<mu-flexbox-item class="flex-demo" basis="45%" v-for="data in arr">
				<img :src="data.coverImgUrl" />
				<p>{{data.name}}</p>
			</mu-flexbox-item>
		</mu-flexbox>

	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				arr: []
			}
		},
		created() {
			var url = 'http://musicapi.duapp.com/api.php?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit=6'
			this.$http.get(url).then((res) => {
				this.arr = res.data.playlists
			})
		}
	}
</script>

<style scoped="scoped">

	.flex-demo {
		height: auto;
		line-height: 15px;
	}
	.flex-demo:nth-child(2n+1){
		margin-left: 0 !important;
	}
	img {
		width: 100%;
		height: 20vh;
	}
	
	p {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
</style>
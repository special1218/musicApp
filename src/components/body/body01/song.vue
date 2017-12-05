<template>
	<div id="app">
	<h1>song</h1>
		<mu-flexbox wrap="wrap">
			<mu-flexbox-item class="flex-demo" basis="30%" v-for="data in arr">
				<router-link :to='"/playlists/"+data.id'>
					<p id="p1">{{data.playCount |files}}</p>
					<img :src="data.coverImgUrl" />
					<p>{{data.name}}</p>
				</router-link>
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
		},
		filters:{
			files(val){
				if(val>=10000){
					return parseInt(val/10000)+"万"
				}else{
					return val
				}
			}
		}
	}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.flex-demo {
		position: relative;
		height: auto;
		line-height: 15px;
	}
	
	.flex-demo:nth-child(3n+1) {
		margin-left: 0 !important;
	}
	p{
		color: gray;
	}
	#p1{
		position: absolute;
		margin: 0;
		width: 100%;
		background: black;
		opacity: 0.6;
		height: 1.875rem;
		line-height: 1.875rem;
		color: white;
	}
	img {
		width: 100%;
		height: 17vh;
	}
	
	p {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>
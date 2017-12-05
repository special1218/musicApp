<template>
	<div id="app">

		<div id="show">
			<router-link to="/tab1">
				<h1>←  返回歌单</h1>
			</router-link>
			<div class="fle">
				<img :src="coverImgUrl"/>
			<h2 style="margin-left: 10%;">{{name}}</h2>
			</div>
		</div>
		<ul>
			<li v-for="(data,index) in arr" @click="play(data.id)">
				<div id="left">
					{{index+1}}
				</div>
				<div id="right">
					<p>{{data.name}}</p>
					<p>{{data.ar[0].name}}</p>
				</div>
			</li>
		</ul>
		<div id="audio">
			<audio controls="controls" autoplay="autoplay" :src="music"></audio>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				arr: [],
				coverImgUrl:'',
				music: '',
				name:''
			}
		},
		created() {
			var id = this.$route.params.id
			var url = 'https://api.imjad.cn/cloudmusic/?type=playlist&id=' + id
			this.$http.get(url).then((res) => {
				console.log(res.data)
				this.arr = res.data.playlist.tracks
				this.coverImgUrl=res.data.playlist.coverImgUrl
				this.name=res.data.playlist.name
			})
		},
		methods: {
			play(id) {
				var url = 'https://api.imjad.cn/cloudmusic/?type=song&id=' + id
				this.$http.get(url).then((res) => {
					this.music = res.data.data[0].url
				})
			}
		}
	}
</script>

<style scoped="scoped">
	ul li {
		list-style: none;
		width: 100%;
		display: flex;
	}
	ul {
		margin-top: 18rem;
	}
	img{
		width: 12.5rem;
		height: 12.5rem;
	}
	#left {
		width: 10%;
		margin-right: 5%;
		padding-top: 1.25rem;
	}
	
	#right {
		width: 75%;
		border-bottom: 1px solid #d9d9d9;
	}
	
	audio {
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	
	#audio {
		margin-top: 4rem;
	}
	
	#show{
		width: 100%;
		height: 18rem;
		background: gray;
		position: fixed;
		top: 0;
		z-index: 80;
	}
	.fle{
		display: flex;
	}
</style>
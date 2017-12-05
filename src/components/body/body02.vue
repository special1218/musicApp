<template>
	<div class="demo-infinite-container">
		<h1>mv</h1>
		<mu-flexbox wrap="wrap">
			<mu-flexbox-item class="flex-demo" basis="45%" v-for="data in arr">
				<img :src="data.coverImgUrl" />
				<p>{{data.name}}</p>
			</mu-flexbox-item>
		</mu-flexbox>
		<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				arr: [],
				num: 0,
				loading: false,
				scroller: null
			}
		},
		mounted() {
			this.scroller = this.$el
		},
		created() {
			var url = 'http://musicapi.duapp.com/api.php?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit=8'
			this.$http.get(url).then((res) => {
				this.arr = res.data.playlists
			})
		},
		methods: {
			loadMore() {
				this.loading = true
				setTimeout(() => {
					this.num += 6
					var url = 'http://musicapi.duapp.com/api.php?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset='+this.num+'&limit=8'
					this.$http.get(url).then((res) => {
						let j=0
						for(let i = this.num; i < this.num + 6; i++) {
							this.arr.push(res.data.playlists[j])
							j++
						}
					})
					this.loading = false
				}, 2000)
			}
		}
	}
</script>

<style scoped="scoped">
	.flex-demo {
		height: auto;
		line-height: 15px;
	}
	.demo-infinite-container{
		margin-top: 9rem;
	}
	.flex-demo:nth-child(2n+1) {
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
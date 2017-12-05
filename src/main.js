import Vue from 'vue'
import App from './App.vue'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)


import body1 from './components/body/body01.vue'
import body2 from './components/body/body02.vue'
import body3 from './components/body/body03.vue'
import body4 from './components/body/body04.vue'
import playlists from './components/body/playlists.vue'

let vueRouter=new VueRouter({
	routes:[
		{path:'',redirect:'tab1'},
		{path:'/tab1',component:body1},
		{path:'/tab2',component:body2},
		{path:'/tab3',component:body3},
		{path:'/tab4',component:body4},
		{path:'/playlists/:id',component:playlists}
	]
})

new Vue({
  el: '#app',
  router:vueRouter,
  render: h => h(App)
})

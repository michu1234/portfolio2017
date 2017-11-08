// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '../css/fontello.css'

import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps';

import Gallery from './components/Gallery'
import Gallery2 from './components/Gallery2'
import Gallery3 from './components/Gallery3'
import Gallery4 from './components/Gallery4'
import Gallery5 from './components/Gallery5'
import Gallery6 from './components/Gallery6'
import Gallery7 from './components/Gallery7'
import Gallery8 from './components/Gallery8'
import Gallery9 from './components/Gallery9'
import Gallery10 from './components/Gallery10'
import Gallery11 from './components/Gallery11'
import Contact_field from './components/Contact_field'
import Find_me from './components/Find_me'
import About_me from './components/About_me'
import ToDO from './components/ToDO'
import Translator from './components/Translator'
import Word_translated from './components/Word_translated'
import News from './components/News'
import Github from './components/Github'


Vue.component('gallery', Gallery)
Vue.component('gallery2', Gallery2)
Vue.component('gallery3', Gallery3)
Vue.component('gallery4', Gallery4)
Vue.component('gallery5', Gallery5)
Vue.component('gallery6', Gallery6)
Vue.component('gallery7', Gallery7)
Vue.component('gallery8', Gallery8)
Vue.component('gallery9', Gallery9)
Vue.component('gallery10', Gallery10)
Vue.component('gallery11', Gallery11)
Vue.component('contact_field', Contact_field)
Vue.component('find_me', Find_me)
Vue.component('about_me', About_me)
Vue.component('to_do', ToDO)
Vue.component('translator', Translator)
Vue.component('word_translated', Word_translated)
Vue.component('news', News)
Vue.component('github', Github)
Vue.config.productionTip = false


Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyD__5V4Alpsok-i4prz1OVsNGU4XzmqlEs',
		v: '3.29',
		// libraries: 'places', //// If you need to use place input
	}
});


setTimeout(function() {
new Vue({
  el: '#app',
  router,
  template: '<App/>',
	components: { App }
})
},1000);


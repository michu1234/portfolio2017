// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
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
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '../css/fontello.css'
import App from './App'
import router from './router'


Vue.use(Vuetify)
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
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
	components: { App }
})

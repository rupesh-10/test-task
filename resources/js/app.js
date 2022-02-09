
require('./bootstrap');
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import store from './store/store'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.Vue = require('vue').default;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)




const app = new Vue({
    el: '#app',
    router,
    store,
    components:{App}
});

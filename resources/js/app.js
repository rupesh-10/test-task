require('./bootstrap')
import router from './router'
import store from './store/store'
import App from './components/App'
import { createApp,h } from 'vue';


const app = createApp({
    render:() => h(App)
}).use(router).use(store).mount('#app')


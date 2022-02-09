import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import subject from './subject'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        subject
    }
})
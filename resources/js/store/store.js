import { createStore } from 'vuex'

import auth from './auth'
import subject from './subject'


export default createStore({
    modules: {
        auth,
        subject
    }
})
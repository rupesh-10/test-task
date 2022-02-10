 
 <template>
 <div>
 <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
                    <h1 class="text-center"> Welcome {{userData.name }}, Please click here to <a href="#" @click="logout">logout</a></h1>
                </div>
                    <h2 class="text-success text-center"><router-link to="/subject">View Subjects</router-link></h2>
            </div>
       </div> 
    </div>
 </template>
<script>
import { computed } from 'vue'
import {useStore} from 'vuex'

export default {
    setup() {
        const store = useStore()
        const userData = computed(()=> store.state.auth.authenticatedUser)
        const logout = ()=>{ store.dispatch('auth/logout') } 
        return {userData,logout}
    },
}
</script>
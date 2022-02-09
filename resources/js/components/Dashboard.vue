 
 <template>
 <div>
 <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
                    <h1 class="text-center text-white"> Welcome {{userData.name }}, Please click here to <a href="#" @click="logout">logout</a></h1>
                </div>
                    <h2 class="text-success text-center"><router-link to="/subject">View Subjects</router-link></h2>
            </div>
       </div> 
       </div>
 </template>
 <script>
     export default{
         computed:{
             userData(){
                return this.$store.state.auth.authenticatedUser
             }  
         },
         methods:{
             logout(){
                 return this.$store.dispatch('auth/logout')
             }
         }
     }
 </script>
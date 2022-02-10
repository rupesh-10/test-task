<template>
     <div class="container">
    <div class="row">
        <div class="col-md-6 mt-5 mx-auto">
            <form v-on:submit.prevent="login">
              <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

              <div class="form-group">
                <label for="email"> Email Address</label>
                <input type="email" v-model="email" class="form-control" name="email" placeholder="Email Address">
                <small class="text-danger" v-if="email===''">Email is required</small>
              </div>

              <div class="form-group mt-2">
                <label for="password"> Password</label>
                <input type="password" v-model="password" class="form-control" name="password" placeholder="Password">
                <small class="text-danger" v-if="password===''">Password is required</small>
              </div>

              <button class="btn mt-2 btn-lg btn-primary btn-block">Sign in</button>
            </form>
      </div>
    </div>
  </div>
</template>
<script>
import {useStore} from 'vuex'
import { ref } from 'vue'
export default {
  setup(){
    const store=useStore()
    const email = ref('')
    const password = ref('')
    const login = ()=>{
      if(email!=='' && password!=='')
       store.dispatch('auth/login',{email:email.value,password:password.value})
    }
    return {
      email,password,login
    }

  }
}

</script>
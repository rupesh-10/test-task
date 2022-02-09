<template>
     <div class="container">
    <div class="row">
        <div class="col-md-6 mt-5 mx-auto">
            <form v-on:submit.prevent="login">
              <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

              <div class="form-group">
                <label for="email"> Email Address</label>
                <input type="email" v-model="email" class="form-control" name="email" placeholder="Email Address">
              </div>

              <div class="form-group mt-2">
                <label for="password"> Password</label>
                <input type="password" v-model="password" class="form-control" name="password" placeholder="Password">
              </div>

              <button class="btn mt-2 btn-lg btn-primary btn-block">Sign in</button>
            </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            email:null,
            password:null
        }
    },
    methods:{
        login(){
            return this.$store.dispatch('auth/login',{email:this.email,password:this.password})
        }
    }
}

</script>
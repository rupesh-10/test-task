import axios from 'axios'
import router from '../router'

export default{
    namespaced:true,
    state:{
        authenticatedUser:JSON.parse(localStorage.getItem('userData')) || {},
    },

    getters:{

    },
    
    mutations:{
    },

    actions:{
        login({commit},loginData){
            axios.post('/api/login',
            {
              email:loginData.email,
              password:loginData.password,
            })
            .then((res) => {
                localStorage.setItem('userData',JSON.stringify(res.data.userData))
                router.push({name: 'Dashboard'})
                console.log(res.data.message)

            })
            .catch((error) => {
                console.log(error)
            })
        },
        logout(){
            localStorage.removeItem('userData')
            router.push({name: 'Login'})
        }
    },
}
import axios from 'axios'
export default{
    state:{
        userAndSubjects:{}  
    },

    mutations:{
        SET_USER_AND_SUBJECTS(state,payload){
            state.userAndSubjects = payload
        }
    },

    actions:{
        getUserSubjects({commit}){
            return axios.get('/api/getUserSubjects').then(res=>{
                commit("SET_USER_AND_SUBJECTS",res.data);
            }).catch(error=>{
                console.log(error)
            })
        }
    }

}
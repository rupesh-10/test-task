<template>
    <div class="row justify-content-center  pt-4">
        <h4 class="text-center">User And Subjects List: </h4>
        <div class="col-md-6">
            <button class="btn btn-primary" @click="$router.go(-1)">
                 Go Back
            </button>
         <table class="table">
            <thead>
                <th>User Name</th>
                <th>Subjects</th>
            </thead>
            <tbody>
                <tr v-for="userSubject in userAndSubjects" :key="userSubject.id">
                    <td>
                        {{ userSubject.user.name}}
                    </td>
                    <td>
                        {{userSubject.subject.name}}
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>
<script>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
    setup() {
        const store = useStore()
        const userAndSubjects = computed(()=> store.state.subject.userAndSubjects)

        const fetchSubjectsOfUsers = ()=>{store.dispatch('getUserSubjects')}
        
        onMounted(()=>{
            fetchSubjectsOfUsers()
        })

        return {userAndSubjects,fetchSubjectsOfUsers}
    },
}
</script>
<template>
    <div class="row justify-content-center  pt-4">
        <h4 class="text-center">User And Subjects List: </h4>
        <div class="col-md-6">
            <button class="btn btn-primary" @click="$router.go(-1)">
                  <b-icon icon="arrow-left"></b-icon> Go Back
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
export default{
    computed:{
        userAndSubjects(){
            return this.$store.state.subject.userAndSubjects
        }
    },
    mounted(){
        this.fetchSubjectsOfUsers()
    },
    methods:{
        fetchSubjectsOfUsers(){
            this.$store.dispatch('getUserSubjects');
            console.log(this.userAndSubjects)
        }
    }
}
</script>
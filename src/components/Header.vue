<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="padding:0">
        <div class="position-relative" style="background-color:#0084FF;padding: 3rem; width:20rem; border-radius: 0 0 1.5rem 0; margin-right:2% ">
            <img
                src="@/assets/rlogo.svg"
                class="position-absolute top-50 start-50 translate-middle"
            />
        </div>
        <ul class="navbar-nav" >
            <li class="nav-item">
                <router-link to="/"><a class="nav-link" href="#">Главная</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/opros"><a class="nav-link" href="#">Тестирование</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/pojerv"><a class="nav-link" href="#">Пожертвование</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/participate"><a class="nav-link" href="#">Участие</a></router-link>
            </li>
        </ul>

        <div style="margin-left:36%">
            <img
                src="@/assets/location.svg"
                style="display:inline-block;"
            />
            <p style="display:inline-block; margin:0 1rem 0 1rem">
                Якутск
            </p>
            <img
                style="display:inline-block;"
                src="@/assets/arrowdown.svg"
            />
            
            <div style="display:inline-block; margin-left:1rem">
                <img src="@/assets/user.svg" alt="" v-on:click="goToLog" style="cursor:pointer">
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods:{
        goToLog(){
            if(localStorage.getItem('id')==null){
                this.$router.push(`/login`)
            }else{
                this.$router.push(`/profile`)
            }
        }
    }
}
</script>

<style scoped>

</style>
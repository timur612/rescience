<template>
    <div>
        <div class="row" style="margin-top:2%;"> 
            <Categories class="col-sm-1"/>
            <div class="col-sm-5">
                
                <div style="padding:5%">
                    <p class="h5">Регистрация</p>
                    <input v-model="name" type="email" style="background-color:#F3F3F3; border:none; margin-top:5%" id="loginemail" class="form-control" placeholder="фамилия имя">

                    <input v-model="email" type="email" style="background-color:#F3F3F3; border:none; margin-top:5%" id="loginemail" class="form-control" placeholder="e-mail">

                    <input v-model="password" style="background-color:#F3F3F3; border:none; margin-top:5%" type="password" id="loginemail" class="form-control" placeholder="пароль">
                    <input style="background-color:#F3F3F3; border:none; margin-top:5%" type="password" id="loginemail" class="form-control" placeholder="пароль">

                    <div class="btn mt-4" style="background-color:#0084FF;padding:1% 10% 1% 10%" v-on:click="login">
                        <p style="color:white;margin-bottom:0">Зарегистрироваться</p>
                    </div>

                    <div class="mt-3">
                        <p>Есть аккаунт?  <router-link to="/login"><strong style="cursor:pointer;color:#0084FF"> Войти </strong></router-link> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import Categories from '@/components/Categories.vue'
export default {
    components: {
      Categories,
    },
    data(){return{
        isActive: true,
        isActive2: false,
        email: '',
        password: ''
    }},
    created(){
        if(localStorage.getItem('id')!=null){
            this.$router.push({path:'/'})
        }
    },
    methods:{
        login(){
            this.errs = [];
            const body = JSON.stringify({
                    name: this.name,
                    surename: '',
                    nickname: '',
                    email:this.email,
                    password:this.password
                })
            axios
                .post('http://localhost:3000/users',body,{headers: {"Content-Type": "application/json"  }})
                .then(res=>{
                    localStorage.setItem('id',res.data.body.id); 
                    this.$forceUpdate();
                    this.$router.push({ path: '/', })
                    
                })
                .catch((e,res)=>{
                    console.log(e);
                    this.errs.push(e);
                })
        }
    }
}
</script>

<style scoped>

</style>
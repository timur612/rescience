<template>
    <div class="row">
        <div class="col-sm">
            <div :class="{show: isActive, hide: !isActive}">
                <div class="text-center" style="margin-top:5%">
                <p class="h3" style="color:#0084FF">Вход</p>
                </div>
                <div style="padding:5%">
                    <label for="loginemail" class="form-label">E-mail</label>
                    <input v-model="email" type="email" id="loginemail" class="form-control" placeholder="Введите e-mail">
                </div>

                <div class="text-center">
                    <a class="btn" style="background-color:#0084FF;color: white" v-on:click="continueLog">Продолжить</a>
                </div>
                <div class="text-center mt-3">
                    <a style="text-decoration:none;color:black">Не можете войти?</a>
                </div>
                <div class="text-center mt-3">
                    <a style="text-decoration:none;color:black">Ещё нет аккаунта? <span style="color:#0084FF">Зарегистрироваться</span></a>
                </div>
            </div>

            <div :class="{show: isActive2, hide: !isActive2}">
                <div class="text-center" style="margin-top:5%">
                <p class="h3" style="color:#0084FF">Вход</p>
                </div>
                <div style="padding:5%">
                    <label for="loginemail" class="form-label">Пароль</label>
                    <input v-model="password" type="password" id="loginemail" class="form-control" placeholder="Введите свой пароль">
                    <!-- <p class="text-mute">Вам на указанный адрес придет шестизначный код для регистрации, введите его в поле. Он действителен в течении 10 минут</p> -->
                </div>

                <div class="text-center">
                    <a class="btn" style="background-color:#0084FF;color: white" v-on:click="login">Войти</a>
                </div>
                <!-- <div class="text-center mt-3">
                    <a style="text-decoration:none;color:#1FC8BF">Отправить код еще раз</a>
                </div> -->
                <div class="text-center mt-3">
                    <a style="text-decoration:none;color:black">Ещё нет аккаунта? <span style="color:#0084FF">Зарегистрироваться</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
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
        continueLog(){
            this.isActive = false;
            this.isActive2 = true;
        },
        login(){
            this.errs = [];
            const body = JSON.stringify({
                    email:this.email,
                    password:this.password
                })
            axios
                .post('http://localhost:3000/users/login',body,{headers: {"Content-Type": "application/json"  }})
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
    .screenwide{
        width: 100vw;
        height: 100vh;
    }
    .show{
        display: block;
    }
    .hide{
        display: none;
    }
</style>
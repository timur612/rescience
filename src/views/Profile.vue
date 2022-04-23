<template>
    <div>
        <div class="row" style="margin-top:2%;"> 
            <Categories class="col-sm-1"/>
            <div class="col-sm-9" style="margin-left:1.2%">
                <div class="row">
                    <div class="col-sm-2" v-on:click="goToBack">
                        <img src="@/assets/left.svg" style="cursor:pointer;display:inline-block" alt="">
                        <p class="h6" style="display:inline-block">Профиль</p>
                    </div>
                    <div class="col-sm" style="margin-left:60%">
                        <div class="btn" style="background-color:#0084FF;padding:5% 10% 5% 10%" v-on:click="gotToAdd">
                            <img src="@/assets/addcard.svg" alt="" style="display:inline-block">
                            <p style="color:white;margin-bottom:0;display:inline-block;margin-left:1rem">Добавить карточку</p>
                        </div>
                    </div>
                </div>

                <div class="rounded position-relative mt-5" style="background-color:#F3F3F3;padding:5%;width:100%">
                    <p class="h5 position-absolute start-50" style="top:1.5rem"> {{name}} </p>

                    <div class="mt-5">
                        <p class="h5">Описание</p>
                        <p>{{desc}}</p>
                    </div>

                    <div class="mt-4">
                        <p class="h5">Образвование и сфера деятельности</p>
                        <p>{{study}}</p>
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
    components:{
        Categories
    },
    data(){
        return{
            name:'Иванов Иван',
            study:'Пару слов о себе',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam.  '
        }
    },
    methods:{
        async getUser(){
            let id = localStorage.getItem('id')
            axios.get(`http://localhost:3000/users/${id}`)
                .then(res=>{
                    this.name = res.data.body.name.name;
                })
                .catch(err=>{
                    console.log(err)
                })
        },
        gotToAdd(){
            this.$router.push('/addcard');
        }
    },
    created(){
        this.getUser();
    }
}
</script>

<style scoped>

</style>
<template>
<div>
<div class="row" style="margin-top:2%;"> 
      <Categories class="col-sm-1"/>
      <div class="col-sm" style="margin-left:1.5%;margin-top:0.2%;margin-bottom:5%">

        <div class="mt-5">
            <div>
                <h5 style="display:inline-block">Помочь тестированием</h5>
            </div>
            

            <div class="row mt-3">
                <div class="col-sm-4" style="margin-bottom:2%" v-for="(testcard,i) in cards" :key="i">
                    <div class="card position-relative" style="width: 22rem;cursor:pointer" v-on:click="()=>goToTest(testcard.id)">
                        <img src="@/assets/cardimg.png" class="card-img-top rounded" alt="...">

                        <div class="rounded-circle position-absolute" style="top:1rem;left:1rem;width:2rem;height:2rem;background-color:#0084FF;"></div>
                        <div class="rounded position-absolute" style="padding:0.8% 2% 0.8% 0.8%;top:1rem;left:4rem;color:white;background-color:#0084FF;font-size:0.9rem">
                            <img src="@/assets/doc.svg" style="display:inline-block;width:1.5rem;height:1.5rem" alt="">
                            тестирование
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">{{testcard.heading}}</h5>
                            <p class="card-text">{{testcard.text}}</p>
                            
                        </div>
                        <div class="progressbar"><div class="progressline"></div></div>
                            <div class="row" style="margin-left:4%">
                                <p class="col-sm-9">900</p>
                                <p class="col-sm">1000</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'

import Categories from '@/components/Categories.vue'
import Footer from '@/components/Footer.vue'
export default {
      components: {
      Categories,
      Footer
  },
    data(){
        return{
            testcards:[
                {heading:'“Связь характера и сферы деятельности”',text:'Мы предполагаем, что люди выбирают любимою профессию, исходя из заложенных качеств характера ну и лорем ипсум другой надо посмртреть как там по преппп...'},
                 {heading:'“Связь характера и сферы деятельности”',text:'Мы предполагаем, что люди выбирают любимою профессию, исходя из заложенных качеств характера ну и лорем ипсум другой надо посмртреть как там по преппп...'},
                  {heading:'“Связь характера и сферы деятельности”',text:'Мы предполагаем, что люди выбирают любимою профессию, исходя из заложенных качеств характера ну и лорем ипсум другой надо посмртреть как там по преппп...'},
            ],
            cards: []
        }
    },
    methods:{
        async getCards(){
            await axios.get('http://localhost:3000/posts')
                        .then(res=>{
                            this.cards = res.data
                            
                        })
                        .catch(err=>{
                            console.log(err)
                        })
        },
        goToTest(id){
            this.$router.push(`/opros/${id}`)
        }
    },
    created(){
        this.getCards()
    }
}
</script>

<style scoped>
    .banner{
        background-image: url('../assets/bannerback.png');
        background-repeat: no-repeat;
        padding-left:3%;
        padding-top:4%;
        padding-bottom:4%;
    }
    .progressbar{
        background-color:#F3F3F3 ;
        width: 100%;
        height: 0.5rem;
    }
    .progressline{
        background-color:#0084FF ;
        width: 80%;
        height: 0.5rem;
    }
    .instit{
        background-color:#F3F3F3 ;
        padding:1%;
        margin-left:2%;
        margin-top:2%;
        cursor:pointer;
    }
    .instit:hover{
         background-color:#0084FF ;
         color:white;
    }
</style>
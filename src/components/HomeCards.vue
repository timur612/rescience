<template>
    <div style="margin-top:0.2%;margin-bottom:5%">
        <div class="banner rounded" style="position:relative">
             <div class="position-absolute top-50 translate-middle" style="left:78%">
                <img
                    src="@/assets/biglogo.svg"
                />
                
            </div>
            <div>
                <p class="h5" style="color:white">За сентябрь</p>
                <h1 style="color:white">100 проектов</h1>
                <p class="h5" style="color:white">успешно завершили сбор</p>
            </div>
            <div style="position:absolute; top:0;">
                <img
                    src="@/assets/banner.png"
                />
                
            </div>
           
        </div>

        <div class="mt-5">
            <div>
                <h5 style="display:inline-block">Помочь тестированием</h5>
                <p class="h5" style="color:#0084FF;display:inline-block; margin-left:2%; cursor:pointer" v-on:click="goToTestirov">еще</p>
            </div>
            

            <div class="row mt-3">
                <div class="col-sm-4" style="margin-bottom:2%" v-for="(testcard,i) in cards" :key="i">
                    <div v-if="testcard.type==1 && i<3" class="card position-relative" style="width: 22rem;cursor:pointer" v-on:click="()=>goToTest(testcard.id)">
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

        <div class="mt-5">
            <div>
                <h5 style="display:inline-block">Сбор средств</h5>
                <p class="h5" style="color:#0084FF;display:inline-block; margin-left:2%; cursor:pointer">еще</p>
            </div>
            

            <div class="row mt-3">
                <div class="col-sm-4" style="margin-bottom:2%" v-for="(testcard,i) in cards" :key="i">
                    <div v-if="testcard.type==2" class="card position-relative" style="width: 22rem;">
                        <img src="@/assets/cardimg.png" class="card-img-top rounded" alt="...">

                        <div class="rounded-circle position-absolute" style="top:1rem;left:1rem;width:2rem;height:2rem;background-color:#0084FF;"></div>
                        <div class="rounded position-absolute" style="padding:0.8% 2% 0.8% 0.8%;top:1rem;left:4rem;color:white;background-color:#0084FF;font-size:0.9rem">
                            <img src="@/assets/rub.svg" style="display:inline-block;width:1.5rem;height:1.5rem" alt="">
                            средства
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

        <div class="mt-5">
            <div>
                <h5 style="display:inline-block">Участвовать</h5>
                <p class="h5" style="color:#0084FF;display:inline-block; margin-left:2%; cursor:pointer">еще</p>
            </div>
            

            <div class="row mt-3">
                <div class="col-sm-4" style="margin-bottom:2%" v-for="(testcard,i) in cards" :key="i">
                    <div v-if="testcard.type==3 && i<3" class="card position-relative" style="width: 22rem;">
                        <img src="@/assets/cardimg.png" class="card-img-top rounded" alt="...">

                        <div class="rounded-circle position-absolute" style="top:1rem;left:1rem;width:2rem;height:2rem;background-color:#0084FF;"></div>
                        <div class="rounded position-absolute" style="padding:0.8% 2% 0.8% 0.8%;top:1rem;left:4rem;color:white;background-color:#0084FF;font-size:0.9rem">
                            <img src="@/assets/locationOut.svg" style="display:inline-block;width:1.5rem;height:1.5rem" alt="">
                            участие
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

        <div class="mt-5">
            <h5 style="">Исследования институтов</h5>

            <div class="row">
                <div class="instit col-sm-5 rounded">
                    <img src="@/assets/hse.svg" style="display:inline-block" alt="">
                    <p  style="display:inline-block;margin-left:4%;" class="h5">НИУ “Высшая школа экономики”</p>
                </div>
                <div class="instit col-sm-5 rounded">
                    <img src="@/assets/hse.svg" style="display:inline-block" alt="">
                    <p  style="display:inline-block;margin-left:4%;" class="h5">НИУ “Высшая школа экономики”</p>
                </div>
                <div class="instit col-sm-5 rounded">
                    <img src="@/assets/hse.svg" style="display:inline-block" alt="">
                    <p  style="display:inline-block;margin-left:4%;" class="h5">НИУ “Высшая школа экономики”</p>
                </div>
                <div class="instit col-sm-5 rounded">
                    <img src="@/assets/hse.svg" style="display:inline-block" alt="">
                    <p  style="display:inline-block;margin-left:4%;" class="h5">НИУ “Высшая школа экономики”</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
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
                            // let cs = res.data;
                            // for(let i=0;i<cs.length;i++){
                            //     if(i<3){
                            //         this.cards.push(cs[i])
                            //     }
                            // }
                            this.cards = res.data
                            
                        })
                        .catch(err=>{
                            console.log(err)
                        })
        },
        goToTest(id){
            this.$router.push(`/opros/${id}`)
        },
        goToTestirov(){
            this.$router.push(`/opros`)
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
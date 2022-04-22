<template>
    <div>
        <div class="row" style="margin-top:2%;"> 
        <!-- <Questions class="col-sm-1" v-on:click="toQ"/>
        <QuestionChoose :questionsS="questions" class="col-sm" style="margin-left:1.5%"/> -->

        <div class="catmain col-sm-1">
            <h4>Кол-во вопросов</h4>

            <div v-for="(cat,key) in questions" :key="key">
                <div class="row rounded" :class="cat.cur ? 'cur' : 'cat'" style="cursor:pointer" v-on:click="()=>chooseQ(key)">
                    <div class="col-sm-1">
                        <div :class="cat.done ? 'position-relative qcircleBigDone' : cat.cur ? 'qcircleCur' :'qcircle'"><div :class="cat.done ? 'position-absolute top-50 start-50 translate-middle rounded-circle qcircleDone' : ''"></div></div>
                    </div>
                    <div class="col-sm" style="margin-left:5%">
                        <p>{{key+1}} вопрос</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-sm" style="margin-left:1.5%">
                <div>
                    <p class="h4">{{question}}</p>
                </div>
                <div class="mt-5">
                <div v-for="(otvet,i) in otvets" :key="i" style="cursor:pointer" v-on:click="()=>chooseQO(i)">
                    <div class="rounded" :class="otvet.choosed ? 'otvetChoosed' : 'otvet'" >
                        <p class="h6" style="margin-bottom:0">{{otvet.text}}</p>
                    </div>
                </div>
                </div>
                <div class="mt-5">
                    <div v-if="!last" class="btn" style="background-color:#0084FF;padding:1% 5% 1% 5%" v-on:click="nextQ">
                        <p style="color:white;margin-bottom:0">Далее</p>
                    </div>
                    <div v-if="last" class="btn" style="background-color:#0084FF;padding:1% 5% 1% 5%" v-on:click="endQ">
                        <p style="color:white;margin-bottom:0">Завершить</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import Questions from '@/components/Questions.vue'
import QuestionChoose from '@/components/QuestionChoose.vue'
import axios from 'axios'

export default {
    components:{
        Questions,QuestionChoose
    },
    data(){
        return{
            last:false,
            num:0,
            question:'',
            otvets:[],
            questions:[
               
            ]
        }
    },
    methods:{
        endQ(){
            this.$router.push('/opros/end/1')
        },
        nextQ(){
            this.num+=1;
            this.questions[this.num].cur = 1;
            this.getQuestion();
        },
        chooseQO(id){
            for(let i=0;i<this.otvets.length;i++){
                if(id!=i){
                    this.otvets[i].choosed = 0;
                }else{
                    this.otvets[i].choosed = 1;
                }

            }
        },
         chooseQ(id){
            for(let i=0;i<this.questions.length;i++){
                if(id!=i){
                    this.questions[i].cur = 0;
                }else{
                    this.questions[i].cur = 1;
                    this.num = i;
                    this.getQuestion();
                }

            }
        },
        async getQuestion(){
            let postId = this.id = this.$route.params.id;
            
            this.questions = [];
            await axios.get(`http://localhost:3000/questions/`+postId)
                        .then(res=>{
                            
                            let qs = res.data.body.name;
                            // console.log(qs)
                            for(let i=0;i<qs.length;i++){
                                let otvs = []
                                let os = qs[i].otvets.split(';');
                                for(let j=0;j<os.length;j++){
                                    otvs.push({
                                        text:os[j],
                                        choosed:0
                                    })
                                }
                                if(this.num==i){
                                    this.questions.push({
                                            question:qs[i].question,
                                            otvets: otvs,
                                            done:0,
                                            cur:1
                                            })
                                }else{
                                    this.questions.push({
                                            question:qs[i].question,
                                            otvets: otvs,
                                            done:0,
                                            cur:0
                                            })
                                }
                                
                            }
                        }) 
                        .catch(err=>{
                            console.log(err);
                        })
            if(this.num==this.questions.length-1){
              
                this.last=true;
            }else{
                this.last=false;
            }
            
             this.question = this.questions[parseInt(this.num)].question;
            this.otvets = this.questions[parseInt(this.num)].otvets;
        }
    },
    created(){
        
       this.getQuestion();
    },
}
</script>

<style scoped>
    .catmain{
        background-color: #F3F3F3;
        width:21.5%;
        border-radius: 0 1.5rem 0 0;
        padding:2%;
        height:100%;
    }
    .cat{
        background-color: white;
        margin-top:5%;
        padding-top:5%;
    }
    .qcircle{
        width:1.7rem;
        height:1.7rem;
        border-radius: 50%;
        border:0.1rem #B9B9B9 solid;
        
    }
    .cur{
        background-color: #0084FF;
        margin-top:5%;
        padding-top:5%;
        color:white
    }
    .qcircleCur{
        width:1.7rem;
        height:1.7rem;
        border-radius: 50%;
        border:0.1rem white solid;
        
    }
    .qcircleBigDone{
        width:1.7rem;
        height:1.7rem;
        border-radius: 50%;
        border:0.1rem #33FF00 solid;
    }
    .qcircleDone{
        width:1rem;
        height:1rem;
        background-color:#33FF00;
    }
        .otvet{
        padding:2%;
        background: #F3F3F3;
        margin-top:1%;
        width:70%;
    }
    .otvetChoosed{
        padding:2%;
        background: #0084FF;
        margin-top:1%;
        width:70%;
        color:white
    }
</style>
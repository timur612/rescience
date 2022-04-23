<template>
    <div>
        <div>
            <p class="h4">{{question}}</p>
        </div>
        <div class="mt-5">
        <div v-for="(otvet,i) in otvets" :key="i" style="cursor:pointer" v-on:click="()=>chooseQ(i)">
            <div class="rounded" :class="otvet.choosed ? 'otvetChoosed' : 'otvet'" >
                <p class="h6" style="margin-bottom:0">{{otvet.text}}</p>
            </div>
        </div>
        </div>
        <div class="mt-5">
            <div class="btn" style="background-color:#0084FF;padding:1% 5% 1% 5%" v-on:click="getQuestion">
                <p style="color:white;margin-bottom:0">Далее</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['questionsS'],
    data(){
        return{
           
            question:'',
            otvets:[],
            questions:[
         
            ]
        }
    },
    methods:{
        chooseQ(id){
            for(let i=0;i<this.otvets.length;i++){
                if(id!=i){
                    this.otvets[i].choosed = 0;
                }else{
                    this.otvets[i].choosed = 1;
                }

            }
        },
         async getQuestion(){
            let postId = "1";
            
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
                                this.questions.push({
                                            question:qs[i].question,
                                            otvets: otvs,
                                            done:0,
                                            cur:0
                                            })
                            }
                        }) 
                        .catch(err=>{
                            console.log(err);
                        })
            // console.log(this.num)
             this.question = this.questions[parseInt(this.num)].question;
            this.otvets = this.questions[parseInt(this.num)].otvets;
        }
    },
    created(){
        // this.getQuestion();      
        this.questions = this.questionsS; 
        console.log(this.questions[0])
        this.question = this.questions[0].question;
        this.otvets = this.questions[0].otvets;
    },
    mounted(){
        // this.getQuestion();
    }
}
</script>

<style scoped>
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

<template>
    <div class="catmain">
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
</template>

<script>
import axios from 'axios'

export default {

    data(){
        return{
            num:0,
            questions:[
                {question:'Заметили ли Вы повышение цен в магазинах?',otvets:[
                {text:'Да',choosed:0},
                {text:'Затрудняюсь ответить',choosed:0},
                {text:'Нет, все по-старому',choosed:0}], done:0,cur:1},
                {question:'Заметили ли Вы повышение цен в магазинах?2',otvets:[
                {text:'Да',choosed:0},
                {text:'Затрудняюсь ответить',choosed:0},
                {text:'Нет, все по-старому',choosed:0}], done:0,cur:0},
                {question:'Заметили ли Вы повышение цен в магазинах?3',otvets:[
                {text:'Да',choosed:0},
                {text:'Затрудняюсь ответить',choosed:0},
                {text:'Нет, все по-старому',choosed:0}], done:0,cur:0}
            ]
        }
    },
    methods:{
        
        chooseQ(id){
            for(let i=0;i<this.questions.length;i++){
                if(id!=i){
                    this.questions[i].cur = 0;
                }else{
                    this.questions[i].cur = 1;
                    this.emitter.emit('questions', {num:i});
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
            this.chooseQ(0);
         
        }
       
    },
    created(){
        this.getQuestion();
        
    }
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
</style>
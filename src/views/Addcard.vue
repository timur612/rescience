<template>
    <div class="container mt-5" >
        <div class="row">
            <div class="col-sm-1" v-on:click="goToBack">
                <img src="@/assets/left.svg" style="cursor:pointer" alt="">
                <p >назад</p>
            </div>
            <div class="col-sm">
                <div class="rounded" style="background-color:#F3F3F3;padding:3%">
                    <div v-if="isActiveType">
                        <p class="h6">Добавить карточку</p>
                        <div class="row mt-4">
                            <div class="col-sm-3 text-center rounded" :class="tc1 ? 'typeCardChoose' : 'typeCard'" style="margin-left:10%" v-on:click="()=>typeCardChoose(1)">
                                <img src="@/assets/ill1.svg" alt="">
                                <p style="margin-bottom:0;margin-top:5%">Тестирование</p>
                            </div>
                            <div class="col-sm-3 text-center rounded" :class="tc2 ? 'typeCardChoose' : 'typeCard'" v-on:click="()=>typeCardChoose(2)">
                                <img src="@/assets/ill2.svg" alt="">
                                <p style="margin-bottom:0;margin-top:5%">Сбор средств</p>
                            </div>
                            <div class="col-sm-3 text-center rounded" :class="tc3 ? 'typeCardChoose' : 'typeCard'" v-on:click="()=>typeCardChoose(3)">
                                <img src="@/assets/ill3.svg" alt="">
                                <p style="margin-bottom:0;margin-top:5%">Участие</p>
                            </div>
                        </div>

                        <div class="btn mt-5" style="background-color:#0084FF;padding:1% 5% 1% 5%" v-on:click="()=>isActive(2)">
                                <p style="color:white;margin-bottom:0;display:inline-block;">Выбрать</p>
                        </div>
                    </div>

                    <div v-if="isActiveDesc">
                        <div class="row">
                            <div class="col-sm">
                                <p class="h6">Добавить тестирование</p>

                                <div class="btn mt-3" style="background-color:#0084FF;padding:1% 5% 1% 5%" >
                                    <p style="color:white;margin-bottom:0;display:inline-block;">Тестирование</p>
                                </div>

                                <p class="h6 mt-4">Категория</p>

                                <div style="width:28rem">
                                    <select v-model="cat" class="form-select" aria-label="Default select example">
                                        <option selected>Выбрать</option>
                                        <option value="IT">IT</option>
                                        <option value="Экономика">Экономика</option>
                                        <option value="Биология">Биология</option>
                                    </select>
                                </div>
                                
                                <p class="h6 mt-4">Заголовок</p>
                                <div style="width:28rem">
                                    <input v-model="heading" type="text" style="background-color:white; border:none; margin-top:5%" id="loginemail" class="form-control" placeholder="Напишите заголовок">
                                </div>
                                
                                <p class="h6 mt-4">Сколько необходимо протестировать</p>

                                <div style="width:5rem">
                                    <input type="number" style="background-color:white; border:none; margin-top:5%" id="loginemail" class="form-control" placeholder="...">
                                </div>
                            </div>
                            <div class="col-sm">
                                <div class="mt-3">
                                    <label  for="exampleFormControlTextarea1" class="h6">Описание</label>
                                    <textarea v-model="text" class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                                </div>

                                <p class="h6 mt-4">За какой срок</p>
                                
                                <div class="row">
                                    <div class="col-sm btn mt-3" style="padding:1% 5% 1% 5%" :class="srok==1 ? 'srokDone' : 'srok'" v-on:click="()=>srokChooese(1)">
                                        <p style="margin-bottom:0;display:inline-block;">1 день</p>
                                    </div>
                                    <div class="col-sm btn mt-3" style="margin-left:5%;padding:1% 5% 1% 5%" :class="srok==2 ? 'srokDone' : 'srok'" v-on:click="()=>srokChooese(2)">
                                        <p style="margin-bottom:0;display:inline-block;">30 дней</p>
                                    </div>
                                    <div class="col-sm btn mt-3" style="margin-left:5%;padding:1% 5% 1% 5%" :class="srok==3 ? 'srokDone' : 'srok'" v-on:click="()=>srokChooese(3)">
                                        <p style="margin-bottom:0;display:inline-block;">90 дней</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="btn mt-3" style="background-color:#0084FF;padding:1% 5% 1% 5%" v-on:click="()=>isActive(3)">
                            <p style="color:white;margin-bottom:0;display:inline-block;">Перейти к составлению вопросов</p>
                        </div>
                        
                    </div>

                    <div v-if="isActiveAddQuestion">
                        <p class="h6">Добавить вопросы</p>

                        <div>
                            <div class="row" v-for="(q,i) in qs" :key="i">
                                <div class="col-sm-5">
                                    <p class="h6 mt-3">Вопрос {{i+1}}</p>
                                    <input v-model="q.question" type="text" style="background-color:white; border:none; margin-top:5%" id="loginemail" class="form-control" placeholder="Напишите вопрос">

                                    <div v-for="(o,j) in q.otvets" :key="j">
                                        <input v-model="o.text" type="text" style="background-color:white; border:none; margin-top:5%" id="loginemail" class="form-control" placeholder="Вариант ответа">
                                    </div>

                                    <div class="btn mt-3" style="background-color:#0084FF;padding:0.5% 2% 0.5% 2%" v-on:click="()=>addOtvet(i)">
                                        <img src="@/assets/plus.svg" alt="" style="display:inline-block">
                                        <p style="color:white;margin-bottom:0;display:inline-block;margin-left:1rem">Добавить ВО</p>
                                    </div>
                                </div>
                            </div>

                            

                            <div class="btn mt-2" style="background-color:#0084FF;padding:0.5% 1.5% 0.5% 1.5%" v-on:click="addQuestion">
                                <img src="@/assets/plus.svg" alt="" style="display:inline-block">
                                <p style="color:white;margin-bottom:0;display:inline-block;margin-left:1rem">Добавить вопрос</p>
                            </div>
                        </div>

                        <div class="btn mt-3" style="background-color:#0084FF;padding:1% 5% 1% 5%" v-on:click="()=>addtoServerQuesiton()">
                            <p style="color:white;margin-bottom:0;">Опубликовать</p>
                        </div>
                    </div>
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
            qs:[],

            heading:'',
            text:'',
            user_id:'',
            cat:'',
            date:'',
            type:'',

            post_id: '',
            question:'',
            otvets:'',

            tc1:0,
            tc2:0,
            tc3:0,
            isActiveType: 1,
            isActiveDesc: 0,
            isActiveAddQuestion: 0,
            srok:0,
        }
    },
    methods:{
        goToBack(){
            this.$router.back();
        },
        async addtoServer(){
            const body = JSON.stringify({
                   heading:this.heading,
                   text:this.text,
                   user_id:localStorage.getItem('id'),
                   type:this.type,
                   cat:this.cat,
                   date:this.date
            })
            await axios.post("http://localhost:3000/posts",body,{headers: {"Content-Type": "application/json"  }})
                        .then(res=>{
                            // console.log(res)
                            this.post_id = res.data.body.product.rows[0].id;
                        })
                        .catch(err=>{
                            console.log(err);
                        })
        },
        async addtoServerQuesiton(){
            for(let i=0;i<this.qs.length;i++){
                let otvs = [];
                for(let j=0;j<this.qs[i].otvets.length;j++){
                    otvs.push(this.qs[i].otvets[j].text)
                }
                const body = JSON.stringify({
                    question:this.qs[i].question,
                    otvets: otvs.join(';'),
                    user_id:localStorage.getItem('id'),
                    post_id:this.post_id,
                })
                await axios.post("http://localhost:3000/questions",body,{headers: {"Content-Type": "application/json"  }})
                            .then(res=>{
                                this.$router.push('/')
                            })
                            .catch(err=>{
                                console.log(err);
                                console.log(body)
                            })
            }
        },
        addQuestion(){
            this.qs.push({question:'',otvets:[]})
            console.log(this.qs);
        },
        addOtvet(i){
            this.qs[i].otvets.push({text:''})
            // console.log(this.qs)
        },
        isActive(i){
            if(i==1){
                this.isActiveType = 1;
                this.isActiveDesc = 0;
                this.isActiveAddQuestion = 0;
            }
            if(i==2){
                this.isActiveType = 0;
                this.isActiveDesc = 1;
                this.isActiveAddQuestion = 0;
            }
            if(i==3){
                this.isActiveType = 0;
                this.isActiveDesc = 0;
                this.isActiveAddQuestion = 1;
                this.addtoServer();
            }
        },
        srokChooese(i){
            if(i==1){
                this.srok = 1;
                this.date = 1;
            }
            if(i==2){
                this.srok = 2;
                this.date = 30;
            }
            if(i==3){
                this.srok = 3;
                this.date = 90;
            }
        },
        typeCardChoose(i){
            if(i==1){
                this.tc1 = 1;
                this.tc2 = 0;
                this.tc3 = 0;
                this.type = 1;
            }
            if(i==2){
                this.tc1 = 0;
                this.tc2 = 1;
                this.tc3 = 0;
                this.type = 2;
            }
            if(i==3){
                this.tc1 = 0;
                this.tc2 = 0;
                this.tc3 = 1;
                this.type = 3;
            }
        }
    },
    created(){
        
    }
}
</script>

<style scoped>
    .typeCard{
        margin-left:3%;
        background-color:white;
        padding-top:3%;
        padding-bottom:3%;
        cursor:pointer;
    }
    .typeCardChoose{
        margin-left:3%;
        background-color:#0084FF;
        color:white;
        padding-top:3%;
        padding-bottom:3%;
        cursor:pointer;
    }
    .srok{
        background-color:white;
    }
    .srokDone{
        background-color:#0084FF;
        color:white
    }
</style>
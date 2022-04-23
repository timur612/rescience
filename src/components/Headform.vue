<template>
    <div class="rounded" style="background-color:#F3F3F3;padding:3%">
        <div v-if="type==1">
        <div  class="row">
            <div class="rounded-pill col-sm-1" style="padding-top:0.3%;height:2rem;color:white;background-color:#0084FF;font-size:0.9rem;">
                <img src="@/assets/doc.svg" style="display:inline-block;width:1.5rem;height:1.5rem" alt="">
                опрос
            </div>
            <div class="col-sm-1" style="margin-left:3%">
                <div class="row">
                    <div class="rounded-circle col-sm-1" style="width:2rem;height:2rem;background-color:#0084FF;"></div>
                    <p class="col-sm-1" style="padding-top:2%;font-size:0.9rem">{{cat}}</p>
                </div>
            </div>
            <div class="col-sm-2" style="margin-left:4%">
                <div class="row">
                    <div class="rounded-circle col-sm-1" style="width:2rem;height:2rem;background-color:#0084FF;"></div>
                    <div class="col-sm">
                        <p style="margin:0;font-size:0.9rem">{{name}}</p>
                        <p style="color:#ABABAB;font-size:0.9rem">Москва, Россия</p>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm" style="margin-left:55%">
                <img src="@/assets/share.svg" alt="" style="cursor:pointer">
            </div>
        </div>

        <div class="mt-2">
            <p class="h4">{{heading}}</p>
        </div>

        <div class="row mt-4">
            <div class="col-sm-3 rounded" style="background-color:white; padding-top:1.5%">
                <img src="@/assets/clock.svg" alt="" style="display:inline-block">
                <p style="display:inline-block;margin-left:3%;">Время прохождения: {{time}} минуты</p>
            </div>
            <div class="col-sm-3 rounded" style="background-color:white; padding-top:1.5%; margin-left:2%;width:22%">
                <img src="@/assets/colvo.svg" alt="" style="display:inline-block">
                <p style="display:inline-block;margin-left:3%;">Количество вопросов: {{count}}</p>
            </div>
        </div>

        <div class="mt-4">
            <p class="h4">Описание</p>
            <p>{{desc}}</p>
        </div>

        <div class="mt-4">
            <p class="h4">Всего опрошено:</p>
            <div class="row" style="margin-left:0">
                <div class="rounded col-sm-7" style="padding-top:2%;background-color:white;padding-left:0;padding-right:0">
                    <div class="row" style="margin-left:4%;">
                        <p class="col-sm-9" style="margin-bottom:0.5%">900</p>
                        <p class="col-sm" style="margin-bottom:0.5%">1000</p>
                    </div>
                    <div class="progressbar rounded-bottom"><div class="progressline rounded-bottom"></div></div>
                </div>
                <div class="col-sm-3">
                    <p style="font-size:1.2rem;font-weight:bold;margin-bottom:0;">{{timeleft}} дней</p>
                    <p class="text-muted" style="margin-bottom:0">осталось</p>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <div class="btn" style="background-color:#0084FF;padding:1% 5% 1% 5%" v-on:click="goToForm">
                <p style="color:white;margin-bottom:0">Начать прохождение</p>
            </div>
        </div>
        </div>

        <div v-if="type==2">
        <div  class="row">
            <div class="rounded-pill col-sm-2" style="padding-top:0.3%;height:2rem;color:white;background-color:#0084FF;font-size:0.9rem;width:7.5rem">
                <img src="@/assets/rub.svg" style="display:inline-block;width:1.5rem;height:1.5rem" alt="">
                средства
            </div>
            <div class="col-sm-1" style="margin-left:3%">
                <div class="row">
                    <div class="rounded-circle col-sm-1" style="width:2rem;height:2rem;background-color:#0084FF;"></div>
                    <p class="col-sm-1" style="padding-top:2%;font-size:0.9rem">{{cat}}</p>
                </div>
            </div>
            <div class="col-sm-2" style="margin-left:4%">
                <div class="row">
                    <div class="rounded-circle col-sm-1" style="width:2rem;height:2rem;background-color:#0084FF;"></div>
                    <div class="col-sm">
                        <p style="margin:0;font-size:0.9rem">{{name}}</p>
                        <p style="color:#ABABAB;font-size:0.9rem">Москва, Россия</p>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm" style="margin-left:55%">
                <img src="@/assets/share.svg" alt="" style="cursor:pointer">
            </div>
        </div>

        <div class="mt-2">
            <p class="h4">{{heading}}</p>
        </div>
        <div class="mt-4">
            <p class="h4">Описание</p>
            <p>{{desc}}</p>
        </div>

        <div class="mt-4">
            <p class="h4">Всего собрано:</p>
            <div class="row" style="margin-left:0">
                <div class="rounded col-sm-7" style="padding-top:2%;background-color:white;padding-left:0;padding-right:0">
                    <div class="row" style="margin-left:4%;">
                        <p class="col-sm-9" style="margin-bottom:0.5%">900</p>
                        <p class="col-sm" style="margin-bottom:0.5%">1000</p>
                    </div>
                    <div class="progressbar rounded-bottom"><div class="progressline rounded-bottom"></div></div>
                </div>
                <div class="col-sm-3">
                    <p style="font-size:1.2rem;font-weight:bold;margin-bottom:0;">{{timeleft}} дней</p>
                    <p class="text-muted" style="margin-bottom:0">осталось</p>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <div class="btn" style="background-color:#0084FF;padding:1% 5% 1% 5%" >
                <p style="color:white;margin-bottom:0">Пожертвовать</p>
            </div>
        </div>
        </div>

        <div v-if="type==3">
        <div  class="row">
            <div class="rounded-pill col-sm-2" style="padding-top:0.3%;height:2rem;color:white;background-color:#0084FF;font-size:0.9rem;width:7.5rem">
                <img src="@/assets/locationOut.svg" style="display:inline-block;width:1.5rem;height:1.5rem" alt="">
                участие
            </div>
            <div class="col-sm-1" style="margin-left:3%">
                <div class="row">
                    <div class="rounded-circle col-sm-1" style="width:2rem;height:2rem;background-color:#0084FF;"></div>
                    <p class="col-sm-1" style="padding-top:2%;font-size:0.9rem">{{cat}}</p>
                </div>
            </div>
            <div class="col-sm-2" style="margin-left:4%">
                <div class="row">
                    <div class="rounded-circle col-sm-1" style="width:2rem;height:2rem;background-color:#0084FF;"></div>
                    <div class="col-sm">
                        <p style="margin:0;font-size:0.9rem">{{name}}</p>
                        <p style="color:#ABABAB;font-size:0.9rem">Москва, Россия</p>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm" style="margin-left:55%">
                <img src="@/assets/share.svg" alt="" style="cursor:pointer">
            </div>
        </div>

        <div class="mt-2">
            <p class="h4">{{heading}}</p>
        </div>
        <div class="mt-4">
            <p class="h4">Описание</p>
            <p>{{desc}}</p>
        </div>

        <div class="mt-4">
            <p class="h4">Всего собрано:</p>
            <div class="row" style="margin-left:0">
                <div class="rounded col-sm-7" style="padding-top:2%;background-color:white;padding-left:0;padding-right:0">
                    <div class="row" style="margin-left:4%;">
                        <p class="col-sm-9" style="margin-bottom:0.5%">900</p>
                        <p class="col-sm" style="margin-bottom:0.5%">1000</p>
                    </div>
                    <div class="progressbar rounded-bottom"><div class="progressline rounded-bottom"></div></div>
                </div>
                <div class="col-sm-3">
                    <p style="font-size:1.2rem;font-weight:bold;margin-bottom:0;">{{timeleft}} дней</p>
                    <p class="text-muted" style="margin-bottom:0">осталось</p>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <div class="btn" style="background-color:#0084FF;padding:1% 5% 1% 5%" >
                <p style="color:white;margin-bottom:0">Оставить заявку</p>
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
            id:'',
            type:'',
            heading: 'Повлиял ли на Вас экономический кризис?',
            name: 'Иванов Иван',
            cat: 'Экономика',
            time: 3,
            count: 5,
            timeleft: 30,
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam.  '

        }
    },
    methods:{
        goToForm(){
            if(localStorage.getItem('id')==null){
                this.$router.push(`/login`)
            }else{
                this.$router.push(`start/${this.id}`)
            }
            
        },
        async getPost(){
             this.id = this.$route.params.id;
            await axios.get(`http://localhost:3000/posts/${this.id}`)
                        .then(res=>{
                            let post = res.data.body.name[0]
                            this.heading = post.heading;
                            this.desc = post.text;
                            this.cat = post.cat;
                            this.timeleft = post.date;
                            this.type = post.type;
                            
                        })
                        .catch(err=>{
                            console.log(err)
                        })
        },
    },
    created(){
       
        this.getPost()
    }
}
</script>

<style scoped>
    .progressbar{
        background-color:#01E0FF ;
        width: 100%;
        height: 0.5rem;
    }
    .progressline{
        background-color:#0084FF ;
        width: 80%;
        height: 0.5rem;
        
    }
</style>
<template>
    <div class="container" style="margin-top:2%">
    <div class="rounded" style="background-color:#F3F3F3;padding:3%">

        <div class="mt-2">
            <p class="h4">{{heading}}</p>
        </div>

        <div class="mt-4">
            <p>{{desc}}</p>
        </div>

        <div class="mt-5">
           
            <div class="row" style="margin-left:0">
                <div class="col-sm-6">
                    <div class="btn" style="background-color:#0084FF;padding:2% 10% 2% 10%;margin-top:5%" v-on:click="goToForm">
                        <p style="color:white;margin-bottom:0">На главную</p>
                    </div>
                </div>
                
                <div class="col-sm-6">
                <p class="h5">Всего опрошено:</p>
                <div class="rounded" style="padding-top:2%;background-color:white;padding-left:0;padding-right:0">
                    
                    <div class="row" style="margin-left:4%;">
                        <p class="col-sm-9" style="margin-bottom:0.5%">900</p>
                        <p class="col-sm" style="margin-bottom:0.5%">1000</p>
                    </div>
                    <div class="progressbar rounded-bottom"><div class="progressline rounded-bottom"></div></div>
                </div>
                 </div>
            </div>
        </div>

     
    </div>  
    </div>
</template>

<script>
export default {
    data(){
        return{
            heading: 'Спасибо за прохождение опроса!',
            name: 'Иванов Иван',
            cat: 'Экономика',
            time: 3,
            count: 5,
            timeleft: 30,
            desc:'Мы благодарны вам за поддержку consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam.  '

        }
    },
    methods:{
        goToForm(){
            this.$router.push('/')
        },
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
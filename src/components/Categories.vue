<template>
    <div class="catmain">
        <h4>Категории</h4>

        <div v-for="(cat,key) in cats" :key="key">
            <div class="row cat rounded">
                <div class="col-sm-1">
                    <img  src="@/assets/circle.png" alt="">
                </div>
                <div class="col-sm" style="margin-left:5%">
                    <p>{{cat}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cats:['Биология','Химия','Общество','Экономика','IT','Экология','Физика','Образование','Биология','Химия','Общество']
        }
    }
}
</script>

<style scoped>
    .catmain{
        background-color: #F3F3F3;
        width:21.5%;
        border-radius: 0 1.5rem 0 0;
        padding:2%;
    }
    .cat{
        background-color: white;
        margin-top:5%;
        padding-top:5%;
    }
</style>
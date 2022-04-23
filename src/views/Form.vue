<template>
    <div class="container mt-5" >
        <div class="row">
            <div class="col-sm-1" v-on:click="goToBack">
                <img src="@/assets/left.svg" style="cursor:pointer" alt="">
                <p >назад</p>
            </div>
            <div class="col-sm">
                <Headform/>
            </div>
        </div>
    </div>
</template>

<script>
import Headform from '@/components/Headform.vue'
export default {
    components:{
        Headform
    },
    methods:{
        goToBack(){
            this.$router.back();
        }
    },
    created(){
        
    }
}
</script>

<style scoped>

</style>
<template>
  <div id="nav">
    <Header v-if="loged"/>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  data(){
    return{
      loged: true
    }
  },
  components: {
      Header
  },
  created(){
    
    },
    
}
</script>

<style>
    
</style>

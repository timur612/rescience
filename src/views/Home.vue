<template>
  <div>
    <div class="row" style="margin-top:2%;"> 
      <Categories class="col-sm-1"/>
      <HomeCards class="col-sm" style="margin-left:1.5%"/>
    </div>
    <Footer/>
  </div>
</template> 

<script>
// @ is an alias to /src
import Categories from '@/components/Categories.vue'
import HomeCards from '@/components/HomeCards.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
      Categories,
      HomeCards,
      Footer
  }
}
</script>

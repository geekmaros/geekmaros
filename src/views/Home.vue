<template>
  <div class="home">
      <Hero></Hero>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'
import Hero from "../components/Hero/Hero";

export default {
  name: 'Home',
  data(){
    return{

    }
  },
  components: {
      Hero
  },
  computed: {
      ...mapGetters(['isMobile'])
  },
    mounted() {

    }
}
</script>

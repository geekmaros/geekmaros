<template>
  <div id="app" class="app" :class="{'dark': isDarkMode} ">
     <Header></Header>
    <router-view/>
  </div>
</template>
<script>
  import Header from './components/Header/Header'
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
            isMobile: this.getMobileState
      }
    },
    components:{
      Header,
    },
      computed:{
          getMobileState: function () {
              return this.$store.state.checkmobile.isMobile
          },
          ...mapGetters(['isDarkMode'])
      },
      mounted() {
        this.$store.dispatch('setMobile')
      }
  }
</script>
<style lang="sass">
  @import "assets/App"

</style>

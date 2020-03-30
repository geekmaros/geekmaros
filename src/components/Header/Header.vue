<template>
<div>
    <header  class="flex  justify-content-between align-items-center py-24 px-48 ">
        <a :class="{'dark': isDarkMode}" class="logo animated fadeInDown bounce  z-index-1" href="/">
            <span class="main test">G</span>
<!--            <span class="sub-main">eek</span>-->
            <span class="main">M</span>
<!--            <span class="sub-main">aros</span>-->
        </a>

        <button :class="{'dark': isDarkMode}" class="button" @click="isNavOpen = !isNavOpen" >
            <div class="hamburger-container" :class="{'open': isNavOpen, } ">
                <div  class="hamburger toggle"></div>
            </div>
        </button>



        <nav class="nav" :class="{'open': isNavOpen,'dark':isDarkMode } ">
            <ul  class="nav-wrapper" >
                <li class="animated fadeInDown bounce " v-for="(link, i) in links" :key="i"><router-link class="link" to="/about">{{link.name}}</router-link></li>
            </ul>
        </nav>
    </header>
    <Toggler ></Toggler>
</div>
</template>

<script>
    import Toggler from "../toggler/Toggler";
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return{
                links:[{name: 'About', link: '/about'},
                    {name: 'Works', link: '/about'},
                    {name: 'Résumé', link: '/resume'},
                    {name: 'Get in Touch', link: '/contact'},

                ],
                isNavOpen: false
            }
        },
        components:{
            Toggler
        },
        computed:{
            ...mapGetters(['isDarkMode', 'isMobile'])
        }

    }
</script>

<style  lang="sass">
@import "Header"
</style>
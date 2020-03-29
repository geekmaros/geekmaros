<template>
    <div>
        <label class="toggler">
            <input @click="setDark" v-model="dark" type="checkbox">
            <span class="toggle-slide rounded" ></span>
        </label>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                dark: ''
            }
        },
        methods: {
            setDark() {
                this.dark ? this.$store.dispatch('setDarkMode', false) : this.$store.dispatch('setDarkMode', true)
            }
        }
    }
</script>

<style scoped lang="sass">
@import "toggler"
</style>
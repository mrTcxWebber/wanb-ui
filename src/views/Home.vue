<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1>wanb-ui</h1>
            <h2>vue3 base component</h2>
            <p class="actions">
                <a>Github</a>
                <a>Start</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import Topnav from "../components/Topnav.vue"

    export default {
        name: 'Home',
        components: {
            Topnav
        }
    }
</script>

<style lang="scss" scoped>

</style>
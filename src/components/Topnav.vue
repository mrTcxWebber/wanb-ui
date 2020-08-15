<template>
    <div class="topnav">
        <div class="logo">
            <router-link to="/"><img src="../assets/logo.png" alt="logo"></router-link>
        </div>
        <div class="menu">

        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Topnav'
    }
</script>

<style lang="scss" scoped>
    .topnav {
        background-color: pink;
        display: flex;
        padding: 16px;

        .logo {
            max-width: 6em;
            margin-right: auto;
        }
    }
</style>
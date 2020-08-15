<template>
  <div>导航栏 |
    <router-link to="/">Test</router-link> |
    <router-link to="/xxx">Test2</router-link>
  </div>
  <b style="font-size:10px;">现在可以不用一个根组件了</b>
  <hr>

  <router-view />
</template>

<script>

  export default {
    name: 'App',
    components: {
    }
  }
</script>
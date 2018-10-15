<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss">
   @import "./styles/index.scss";

   #app {
    width: 100%;
    height: 100%;
    padding-top: 60px;
    text-align: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

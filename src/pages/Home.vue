<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Demo msg="欢迎使用vue项目"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Demo from 'components/Demo'

export default {
  name: 'home',
  components: {
    Demo
  }
}
</script>

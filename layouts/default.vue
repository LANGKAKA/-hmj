<template>
  <div>
    <Header/>
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  components:{
    Header
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*{
  padding: 0;
  margin: 0;
}
ul,ol,dl{
  list-style: none;
}
a{
  text-decoration: none;
  color: inherit
}
a:hover{
  color: inherit
}
</style>

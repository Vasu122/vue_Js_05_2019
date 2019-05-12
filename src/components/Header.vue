<template>
  <div>
    <header>
      <h2>{{headerMsg}}</h2>
      <a v-bind:href="headerUrl">{{headerUrl}}</a>
    </header>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        headerMsg:'Welcome header',
        headerUrl:'index.html'
      }
    }
  }
</script>
<style lng="scss" scoped>
  header{
    background:blue;
    color:#fff;
    padding:10px;
    text-align:center;
    h2{
      color:#000;
    }
  }
  a{
    color:#fff
  }
</style>

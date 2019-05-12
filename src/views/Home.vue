<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  import {EventBus} from '../main.js';
  export default{
    data(){
      return{
        title:'Home page title'
      }
    },
    mounted(){
      EventBus.$on("EmittedData",data =>{
        this.title=data;
      })
    }
  }
</script>

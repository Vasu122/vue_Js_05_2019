
<template>
  <div class="content">
      <h2> Student Lists </h2>
      <ul>
        <li v-for="studentName of student">
            {{studentName}}
        </li>
      </ul>
      <h2> Simple Message {{simpleMessage}} </h2>
      <h1> {{ parentToChild }} </h1>
      <button type="button" v-on:click="parentToChildMsg"> parentToChildMsg 1 </button>

      <button v-on:click="PassData()"> Pass Data from here and receive any where </button>

  </div>
</template>
<script>

  import { EventBus } from '../main';

  export default{
    props:{
      parentToChild:{
        type:String
      },
      simpleMessage:{
        type:String
      },
      student:{
        type:Array
      }
    },
    data(){
      return{

      }
    },
    methods:{
      parentToChildMsg:function(){
        //this.parentToChild="child to parent data has been updated"
        this.$emit("UpdateParentVariable","child to parent data has been updated")
      },
      PassData:function(){
        console.log("This is a Message");
        EventBus.$emit("EmittedData","This data comming from students component and show the any where");
      }
    }
  }
</script>

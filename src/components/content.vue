</li>
<template>
  <div class="content">
      <h2>{{ contentHeader }}</h2>
      <h3>{{name}}</h3>
      {{channelName}}
      <ul>
        <li v-for="playlist in myPlaylist">
            <a v-bind:href="playlist.url" v-bind:title="playlist.title" target="_blank">{{playlist.name}}</a>
        </li>
      </ul>
      {{ call1() }}
      <h2> Student Lists for content </h2>
      <ul>
        <li v-for="studentName of student">
            {{studentName}}
        </li>
      </ul>
      <h2> Simple Message {{simpleMessage}} </h2>
      <button type="button" v-on:click="deleteStudent"> Delete Student </button>

        <h1> Student Message: {{StudentMessage}} </h1>

  </div>
</template>
<script>
  import { EventBus } from '../main'

  export default{
    /*props:["name","myPlaylist","channelName"],*/
    props:{

      simpleMessage:{
        type:String
      },
      student:{
        type:Array
      },
      name:{
        type:String,
        required:true,
        default:"Default name"
      },
      myPlaylist:{
        type:Array
      },
      channelName:{
        type:String
      }
    },
    data(){
      return{
        contentHeader:'Content Section',
        message:"function call",
        StudentMessage:'Default Message'
      }
    },
    methods:{
      call1:function(){
        console.log(this.message);
      },
      deleteStudent:function(){
        this.student.pop();
      }
    },
    mounted(){
      EventBus.$on("EmittedData",data=>{
        this.StudentMessage=data
      })
    }
  }
</script>
<style lng="scss" scoped>
  .content{
    background:#d5d5d5;
    color:#000;
    padding:15px;
    text-align:center;
    margin:15px 0;
    li{
      font-size:30px;
    }
  }
</style>

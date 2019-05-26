<template>
  <div>
    <h1>{{title}}</h1>
    <button type="button" v-on:click="updateMsg">Update state</button>
    <h1 v-if="$store.state.login"> Login form show </h1>
    <button type="button" v-on:click="loginMsg"> Login Change </button>
    <ul>
      <li v-for="user in getUser" v-bind:key="user.id">
        {{user.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {EventBus} from '../main.js';
  export default{
    computed:{
      title(){
        return this.$store.state.message
      },
      getUser(){
        return this.$store.getters.getUsers;
      }
    },
    methods:{
      updateMsg:function(){
        this.$store.dispatch('updateMessageAction1')
      },
      loginMsg:function(){
        this.$store.dispatch('loginMessageAction')
      }
    },
    mounted(){
      EventBus.$on("EmittedData",data =>{
        this.title=data;
      })
    }
  }
</script>

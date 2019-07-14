<template>
  <div>
    <h1>{{title}}</h1>
    <button type="button" v-on:click="updateMsg">Update state</button>
    <!--h1 v-if="$store.state.login"> Login form show </h1-->
    <button type="button" v-on:click="loginMsg"> Login Change </button>
    <ul>
      <li v-for="user in getUser" v-bind:key="user.id">
        {{user.name}}
      </li>
    </ul>

      <div v-for="(arrayData,index) in myArrayObj" class="list">
          <div>{{arrayData.firstName}} {{index}}</div>
      </div>
      <div v-for="(arrayData,index) in array2" class="list new">
          <div @click="getAll(arrayData,index)">{{arrayData.firstName}}</div>
      </div>
  </div>
</template>

<script>
  import {EventBus} from '../main.js';
  export default{
    data(){
      return{
        myArrayObj: [
          {
            firstName: 'rabindra',
            lastName : 'singh',
            age: 30
          },
          {
            firstName: 'vasudev',
            lastName : 'singh',
            age: 30
          },
          {
            firstName: 'rabindra2',
            lastName : 'singh',
            age: 30
          }
        ],
        array2 : [
          {
             firstName: 'Reena',
             lastName : 'yadav',
             age: 25
          }
        ]
      }
    },
    computed:{
      title(){
        //return this.$store.state.message
      },
      getUser(){
        //return this.$store.getters.getUsers;
      }
    },
    methods:{
      getAll(allVal,index){
        for(let i = 0; i< this.myArrayObj.length; i++){
          if(this.myArrayObj[i].firstName == allVal.firstName ){
            console.log("YES");
            return this.myArrayObj.splice(this.myArrayObj[i],1);
          }
          else{
             console.log("No");
            return this.myArrayObj.push(allVal)
          }
        }
      },
      updateMsg:function(){
        //this.$store.dispatch('updateMessageAction1')
      },
      loginMsg:function(){
        //this.$store.dispatch('loginMessageAction')
      }
    },
    mounted(){
      EventBus.$on("EmittedData",data =>{
        this.title=data;
      })
    }
  }
</script>

<style lang="scss">

  .list{
    padding: 10px;
    background:red;
    margin:3px 0;
    cursor:pointer;
  }
</style>

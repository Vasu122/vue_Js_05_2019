<template>
  <div>
    <h1> Contact us  Page Start here... </h1>
    <ul>
    <li v-for="(contact,index) in contactList">
      <p v-if="edit !=index " v-on:click="editToggle(index)">
        {{contact.firstName}}
      </p>
      <p v-if="edit == index">
        <input type="text"  @blur="saveInput($event,index)" />
      </p>
      <p>{{contact.middleName}}</p>
      <hr />
    </li>
    </ul>
    <h3>Object Data is:</h3>
      <h4 v-for="(obj,name,index) in objectData">
        {{index}}. {{name}} : {{obj}}
      </h4>
  </div>
</template>
<script>
  export default{
    data(){
      return{
      edit:null,
      objectData:{
        bookName:'Javascript with vue',
        author:'Netscape navigator',
        publish:1991
      },
      contactList:[
        {
          firstName:'rabindra singh',
          middleName:'Kumar'
        },
        {
          firstName:'Reena singh',
          middleName:'Devi'
        },
        {
          firstName:'Vasudev singh',
          middleName:'Kumar'
        },
        {
          firstName:'Laddo singh',
          middleName:'kumari'
        }
      ]
    }
   },
   methods:{
      saveInput:function(ev,index){
        console.log(event.target.value)
        this.edit=null;
        this.contactList[0].firstName=event.target.value;
        console.log("contactList",this.contactList);
      },
      editToggle:function(index){
        this.edit=index
        console.log(index);
      }
    }
  }
</script>

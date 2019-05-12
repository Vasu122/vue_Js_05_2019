<template>
  <div>
      <ul>
        <li v-for="(arrayVal,index) in arrayList">
          <b>{{index}} - </b>
          <span>{{arrayVal.firstName}}</span>
          <span>{{arrayVal.lastName}}</span>
          <span>{{arrayVal.age}}</span>
          <span>{{arrayVal.salary}}</span>
          <br>
          <input type="checkbox"
           :id="index" :value="arrayVal"
           v-model="arrayListCheck"
           @change="checkBoxVal(arrayListCheck, $event)">
          <label for="jack">{{arrayVal.firstName}}</label>
          <button type="button"  @click="deleteData(arrayVal)">Delete</button>
          <hr>
        </li>
      </ul>
      <span>Checked names: {{ arrayListCheck }}</span>
      <button type="button"  @click="CheckdeleteData(arrayListCheck)">selectCheckbox</button>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        arrayListCheck:[],
        arrayList:[
          {
            id:1,
            firstName:'rabindra singh',
            lastName:'yadav',
            age:30,
            salary:50000
          },
          {
            id:2,
            firstName:'vasudev kumar',
            lastName:'yadav',
            age:5,
            salary:5000
          },
          {
            id:3,
            firstName:'Reena kumari',
            lastName:'yadav',
            age:25,
            salary:35000
          },
          {
            id:4,
            firstName:'Laddo kumari',
            lastName:'yadav',
            age:3,
            salary:1000
          }
        ]
      }
    },
    methods:{
      checkBoxVal:function(item,event){
        console.log(this.arrayListCheck);
      },
      deleteData:function(singledata){
      debugger
        this.arrayList =this.arrayList.filter(function(arrItem){
          return arrItem.id != singledata.id
        });
        console.log("after delete",this.arrayList)
      },
      CheckdeleteData:function(data){
        this.arrayList =this.arrayList.filter(function(arrItem,index){
          for(var i=0; i<data.length; i++){
            return arrItem.id !=data[i].id
          }
        });
      }
    }
  }
</script>

<template>
  <div>

    <Nav-bar></Nav-bar>
    <router-view></router-view>


    <!--
    <owl-header></owl-header>
    <owl-content v-bind:simpleMessage="sendMessage" v-bind:student="students" channelName="Online web tutor" name="rabindr singh" v-bind:myPlaylist="playLists"></owl-content>

    <owl-Students v-bind:simpleMessage="sendMessage" v-bind:student="students" v-bind:parentToChild="parentToChild" v-on:UpdateParentVariable="updateVariablefn($event)"></owl-Students>

    <h3> {{UpdatedMsg}} </h3>
    <button type="button" @click="updateMsg()"> UpDate message </button>

    <owl-footer v-bind:footerCopyRightProp="footerCopyRight">

      <h3> This is the footer header tag</h3>
      <p> This is the footer paragraph tag </p>
      <em slot="em"> slot using name </em>

    </owl-footer>
    -->
    <!-- Dynamic component create -->
    <!--
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>


    <button type="button" v-on:click="component= 'StudentsForm'"> Student Form</button>
    <button type="button" v-on:click="component= 'EmployeeForm'">Employee  Form</button>

    <h3>Blog Template</h3>
    -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/content.vue'
import Footer from './components/footer.vue'
import Students from './components/Students.vue'

import StudentsForm from './components/student-form.vue'
import EmployeeForm from './components/employee-form.vue'
import Navbar from './views/NavBar.vue'

export default {
  components:{
    "owl-header":Header,
    "owl-content":Content,
    "owl-footer":Footer,
    "owl-Students":Students,
    "StudentsForm":StudentsForm,
    "EmployeeForm":EmployeeForm,
    "Nav-bar" : Navbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      component:"StudentsForm",
      playLists:[
        {
          name:'wordpress tutorial',url:'wordpres.html',title:'wordpress title'
        },
        {
          name:'css tutorial',url:'css.html',title:'css title'
        },
        {
          name:'html tutorial',url:'htmlpage.html',title:'html title'
        }
      ],
      students:[
        'rabindr',
        'pankaj',
        'harmeek',
        'Haider',
        'Shubham'
      ],
      sendMessage:'this is simple message',
      parentToChild:'This data has bee change from parent to child',
      UpdatedMsg:"before update msg is this",
      footerCopyRight:"copy right 2019"
    }
  },
  methods:{
    updateVariablefn:function(updateValue){
      this.parentToChild=updateValue
    },
    updateMsg:function(){
      this.UpdatedMsg="After update message is this";
    }
  },
  beforeCreate(){
    console.log("Before create");
  },
  created(){
    console.log("after before create created");
  },
  beforeMount(){
    console.log("after before create created beforeMount");
  },
  mounted(){
    console.log("after before create created mounted");
  },
  beforeUpdate(){
    console.log("after before create created before update");
  },
  updated(){
    console.log("after before create created updated");
    }
  }
</script>


<-- https://appdividend.com/2018/11/21/mevn-stack-tutorial-with-example-from-scratch

-->

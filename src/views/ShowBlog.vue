<template>
  <div v-list:cyan=" 'wider' " style="padding:30px;">
    <h2> Show Blog </h2>
      <div v-for="blog in blogs">
          <h3>{{ blog.id  | toAddVal }}</h3>
          <router-link v-bind:to="'/ShowBlog/'+blog.id">
          <h4 v-format>{{ blog.title }}</h4></router-link>
          <h5>{{ blog.body}}</h5>
      </div>
  </div>
</template>
<script>
  import FiltersMixin from '../mixin/filters';

  export default{
    mixins:[
      FiltersMixin
    ],
    data(){
      return{
        blogs:[]
      }
    },
    methods:{

    },
    created(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts").
      then(function(data){
          this.blogs=data.body.slice(0,5)
      })
    },
    /*filters:{
      makeUppercase:function(value){
        return value.toUpperCase();
      },
      contentSnippet:function(value){
        return value.slice(0,70)+'...';
      }
    }*/
  }
</script>

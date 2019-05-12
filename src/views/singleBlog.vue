<template>
  <div v-list:cyan=" 'wider' " style="padding:30px;">
    <h2> Single Blog </h2>
      <div>
          <h3>{{ blog.id  | toAddVal }}</h3>
          <h4 v-format>{{ blog.title | makeUppercase }}</h4>
          <h5>{{ blog.body | contentSnippet }}</h5>
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
        id: this.$route.params.id,
        blog:{}
      }
    },
    methods:{

    },
    created(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts/"+this.id).
      then(function(data){
          //this.blogs=data.body.slice(0,5)
          console.log(data);
          this.blog=data.body
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

<template>
  <div class="student-form">
    <h3>Student form </h3>
    <form name="blog_form" method="post">
      <p>
        <label>Title:</label>
        <input type="text" v-model.lazy="blog.title"  placeholder="Enter the title" />
      </p>
      <p>
        <label>Body:</label>
        <input type="text" v-model.lazy="blog.description"  placeholder="Enter the description" />
      </p>

      <p>
        <label>Body:</label>
        <input type="text" v-model.lazy="blog.user"  placeholder="Enter the User" />
      </p>
      <p>
        <button v-on:click.prevent="postBlog">Submit</button>
      </p>
    </form>
    <div class="student-form">
      <h3>Blog Detail</h3>
      <p>Title: {{blog.title}}</p>
      <p>Title: {{blog.description}}</p>
      <p>Title: {{blog.user}}</p>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        blog:{
          title:'',
          description:'',
          user:''
        }
      }
    },
    methods:{
      postBlog:function(){
        this.$http.post("https://jsonplaceholder.typicode.com/posts",{
          //post data section
          title:this.blog.title,
          body:this.blog.description,
          userId:this.blog.user
        }).then(function(data){
            // response section
            console.log(data);
        });
      }
    }
  }
</script>

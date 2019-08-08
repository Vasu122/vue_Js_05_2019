<template>
  <div>
    <h1> About us Page Start here... </h1>

    <form v-cloak>
      <div class="bar">
        <input type="text" v-model="searchString" placeholder="Serach..."/>
      </div>
      <ul class="searchList">
        <li v-for="article in filteredArticles">
          <a v-bind:href="article.url">
            <img v-bind:src="article.image" />
            <span> {{ article.title }}</span>
          </a>

        </li>
        <p v-if="nocontent12">No Search Item Here...</p>
      </ul>
    </form>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>


    <button type="button" @click="fetchData"> Asynchronous button</button>
    <image-slider :aboutUsImage="aboutUsImg"></image-slider>
  </div>
</template>

<script>
import slider from './slider.vue';
  export default{
  components:{
    "image-slider":slider
    },
    data(){
      return{
        activeName: 'first',
        aboutUsImg:['5.png','6.jpg','7.jpg','8.jpg','9.jpg'],
        nocontent12:false,
        searchString: "",
        articles:[
        {
             "title": "What You Need To Know About CSS Variables",
             "url": "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
             "image": "https://tutorialzine.com/media/2016/03/css-variables.jpg"
         },
         {
             "title": "Freebie: 4 Great Looking Pricing Tables",
             "url": "https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
             "image": "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg"
         },
         {
             "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
             "url": "https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
             "image": "https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg"
         },
         {
             "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
             "url": "https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
             "image": "https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png"
         },
         {
             "title": "Learn SQL In 20 Minutes",
             "url": "https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
             "image": "https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png"
         },
         {
             "title": "Creating Your First Desktop App With HTML, JS and Electron",
             "url": "https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
             "image": "https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png"
         }
        ]
      }
    },
    computed:{
      filteredArticles:function(){
        let  articles_array=this.articles;
        let searchString=this.searchString.trim().toLowerCase();
        if(!searchString){
          console.log("articles_array",articles_array)
          return articles_array
        }
        console.log("searchString",searchString);
        articles_array=this.articles.filter(function(item){
          if(item.title.toLowerCase().indexOf(searchString) !==-1){
            console.log(item);
            return item;
          }
          });
        return articles_array
      }
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
       fetchData(){
        this.$http.get('https://jsonplaceholder.typicode.com/todos/1').then(function(data){
          console.log("data is ", data.body.title);
          window.bus.$emit('dataFromAboutUs', data.body.title)

 //          window.bus.$emit('variablename', response);
 // mounted(){
 //      window.bus.$on('variablename', list => {
 //       ab.push(list);
 //      });
 //    },

    
        })
      }
    }
  }
</script>
<style lang="scss">
  .searchList{
    list-style:none;
    margin:0;
    padding:0;

  li{
    display:block;
    width:100%;
    margin:15px;
    border:2px solid red;
    verticle-align:middle;
    a{
      color:#000;

    img{
      width:40px;
      height:40px;
      verticle-align:middle;
    }
      span{
        verticle-align:middle;
      }
    }
    &:hover{
      background-color:green;
      border:2px solid green;
      color:#fff;
    }
  }
}
</style>

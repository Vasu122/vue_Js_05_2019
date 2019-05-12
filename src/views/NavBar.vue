<template>
  <ul>
    <li>
    <router-link to = "/"> Home </router-link>
    </li>
    <li>
    <router-link to = "/About"> About Us </router-link>
    </li>
    <li>
    <router-link to = "/Contact"> Contct Us </router-link>
    </li>
    <li>
    <router-link to = "/Services"> Services </router-link>
    </li>
    <li>
    <router-link to = "/ShowBlog"> ShowBlog </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  ul{
    list-style:none;
    margin:0;
    padding:0;
    li{
      display:inline-block;
      margin:0 10px;
      a{
        padding:5px 20px;
        text-decoration:none;
        display:block;
        color:#333;
        border:1px solid #333;
        transition: all 0.5s;
          &:hover,&.router-link-exact-active{
            background:green;
            color:#fff;
            border:1px solid #fff;
          }
        }
    }
  }


</style>

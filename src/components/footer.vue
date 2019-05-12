<template>
  <div class="footer">
      <h2>{{ footerHeader }}</h2>
      <ul>
        <li v-for="fData in footerData">
          <a v-bind:href="fData"> {{fData}} </a>
        </li>
      </ul>
      <p>{{footerCopyRightProp}}</p>
      <slot></slot>
      <slot name="em"></slot>
  </div>
</template>
<script>
  export default{
    props:['footerCopyRightProp'],
    data(){
      return{
        footerHeader:'footer Section',
        footerData:['Home','About Us','Contact Us','User List']
      }
    }
  }
</script>
<style lng="scss" scoped>
  .footer{
    background:#333;
    color:#fff;
    padding:15px;
    text-align:center;
    margin:15px 0;
    width:100%;
  }
  li{
    font-size:20px;
    display:inline-block;
    margin:10px;
  }
  a{
    color:#fff;
    text-decoration:none;
  }
</style>

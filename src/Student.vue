<template>
  <div>
    <h1>{{ msg }}</h1>
    <ol>
      <li v-for="student in students">
          {{ student }}
      </li>
    </ol>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'Student List',
      students:['rabindra','Reena','Vasudev','Laddo']
    }
  }
}
</script>

<style scoped>
h1{
  color:blue;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
ol{
  width:300px;
  li{
    border-bottom:1px solid #ccc;
    width:100%;
    padding:10px;
  }
}
</style>

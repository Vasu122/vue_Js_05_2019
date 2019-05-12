<template>
  <div class="employee-form">
    <h3>Employee form </h3>
    <form>
      <p>
        <label>Name:</label>
        <input type="text"  v-model.lazy="employee.name" placeholder="Enter name" />
      </p>
      <p>
        <label>Email</label>
        <input type="Email"  v-model="employee.email"  placeholder="Enter email" />
      </p>
      <p>
        <label>Designation</label>
        <input type="text"  v-model="employee.designation"  placeholder="Enter designation" />
      </p>
      <p>
        <button>Submit</button>
      </p>
      <p>
        <label><input type="checkbox" v-model="employee.post" value="Developer">Developer</label>
        <label><input type="checkbox" v-model="employee.post" value="Designer">Designer</label>
        <label><input type="checkbox" v-model="employee.post" value="Tester">Tester</label>
        <label><input type="checkbox" v-model="employee.post" value="CEO">CEO</label>
      </p>
      <p>
        <label> Select Gender</label>
        <label><input type="radio" value="Male" v-model="employee.gender"> Male</label>
        <label><input type="radio" value="Female"  v-model="employee.gender"> Female</label>
        <label><input type="radio" value="Other"  v-model="employee.gender"> Other</label>
      </p>
      <p>
          <select v-model="employee.level">
              <option v-for="level in levels" >{{level}}</option>

          </select>
      </p>

    </form>

    <div id="detail-preview">
        <h3> Employee Details preview </h3>
        <p>Name: {{employee.name}}</p>
        <p>Email: {{employee.email}}</p>
        <p>Designation: {{employee.designation}}</p>
        <p>Employee post</p>
        <ul>
            <li v-for="empPost in employee.post">
              {{empPost}}
            </li>
        </ul>
        <p>Gender: {{employee.gender}} </p>
        <p>Labels: {{employee.level }}</p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        employee:{
          name:"",
          email:"",
          designation:"",
          post:[],
          gender:"",
          level:''
        },
        levels:['Senior','Junior','Team Lead','Motivtor']
      }
    },
    methods:{

    }
  }
</script>

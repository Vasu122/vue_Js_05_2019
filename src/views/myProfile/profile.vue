<template>
	<div>
		<h1>  {{heading}}  </h1>
		<div class="my-data">
			<ul  v-for="(data,index) in mydata">
				<li>{{data.id}} </li>
				<li>{{ data.firstName }}</li>
				<li>{{ data.age }}</li>
				<li>{{ data.salary }}</li>
				<li v-if="data.edit && data.client == 'admin'"> 
					<button type="button" @click="editFunction(mydata,index)">Edit</button> 
				</li>


				<!-- <el-dialog title="Shipping address" 
				:visible.sync="dialogTableVisible">
					    <li>{{data.id}} </li>
						<li>{{ data.firstName }}</li>
						<li>{{ data.age }}</li>
						<li>{{ data.salary }}</li>
						<li v-if="data.edit && data.client == 'admin'"> 
							<button type="button" @click="editFunction(mydata,index)">Save</button> 
						</li>
					</el-dialog> -->


			</ul>
		</div>
		<div class="my-data" v-if="edit" style="margin-top: 30px">
			<ul  v-for="(data,index) in mydata" v-if="edit && editindex==index">
				<li> <input type="text"/></li>
				<li>{{ data.firstName }}</li>
				<li>{{ data.age }}</li>
				<li>{{ data.salary }}</li>
				<li v-if="data.edit && data.client == 'admin'"> 
					<button type="button" @click="SaveData">Save</button> 
				</li>
			</ul>
		</div>
	</div> 
</template>

<script>
	export default{
		data(){
		  return{
			edit : false,
			dialogTableVisible: false,
			editindex:0,
			mydata:[
				{
					id:100,	
					firstName:'Rabindra singh',
					age:32,
					salary:50000,
					edit:true,
					client:'admin'
				},
				{
					id:101,
				    firstName:'Harmeek singh',
					age:30,
					salary:55000,
					edit:true,
					client:'admin'	

				},
				{
					id:102,
				    firstName:'bahadur singh',
					age:33,
					salary:60000,
					edit:false,
					client:'admin'	
				}
			]	
		  }
	   },
		computed:{
			heading(){
				return this.edit ? 'Edit profile': 'My Profile'
			}
		},
		methods:{
			editFunction(data,index){
				this.editindex = index
				this.edit = true
			},
			SaveData(){

			}
		}
	}
</script>

<style lang="scss">
	
	.my-data{
		width: calc(100% - 20px);
		ul{

			margin: 0 5px;
			padding: 30px;
			list-style: none;
			display: inline-block;
			background: #ccc;
			width: calc(100% /3 - 80px);
			height: 200px;
			vertical-align: top;
			position: relative;
			overflow: hidden;
			li{
				line-height: 30px;
				font-weight: 700;
			}
			button{
				position: absolute;
				bottom:-100px;
				left: 50%;
				transform:translateX(-50%); 
				padding: 10px 10px;
				background: green;
				border: 1px solid green;
				color: #fff;
				cursor: pointer;
				border-radius: 4px;
				min-width: 100px;
				transition: all 0.5s;
				&:hover{
					background:#000;
				}
			}
			&:hover{
				button{
					bottom: 20px;
				}
			}
		}
	}
</style>
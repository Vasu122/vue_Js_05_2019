<template>
<div>
	 <div class="slideshow-container">
	  	<div class="slides fade" v-for="(images,index) in allImage">
	  		<div class="number"> {{index+1}} / {{allImage.length}}</div>
	  		<div><img :src="getIconPath(images)"></div>
	  		<div class="text"> Slider {{index+1}} content </div>
	  	</div>

	  	<a class="prev btnPrevNext" @click="plusIndex(-1)">Prev</a>
	  	<a class="next btnPrevNext" @click="plusIndex(+1)">Next</a>

  </div>
	 <div style="text-align: center;">
		 	<span class="dots" @click="currentSlide(index+1)" v-for="(images,index) in allImage"> {{index+1}}</span>
		 </div>

</div> 
</template>
<script>
	export default{
	props: ['aboutUsImage'],
		data(){
			return{
				allImage : ['1.png','2.jpg','3.png','4.png'],
				slideIndex: 1
			}
		},
		mounted(){
			this.slideImage(this.slideIndex)
		},
		methods:{
			getIconPath (iconName) {
		        return iconName ? require(`../assets/images/${iconName}`) : ''
		    },
		    currentSlide(n){
		    	this.slideImage(this.slideIndex = n)
		    },
		    plusIndex(n){
		    	this.slideImage(this.slideIndex += n)
		    },
		    slideImage(n){
		    	var slide = document.getElementsByClassName('slides');
		    	var dots = document.getElementsByClassName('dots');
		    	if(n > slide.length){
		    		this.slideIndex = 1;
		    	}
		    	if(n < 1){
		    		this.slideIndex = slide.length;
		    	}
		    	for(let i=0; i< slide.length; i++){
		    		slide[i].style.display="none";
		    	}
		    	slide[this.slideIndex -1].style.display= "block"

		    	for(let i=0; i< dots.length; i++){
		    		dots[i].className = dots[i].className.replace("active","");
		    	}
		    	dots[this.slideIndex -1].className +=" active"
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
    if(this.aboutUsImage){
    	console.log("jfgwjgf",this.aboutUsImage);
    	this.allImage =this.allImage.concat(this.aboutUsImage)
    }
  },
  beforeUpdate(){
    console.log("after before create created before update");
  },
  updated(){
    console.log("after before create created updated");
    }
	}
</script>

<style lang="scss">
@import '../assets/scss/variable';
	.slideshow-container{
		position: relative;
		width: 500px;
		height: 300px;
		border:1px solid $gray;
		overflow: hidden;
		margin: 0 auto;
	
	.slides{
		width: 100%;
		height: 100%;
		position: absolute;
		img{
			width:100%;
			height:auto;
		}
	}
	.number{
		position: absolute;
		top: 10px;
		left: 10px;
		background-color: $red;
		color: $white;
		padding: 0 10px;
	}
	.text{
	    position: absolute;
		bottom:0px;
		left: 0px;
		right: 0;
		text-align: center;
		background-color: $red;
		color: #fff;
		padding: 10px;	
	}
	.btnPrevNext{
		position: absolute;
		width: 40px;
		height: 40px;
		line-height: 40px;
		background-color: $black;
		color: $white;
		text-align: center;
		top: 50%;
		cursor: pointer;
	}
	.btnPrevNext.prev{left: 0}
	.btnPrevNext.next{right: 0}
}

		.dots{
			width: 20px;
			height: 20px;
			line-height:20px;
			display: inline-block;
			background-color: $gray;
			padding:5px;
			border-radius: 50%; 
			cursor: pointer;
			color:$black;
			margin:10px 2px;
		}
		.fade{
			animation-name: fade;
			animation-duration: 0.2s;
		}
		@keyframes fade{
			from{
				opacity: 0.1;
			}
			to{
				opacity: 1;
			}
		}
		.dots:hover, .active{
			background-color: $dark-gray;
			color:$white
		}
	</style>
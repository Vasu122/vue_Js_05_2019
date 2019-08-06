V <template>
  <div>
    <h1>{{title}}</h1>
    <button type="button" v-on:click="updateMsg">Update state</button>
    <!--h1 v-if="$store.state.login"> Login form show </h1-->
    <button type="button" v-on:click="loginMsg"> Login Change </button>
    <ul>
      <li v-for="user in getUser" v-bind:key="user.id">
        <span>{{user.name}}</span>
      </li>
    </ul>

      <div v-for="(arrayData,index) in myArrayObj" class="list">
          <span>{{arrayData.firstName}} {{index}}</span>
          <button type="button">{{index}}</button>
      </div>
      <div v-for="(arrayData,index) in array2" class="list new">
          <div @click="getAll(arrayData,index)">rabindra</div>
      </div>

      <div v-for="val in heroes">
          {{val.name}} --- {{val.franchise}}
      </div>
      <button type="button" @click="getAllFilter">Value change</button>
      <h1 v-if="divshow">Hi i am heigh is {{divHeight}}</h1>
      <div  ref="heightcal">
       <h1> rabindra singh</h1>
        <h1> rabindra singh</h1>
         <h1> rabindra singh</h1>
      </div>
      <button type="button" @click="getheight">Value change</button>


      <component v-bind:is="component">
        <h2 slot="link2"> Side bar link 21</h2>
        <h3 slot="link3"> Side bar link 31</h3>
      </component>
      <button type="button" @click="component='side-bar'">
        side bar show
      </button>
      <button type="button"  @click="component='sticky'">
          sticky show
      </button>
  </div>
</template>

<script>
  import sideBar from './sidebar';
  import sticky from './sticky';
  import {EventBus} from '../main.js';
  export default{
  components:{
    'side-bar' : sideBar,
    'sticky' : sticky
  },
    data(){
      return{
        divshow:false,
        divHeight : 0,
        component : 'side-bar',
        myArrayObj: [
          {
            firstName: 'rabindra',
            lastName : 'singh',
            age: 30
          },
          {
            firstName: '',
            lastName : 'singh',
            age: 30
          },
          {
            firstName: 'rabindra2',
            lastName : 'singh',
            age: 30
          }
        ],
        array2 : [
          {
             firstName: 'Reena',
             lastName : 'yadav',
             age: 25
          }
        ],
        heroes : [
              {name: 'Batman', franchise: 'DC'},
              {name: 'Ironman', franchise: ''},
              {name: 'Thor', franchise: ''},
              {name: 'Superman', franchise: 'DC'}
            ]
      }
    },
    computed:{
      title(){
        //return this.$store.state.message
      },
      getUser(){
        //return this.$store.getters.getUsers;
      }
    },
    methods:{
     getheight(){
       this.divHeight= this.$refs.heightcal.clientHeight;
        if(this.divHeight > 100){
          this.divshow = true
        }
       console.log("height is",this.divHeight)
     },
     getAllFilter(){
      /*var marvelHeroes =  this.heroes.filter(function(hero) {
          return hero.franchise == "";
        });
        return this.heroes*/

         for (var i in this.heroes) {
           if (this.heroes[i].franchise == '') {
              this.heroes[i].franchise = 'rabindra';
              break; //Stop this loop, we found it!
           }
         }
     },
      getAll(){
        var matchingKeys = this.myArrayObj.filter(function(key){
          return age <30
        })
        console.log(matchingKeys)
      },
      updateMsg:function(){
        //this.$store.dispatch('updateMessageAction1')
      },
      loginMsg:function(){
        //this.$store.dispatch('loginMessageAction')
      }
    },
    mounted(){
      this.getheight();
      EventBus.$on("EmittedData",data =>{
        this.title=data;
      })
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/variable';
  .list{
    padding: 10px;
    background:red;
    margin:3px 0;
    cursor:pointer;
    span{
      color:green;
    }
    button{
    float:right;
    padding:5px 20px;
     border: 1px solid $green;
     background:$green;
     color: $white;
     cursor:pointer;
     -webkit-transition: all 0.5s;
     transition: all 0.5s;
     &:hover{
       background: $black;
       border: 1px solid $black;
     }
    }
  }
</style>

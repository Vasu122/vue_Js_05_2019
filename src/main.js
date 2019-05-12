import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes/routes'

import Student from './Student.vue'  //import

Vue.component("studentNew",Student)  //define

import VueResource from 'vue-resource'



export const EventBus= new Vue();


/*      Router use       **/

  Vue.use(VueRouter);
  //routes
  /*const routes=[
    { path:'/', component: Home},
    { path:'/About', component: About},
    { path:'/Contact', component: Contact},
    { path:'/Services', component: Services}
  ];*/
  const router = new VueRouter({
    routes: Routes,
    mode:"history"
  }); // create instance of router


/******** filters add ********/
Vue.filter("toAddVal",function(value) {
    return 'This id is:'+value;
});

/* custom diretive code start */
  Vue.directive('list',{
    bind(el,binding,vnode){
      if(binding.value == "wide"){
        el.style.maxWidth="1200px";
      }
      if(binding.value == "wider"){
        el.style.maxWidth="600px";
      }
      if(binding.arg == "cyan"){
        el.style.backgroundColor="#ccc"
      }
    }
  })
  Vue.directive('format',{
    bind(el,binding,vnode){
      el.style.color="blue";
      el.style.fontSize="30px"
    }
  })
/* custom diretive code End */
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

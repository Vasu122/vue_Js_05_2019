//importng components
import Home from       '../views/Home.vue'
import About from      '../views/AboutUs.vue'
import Contact from    '../views/ContactUs.vue'
import Services from   '../views/Services.vue'
import ShowBlog from   '../views/ShowBlog.vue'
import SingleBlog from '../views/singleBlog.vue'


//routes
export default [
  { path:'/', component: Home},
  { path:'/About', component: About},
  { path:'/Contact', component: Contact},
  { path:'/Services', component: Services},
  { path:'/ShowBlog', component:ShowBlog },
  { path:'/ShowBlog/:id', component:SingleBlog}
];

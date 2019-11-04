import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import( '../views/content/Index.vue'),meta:{title:"fruit前台",auth:true},

  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue')
  },

];

const router = new VueRouter({
  routes
});















export default router

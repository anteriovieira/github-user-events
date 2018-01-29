import Vue from 'vue'
import VueRouter from 'vue-router'
import Route from 'vue-routisan'

Route.setViewResolver((component) => {
  return require('./views/' + component);
});

Route.view('/', 'Dashboard')

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: Route.all()
});

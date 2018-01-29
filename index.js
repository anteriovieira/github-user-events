import Vue from 'vue'
import Buefy from 'buefy'
import Md from 'vue-markdown'
import App from './App'
import routes from './routes'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.component('md', Md)

new Vue({
  el: '#app',
  routes,
  components: {App},
  render() {
    return <app/>
  }
})
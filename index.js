import Vue from 'vue'
import Buefy from 'buefy'
import Md from 'vue-markdown'
import App from './App'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.component('md', Md)

new Vue({
  el: '#app',
  components: {App},
  render() {
    return <app/>
  }
})
import Vue from 'vue'
import Buefy from 'buefy'
import App from './App'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

new Vue({
  el: '#app',
  components: {App},
  render() {
    return <app/>
  }
})
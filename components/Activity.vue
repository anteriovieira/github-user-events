<template>
  <article class="media">
  <figure class="media-left">
    <p class="image is-32x32">
      <img :src="event.actor.avatar_url">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <component :is="event.type" :event="event" />
    </div>
  </div>
  <div class="media-right">
    <small>{{ relativeDate }}</small>
  </div>
</article>
</template>

<script>
import moment from 'moment'

const files = require.context('./TypeEvent', false, /^.*.vue$/)
const filenames = files.keys()

let types = {}
for (let filename of filenames) {
  let name = filename.replace(/\.\//, '').replace(/\.vue$/, '')
  types[name] = getModule(filename)
}

console.log(types)

export default {
  name: 'Activity',
  props: ['event'],
  components: {...types},
  computed: {
    relativeDate() {
      return moment(this.event.created_at).fromNow()
    }
  }
}

function getModule(filename) {
  let file = files(filename)

  return file.default ? file.default : file
}
</script>


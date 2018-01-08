<template>
  <div>
    <p>
      <strong>{{ event.actor.login }}</strong> 
      <small>pushed to <a :href="event.payload.ref">{{ branch }}</a> in</small>
      <strong>{{ event.repo.name }}</strong>
    </p>
    <p>
      <ul>
        <li v-for="commit of event.payload.commits" :key="commit.push_id">
          <a :href="commit.url">{{ commit.sha.slice(0, 7) }}</a>
          {{ commit.message }}
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PushEvent',
  props: ['event'],
  computed: {
    branch() {
      return this.event.payload.ref.split('/')[2]
    }
  }
}
</script>


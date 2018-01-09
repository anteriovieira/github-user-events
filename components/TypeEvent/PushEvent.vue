<template>
  <div>
    <p>
      <strong>{{ event.actor.login }}</strong> 
      <small>pushed to <a :href="event.payload.ref">{{ branch }}</a> in</small>
      <strong>{{ event.repo.name }}</strong>
    </p>
    <p>
      <ul class="commit">
        <li v-for="commit of event.payload.commits" :key="commit.push_id">
          (<span :title="commit.author.email">{{ commit.author.name }}</span>)
          <a :href="getUrl(commit)">{{ commit.sha.slice(0, 7) }}</a>
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
  },
  methods: {
    getUrl(commit) {
      return `https://github.com/${this.event.repo.name}/commit/${commit.sha}`
    }
  }
}
</script>

<style scoped>
  ul.commit {
    padding-left: 0;
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 0;
  }
  .commit > li {
    list-style-type: none;
  }
  .image {
    display: inline-block;
    margin: 5px;
  }
</style>


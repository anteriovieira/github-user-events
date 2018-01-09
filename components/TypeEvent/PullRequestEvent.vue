<template>
  <div>
    <p>
      <strong>{{ event.actor.login }}</strong> 
      <small> {{ pullRequest.state }} a pull request in</small>
      <strong>{{ event.repo.name }}</strong>
    </p>
    <p>
      <img :src="pullRequest.head.user.avatar_url" class="image is-16x16" alt="" />
      <span>{{ pullRequest.head.user.login }}</span> 
    </p>
    <p>
      <md>**{{ pullRequest.title }}**</md>
      <md>{{ pullRequest.body }}</md>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PullRequestEvent',
  props: ['event'],
  computed: {
    pullRequest() {
      return this.event.payload.pull_request
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


<template>
  <div>
    <p>
      <strong>{{ event.actor.login }}</strong> 
      <small>released <a :href="event.payload.release.html_url">{{ tag_name }}</a> at</small>
      <strong>{{ event.repo.name }}</strong>
    </p>
    <p>
      <small class="source">
        <a href="">
          <b-icon icon="cloud-download" size="is-small" /> Source code (zip)
        </a>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ReleaseEvent',
  props: ['event'],
  computed: {
    tag_name() {
      return this.event.payload.release.tag_name
    }
  }
}
</script>

<style scoped>
  .source > a {
    color: #999
  }
</style>



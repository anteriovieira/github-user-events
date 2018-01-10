<template>
  <div>
    <p>
      <strong>{{ event.actor.login }}</strong> 
      <small>createt 
        <a :href="event.payload.ref">{{ tag }}</a> in 
        <a :href="event.payload.ref">{{ branch }}</a>
      </small>
      <strong>{{ event.repo.name }}</strong>
    </p>
    <p>
      <md :source="event.payload.description" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'CreateEvent',
  props: ['event'],
  computed: {
    branch() {
      return this.event.payload.master_branch
    },
    tag() {
      return this.event.payload.ref_type
    }
  },
  methods: {
    getUrl(commit) {
      return `https://github.com/${this.event.repo.name}/commit/${commit.sha}`
    }
  }
}
</script>

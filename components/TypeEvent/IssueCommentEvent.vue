<template>
  <div>
    <p>
      <strong>{{ event.actor.login }}</strong> 
      <small>comment to</small>
      <strong>{{ event.repo.name }}</strong>
    </p>
    <p>
      <a :href="event.payload.comment.html_url">
        <b-icon icon="link" size="is-small"/>
      </a>
      <md :source="event.payload.comment.body"/>
    </p>
  </div>
</template>

<script>
export default {
  name: 'IssueCommentEvent',
  props: ['event']
}
</script>


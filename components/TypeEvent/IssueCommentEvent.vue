<template>
  <div>
    <p>
      <strong>{{ event.actor.login }}</strong> 
      <small><a :href="event.payload.comment.html_url">comment</a> to</small>
      <strong>{{ event.repo.name }}</strong>
    </p>
    <p>
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


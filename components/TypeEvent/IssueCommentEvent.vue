<template>
  <div>
    <p>
      <strong>{{ event.actor.login }}</strong> 
      <small>comment</small>
      <strong>{{ event.repo.name }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'IssueCommentEvent',
  props: ['event']
}
</script>


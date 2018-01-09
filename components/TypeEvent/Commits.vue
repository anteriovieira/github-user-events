<template>
  <ul class="commits">
    <li v-for="commit of commits" :key="commit.push_id">
      <a :href="commit.url">{{ commit.sha.slice(0, 7) }}</a>
      {{ commit.message }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Commits',
  props: ['commits']
}
</script>

<style>
  .commits li {
    list-style-type: none
  }
</style>



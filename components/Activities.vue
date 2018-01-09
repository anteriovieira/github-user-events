<template>
  <div>
    <b-loading :active.sync="isLoading" />

    <h1 class="title">
      Activities
    </h1>
    
    <div>
      <b-field>
        <b-input 
            v-model="user"
            placeholder="user..."
            type="search"
            icon="magnify"
            @click="typing = true"
            @blur="typing = false">
        </b-input>
        <p class="control">
            <button @click="fetch" class="button is-primary">Search</button>
        </p>
      </b-field>
    </div>  

    <hr>

    <activity v-for="event of events" :event="event" :key="event.id" />
  </div>
</template>

<script>
import Activity from './Activity'

export default {
  name: 'Activities',
  data() {
    return {
      user: 'yyx990803',
      events: [],
      updated: null,
      typing: false,
      isLoading: false,
      interval: null,
    }
  },
  components: {Activity},
  methods: {
    async fetch() {
      if (this.typing) return

      this.isLoading = true
      this.events = await fetch(`https://api.github.com/users/${this.user}/events`).then(r => {
        return r.json()
      })

      this.updated = new Date()
      this.isLoading = false
    }
  },
  created() {
    this.fetch()

    this.interval = setInterval(this.fetch, 8000)
  },
  destroyed() {
    clearInterval(this.interval)
  }
}
</script>


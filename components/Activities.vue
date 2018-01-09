<template>
  <div>
    <b-loading :active.sync="isLoading" />
    <h1 class="title">
      <b-icon icon="github-face" size="is-large" /> Github user events
    </h1>
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Events
            </p>
          </header>
          <header class="card-header">
              <div class="card-header-title">
                <b-field >
                  <b-input 
                      expanded
                      v-model="user"
                      placeholder="Search..."
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
          </header>
          <div class="card-content">
            <div class="content">
              <activity v-for="event of events" :event="event" :key="event.id" />
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Tracked repositories
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <table>
                <tbody>
                  <tr v-for="repository of repositories" :key="repository.id">
                    <td>
                      <a :href="repository.url.replace('api.', '').replace('repos', '')">
                        <b-icon icon="github-circle" size="is-small" /> {{ repository.name }}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


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
  computed: {
    repositories() {
      return this.events.reduce((repositories, {repo}) => {
        const has = (id) => !!repositories.find((r) => r.id === id)

        if (!has(repo.id)) {
          repositories.push(repo)
        }

        return repositories
      }, [])
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


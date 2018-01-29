<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <activities />
      </div>
    </div>
  </section>
</template>

<script>
import Activities from '../components/Activities'

export default {
  name: 'DashboardPage',
  components: {Activities}
}
</script>
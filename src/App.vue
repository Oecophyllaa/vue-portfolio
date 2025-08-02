<script>
import { RouterView } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'

export default {
  name: 'App',
  components: {
    RouterView,
    Analytics,
    SpeedInsights,
  },
}
</script>

<template>
  <Analytics />
  <SpeedInsights />

  <div id="app">
    <RouterView />
  </div>
</template>

<style>
/* Global styles akan ada di style.css */
</style>

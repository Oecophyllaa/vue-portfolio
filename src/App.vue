<script>
import { RouterView } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue'

export default {
  name: 'App',
  components: {
    RouterView,
    Analytics,
  },
}
</script>

<template>
  <Analytics />

  <div id="app">
    <RouterView />
  </div>
</template>

<style>
/* Global styles akan ada di style.css */
</style>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'FloatingButtons',
  setup() {
    const showBackToTop = ref(false)
    const isDarkMode = ref(true)

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value
      // Theme toggle logic here
    }

    onMounted(() => {
      window.addEventListener('scroll', () => {
        showBackToTop.value = window.scrollY > 300
      })
    })

    return { showBackToTop, isDarkMode, scrollToTop, toggleTheme }
  },
}
</script>

<template>
  <div class="floating-buttons">
    <!-- Back to Top Button -->
    <button class="floating-btn back-to-top" @click="scrollToTop" v-show="showBackToTop">
      <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Theme Toggle Button -->
    <button class="floating-btn theme-toggle" @click="toggleTheme">
      <i class="fas fa-moon" v-if="!isDarkMode"></i>
      <i class="fas fa-sun" v-else></i>
    </button>
  </div>
</template>

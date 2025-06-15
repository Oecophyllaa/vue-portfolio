<script>
import { onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'AppNavigation',
  setup() {
    const activeSection = ref('home')

    const updateActiveSection = () => {
      const sections = [
        'home',
        'about',
        'experience',
        'skills',
        'certifications',
        'projects',
        'contact',
      ]
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          activeSection.value = sections[i]
          break
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', updateActiveSection)
      updateActiveSection()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', updateActiveSection)
    })

    return { activeSection }
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark-teal fixed-top">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#home">
        <i class="fas fa-flag-checkered me-2 racing-icon"></i>Oecophylla
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === 'home' }" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === 'about' }" href="#about"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === 'experience' }"
              href="#experience"
              >Experience</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === 'skills' }" href="#skills"
              >Skills</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === 'certifications' }"
              href="#certifications"
              >Certifications</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === 'projects' }" href="#projects"
              >Projects</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeSection === 'contact' }" href="#contact"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

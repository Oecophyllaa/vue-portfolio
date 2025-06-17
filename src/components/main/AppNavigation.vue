<script>
import { Collapse } from 'bootstrap'
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

    const closeNavbar = () => {
      // Close navbar on mobile when link is clicked
      const navbarCollapse = document.getElementById('navbarNav')
      const navbarToggler = document.querySelector('.navbar-toggler')

      if (navbarCollapse && navbarToggler) {
        // Check if navbar is currently shown (mobile view)
        if (navbarCollapse.classList.contains('show')) {
          // Use Bootstrap's collapse API to hide the navbar
          const bsCollapse = new Collapse(navbarCollapse, {
            toggle: false,
          })
          bsCollapse.hide()

          // Update toggler aria-expanded attribute
          navbarToggler.setAttribute('aria-expanded', 'false')
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', updateActiveSection)
      updateActiveSection()

      // Also close navbar when clicking outside of it
      document.addEventListener('click', (event) => {
        const navbar = document.querySelector('.navbar-collapse')
        const navbarToggler = document.querySelector('.navbar-toggler')

        if (navbar && navbarToggler && navbar.classList.contains('show')) {
          // If click is outside navbar and not on toggler
          if (!navbar.contains(event.target) && !navbarToggler.contains(event.target)) {
            closeNavbar()
          }
        }
      })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', updateActiveSection)
    })

    return { activeSection, closeNavbar }
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark-teal fixed-top">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#home">
        <i class="fas fa-flag-checkered me-2 racing-icon"></i>
        <span class="d-none d-sm-inline">Oecophylla</span>
        <span class="d-sm-none">Portfolio</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="closeNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === 'home' }"
              href="#home"
              @click="closeNavbar"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === 'about' }"
              href="#about"
              @click="closeNavbar"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === 'experience' }"
              href="#experience"
              @click="closeNavbar"
              >Experience</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === 'skills' }"
              href="#skills"
              @click="closeNavbar"
              >Skills</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === 'certifications' }"
              href="#certifications"
              @click="closeNavbar"
              >Certifications</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === 'projects' }"
              href="#projects"
              @click="closeNavbar"
              >Projects</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === 'contact' }"
              href="#contact"
              @click="closeNavbar"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

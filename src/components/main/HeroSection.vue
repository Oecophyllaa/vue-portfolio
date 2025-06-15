<script>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'HeroSection',
  components: {
    RouterLink,
  },
  setup() {
    onMounted(() => {
      // Counter animation
      const counters = document.querySelectorAll('.counter')
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target'))
        let current = 0
        const increment = target / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            counter.textContent = target + '+'
            clearInterval(timer)
          } else {
            counter.textContent = Math.floor(current) + '+'
          }
        }, 50)
      })
    })
  },
}
</script>

<template>
  <section id="home" class="hero-section d-flex align-items-center min-vh-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 text-center text-lg-start">
          <div class="hero-content">
            <div class="racing-badge mb-3">
              <i class="fas fa-trophy text-amg-teal me-2"></i>
              <span class="text-light">Full Stack Developer</span>
            </div>
            <h1 class="display-4 fw-bold text-white mb-3 hero-title">
              Hi 👋, I'm <span class="text-amg-teal gradient-text">Rangga Raditya Nugroho</span>
            </h1>
            <h2 class="h3 text-light mb-4 typing-effect">Fullstack Web Developer</h2>
            <p class="lead text-light-gray mb-4">
              Student | Teacher | Freelancer | Lifetime Learner
            </p>
            <div
              class="hero-stats d-flex justify-content-center justify-content-lg-start gap-4 mb-4"
            >
              <div class="stat-item text-center racing-stat">
                <div class="h4 text-amg-teal mb-0 counter" data-target="2">0</div>
                <small class="text-light-gray">Years Experience</small>
              </div>
              <div class="stat-item text-center racing-stat">
                <div class="h4 text-amg-teal mb-0 counter" data-target="15">0</div>
                <small class="text-light-gray">Projects</small>
              </div>
              <div class="stat-item text-center racing-stat">
                <div class="h4 text-amg-teal mb-0 counter" data-target="5">0</div>
                <small class="text-light-gray">Certificates</small>
              </div>
            </div>
            <div class="hero-actions">
              <a href="#contact" class="btn btn-amg-teal btn-lg me-3 racing-btn">
                <i class="fas fa-rocket me-2"></i>Hire Me
              </a>
              <RouterLink to="/resume" class="btn btn-outline-light btn-lg racing-btn">
                <i class="fas fa-download me-2"></i>Download CV
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-lg-6 text-center">
          <div class="hero-image">
            <div class="profile-card bg-dark-card p-4 rounded-4 shadow-lg floating-card">
              <img
                src="@/assets/img/avatar.png"
                alt="Profile"
                class="rounded-circle mb-3 profile-img"
                style="width: 250px; height: 250px; object-fit: cover"
              />
              <h4 class="text-white mb-2">Rangga Raditya Nugroho</h4>
              <p class="text-light-gray mb-3">@Oecophylla</p>
              <div class="location-info text-light-gray mb-2">
                <i class="fas fa-map-marker-alt me-2 pulse-icon"></i>East Java, Indonesia
              </div>
              <div class="education-info text-light-gray">
                <i class="fas fa-graduation-cap me-2 pulse-icon"></i>Politeknik Negeri Jember
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-particles">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>
  </section>
</template>

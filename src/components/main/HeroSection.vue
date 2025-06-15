<script>
export default {
  name: 'HeroSection',
}
</script>

<template>
  <section id="home" class="hero-section d-flex align-items-center min-vh-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 text-center text-lg-start">
          <div class="hero-content">
            <h1 class="display-4 fw-bold text-white mb-3">
              Hi 👋, I'm <span class="text-amg-teal">Rangga Raditya Nugroho</span>
            </h1>
            <h2 class="h3 text-light mb-4">Fullstack Web Developer</h2>
            <p class="lead text-light-gray mb-4">Student | Laravel Enthusiast | Lifetime Learner</p>
            <div
              class="hero-stats d-flex justify-content-center justify-content-lg-start gap-4 mb-4"
            >
              <div class="stat-item text-center">
                <div class="h4 text-amg-teal mb-0">2+</div>
                <small class="text-light-gray">Years Experience</small>
              </div>
              <div class="stat-item text-center">
                <div class="h4 text-amg-teal mb-0">15+</div>
                <small class="text-light-gray">Projects</small>
              </div>
              <div class="stat-item text-center">
                <div class="h4 text-amg-teal mb-0">5+</div>
                <small class="text-light-gray">Certificates</small>
              </div>
            </div>
            <div class="hero-actions">
              <a href="#contact" class="btn btn-amg-teal btn-lg me-3">Hire Me</a>
              <button
                class="btn btn-outline-light btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#resumeModal"
              >
                <i class="fas fa-download me-2"></i>Download CV
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 text-center">
          <div class="hero-image">
            <div class="profile-card bg-dark-card p-4 rounded-4 shadow-lg">
              <img
                src="@/assets/img/avatar.png"
                alt="Profile"
                class="rounded-circle mb-3"
                style="width: 250px; height: 250px; object-fit: cover"
              />
              <h4 class="text-white mb-2">Rangga Raditya Nugroho</h4>
              <p class="text-light-gray mb-3">@Oecophylla</p>
              <div class="location-info text-light-gray mb-2">
                <i class="fas fa-map-marker-alt me-2"></i>Surabaya, Indonesia
              </div>
              <div class="education-info text-light-gray">
                <i class="fas fa-graduation-cap me-2"></i>Politeknik Negeri Jember
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

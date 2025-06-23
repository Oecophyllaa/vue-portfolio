<script>
export default {
  name: 'AboutSection',
}
</script>

<template>
  <section id="about" class="py-5 bg-dark-secondary">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="section-title text-white">
            <i class="fas fa-user-astronaut me-3 text-amg-teal"></i>About Me
          </h2>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="about-image text-center">
            <div class="image-frame racing-border">
              <img
                src="@/assets/img/avatar-2.png"
                alt="About Me"
                class="img-fluid rounded-4 shadow-lg hover-zoom"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-content slide-in-right">
            <h3 class="text-amg-teal mb-4">
              <i class="fas fa-code me-2"></i>Passionate Developer & Tech Educator
            </h3>
            <p class="text-light-gray mb-4">
              I'm a dedicated full-stack web developer with expertise in modern web technologies. My
              journey in programming started with curiosity and has evolved into a passion for
              creating scalable, efficient, and user-centric digital solutions.
            </p>
            <p class="text-light-gray mb-4">
              Specializing in Laravel backend development and Vue.js frontend frameworks, I focus on
              building robust applications with clean architecture, optimal performance, and
              maintainable code. I stay current with industry best practices and emerging
              technologies.
            </p>

            <!-- Technical Expertise -->
            <div class="tech-expertise mb-4">
              <h5 class="text-amg-teal mb-3"><i class="fas fa-cogs me-2"></i>Core Expertise</h5>
              <div class="row">
                <div class="col-sm-6 mb-2">
                  <div class="expertise-item">
                    <i class="fab fa-laravel text-amg-teal me-2"></i>
                    <span class="text-light-gray">Laravel Development</span>
                  </div>
                </div>
                <div class="col-sm-6 mb-2">
                  <div class="expertise-item">
                    <i class="fab fa-vuejs text-amg-teal me-2"></i>
                    <span class="text-light-gray">Vue.js Applications</span>
                  </div>
                </div>
                <div class="col-sm-6 mb-2">
                  <div class="expertise-item">
                    <i class="fas fa-database text-amg-teal me-2"></i>
                    <span class="text-light-gray">Database Design</span>
                  </div>
                </div>
                <div class="col-sm-6 mb-2">
                  <div class="expertise-item">
                    <i class="fas fa-cloud text-amg-teal me-2"></i>
                    <span class="text-light-gray">Cloud Deployment</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="contact-info">
              <div class="row">
                <div class="col-sm-6 mb-3">
                  <div class="about-item racing-info">
                    <i class="fas fa-envelope text-amg-teal me-2"></i>
                    <span class="text-light-gray">oecophylla@example.com</span>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="about-item racing-info">
                    <i class="fas fa-globe text-amg-teal me-2"></i>
                    <span class="text-light-gray">oecophylla.my.id</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

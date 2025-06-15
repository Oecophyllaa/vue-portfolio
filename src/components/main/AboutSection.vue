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
              <i class="fas fa-code me-2"></i>Passionate Developer & Lifelong Learner
            </h3>
            <p class="text-light-gray mb-4">
              I'm a dedicated fullstack web developer currently studying at Politeknik Negeri
              Jember. My journey in programming started with curiosity and has evolved into a
              passion for creating innovative digital solutions.
            </p>
            <p class="text-light-gray mb-4">
              With expertise in modern web technologies like Laravel, Vue.js, and React, I enjoy
              building applications that solve real-world problems. I believe in writing clean,
              maintainable code and staying updated with the latest industry trends.
            </p>
            <div class="row mt-4">
              <div class="col-6 mb-3">
                <div class="about-item racing-info">
                  <i class="fas fa-birthday-cake text-amg-teal me-2"></i>
                  <span class="text-light-gray">Age: 21</span>
                </div>
              </div>
              <div class="col-6 mb-3">
                <div class="about-item racing-info">
                  <i class="fas fa-envelope text-amg-teal me-2"></i>
                  <span class="text-light-gray">oecophylla@example.com</span>
                </div>
              </div>
              <div class="col-6 mb-3">
                <div class="about-item racing-info">
                  <i class="fas fa-phone text-amg-teal me-2"></i>
                  <span class="text-light-gray">+62 xxx-xxxx-xxxx</span>
                </div>
              </div>
              <div class="col-6 mb-3">
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
  </section>
</template>

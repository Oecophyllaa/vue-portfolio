<script>
export default {
  name: 'ContactSection',
}
</script>

<template>
  <section id="contact" class="py-5 bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="section-title text-white">
            <i class="fas fa-handshake me-3 text-amg-teal"></i>Let's Connect
          </h2>
          <p class="text-light-gray">
            Ready to discuss your next project or collaboration opportunity
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="row g-4">
            <div class="col-md-4">
              <div class="contact-info text-center racing-contact">
                <div class="contact-icon mb-3">
                  <i class="fas fa-envelope fa-2x text-amg-teal pulse-icon"></i>
                </div>
                <h5 class="text-white mb-2">Email</h5>
                <p class="text-light-gray">hello.ranggaraditya@gmail.com</p>
                <small class="text-light-gray">Response within 24 hours</small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info text-center racing-contact">
                <div class="contact-icon mb-3">
                  <i class="fab fa-linkedin fa-2x text-amg-teal pulse-icon"></i>
                </div>
                <h5 class="text-white mb-2">LinkedIn</h5>
                <p class="text-light-gray">Professional Network</p>
                <small class="text-light-gray">Connect for opportunities</small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info text-center racing-contact">
                <div class="contact-icon mb-3">
                  <i class="fas fa-map-marker-alt fa-2x text-amg-teal pulse-icon"></i>
                </div>
                <h5 class="text-white mb-2">Location</h5>
                <p class="text-light-gray">Surabaya, Indonesia</p>
                <small class="text-light-gray">Available for remote work</small>
              </div>
            </div>
          </div>

          <!-- Professional Links -->
          <div class="row mt-5">
            <div class="col-12 text-center">
              <h5 class="text-white mb-4">Professional Profiles</h5>
              <div class="social-links d-flex justify-content-center flex-wrap gap-3">
                <a href="https://github.com/Oecophyllaa" class="social-link racing-social">
                  <i class="fab fa-github fa-2x"></i>
                  <span class="d-block mt-2 small">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/oecophylla/" class="social-link racing-social">
                  <i class="fab fa-linkedin fa-2x"></i>
                  <span class="d-block mt-2 small">LinkedIn</span>
                </a>
                <a href="#" class="social-link racing-social">
                  <i class="fab fa-stack-overflow fa-2x"></i>
                  <span class="d-block mt-2 small">Stack Overflow</span>
                </a>
                <a href="#" class="social-link racing-social">
                  <i class="fab fa-dev fa-2x"></i>
                  <span class="d-block mt-2 small">Dev.to</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

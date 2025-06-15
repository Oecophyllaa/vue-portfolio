<script>
import { Modal } from 'bootstrap'

export default {
  name: 'CertificationsSection',
  setup() {
    const certifications = [
      {
        id: 1,
        title: 'Laravel Certified Developer',
        issuer: 'Laravel',
        year: '2023',
        icon: 'fab fa-laravel',
        image: 'https://placehold.co/600x400?text=Laravel+Certificate',
      },
      {
        id: 2,
        title: 'Vue.js Fundamentals',
        issuer: 'Vue School',
        year: '2023',
        icon: 'fab fa-vuejs',
        image: 'https://placehold.co/600x400?text=Vue.js+Certificate',
      },
      {
        id: 3,
        title: 'Web Development Bootcamp',
        issuer: 'Udemy',
        year: '2022',
        icon: 'fas fa-code',
        image: 'https://placehold.co/600x400?text=Web+Dev+Certificate',
      },
      {
        id: 4,
        title: 'Database Design',
        issuer: 'Coursera',
        year: '2022',
        icon: 'fas fa-database',
        image: 'https://placehold.co/600x400?text=Database+Certificate',
      },
      {
        id: 5,
        title: 'Git & GitHub Mastery',
        issuer: 'GitHub',
        year: '2021',
        icon: 'fab fa-github',
        image: 'https://placehold.co/600x400?text=Git+Certificate',
      },
    ]

    const openCertificate = (cert) => {
      // Update modal content
      const modalTitle = document.querySelector('#certificateModal .modal-title')
      const modalImage = document.querySelector('#certificateModal img')
      const modalCertTitle = document.querySelector('#certificateModal h4')
      const modalIssuer = document.querySelector('#certificateModal p')
      const modalYear = document.querySelector('#certificateModal .badge')

      if (modalTitle) modalTitle.textContent = cert.title
      if (modalImage) modalImage.src = cert.image
      if (modalCertTitle) modalCertTitle.textContent = cert.title
      if (modalIssuer) modalIssuer.textContent = `Issued by: ${cert.issuer}`
      if (modalYear) modalYear.textContent = cert.year

      // Show modal using imported Modal class
      const modal = new Modal(document.getElementById('certificateModal'))
      modal.show()
    }

    return { certifications, openCertificate }
  },
}
</script>

<template>
  <section id="certifications" class="py-5 bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="section-title text-white">Certifications</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="row g-4">
            <div class="col-md-6 col-lg-4" v-for="cert in certifications" :key="cert.id">
              <div
                class="certificate-card bg-dark-card p-4 rounded-4 h-100 certificate-hover"
                @click="openCertificate(cert)"
              >
                <div class="certificate-icon text-center mb-3">
                  <i :class="cert.icon + ' fa-3x text-amg-teal'"></i>
                </div>
                <h5 class="text-white text-center mb-3">{{ cert.title }}</h5>
                <p class="text-light-gray text-center mb-3">{{ cert.issuer }}</p>
                <div class="text-center">
                  <span class="badge bg-amg-teal text-dark">{{ cert.year }}</span>
                </div>
                <div class="certificate-overlay">
                  <i class="fas fa-eye fa-2x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

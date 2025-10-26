<script>
import { Modal } from 'bootstrap'
import { onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'CertificationsSection',
  setup() {
    const certificationsContainer = ref(null)
    const canScrollLeft = ref(false)
    const canScrollRight = ref(true)
    const scrollThumbWidth = ref(30)
    const scrollThumbPosition = ref(0)

    const certifications = [
      {
        id: 1,
        title: 'Junior Web Developer',
        issuer: 'BNSP',
        date: 'Feb 2024',
        icon: 'fas fa-code',
        color: '#7952B3',
        description:
          'An official certification demonstrating mastery of fundamental web development, including HTML, CSS, JavaScript, as well as understanding of backend concepts and web application deployment.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Backend Basics', 'Deployment'],
        credentialId: '-',
        validUntil: 'Feb 2027',
        image: '/certificates/junior-web-developer-bnsp.png',
      },
      {
        id: 2,
        title: 'Web Developer',
        issuer: 'BNSP',
        date: 'Aug 2025',
        icon: 'fas fa-code',
        color: '#0d6efd',
        description:
          'Validates advanced web development competencies: analyzing tools and scalability, selecting libraries/frameworks, designing UX, implementing structured and object‑oriented programming, SQL/database access and algorithms, debugging and static testing, code review, technology migration, multimedia programming, resource monitoring and alerting, and performing software updates.',
        skills: [
          'Tools & Scalability',
          'Libraries/Frameworks',
          'UX Design',
          'Structured & OOP Programming',
        ],
        credentialId: '-',
        validUntil: 'Aug 2028',
        image: '/certificates/web-developer.png',
      },
    ]

    const scrollLeft = () => {
      if (certificationsContainer.value) {
        certificationsContainer.value.scrollBy({
          left: -400,
          behavior: 'smooth',
        })
      }
    }

    const scrollRight = () => {
      if (certificationsContainer.value) {
        certificationsContainer.value.scrollBy({
          left: 400,
          behavior: 'smooth',
        })
      }
    }

    const updateScrollState = () => {
      if (certificationsContainer.value) {
        const container = certificationsContainer.value
        canScrollLeft.value = container.scrollLeft > 0
        canScrollRight.value = container.scrollLeft < container.scrollWidth - container.clientWidth

        // Update scroll indicator
        const scrollPercentage =
          container.scrollLeft / (container.scrollWidth - container.clientWidth)
        scrollThumbPosition.value = scrollPercentage * (100 - scrollThumbWidth.value)
      }
    }

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
      if (modalYear) modalYear.textContent = cert.date

      // Show modal using imported Modal class
      const modal = new Modal(document.getElementById('certificateModal'))
      modal.show()
    }

    onMounted(() => {
      if (certificationsContainer.value) {
        certificationsContainer.value.addEventListener('scroll', updateScrollState)
        updateScrollState()
      }
    })

    onUnmounted(() => {
      if (certificationsContainer.value) {
        certificationsContainer.value.removeEventListener('scroll', updateScrollState)
      }
    })

    return {
      certifications,
      certificationsContainer,
      canScrollLeft,
      canScrollRight,
      scrollThumbWidth,
      scrollThumbPosition,
      scrollLeft,
      scrollRight,
      openCertificate,
    }
  },
}
</script>

<template>
  <section id="certifications" class="py-5 bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="section-title text-white">
            <i class="fas fa-medal me-3 text-amg-teal"></i>Professional Certifications
          </h2>
          <p class="text-light-gray mt-3">Verified credentials and professional achievements</p>
        </div>
      </div>

      <!-- Certifications Scrollable Container -->
      <div class="certifications-container">
        <div class="certifications-scroll-wrapper">
          <div class="certifications-list" ref="certificationsContainer">
            <div
              class="certification-card"
              v-for="cert in certifications"
              :key="cert.id"
              @click="openCertificate(cert)"
            >
              <!-- Certificate Header -->
              <div class="cert-header d-flex align-items-start">
                <div class="cert-logo">
                  <div class="logo-container">
                    <i :class="cert.icon + ' cert-icon'" :style="{ color: cert.color }"></i>
                  </div>
                </div>
                <div class="cert-info flex-grow-1">
                  <h4 class="cert-title text-white mb-2">{{ cert.title }}</h4>
                  <h5 class="cert-issuer text-amg-teal mb-2">
                    <i class="fas fa-building me-2"></i>{{ cert.issuer }}
                  </h5>
                  <div class="cert-meta mb-3">
                    <span class="cert-date text-light-gray me-3">
                      <i class="fas fa-calendar me-1"></i>Issued {{ cert.date }}
                    </span>
                    <span class="cert-status badge bg-success">
                      <i class="fas fa-check-circle me-1"></i>Verified
                    </span>
                  </div>
                </div>
                <div class="cert-actions">
                  <button class="btn btn-outline-light btn-sm cert-action-btn">
                    <i class="fas fa-eye"></i>
                  </button>
                </div>
              </div>

              <!-- Certificate Body -->
              <div class="cert-body">
                <p class="cert-description text-light-gray mb-3">{{ cert.description }}</p>

                <!-- Skills/Technologies -->
                <div class="cert-skills mb-3" v-if="cert.skills">
                  <h6 class="text-amg-teal mb-2">
                    <i class="fas fa-tools me-2"></i>Skills Demonstrated
                  </h6>
                  <div class="skills-tags">
                    <span
                      v-for="skill in cert.skills"
                      :key="skill"
                      class="skill-tag badge bg-dark-secondary text-light me-2 mb-2"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>

                <!-- Certificate Details -->
                <div class="cert-details">
                  <div class="row">
                    <div class="col-sm-6 mb-2" v-if="cert.credentialId">
                      <small class="text-light-gray">
                        <i class="fas fa-id-card me-2"></i>
                        <strong>Credential ID:</strong> {{ cert.credentialId }}
                      </small>
                    </div>
                    <div class="col-sm-6 mb-2" v-if="cert.validUntil">
                      <small class="text-light-gray">
                        <i class="fas fa-clock me-2"></i>
                        <strong>Valid Until:</strong> {{ cert.validUntil }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Hover Overlay -->
              <div class="cert-overlay">
                <div class="overlay-content">
                  <i class="fas fa-eye fa-2x text-white mb-2"></i>
                  <p class="text-white mb-0">View Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Navigation -->
        <div class="scroll-navigation">
          <button class="scroll-btn scroll-left" @click="scrollLeft" :disabled="!canScrollLeft">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="scroll-btn scroll-right" @click="scrollRight" :disabled="!canScrollRight">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
          <div class="scroll-track">
            <div
              class="scroll-thumb"
              :style="{ width: scrollThumbWidth + '%', left: scrollThumbPosition + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

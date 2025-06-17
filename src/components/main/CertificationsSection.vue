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
        title: 'Bangun Web Booking Kos Modern dengan Laravel 11 dan Filament',
        issuer: 'BuildWithAngga',
        date: 'May 2025',
        icon: 'fab fa-laravel',
        color: '#FF2D20',
        description:
          'A comprehensive certification for building modern boardinghouse rent web applications using Laravel 11 and Filament, covering advanced backend development, RESTful APIs, authentication, and modern UI/UX practices.',
        skills: ['Laravel', 'Filament', 'PHP', 'REST API', 'Authentication', 'UI/UX'],
        credentialId: 'gHUIJvz3gx',
        validUntil: 'Lifetime',
        image: '/certificates/web-booking-kos.png',
      },
      {
        id: 2,
        title: 'Belajar Laravel 11, Filament, MySQL: Bikin Web Portal Berita',
        issuer: 'BuildWithAngga',
        date: 'Apr 2025',
        icon: 'fas fa-newspaper',
        color: '#007BFF',
        description:
          'Certification for building a modern news portal website using Laravel 11, Filament, and MySQL. Covers CRUD operations, database design, authentication, and dynamic content management for scalable web applications.',
        skills: ['Laravel', 'Filament', 'MySQL', 'CRUD', 'Authentication', 'Content Management'],
        credentialId: 'VFctXHQwXD',
        validUntil: 'Lifetime',
        image: '/certificates/web-portal-berita.png',
      },
      {
        id: 3,
        title: 'Full-Stack Laravel 11, React, TypeScript: Website Rent Office',
        issuer: 'BuildWithAngga',
        date: 'Apr 2025',
        icon: 'fas fa-building',
        color: '#28A745',
        description:
          'Certification for developing a full-stack office rental website using Laravel 11, React, and TypeScript. Covers RESTful API development, modern frontend integration, authentication, and scalable architecture best practices.',
        skills: [
          'Laravel',
          'React',
          'TypeScript',
          'REST API',
          'Authentication',
          'Full-Stack Development',
        ],
        credentialId: 'mqfJ4EK2Cx',
        validUntil: 'Lifetime',
        image: '/certificates/website-rent-office.png',
      },
      {
        id: 4,
        title: 'Bootcamp Full-Stack Web Developer: Laravel Vue Nuxt JS Website HRIS',
        issuer: 'BuildWithAngga',
        date: 'Aug 2024',
        icon: 'fab fa-vuejs',
        color: '#41B883',
        description:
          'Certification for building a modern HRIS (Human Resources Information System) website using Laravel, Vue.js, and Nuxt.js. Covers full-stack development, SSR, authentication, RESTful APIs, and best practices for scalable enterprise web applications.',
        skills: [
          'Laravel',
          'Vue.js',
          'Nuxt.js',
          'Full-Stack Development',
          'SSR',
          'REST API',
          'Authentication',
          'Enterprise Web',
        ],
        credentialId: 'OgVtiSK84T',
        validUntil: 'Lifetime',
        image: '/certificates/website-hris.png',
      },
      {
        id: 5,
        title: 'Web Development Laravel 11, Filament, MySQL: Sewa Barang App',
        issuer: 'BuildWithAngga',
        date: 'Jul 2024',
        icon: 'fas fa-box-open',
        color: '#FFC107',
        description:
          'Certification for developing a modern item rental application using Laravel 11, Filament, and MySQL. Covers backend and frontend integration, CRUD operations, database management, authentication, and best practices for scalable web applications.',
        skills: [
          'Laravel',
          'Filament',
          'MySQL',
          'CRUD',
          'Authentication',
          'Database Management',
          'Web Application',
        ],
        credentialId: 'ly9kFs4r5v',
        validUntil: 'Lifetime',
        image: '/certificates/web-sewa-barang.png',
      },
      {
        id: 6,
        title: 'Guest Speaker - Kamis Belajar',
        issuer: 'Campaign',
        date: 'Jun 2024',
        icon: 'fas fa-chalkboard-teacher',
        color: '#00B894',
        description:
          'Recognition as a guest speaker at the Kamis Belajar event, sharing practical experience and knowledge on engaging users in the mobile age through effective website strategies and the use of Progressive Web Apps (PWAs) to captivate modern audiences.',
        credentialId: '-',
        validUntil: 'Lifetime',
        skills: ['Public Speaking', 'Web Engagement', 'PWA', 'User Experience'],
        image: '/certificates/guest-speaker-campaign.png',
      },
      {
        id: 7,
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
        id: 8,
        title: 'Full-Stack Web Developer: Bangun Website Freelancer',
        issuer: 'BuildWithAngga',
        date: 'Jan 2024',
        icon: 'fas fa-briefcase',
        color: '#17A2B8',
        description:
          'Certification for building a modern freelancer website using Laravel and Vue.js, covering full-stack development, authentication, RESTful APIs, and best practices for scalable web applications.',
        skills: [
          'Laravel',
          'Vue.js',
          'Full-Stack Development',
          'REST API',
          'Authentication',
          'Web Application',
        ],
        credentialId: 'DvfQnhazph',
        validUntil: 'Lifetime',
        image: '/certificates/website-freelancer.png',
      },
      {
        id: 9,
        title: 'Full-Stack Laravel: Forum Web App',
        issuer: 'BuildWithAngga',
        date: 'Sep 2023',
        icon: 'fas fa-comments',
        color: '#6C63FF',
        description:
          'Certification for developing a modern forum web application using Laravel. Covers backend and frontend integration, user authentication, CRUD operations, RESTful APIs, and best practices for building interactive online communities.',
        skills: [
          'Laravel',
          'Forum Development',
          'REST API',
          'Authentication',
          'CRUD',
          'Web Application',
        ],
        credentialId: 'fImyVez1JF',
        validUntil: 'Lifetime',
        image: '/certificates/forum-web-app.png',
      },
      {
        id: 10,
        title: 'Bootcamp Full-Stack Web Developer: Sewa Mobil',
        issuer: 'BuildWithAngga',
        date: 'Jun 2023',
        icon: 'fas fa-car-side',
        color: '#FF9800',
        description:
          'Certification for building a modern car rental web application using Laravel. Covers full-stack development, CRUD operations, authentication, RESTful APIs, database management, and best practices for scalable and user-friendly web solutions.',
        skills: [
          'Laravel',
          'Full-Stack Development',
          'CRUD',
          'Authentication',
          'REST API',
          'Database Management',
          'Web Application',
        ],
        credentialId: '8V6u98y8rG',
        validUntil: 'Lifetime',
        image: '/certificates/web-sewa-mobil.png',
      },
      {
        id: 11,
        title: 'Full-Stack Web Designer',
        issuer: 'BuildWithAngga',
        date: 'Jun 2023',
        icon: 'fas fa-paint-brush',
        color: '#E91E63',
        description:
          'Certification for mastering full-stack web design, covering modern UI/UX principles, responsive layouts, frontend and backend integration, and best practices for creating visually appealing and user-friendly web applications.',
        skills: [
          'UI/UX Design',
          'Responsive Design',
          'HTML',
          'CSS',
          'JavaScript',
          'Frontend Development',
          'Backend Integration',
        ],
        credentialId: 'IHKQPUtAza',
        validUntil: 'Lifetime',
        image: '/certificates/full-stack-web-designer.png',
      },
      {
        id: 12,
        title: 'Full-Stack Website Laravel Vue JS',
        issuer: 'BuildWithAngga',
        date: 'Feb 2023',
        icon: 'fab fa-vuejs',
        color: '#42b883',
        description:
          'Certification for building a full-stack website using Laravel and Vue.js, covering modern frontend and backend integration, RESTful APIs, authentication, and best practices for scalable web applications.',
        skills: [
          'Laravel',
          'Vue.js',
          'Full-Stack Development',
          'REST API',
          'Authentication',
          'Frontend Integration',
          'Backend Integration',
        ],
        credentialId: 'zz7fz7gPMa',
        validUntil: 'Lifetime',
        image: '/certificates/full-stack-laravel-vue-js.png',
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

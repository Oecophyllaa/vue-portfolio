<script>
import { ref } from 'vue'

export default {
  name: 'ProjectSection',
  setup() {
    const activeFilter = ref('all')

    const projects = [
      {
        id: 1,
        title: 'Areahub Gym Management',
        description:
          'A modern web application for managing gym operations, including member registration, class scheduling, payment processing, and fitness tracking.',
        image: '/projects/areahub-web.png',
        category: 'web',
        technologies: ['Laravel', 'Filament', 'MySQL', 'Xendit'],
        demo: 'https://areahub.id/home',
        github: '#',
        year: '2026',
      },
      {
        id: 2,
        title: 'MyEnviro',
        description:
          'A web application for outsourcing environmental services including task and document management. This is a rest api that will be used by mobile applications.',
        image: '/projects/myenviro-web.png',
        category: 'api',
        technologies: ['Laravel', 'REST API'],
        demo: '#',
        github: '#',
        year: '2026',
      },
      {
        id: 3,
        title: 'News Portal Web',
        description:
          'A modern news portal web application that enables users to read, search, and manage news articles, featuring an intuitive interface, category filtering, and admin management tools.',
        image: '/projects/web-maga.png',
        category: 'web',
        technologies: ['Laravel', 'Filament', 'MySQL', 'CMS'],
        demo: '#',
        github: 'https://github.com/Oecophyllaa/filament-portal-berita',
        year: '2024',
      },
    ]

    const filteredProjects = ref(projects)

    const filterProjects = (category) => {
      activeFilter.value = category
      if (category === 'all') {
        filteredProjects.value = projects
      } else {
        filteredProjects.value = projects.filter((project) => project.category === category)
      }
    }

    return { projects, filteredProjects, activeFilter, filterProjects }
  },
}
</script>

<template>
  <section id="projects" class="py-5 bg-dark-secondary">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="section-title text-white">
            <i class="fas fa-rocket me-3 text-amg-teal"></i>Featured Projects
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-4">
          <div class="project-filters text-center">
            <div class="btn-group flex-wrap" role="group">
              <button
                class="btn btn-outline-light me-2 mb-2 racing-filter"
                :class="{ 'btn-amg-teal text-dark': activeFilter === 'all' }"
                @click="filterProjects('all')"
              >
                <i class="fas fa-th me-1"></i>All
              </button>
              <button
                class="btn btn-outline-light me-2 mb-2 racing-filter"
                :class="{ 'btn-amg-teal text-dark': activeFilter === 'web' }"
                @click="filterProjects('web')"
              >
                <i class="fas fa-globe me-1"></i>Web App
              </button>
              <button
                class="btn btn-outline-light me-2 mb-2 racing-filter"
                :class="{ 'btn-amg-teal text-dark': activeFilter === 'mobile' }"
                @click="filterProjects('mobile')"
              >
                <i class="fas fa-mobile-alt me-1"></i>Mobile
              </button>
              <button
                class="btn btn-outline-light me-2 mb-2 racing-filter"
                :class="{ 'btn-amg-teal text-dark': activeFilter === 'api' }"
                @click="filterProjects('api')"
              >
                <i class="fas fa-cogs me-1"></i>API
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="project in filteredProjects" :key="project.id">
          <div
            class="project-card bg-dark-card rounded-4 overflow-hidden h-100 project-hover racing-project"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" class="project-img" />
              <div class="project-overlay">
                <div class="project-actions">
                  <a
                    :href="project.demo"
                    class="btn btn-amg-teal me-2 racing-action"
                    target="_blank"
                  >
                    <i class="fas fa-eye"></i>
                  </a>
                  <a
                    :href="project.github"
                    class="btn btn-outline-light racing-action"
                    target="_blank"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content p-4">
              <h5 class="text-white mb-2">{{ project.title }}</h5>
              <p class="text-light-gray mb-3 project-description">{{ project.description }}</p>
              <div class="project-tech mb-3">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="badge bg-dark-secondary text-light me-2 mb-2 tech-badge"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="project-meta d-flex justify-content-between align-items-center">
                <span class="badge bg-amg-teal text-dark racing-category">{{
                  project.category
                }}</span>
                <small class="text-light-gray">{{ project.year }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

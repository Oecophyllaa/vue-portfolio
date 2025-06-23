<script>
export default {
  name: 'SkillsSection',
  setup() {
    const skillCategories = [
      {
        name: 'Frontend Development',
        icon: 'fas fa-palette',
        skills: [
          { name: 'HTML5', icon: 'fab devicon-html5-plain colored' },
          { name: 'CSS3', icon: 'fab devicon-css3-plain colored' },
          { name: 'JavaScript', icon: 'fab devicon-javascript-plain colored' },
          { name: 'Bootstrap', icon: 'fab devicon-bootstrap-plain colored' },
          { name: 'Tailwind', icon: 'fab devicon-tailwindcss-original colored' },
          { name: 'Vue.js', icon: 'fab devicon-vuejs-plain colored' },
          { name: 'React', icon: 'fab devicon-react-original colored' },
          { name: 'Nuxt.js', icon: 'fab devicon-nuxtjs-plain colored' },
        ],
      },
      {
        name: 'Backend Development',
        icon: 'fas fa-server',
        skills: [
          { name: 'PHP', icon: 'fab devicon-php-plain colored' },
          { name: 'Laravel', icon: 'fab devicon-laravel-original colored' },
          { name: 'CodeIgniter', icon: 'fab devicon-codeigniter-plain colored' },
          { name: 'Node.js', icon: 'fab devicon-nodejs-plain colored' },
          { name: 'Adonis.js', icon: 'fab devicon-adonisjs-original colored' },
          { name: 'MySQL', icon: 'fas devicon-mysql-original colored' },
          { name: 'PostgreSQL', icon: 'fab devicon-postgresql-plain colored' },
          { name: 'MongoDB', icon: 'fas devicon-mongodb-plain colored' },
        ],
      },
      {
        name: 'DevOps & Tools',
        icon: 'fas fa-wrench',
        skills: [
          { name: 'Git', icon: 'fab devicon-git-plain colored' },
          { name: 'GitHub', icon: 'fab devicon-github-original colored' },
          { name: 'Gitlab', icon: 'fab devicon-gitlab-plain colored' },
          { name: 'VS Code', icon: 'fab devicon-vscode-plain colored' },
          { name: 'Postman', icon: 'fab devicon-postman-plain colored' },
          { name: 'Docker', icon: 'fab devicon-docker-plain colored' },
        ],
      },
    ]

    return { skillCategories }
  },
}
</script>

<template>
  <section id="skills" class="py-5 bg-dark-secondary">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="section-title text-white">
            <i class="fas fa-tools me-3 text-amg-teal"></i>Technical Skills & Technologies
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="skills-categories">
            <div
              class="skill-category mb-5"
              v-for="category in skillCategories"
              :key="category.name"
            >
              <h4 class="text-amg-teal mb-4 text-center category-title">
                <i :class="category.icon + ' me-2'"></i>{{ category.name }}
              </h4>
              <div class="row g-3">
                <div
                  class="col-6 col-md-4 col-lg-3"
                  v-for="skill in category.skills"
                  :key="skill.name"
                >
                  <div class="skill-card bg-dark-card p-3 rounded-3 text-center h-100 racing-skill">
                    <i :class="skill.icon + ' fa-2x mb-3 skill-icon'"></i>
                    <h6 class="text-white mb-2 skill-name">{{ skill.name }}</h6>
                    <small class="text-light-gray skill-level">{{ skill.level }}</small>
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

<script>
export default {
  name: 'SkillsSection',
  setup() {
    const skillCategories = [
      {
        name: 'Frontend Development',
        skills: [
          { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
          { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
          { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
          { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
          { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' },
          { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        ],
      },
      {
        name: 'Backend Development',
        skills: [
          { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
          { name: 'Laravel', icon: 'fab fa-laravel', color: '#FF2D20' },
          { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
          { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
          { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
        ],
      },
      {
        name: 'Tools & Others',
        skills: [
          { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
          { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
          { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
          { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' },
          { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
          { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624' },
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
            <i class="fas fa-tools me-3 text-amg-teal"></i>Skills & Technologies
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
                    <i
                      :class="skill.icon + ' fa-2x mb-3 skill-icon'"
                      :style="{ color: skill.color }"
                    ></i>
                    <h6 class="text-white mb-0">{{ skill.name }}</h6>
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

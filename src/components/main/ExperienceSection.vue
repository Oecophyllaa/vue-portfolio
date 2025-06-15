<script>
export default {
  name: 'ExperienceSection',
  setup() {
    const experiences = [
      {
        position: 'Freelance Web Developer',
        company: 'Self-Employed',
        period: '2023 - Present',
        description:
          'Developing custom web applications for various clients using modern technologies. Focus on creating responsive, user-friendly interfaces and robust backend systems.',
        skills: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'Git'],
      },
      {
        position: 'IT Support',
        company: 'Brilliant International Education Plus',
        period: 'Oct 2024 - Feb 2025',
        description:
          'Assisted in developing and maintaining company websites. Gained hands-on experience with full-stack development and agile methodologies.',
        skills: ['Technical Support', 'IT Services', 'Maintenance', 'Web Development'],
      },
      {
        position: 'Student Assistant',
        company: 'Politeknik Negeri Jember',
        period: '2021 - 2022',
        description:
          'Helped fellow students with programming assignments and conducted basic web development workshops.',
        skills: ['Teaching', 'PHP', 'Database Design', 'Problem Solving'],
      },
    ]

    return { experiences }
  },
}
</script>

<template>
  <section id="experience" class="py-5 bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="section-title text-white">Experience</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="timeline">
            <div class="timeline-item" v-for="(exp, index) in experiences" :key="index">
              <div class="timeline-marker">
                <i class="fas fa-briefcase"></i>
              </div>
              <div class="timeline-content bg-dark-card p-4 rounded-4">
                <div class="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h4 class="text-white mb-1">{{ exp.position }}</h4>
                    <h5 class="text-amg-teal mb-2">{{ exp.company }}</h5>
                  </div>
                  <span class="badge bg-amg-teal text-dark">{{ exp.period }}</span>
                </div>
                <p class="text-light-gray mb-3">{{ exp.description }}</p>
                <div class="skills-used">
                  <span
                    v-for="skill in exp.skills"
                    :key="skill"
                    class="badge bg-dark-secondary text-light me-2 mb-2"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

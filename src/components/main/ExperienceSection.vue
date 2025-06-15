<script>
export default {
  name: 'ExperienceSection',
  setup() {
    const experiences = [
      {
        position: 'Freelance Web Developer',
        company: 'Self-Employed',
        period: 'Jan 2023 - Present',
        description:
          'Developing custom web applications for various clients using modern technologies. Focus on creating responsive, user-friendly interfaces and robust backend systems.',
        skills: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'Git'],
      },
      {
        position: 'Programming Teacher',
        company: 'SMK Senopati Sedati',
        period: 'Apr 2025 - May 2025',
        description:
          'Taught advanced SQL and MS Excel techniques, including complex queries, pivot tables, and dynamic charts for effective data management and analysis, by designing interactive digital learning modules and implementing IT tools for assessment.',
        skills: ['Teaching', 'Database Design', 'MySQL', 'Ms Office'],
      },
      {
        position: 'IT Support Officer',
        company: 'Brilliant International Education Plus',
        period: 'Oct 2024 - Feb 2025',
        description:
          'Spearheaded significant improvements in IT systems and user support, notably reducing registration website bugs by 40% and downtime by 50%, while effectively resolving over 150 monthly technical support requests and contributing to enhanced data security for over 500 users.',
        skills: ['Technical Support', 'IT Services', 'Maintenance', 'Web Development'],
      },
      {
        position: 'IT Support Intern',
        company: 'Brilliant English Course',
        period: 'Aug 2024 - Dec 2024',
        description:
          'Successfully developed and maintained critical web systems for Brilliant English Course, including a comprehensive member permit system managing over 2,000 records, ongoing support for 10+ websites, and custom registration sites for 10+ affiliates, all while resolving over 50 critical issues on the primary registration website.',
        skills: ['Web Development', 'Maintenance', 'Bug Fix'],
      },
      {
        position: 'Full Stack Web Developer Intern',
        company: 'ADS Digital Partner',
        period: 'Feb 2024 - Jun 2024',
        description:
          'Collaborated on the development, deployment, and maintenance of the Medifirst web application, utilizing the Laravel framework with Eloquent ORM and performing essential bug fixes.',
        skills: ['Web Development', 'Laravel', 'Team Works', 'Problem Solving'],
      },
      {
        position: 'Full Stack Web Developer Intern',
        company: 'PT. Hendevane Indonesia',
        period: 'Aug 2023 - Dec 2023',
        description:
          'Led a dynamic team in developing RentDrive, a sophisticated car rental information system using Laravel and Bootstrap, integrating Midtrans for payments, designing robust API endpoints, and ensuring optimal performance through comprehensive Postman testing.',
        skills: ['Web Development', 'Laravel', 'Bootstrap', 'Payment Gateway', 'Rest API'],
      },
      {
        position: 'Extracurricular Tutor',
        company: 'SMK Senopati Sedati',
        period: 'Oct 2022 - May 2023',
        description:
          'Guided and instructed students on foundational web programming concepts including HTML, CSS, JavaScript, and PHP, sharing practical coding tips that fostered their enthusiasm and growth in web development.',
        skills: ['Teaching', 'HTML', 'CSS', 'Javascript', 'PHP'],
      },
      {
        position: 'PHP Web Developer Intern',
        company: 'PT. Profio Teknova Indonesia',
        period: 'Jan 2021 - Mar 2021',
        description:
          'As part of my internship experience, I was assigned tasks to create a simple landing page using Bootstrap and Laravel. Additionally, I was entrusted with copywriting tasks for articles on the blog page of simara.id.',
        skills: ['PHP', 'Web Development', 'Laravel', 'Copywriting'],
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
          <h2 class="section-title text-white">
            <i class="fas fa-road me-3 text-amg-teal"></i>Experience Journey
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="racing-timeline">
            <div
              class="timeline-item racing-milestone"
              v-for="(exp, index) in experiences"
              :key="index"
            >
              <div class="timeline-marker racing-checkpoint">
                <i class="fas fa-flag text-dark"></i>
              </div>
              <div class="timeline-content bg-dark-card p-4 rounded-4 racing-card">
                <div class="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h4 class="text-white mb-1">{{ exp.position }}</h4>
                    <h5 class="text-amg-teal mb-2">
                      <i class="fas fa-building me-2"></i>{{ exp.company }}
                    </h5>
                  </div>
                  <span class="badge bg-amg-teal text-dark racing-badge">{{ exp.period }}</span>
                </div>
                <p class="text-light-gray mb-3">{{ exp.description }}</p>
                <div class="skills-used">
                  <span
                    v-for="skill in exp.skills"
                    :key="skill"
                    class="badge bg-dark-secondary text-light me-2 mb-2 skill-tag"
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

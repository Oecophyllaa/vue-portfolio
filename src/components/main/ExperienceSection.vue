<script>
export default {
  name: 'ExperienceSection',
  setup() {
    const experiences = [
      {
        position: 'Web Developer',
        company: 'PT Xeno Persada Teknologi',
        period: 'Nov 2025 - Present',
        description:
          "Ensured high system stability for the MyEnviro project by consistently meeting SLA targets, resolving critical issues within 24 hours, and achieving a Zero Recurring Bug milestone through comprehensive Root Cause Analysis (RCA). Additionally, drove the ARHUB project's success by delivering 80% of planned tasks on time with zero critical bugs, while strengthening deployment integrity through rigorous self-reviews, database verifications, and structured checklists for seamless post-launch stability.",
        skills: ['Laravel', 'API Development', 'Problem Solving', 'Web Development'],
      },
      {
        position: 'Freelance Trainer',
        company: 'Flashcom Indonesia',
        period: 'Nov 2025 - Jan 2026',
        description:
          'As a Freelance Trainer at Flashcom Indonesia, responsible for teaching PHP and Laravel from beginner to intermediate levels. Designed curricula and practical materials (CRUD, routing, Eloquent, authentication, middleware, service container), facilitated hands-on workshops, guided participants through real projects, conducted competency evaluations, and provided mentoring and troubleshooting to improve programming skills and job readiness.',
        skills: ['PHP', 'Laravel', 'Eloquent ORM', 'Teaching & Curriculum Design'],
      },
      {
        position: 'IT Support',
        company: 'Brilliant International Education Plus',
        period: 'Dec 2024 - Feb 2025',
        description:
          'Spearheaded significant improvements in IT systems and user support, notably reducing registration website bugs by 40% and downtime by 50%, while effectively resolving over 150 monthly technical support requests and contributing to enhanced data security for over 500 users.',
        skills: ['Technical Support', 'IT Services', 'Maintenance', 'Web Development'],
      },
      {
        position: 'Junior Web Developer',
        company: 'Brilliant English Course',
        period: 'Aug 2024 - Dec 2024',
        description:
          'Successfully developed and maintained critical web systems for Brilliant English Course, including a comprehensive member permit system managing over 2,000 records, ongoing support for 10+ websites, and custom registration sites for 10+ affiliates, all while resolving over 50 critical issues on the primary registration website.',
        skills: ['Web Development', 'Maintenance', 'Bug Fix'],
      },
      {
        position: 'Full Stack Web Developer',
        company: 'PT Adma Digital Solusi',
        period: 'Feb 2024 - Jun 2024',
        description:
          'Collaborated on the development, deployment, and maintenance of the Medifirst web application, utilizing the Laravel framework with Eloquent ORM and performing essential bug fixes.',
        skills: ['Web Development', 'Laravel', 'Team Works', 'Problem Solving'],
      },
      {
        position: 'Full Stack Web Developer',
        company: 'PT Hendevane Indonesia',
        period: 'Aug 2023 - Dec 2023',
        description:
          'Led a dynamic team in developing RentDrive, a sophisticated car rental information system using Laravel and Bootstrap, integrating Midtrans for payments, designing robust API endpoints, and ensuring optimal performance through comprehensive Postman testing.',
        skills: ['Web Development', 'Laravel', 'Bootstrap', 'Payment Gateway', 'Rest API'],
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
            <i class="fas fa-road me-3 text-amg-teal"></i>Professional Journey
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
                <div
                  class="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3"
                >
                  <div class="mb-2 mb-md-0">
                    <h4 class="text-white mb-1">{{ exp.position }}</h4>
                    <h5 class="text-amg-teal mb-2">
                      <i class="fas fa-building me-2"></i>{{ exp.company }}
                    </h5>
                  </div>
                  <span class="badge bg-amg-teal text-dark racing-badge">{{ exp.period }}</span>
                </div>
                <p class="text-light-gray mb-3">{{ exp.description }}</p>

                <!-- Key Achievements -->
                <div class="achievements mb-3" v-if="exp.achievements">
                  <h6 class="text-amg-teal mb-2">
                    <i class="fas fa-trophy me-2"></i>Key Achievements
                  </h6>
                  <ul class="text-light-gray mb-0">
                    <li v-for="achievement in exp.achievements" :key="achievement" class="mb-1">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>

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

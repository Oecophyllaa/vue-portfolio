<script>
import ContactSection from '@/components/main/ContactSection.vue'
import AboutSection from '@/components/main/AboutSection.vue'
import AppNavigation from '@/components/main/AppNavigation.vue'
import CertificationsSection from '@/components/main/CertificationsSection.vue'
import ExperienceSection from '@/components/main/ExperienceSection.vue'
import HeroSection from '@/components/main/HeroSection.vue'
import ProjectSection from '@/components/main/ProjectSection.vue'
import SkillsSection from '@/components/main/SkillsSection.vue'
import AppFooter from '@/components/main/AppFooter.vue'
import CertificateModal from '@/components/extras/CertificateModal.vue'
import FloatingButtons from '@/components/extras/FloatingButtons.vue'

export default {
  name: 'HomeView',
  components: {
    /* Main Components */
    AppNavigation,
    HeroSection,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    CertificationsSection,
    ProjectSection,
    ContactSection,
    AppFooter,

    /* Extras */
    CertificateModal,
    FloatingButtons,
  },
}
</script>

<template>
  <div class="home">
    <!-- Main Components -->
    <AppNavigation />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <CertificationsSection />
    <ProjectSection />
    <ContactSection />
    <AppFooter />

    <!-- Extras -->
    <CertificateModal />
    <FloatingButtons />

    <!-- F1 Racing Elements -->
    <div class="racing-elements">
      <div class="racing-stripe racing-stripe-1"></div>
      <div class="racing-stripe racing-stripe-2"></div>
      <div class="racing-stripe racing-stripe-3"></div>
    </div>
  </div>
</template>

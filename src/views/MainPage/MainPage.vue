<script setup>
import { onMounted, ref } from 'vue'
import HeroSection from '@/components/HeroSection/HeroSection.vue'
import BenefitSection from '@/components/BenefitSection/BenefitSection.vue'
import ServiceSection from '@/components/ServiceSection/ServiceSection.vue'
import SupportSection from '@/components/SupportSection/SupportSection.vue'
import PromoSection from '@/components/PromoSection/PromoSection.vue'

const benefitRef = ref(null)
const serviceRef = ref(null)
const supportRef = ref(null)
const promoRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.5
  })

  const sections = [benefitRef.value, serviceRef.value, supportRef.value, promoRef.value]
  sections.forEach(section => {
    if (section) {
      observer.observe(section)
    }
  })
})
</script>

<template>
	<HeroSection />
	<div ref="benefitRef" class="animate-section">
		<BenefitSection />
	</div>
	<div ref="serviceRef" class="animate-section">
		<ServiceSection />
	</div>
	<div ref="supportRef" class="animate-section">
		<SupportSection />
	</div>
	<div ref="promoRef" class="animate-section"> 
		<PromoSection />
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />
<script setup>
import FooterSection from '@/components/FooterSection/FooterScrion.vue'
import HeaderSection from '@/components/HeaderSection/HeaderSection.vue'
</script>

<template>
	<HeaderSection />

	<main class="container">
		<slot />
	</main>

	<FooterSection />
</template>
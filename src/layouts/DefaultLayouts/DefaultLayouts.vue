<script setup>
import FooterSection from '@/components/FooterSection/FooterSection.vue'
import HeaderSection from '@/components/HeaderSection/HeaderSection.vue'
</script>

<template>
	<HeaderSection />

	<main>
		<slot />
	</main>

	<FooterSection />
</template>
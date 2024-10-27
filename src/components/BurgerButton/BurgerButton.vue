<script setup>
import CrossIcon from '@/components/icons/CrossIcon.vue'
import BurgerIcon from '@/components/icons/BurgerIcon.vue'

const props = defineProps({
	open: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<button>
		<BurgerIcon v-if="!props.open" />
		<CrossIcon v-else />
	</button>
</template>

<style src="./styles.scss" lang="scss" scoped />
<script setup>

const emit = defineEmits(['close'])

const closeModal = () => {
	emit('close')
}
</script>

<template>
	<div 
		class="modal-overlay"
		@click="closeModal"
	>
		<slot />
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />
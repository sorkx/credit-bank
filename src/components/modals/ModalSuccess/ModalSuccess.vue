<script setup>
import ModalBase from '@/components/modals/ModalBase/ModalBase.vue'
import CheckIcon from '@/components/icons/CheckIcon.vue'

const emit = defineEmits(['close'])

const closeModal = () => {
	emit('close')
}
</script>

<template>
	<ModalBase @close="closeModal">
		<div class="success__content">
			<div class="success__checkmark">
				<CheckIcon />
			</div>
			<div class="success__title">
				Ваша заявка принята
			</div>
			<div class="success__subtitle">
				В ближайшее время с вами свяжется наш менеджер
			</div>
		</div>
	</ModalBase>
</template>

<style src="./styles.scss" lang="scss" scoped />
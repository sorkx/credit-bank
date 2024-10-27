<script setup>
import { ref, provide, watch, defineAsyncComponent, shallowRef } from 'vue'
import ModalForm from '@/components/modals/ModalForm/ModalForm.vue'
import { useScrollLock } from '@/composables/useScrollLock.js'

const showModal = ref(false)
const { lockScroll, unlockScroll } = useScrollLock()

provide('modal', {
  show: showModal,
})

const DefaultLayouts = defineAsyncComponent(() => import('@/layouts/DefaultLayouts/DefaultLayouts.vue'))

const pageLayout = shallowRef(DefaultLayouts)

watch(showModal, (newValue) => {
  if (newValue) {
    lockScroll()
  } else {
    unlockScroll()
  }
})
</script>

<template>
		<router-view v-slot="{ Component }">
			<component :is="pageLayout">
				<component :is="Component" />
			</component>
		</router-view>
		<ModalForm v-if="showModal" @close="showModal = false" />
</template>

<script setup>
import { inject, onMounted, onUnmounted } from 'vue'

const modal = inject('modal')
const { show: showModal } = modal

const props = defineProps({
	isOpen: {
		type: Boolean,
		default: false
	}
})

const emit = defineEmits(['update:isOpen'])

const closeSidebar = () => {
  emit('update:isOpen', false)
}

const sidebarContacts = [
	{
		title: 'По России',
		tel: '8 800 950 6570'
	},
	{
		title: 'По Миру',
		tel: '8 800 950 6570'
	}
]

const links = [
    { 
		hash: '#benefits', 
		text: 'Какие преимущества' 
	},
    { 
		hash: '#service', 
		text: 'Что вы получаете' 
	},
    { 
		hash: '#support', 
		text: 'Еще сюрпризы' 
	},
    {
		hash: '', 
		text: 'Оформить карту',
		isModal: true,

	}
]

const handleOpenModal = (event, navigate) => {
	showModal.value = true

	navigate(event)
}

const handleClickHash = async (hash) => {
	const sectionId = hash.replace('#', '')
	const element = document.getElementById(sectionId)

	if (element) {
		element.scrollIntoView({ 
			behavior: 'smooth',
		})
	}

	await new Promise(resolve => setTimeout(resolve, 100))

	closeSidebar()
}
</script>

<template>
	<div 
		class="sidebar"
		:class="{
			'sidebar--open': props.isOpen
		}"
	>
		<div class="sidebar__content">
			<template v-for="link in links" :key="link.hash">
				<router-link
					class="sidebar__link" 
					:to="link.hash"
					v-slot="{ navigate, href }"
					@click="handleClickHash(link.hash)" 
				>
					<template
						v-if="!link.isModal"
					>
						{{ link.text }}
					</template>
					<a
						v-else
						:href="href" 
						@click="handleOpenModal($event, navigate)"
					>
						{{ link.text }}
					</a>
				</router-link>
     		 </template>
		</div>
		<div class="sidebar__contacts">
			<div
				v-for="contact in sidebarContacts"
				:key="contact.title" 
				class="contact-block"
			>
				<h3>
					{{ contact.title }}
				</h3>
				<a :href="`tel:${contact.tel}`">
					{{ contact.tel }}
				</a>
			</div>
		</div>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />
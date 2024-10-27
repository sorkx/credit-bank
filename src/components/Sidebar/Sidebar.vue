<script setup>
import { inject } from 'vue'

const modal = inject('modal')
const { show: showModal } = modal

const props = defineProps({
	isOpen: {
		type: Boolean,
		default: false
	}
})

const handleClick = (event, navigate) => {
	showModal.value = true

	navigate(event)
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
					:to="link.hash"
					v-slot="{ navigate, href }"
				>
					<a
						v-if="link.isModal" 
						:href="href" 
						@click="handleClick($event, navigate)"
					>
						{{ link.text }}
					</a>
					<template v-else>
						{{ link.text }}
					</template>
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
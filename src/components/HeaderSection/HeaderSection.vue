<script setup>
import Sidebar  from '@/components/Sidebar/Sidebar.vue'
import BurgerButton from '@/components/BurgerButton/BurgerButton.vue'
import { useSidebar } from '@/composables/useSidebar.js'

const { isOpen, toggleSidebar } = useSidebar()

</script>

<template>
	<header class="header container">
		<div class="header__content">
			<BurgerButton
				:open="isOpen" 
				@click="toggleSidebar()" 
			/>
			<div class="header__logo">
				<img 
					src="@/assets/images/logo.png" 
					alt="Credit Europe Bank"
					width="296px"
					height="36px"
				/>
			</div>
		</div>
	</header>
	<Sidebar :is-open="isOpen" />
</template>

<style src="./styles.scss" lang="scss" scoped />
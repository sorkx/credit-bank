<script setup>
import MapIcon from '@/components/icons/MapIcon.vue'
import ForkIcon from '@/components/icons/ForkIcon.vue'
import DiamondIcon from '@/components/icons/DiamondIcon.vue'
import DialogIcon from '@/components/icons/DialogIcon.vue'

const responsibilityList = [
	{
		title: 'Организует встречи, найдет гидов и переводчиков',
		icon: DialogIcon,
	},
	{
		title: 'Спланирует поездку по самым интересным местам вашего отдыха',
		icon: MapIcon,
	},
	{
		title: 'Достанет билеты на мероприятия, даже если их уже нет в продаже',
		icon: DiamondIcon,
	},
	{
		title: 'Закажет столик в ресторане, клубе или кафе',
		icon: ForkIcon,
	}
]
</script>

<template>
	<section
		id="support" 
		class="personal-assistant container"
	>
		<h2 class="personal-assistant__title indent-title">
			Персональный помощник
		</h2>
		<p class="personal-assistant__subtitle">
			Бесплатно для владельцев <strong>CARD PLUS</strong>
		</p>
		<div class="personal-assistant__content">
			<div class="personal-assistant__image">
				<img 
					src="@/assets/images/assistant.png" 
					alt="Personal Assistant"
				/>
			</div>
			<div class="responsibility__list">
				<div
					v-for="responsibility in responsibilityList"
					:key="responsibility.title" 
					class="responsibility__item"
				>
					<div class="responsibility__icon">
						<component :is="responsibility.icon" />
					</div>
					<p>
						{{ responsibility.title }}
					</p>
				</div>
			</div>
    	</div>
	</section>
</template>

<style src="./styles.scss" lang="scss" scoped />
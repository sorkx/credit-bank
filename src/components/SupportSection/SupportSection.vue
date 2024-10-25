<script setup>
import dialog from '@/assets/icons/dialog.svg'
import map from '@/assets/icons/map.svg'
import diamond from '@/assets/icons/diamond.svg'
import fork from '@/assets/icons/fork.svg'

const responsibilityList = [
	{
		title: 'Организует встречи, найдет гидов и переводчиков',
		icon: dialog,
	},
	{
		title: 'Спланирует поездку по самым интересным местам вашего отдыха',
		icon: map,
	},
	{
		title: 'Достанет билеты на мероприятия, даже если их уже нет в продаже',
		icon: diamond,
	},
	{
		title: 'Закажет столик в ресторане, клубе или кафе',
		icon: fork,
	}
]
</script>

<template>
	<section class="personal-assistant background-container">
		<h2 class="personal-assistant__title">
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
						<img 
							:src="responsibility.icon"
							alt="icon"
						/>
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
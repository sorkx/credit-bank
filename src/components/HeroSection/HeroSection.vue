<script setup>
import { inject } from 'vue'
import Button from '@/components/Button/Button.vue'

const modal = inject('modal')
const { show: showModal } = modal

const featureItems = [
	{
		value: '11%',
		description: 'Вернется за покупки милями',
	},
	{
		value: '0%',
		description: 'Беспроцентное снятие наличных по всему миру',
	},
	{
		value: '7%',
		description: 'До 7% на остаток по счету',
	},
	{
		value: '0₽',
		description: 'Бесплатное годовое обслуживание',
	}
]
</script>

<template>
	<section class="premium-card background-container">
		<div class="premium-card__content">
			<div class="premium-card__text">
				<div class="premium-card__header">
					<h1 class="premium-card__header--title">
						Твоя премиум карта
					</h1>
					<p class="premium-card__header--subtitle" >
						Лучшая карта для любителей путешествий
					</p>
				</div>
				
				<div class="premium-card__features">
					<div
						v-for="feature in featureItems"
						:key="feature.description" 
						class="feature"
					>
						<span class="feature__value">
							{{ feature.value }}
						</span>
						<span class="feature__description">
							{{ feature.description }}
						</span>
					</div>
				</div>
				<Button 
					modificator="main" 
					@click="showModal = true"
				>
					Заказать сейчас
				</Button>
			</div>

			<div class="premium-card__image">
				<img 
					src="@/assets/images/header-card.png" 
					alt="Credit Europe Bank Card Plus"
				/>
			</div>
		</div>
	</section>
  </template>

<style src="./styles.scss" lang="scss" scoped />
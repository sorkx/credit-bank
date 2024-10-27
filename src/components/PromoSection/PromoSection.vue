<script setup>
import { inject } from 'vue'
import Button from '@/components/Button/Button.vue'

const modal = inject('modal')
const { show: showModal } = modal

const benefits = [
	{
		title: '11%',
		description: 'Милями за услуги, оплаченные на travel.ru',
		preposition: true,
	},
	{
		title: '11%',
		description: 'Милями за любые покупки по карте',
		preposition: true,
	},
	{
		title: '1 = 1',
		description: 'Оплата милями билетов любых авиакомпаний по курсу 1 миля = 1 ₽',
		preposition: false,
	}
]

const cardItems = [
	{
		title: 'Стоимость карты в год (руб.)',
		values: [
			{
				value: '6 490 (без пакета услуг)',
			},
			{
				value: '4 990 (с пакетом услуг)',
			}
		]
	},
	{
		title: 'Приветственные мили (шт.)',
		value: '1 000',
	},
	{
		title: 'Мили за покупки',
		value: '5%',
	}
]
</script>

<template>
	<section
		id="promo" 
		class="promo container"
	>
		<h2 class="promo__title">
			Оформите свою новую карту для путешествий
		</h2>
		<div class="benefits">
			<div
				v-for="benefit in benefits"
				:key="benefit.title" 
				class="benefit__item"
			>
				<div class="benefit__title">
					<span 
						v-if="benefit.preposition"
						class="benefit__preposition"
					>
						до
					</span>
					<h2>
						{{ benefit.title }}
					</h2>
				</div>
				<p>
					{{ benefit.description }}
				</p>
			</div>
		</div>
		<div class="card-showcase">
			<div class="card-image">
				<img 
					src="@/assets/images/main-card.png" 
					alt="Credit Europe Bank Card"
				/>
			</div>
			<div class="card-options">
				<div class="card-types">
					<Button
						modificator="tab" 
						class="active"
					>
						Кредитная карта
					</Button>
					<Button modificator="tab">	
						Дебетовая карта
					</Button>
				</div>
				<Button 
					@click="showModal = true" 
					class="apply-button"
					modificator="main"
				>
					Отправить заявку
				</Button>
				<div class="card-details">
					<div
						v-for="item in cardItems"
						:key="item.title"	 
						class="card-item"
					>
						<span class="card-item__title">
							{{ item.title }}
						</span>
						<div
							v-if="item.values" 
							class="card-item__values"
						>
							<span
								v-for="value in item.values"
								:key="value" 
								class="card-item__value"
							>
								{{ value.value }}
							</span>
						</div>
						<template v-else>
							<span class="card-item__value">
								{{ item.value }}
							</span>
						</template>
					</div>
				</div>
				<a href="#" class="more-details">
					Все подробности
				</a>
			</div>
		</div>
	</section>
</template>

<style src="./styles.scss" lang="scss" scoped />
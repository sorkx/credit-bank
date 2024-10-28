<script setup>
import serviceUnlimited from '@/assets/images/service-unlimited.png'
import serviceBaggage from '@/assets/images/service-free-baggage.png'
import serviceFree from '@/assets/images/service-free.png'
import serviceTaxi from '@/assets/images/service-taxi.png'
import serviceCafe from '@/assets/images/service-cafe.png'
import serviceBusiness from '@/assets/images/service-business-hole.png'
import wheely from '@/assets/images/wheely.png'
import gett from '@/assets/images/gett.png'
import megafon from '@/assets/images/megafon.png'
import mts from '@/assets/images/mts.png'
import beeline from '@/assets/images/beeline.png'
import tele2 from '@/assets/images/tele2.png'

const serviceItems = [
	{
		title: 'Бесплатный безлимитный интернет в роуминге',
		img: serviceUnlimited,
		providers: [
			{
				name: 'Мегафон',
				icon: megafon,
			},
			{
				name: 'Tele2',
				icon: tele2,
			},
			{
				name: 'МТС',
				icon: mts,
			},
			{
				name: 'Билайн',
				icon: beeline,
			},
		]
	},
	{
		title: 'Бесплатная упаковка багажа',
		description: 'Держатели карт Visa Signature могут упаковать багаж в крупных аэропортах России',
		img: serviceBaggage,
	},
	{
		title: 'Бесплатный доступ в приложении App In The Air',
		description: 'Бесплатная премиум подписка при покупке авиабилетов на travel.alfabank.ru',
		img: serviceFree,
	},
	{
		title: 'Такси бизнес-класса со скидкой 20%',
		img: serviceTaxi,
		providers: [
			{
				name: 'wheely',
				icon: wheely,
			},
			{
				name: 'Gett',
				icon: gett,
			}
		]
	},
	{
		title: 'Скидка в ресторанах Novikov Group в аэропорту Шереметьево',
		description: '',
		img: serviceCafe,
	},
	{
		title: 'Доступ в бизнес-залы Priority Pass по всему миру',
		description: '',
		img: serviceBusiness,
	}
]
</script>

<template>
	<section
		id="service" 
		class="service container"
	>
		<h2 class="service__title indent-title">
			Мы позаботились, чтобы вы получили
		</h2>
		<div class="service__cards">
			<div
				v-for="service in serviceItems"
				:key="service.title" 
				class="service__card"
			>
				<img 
					:src="service.img" 
					alt="Image" 
					class="service__image"
				>
				<div class="service-item__content">
					<h3 class="service-item__title">
						{{ service.title }}
					</h3>
					<div 
						v-if="service.description || service.description === ''"
						class="service-item__description"
					>
						{{ service.description }}
					</div>
					<div
						v-else
						class="service-item__providers"
					>
						<img
							v-for="provider in service.providers"
							:key="provider.name" 
							:src="provider.icon"
							:alt="provider.name"
							class="service-item__icon"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style src="./styles.scss" lang="scss" scoped />
<script setup>
import TicketIcon from '@/components/icons/TicketIcon.vue'
import MilesIcon from '@/components/icons/MilesIcon.vue'
import InsuranceIcon from '@/components/icons/InsuranceIcon.vue'
import CurrencyIcon from '@/components/icons/CurrencyIcon.vue'

const benefitItems = [
	{
		title: 'Билеты любых авиакомпаний',
		text: 'Предложения от 300+ авиакомпаний, 185+ lowcost-перевозчиков, партнеры от 60 крупных российских туроператоров',
		icon: TicketIcon,
	},
	{
		title: 'Мили больше не сгорают',
		text: 'Мили, накопленные при оплате картой AIA Travel, не сгорают и остаются на вашем счете, пока вы не решите их потратить',
		icon: MilesIcon,
	},
	{
		title: 'Продвинутая страховка – бесплатно',
		text: 'Расширенная страховка для всей семьи с учетом экстремальных видов спорта и алкоголя',
		icon: InsuranceIcon,
	},
	{
		title: 'Доступ к счетам в разных валютах',
		text: 'Текущие счета в рублях, долларах США, евро, английских фунтах стерлингов и швейцарских франках открываются в любой момент',
		icon: CurrencyIcon,
	}
]
</script>


<template>
	<section 
		id="benefits"
		class="card-plus container"
	>
		<h2 class="card-plus__title">
			Путешествие мечты начинается с CARD PLUS
		</h2>
		<p class="card-plus__subtitle">
			Мы продумали каждую мелочь. Владельцы CARD PLUS получают особый пакет привилегий, необходимый для любого путешествия
		</p>
		<div class="card-plus__benefits">
			<div
				v-for="benefit in benefitItems"
				:key="benefit.title" 
				class="benefit"
			>
				<div class="benefit__icon">	
					<component :is="benefit.icon" />
				</div>
				<h3 class="benefit__title">
					{{ benefit.title }}
				</h3>
				<p class="benefit__text">
					{{ benefit.text }}
				</p>
			</div>
		</div>
	</section>
</template>

<style src="./styles.scss" lang="scss" scoped />
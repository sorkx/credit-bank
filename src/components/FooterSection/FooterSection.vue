<script setup>

const footerContacts = [
	{
		title: 'По России',
		tel: '8 800 950 6570'
	},
	{
		title: 'По Миру',
		tel: '8 800 950 6570'
	}
]

const footerLinks = [
	{
		title: 'О Банке',
		links: [
			{
				name: 'Офисы и банкоматы',
			},
			{
				name: 'Новости',
			},
			{
				name: 'Вакансии',
			},
			{
				name: 'Реализуемое имущество',
			}
		]
	},
	{
		title: 'Раскрытие информации',
		links: [
			{
				name: 'Ставки по вкладам',
			},
			{
				name: 'Условия и тарифы',
			},
			{
				name: 'Корпоративное управление',
			},
			{
				name: 'Карта сайта',
			}
		]
	}
]

</script>

<template>
	<div class="line" />
	<footer class="footer container">
		<div class="footer__row">
			<div class="footer__logo">
				<img src="@/assets/images/logo.png" alt="Credit Europe Bank">
				<div class="bank-name">АО «Кредит Европа Банк»</div>
			</div>
			<div class="footer__links">
				<div
					v-for="item in footerLinks"
					:key="item.title" 
					class="footer__column"
				>
					<h3>
						{{ item.title }}
					</h3>
					<ul>
						<li
							v-for="link in item.links"
							:key="link.name" 
						>
							<a href="#">
								{{ link.name }}
							</a>
						</li>
					</ul>
				</div>
				<div class="footer__contacts">
					<div
						v-for="contact in footerContacts"
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
		</div>
	</footer>
</template>

<style src="./styles.scss" lang="scss" scoped />
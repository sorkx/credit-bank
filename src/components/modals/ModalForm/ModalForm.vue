<script setup>
import { computed, ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import Button from '@/components/Button/Button.vue'
import ModalBase from '@/components/modals/ModalBase/ModalBase.vue'
import ModalSuccess from '@/components/modals/ModalSuccess/ModalSuccess.vue'
import CrossIcon from '@/components/icons/CrossIcon.vue'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import CustomDropdown from '@/components/CustomDropdown/CustomDropdown.vue'

const isFocused = ref(false)
const successValues = ref(false)

const emit = defineEmits(['close'])

const countries = ref([
	{ code: 'RU', name: 'Российская федерация' },
	{ code: 'BY', name: 'Беларусь' },
	{ code: 'UKR', name: 'Украина' },
	{ code: 'KZ', name: 'Казахстан' }
])

const countryOptions = computed(() => countries.value.map(country => ({ value: country.code, label: country.name })))

const { handleSubmit, meta } = useForm({
	validationSchema: {
		email(value) {
			if (!value) return 'Email обязателен для заполнения'
			const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
			if (!emailRegex.test(value)) return 'Некорректный email'
			return true
		},

		name(value) {
			if (!value) return 'ФИО обязательно для заполнения'
			if (value.length < 5) return 'ФИО должно содержать минимум 5 символов'
			if (!/^[а-яА-ЯёЁ\s]+$/.test(value)) return 'ФИО должно содержать только кириллицу'
			return true
		},

		phone(value) {
			if (!value) return 'Номер телефона обязателен для заполнения'
			const phoneRegex = /^\+7\d{10}$/
			if (!phoneRegex.test(value)) return 'Номер телефона должен быть в формате +7XXXXXXXXXX'
			return true
		},

		country(value) {
			if (!value) return 'Выберите страну'
			return true
		},

		agreement(value) {
			if (!value) return 'Необходимо принять условия'
			return true
		}
	},
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: phone, errorMessage: phoneError } = useField('phone')
const { value: email, errorMessage: emailError } = useField('email')
const { value: country, errorMessage: countryError } = useField('country')
const { value: agreement, errorMessage: agreementError } = useField('agreement')

const onSubmit = handleSubmit(values => {
	console.log('Form submitted:', values)
	successValues.value = true
})

const closeModal = () => {
  emit('close')
}
</script>

<template>
	<ModalBase>
		<div class="modal-form">
			<div class="modal-header">
				<h2>Заявка на карту</h2>
				<Button
					modificator="clear" 
					class="close-btn" 
					@click="closeModal"
				>
					<CrossIcon />
				</Button>
			</div>
			<form @submit="onSubmit">
				<div class="form-group">
					<div class="input-container">
						<label for="input" class="form-item">
							<input
								v-model="name"
								placeholder="Иванов Иван Иванович"
								class="form-field"
								:class="{ 
									'error-input': nameError,
								}"
							/>
							<span class="form-label">ФИО</span>
						</label>
						<span class="icons">
							<CrossIcon class="error-icon" v-show="!isFocused && nameError" />
							<CheckIcon v-show="!isFocused && !nameError && name" />
						</span>
					</div>
					<span v-if="nameError" class="error-message">
						{{ nameError }}
					</span>
				</div>
				<div class="form-group">
					<div class="input-container">
						<label for="input" class="form-item">
							<input
								type="email"
								v-model="email"
								class="form-field"
								placeholder="example@gmail.com"
								:class="{ 
									'error-input': emailError, 
								}"
							/>
							<span class="form-label">Электронный адрес</span>
						</label>
						<span class="icons">
							<CrossIcon class="error-icon" v-show="!isFocused && emailError" />
							<CheckIcon v-show="!isFocused && !emailError && email" />
						</span>
					</div>
					<span v-if="emailError" class="error-message">
						{{ emailError }}
					</span>
				</div>
				<div class="form-group">
					<div class="input-container">
						<label class="form-item">
							<input
								type="tel"
								v-model="phone"
								class="form-field"
								placeholder="+7 (___) ___-__-__"
								:class="{ 
									'error-input': phoneError,
								}"
							/>
							<span class="form-label">Номер телефона</span>
						</label>
						<span class="icons">
							<CrossIcon class="error-icon" v-show="!isFocused && phoneError" />
							<CheckIcon v-show="!isFocused && !phoneError && phone" />
						</span>
					</div>
					<span v-if="phoneError" class="error-message">
						{{ phoneError }}
					</span>
				</div>
				<div class="form-group">
					<div class="input-container select-container">
						<CustomDropdown
							v-model="country"
							:options="countryOptions"
							placeholder="Выберите страну"
						/>
						<span class="icons">
							<CrossIcon class="error-icon" v-show="!isFocused && countryError" />
							<CheckIcon v-show="!isFocused && !countryError && country" />
						</span>
					</div>
					<span v-if="countryError" class="error-message">
						{{ countryError }}
					</span>
				</div>
				<div class="form-group">
					<div class="input-container">
						<input
							type="checkbox"
							id="agreement"
							v-model="agreement"
							class="custom-checkbox"
						/>
						<label for="agreement" class="checkbox-label">
							Я соглашаюсь на <strong>обработку</strong> моих персональных данных
						</label>
						<span v-if="agreementError" class="error-message error-message--checkbox">
							{{ agreementError }}
						</span>
					</div>
				</div>
				<Button 
					type="submit" 
					:disabled="!meta.valid"
					modificator="main" 
				>
					Заказать сейчас
				</Button>
			</form>
		</div>
	</ModalBase>
	<ModalSuccess v-if="successValues" @close="closeModal" />
</template>

<style src="./styles.scss" lang="scss" scoped />
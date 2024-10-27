  <script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const props = defineProps({
	modelValue: {
		type: [String, Number],
		default: ''
	},
	options: {
		type: Array,
		default: () => [],
	},
	placeholder: {
		type: String,
		default: ''
	},
})

const emit = defineEmits(['update:modelValue'])
const dropdownRef = ref(null)

const isOpen = ref(false)

const selectedLabel = computed(() => {
	const selected = props.options.find(option => option.value === props.modelValue)
	return selected ? selected.label : ''
})

const toggleDropdown = () => {
	isOpen.value = !isOpen.value
}

const selectOption = (option) => {
	emit('update:modelValue', option.value)
	isOpen.value = false
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
	document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
	document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
	<label class="dropdown-item">
		<div 
			class="custom-dropdown" 
			:class="{ 
				'is-open': isOpen, 
				'selected': selectedLabel,
			}" 
			ref="dropdownRef"
		>
			<div 
				class="dropdown-overlay"
				:class="{ 
					'is-open': isOpen, 
				}"  
			/>
			<div 
				class="dropdown-header"
				@click="toggleDropdown"
			>
				<div class="dropdown-selection">
					<span class="dropdown-selection__text">
						{{ selectedLabel }}
					</span>
				</div>	
				<input 
					type="text"
					inputmode="none"
					size="1"
					readonly
					v-model="selectedLabel"
					:placeholder="isOpen ? placeholder : ''"
					class="dropdown-input"
					:class="{ 'selected': selectedLabel }"
					@click.stop
				/>
				<ArrowIcon class="dropdown-arrow" />
			</div>
	
			<transition name="dropdown">
				<div v-if="isOpen" class="dropdown-options">
					<div 
						v-for="option in options" 
						:key="option.value"
						class="dropdown-option"
						:class="{ 'selected': option.value === modelValue }"
						@click="selectOption(option)"
					>
						{{ option.label }}
					</div>
				</div>
			</transition>
		</div>
		<span class="dropdown-label">Гражданство</span>
	</label>
</template>
  
<style src="./styles.scss" lang="scss" scoped />
  
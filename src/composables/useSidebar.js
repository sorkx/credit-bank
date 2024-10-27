import { ref } from 'vue'

export function useSidebar() {
	const isOpen = ref(false)
	const isShifted = ref(false)
  
	const toggleSidebar = () => {
		isOpen.value = !isOpen.value
		isShifted.value = !isShifted.value
		
		document.querySelectorAll('section, header, footer').forEach(section => {
			if (isShifted.value) {
				section.classList.add('shifted')
			} else {
				section.classList.remove('shifted')
			}
		})
	}
  
	return {
		isOpen,
		isShifted,
		toggleSidebar
	}
  }



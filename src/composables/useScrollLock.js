export function useScrollLock() {
	const lockScroll = () => {
	  document.body.classList.add('modal-open')
	}
  
	const unlockScroll = () => {
	  document.body.classList.remove('modal-open')
	}
  
	return {
	  lockScroll,
	  unlockScroll
	}
  }
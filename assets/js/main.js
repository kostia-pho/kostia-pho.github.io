/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('scroll-header') 
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let openModal = function(index){
	modalViews[index].classList.add('active-modal')
}

modalBtns.forEach((btn, i) => {
	btn.addEventListener('click', () => {
		openModal(i)
	})
})

modalClose.forEach((closeBtn) => {
	closeBtn.addEventListener('click', () => {
		modalViews.forEach((modal) => {
			modal.classList.remove('active-modal')
		})
	})
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup ('.work__containers', {
	selectors: {
		target: '.work__card'
	},
	animation: {
		duration: 300
	}
});


/* Link active work */ 

const linkWork = document.querySelectorAll('.work__items')

function activeWork(){
	linkWork.forEach(l => l.classList.remove('active__work'))
	this.classList.add('active__work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 100
		const sectionId = current.getAttribute('id')

		const sectionsClass = document.querySelector(
			'.nav__menu a[href*=' + sectionId + ']'
		)

		if (
			scrollY >= sectionTop &&
			scrollY < sectionTop + sectionHeight
		) {
			sectionsClass.classList.add('active-link')
		} else {
			sectionsClass.classList.remove('active-link')
		}
	})
}

window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*=============== SCROLL REVEAL ANIMATION ===============*/


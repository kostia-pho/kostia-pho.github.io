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

// Previously selected theme, if any
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Get current theme
const getCurrentTheme = () =>
    document.body.classList.contains(lightTheme) ? 'light' : 'dark'

// Get current icon
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'bx-sun' : 'bx-moon'


// DEFAULT = LIGHT MODE
// If the user has previously selected dark mode, use dark mode.
// Otherwise, use light mode.
if (selectedTheme === 'dark') {
    document.body.classList.remove(lightTheme)
} else {
    document.body.classList.add(lightTheme)
}

// Set the correct icon
if (selectedTheme === 'dark') {
    themeButton.classList.add(iconTheme)
} else {
    themeButton.classList.remove(iconTheme)
}


// Activate / deactivate theme with the button
themeButton.addEventListener('click', () => {

    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    // Save the user's preference
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: false
});

sr.reveal('.home__greeting', { delay: 100 });
sr.reveal('.home__name', { delay: 200 });
sr.reveal('.home__education', { delay: 300 });
sr.reveal('.home__buttons', { delay: 400 });
sr.reveal('.home__handle', { delay: 500 });
sr.reveal('.home__social', { delay: 600, origin: 'bottom' });
sr.reveal('.home__scroll', { delay: 700, origin: 'bottom'});

sr.reveal('.about__img', { });
sr.reveal('.about__box', { interval: 100 });
sr.reveal('.about__description', { delay: 200 });
sr.reveal('.about .button', { delay: 300 });

sr.reveal('.skills__title', {});
sr.reveal('.skills__content', { interval: 150 });
sr.reveal('.skills__data', { interval: 50 });

sr.reveal('.services__card', { interval: 150 });

sr.reveal('.work__filters', { delay: 100 });
sr.reveal('.work__card', { interval: 150 });

sr.reveal('.contact__card', { interval: 150 });
	

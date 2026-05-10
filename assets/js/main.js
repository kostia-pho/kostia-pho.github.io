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


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


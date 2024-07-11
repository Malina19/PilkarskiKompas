const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav-desktop')
const footerYear = document.querySelector('.footer__year')
const allNavItems = document.querySelectorAll('.nav__link')
var prevScrollpos = window.scrollY
const msgStatus = document.querySelector('.msg-status')



// mail/////

console.log(document.location.search);

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('succes')
	msgStatus.textContent = 'Wiadomość wysłana!'

	setTimeout(() => {
		msgStatus.classList.remove('succes')
	}, 3000);
}

if (document.location.search === '?mail_status=error'){
	msgStatus.classList.add('error')
	msgStatus.textContent = 'Coś poszło nie tak. Spróbuj ponownie.'

	setTimeout(() => {
		msgStatus.classList.remove('error')
	}, 3000);
}
////////



// znikanie i pojawianie się nawigacji oraz buttona na scrollu

window.onscroll = function() {onscroll_function()};
const navbar = document.getElementById("nav-desktop");
const sticky = navbar.offsetTop;
function onscroll_function() {
   navFunction();
   scrollFunction();
  
}

function navFunction() {
	var currentScrollPos = window.scrollY
	if (prevScrollpos > currentScrollPos) {
		  document.getElementById('nav-desktop').style.top = '0'
	} else {
		  document.getElementById('nav-desktop').style.top = '-7em'
	}
	  prevScrollpos = currentScrollPos
}
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

///////

// nawigacja mobilna
const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active')
			navBtn.classList.remove('is-active')
		})
	})
}
navBtn.addEventListener('click', handleNav)
//////








const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()




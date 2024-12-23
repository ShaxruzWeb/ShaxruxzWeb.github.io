let theme = document.getElementById('theme')
let themeIcon = document.getElementById('themeIcon')
let black = document.querySelectorAll('.color_black')
let gray = document.querySelectorAll('.color_gray')
let bgBlack = document.querySelectorAll('.bg-black')
let bgGray = document.querySelectorAll('.bg-gray')
let menu = document.querySelector('#menu')
let menulink = document.querySelectorAll('#menuLink')
let askMenu = document.querySelector('#ask_menu')
let askLink = document.querySelectorAll('#ask_item')
let chatBtn = document.querySelectorAll('#chat_btn')
let fixedChat = document.querySelector('.fixed_chat')
let chatCancle = document.querySelector('#cancle')
let inp = document.querySelector('#input')
let chatContainer = document.querySelector('.chat_overflow')
let messageSend = document.querySelector('.send')
let nav = document.querySelector('nav')
let navMobil = document.querySelector('.mobil_nav')
let navBtnCancle = document.querySelector('.nav_btn')
let navBtnOpen = document.querySelector('.nav_open')

// ========= Swiper 2 ========= //

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// ========= Scroll Navbar ========= //
function scrollNav() {
    if (this.scrollY >= 50) {
        nav.classList.add('scroll_nav')
        if (window.innerWidth <= 425) {
            navMobil.classList.add('scroll_nav')
            nav.classList.remove('scroll_nav')
        }
    } else {
        nav.classList.remove('scroll_nav')
        navMobil.classList.remove('scroll_nav')
    }
}
window.addEventListener('scroll', scrollNav)

// ========= Open and Close Navbar ========= //

navBtnOpen.addEventListener('click', () => {
    nav.classList.remove('nav_actve')
})
navBtnCancle.addEventListener('click', () => {
    nav.classList.add('nav_actve')
})

// ========= Close Navbar click menu Link ========= //

menu.addEventListener('click', (e) => {
    if (e.target.id === 'menuLink') {
        menulink.forEach(ml => ml.classList.remove('alpha'))
        e.target.classList.add('alpha')
        if (window.innerWidth <= 425) {
            nav.classList.add('nav_actve')
        }
    }

})

// ========= Active ask menu Link ========= //

askMenu.addEventListener('click', (e) => {
    if (e.target.id === 'ask_item') {
        askLink.forEach(ml => ml.classList.remove('ask'))
        e.target.classList.add('ask')
    }

})

// ========= On Off Night Theme ========= //

theme.addEventListener('click', () => {
    if (!theme.classList.contains('theme_btn')) {
        themeIcon.classList.add('bi-moon-stars')
        themeIcon.classList.remove('bi-brightness-low')
        black.forEach(el => el.style.color = '#000000DE');
        gray.forEach(el => el.style.color = '#0000008A');
        bgGray.forEach(el => el.style.backgroundColor = 'white');
        bgBlack.forEach(el => el.style.backgroundColor = 'white');
        theme.classList.add('theme_btn');
    } else {
        themeIcon.classList.add('bi-brightness-low')
        themeIcon.classList.remove('bi-moon-stars')
        black.forEach(el => el.style.color = 'white');
        gray.forEach(el => el.style.color = '#FFFFFFB2');
        bgGray.forEach(el => el.style.backgroundColor = '#424242');
        bgBlack.forEach(el => el.style.backgroundColor = '#303030');
        theme.classList.remove('theme_btn');
    }
});

// ========= Open and Close Chat ========= //

chatBtn.forEach(bt => {
    bt.addEventListener('click', () => {
        fixedChat.classList.add('fixed_chat_active')
    })
})
chatCancle.addEventListener('click', () => fixedChat.classList.remove('fixed_chat_active'))

// ========= Submit Message ========= //

const scrollContainer = document.querySelector('.chat_overflow');

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

messageSend.addEventListener('click', () => {
    if (inp.value !== '') {
        let myMess = document.createElement('div')
        myMess.classList.add('my_message')
        myMess.innerHTML = `<h2>${inp.value}</h2>`
        chatContainer.append(myMess)
        inp.value = ''
        scrollToBottom()
    }

})
inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inp.value !== '') {
        let myMess = document.createElement('div')
        myMess.classList.add('my_message')
        myMess.innerHTML = `<h2>${inp.value}</h2>`
        chatContainer.append(myMess)
        inp.value = ''
        scrollToBottom()
    }
})
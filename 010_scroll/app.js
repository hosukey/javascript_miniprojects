//hamburger menu
const hamburgerBtn = document.querySelector('.hamburger');
const openMenu = document.querySelector('.topmenu__right');

hamburgerBtn.addEventListener('click', function(){
openMenu.classList.toggle('active');
})

//scroll

const menu = document.querySelectorAll('.topmenu__right--list li');
const aboutUs = document.querySelector('#section1');
const services = document.querySelector('#section2');
const blog = document.querySelector('#section3');
const contact = document.querySelector('#section4');


menu.forEach(function(menuItem){
    menuItem.addEventListener('click', function(){
        if(menuItem.classList.contains('section2')){
            services.scrollIntoView({
                behavior: 'smooth'
            });
        }if(menuItem.classList.contains('section3')){
            blog.scrollIntoView({
                behavior:'smooth'
            })
        }if(menuItem.classList.contains('section4')){
            contact.scrollIntoView({
                behavior:'smooth'
            })
        }if(menuItem.classList.contains('section1')){
            aboutUs.scrollIntoView({
                behavior: 'smooth'
            })
        }
    })
})

//GO BACK TO TOP OF THE PAGE BUTTON
//get the height of the nav
//button - display none - at the beginning
//active it when scrolled down and passed nav height
//when click, back to coordinate 0,0

const nav = document.querySelector('.topmenu');
navHeight = nav.getBoundingClientRect();
const upBtn = document.querySelector('.up');

window.addEventListener('scroll',function(){
if(document.documentElement.scrollTop > navHeight.height-1){
    upBtn.classList.remove('remove');
}else{
    upBtn.classList.add('remove');
}
});

upBtn.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
})


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
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let slides = document.querySelectorAll('.slider');

// slides.forEach(function(slide, index){
// slide.style.left = `${index * 100}%`;
// });


let counter = 0;
nextBtn.addEventListener('click', function(){
    counter++;
    carousel();
})

prevBtn.addEventListener('click', function(){
    counter--;
    carousel();
})

function carousel(){
//working with slides
// if(counter === slides.length){
//     counter = 0;
// }
// if(counter<0){
//     counter = slides.length - 1;
// }
if(counter < slides.length -1){
    nextBtn.style.display = 'inline-block';
}
else{
    nextBtn.style.display = "none";
}

if(counter>0){
    prevBtn.style.display = 'inline-block';
}else{
    prevBtn.style.display = 'none';
}

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter *100}%)`
    })
}

prevBtn.style.display = 'none';
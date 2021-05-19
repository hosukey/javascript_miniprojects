const clickBtn = document.querySelector('.click-button');
const hexNumber = document.querySelector('.number');
const colors = ['#161C48', '#9AC95A', 'rgb(66, 135, 245)', 'rgb(255, 245, 107)', '#F55622'];

clickBtn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    hexNumber.textContent= colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
})


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
const clickBtn = document.querySelector('.click-button');
const hexNumber = document.querySelector('.number');
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

clickBtn.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    hexNumber.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}

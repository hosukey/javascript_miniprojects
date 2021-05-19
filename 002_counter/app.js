const number = document.querySelector('.number');
const buttons = document.querySelectorAll('button');
let counter = 0;

buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){
const styles = e.currentTarget.classList;
if(styles.contains('increase')){
    counter++;
}
else if(styles.contains('decrease')){
    counter--;
}
else{
    counter = 0;
}
number.textContent = counter;
counter>=0?number.style.color = 'blue': number.style.color = 'red'
})
})
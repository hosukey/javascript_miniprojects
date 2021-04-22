const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

const giveAway = document.querySelector('.content h3');

//new Date() -> usually current date
//set up to desire date
//if want to set up for may, number = 4 b/c of array
futureDate = new Date(2021, 4, 1, 17, 30);

//getting month and weekday from the arrays
let month = months[futureDate.getMonth()];
let weekday = weekdays[futureDate.getDay()];

giveAway.textContent = 
`Giveaway Ends On ${weekday} ${month} ${futureDate.getDate()}, ${futureDate.getFullYear()} ${futureDate.getHours()}:${futureDate.getMinutes()} pm`;


const items = document.querySelectorAll('.time');

function getTimeRemaining(){
    const today = new Date().getTime();
    const total = futureDate - today;
    //values in ms
    const oneDay = 24* 60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    //calculate all values
    const days = Math.floor((total/oneDay));
    const hours = Math.floor((total%oneDay)/oneHour);
    const minutes = Math.floor((total%oneHour)/oneMinute);
    const seconds = Math.floor((total%oneMinute)/1000);
   
    //set values array;
    const values = [days, hours, minutes, seconds];

    //adding 0 if digit less than tenth
    function format(item){
        if (item < 10){
            return item = `0${item}`;
        }else{
        return item;
        }
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
}

//countdown
let countdown = setInterval(getTimeRemaining, 1000);
getTimeRemaining();

console.log()
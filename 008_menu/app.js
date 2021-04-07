const menu = [
    {
        id:1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },

    {
        id:2,
        title: "Dinner Double",
        category: "lunch",
        price: 13.99,
        img: "https://pyxis.nymag.com/v1/imgs/7f6/246/a2fa507ee9aafaadf0aef6e1932ed65223-30-grubstreet-takeout.rhorizontal.w700.jpg",
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },

    {
        id:3,
        title: "Godzilla Milkshake",
        category: "shake",
        price: 6.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },

    {
        id:4,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut."
    },

    {
        id:5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up."
    },

    {
        id:6,
        title: "Oreo Dream",
        category: "shake",
        price: 18.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },

    {
        id:7,
        title: "Steak Dinner",
        category: "dinner",
        price: 39.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
        desc: "Pskateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },

];

const menuitems = document.querySelector('.menuitems');

window.addEventListener('DOMContentLoaded', function(){
  let displayMenu = menu.map(function(item){
return `<div class="item">
<div class="item__image">
  <img src = ${item.img}
    alt=""
  />
</div>
<div class="item__contents">
  <div class="item__contents--title">
    <h3>${item.title}</h3>
    <div class="price">${item.price}</div>
  </div>
  <div class="line"></div>
  <div class="item__contents--desc">
 ${item.desc}
  </div>
</div>
</div>`
  });
  displayMenu = displayMenu.join('');
  menuitems.innerHTML = displayMenu
});
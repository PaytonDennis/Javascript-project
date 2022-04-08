//define menu items as a constant and fill them with data and give id #
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Delicious fluffy hand-made house pancakes served with our special Strawberry sauce with a side of whipped butter. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Classic cheeseburger and fries served with ketchup `,
  },
  {
    id: 3,
    title: "birthday cake shake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `house special birthday cake milkshake for your birthday or any occasion really. `,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `sunny side up eggs, toast, and hash browns served with coffee. `,
  },
  {
    id: 5,
    title: "hen-house burger",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Cheeseburger severed with a fluffy egg inside on a sesame seed bun. `,
  },
  {
    id: 6,
    title: "oreo shake",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `A shake made with real Oreos and fudge. Garnished with a strawberry. `,
  },
  {
    id: 7,
    title: "Country biscuit",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `A classic bacon, lettuce, and egg breakfast biscuit served on a cheddar cheese bun. `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `100% all-American burger with house-cut fries served with ketchup.  `,
  },
  
];


//section center
const sectionCenter = document.querySelector('.section-center');

//buttons filter 
const filterBtns = document.querySelectorAll('.filter-btn');

// load items
window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu)
});

// filter items
filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
    if(menuItem.category === category) {
       return menuItem;
       }
    });
    if(category === 'all'){
      displayMenuItems(menu)
    }
    else{
      displayMenuItems(menuCategory);
    }
  });
});

  //create function for filtering with menuItems array as parameter
function displayMenuItems(menuItems){
  let  displayMenu =  menuItems.map(function(item){

    //add string with html syntax & dynamically populate
    return ` <article class="menu-item">
    <img src=${item.img} class="photo"
     alt=${item.title}/>
     <div class="item-info">
       <header>
        <h4> ${item.title} </h4>
        <h4 class="price">: $${item.price}</h4> 
       </header>
     <p class="item-text">
        ${item.desc}
      </p>
     </div>
  </article>`;
  
    });
  
    //use join to link all data together
    displayMenu =displayMenu.join("")
  
  
    //add data to section center
    sectionCenter.innerHTML = displayMenu
    
}
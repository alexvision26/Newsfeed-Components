/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  */
function createMenu(array){
  let hbMenu = document.createElement('div')
  let newMenu = document.createElement('ul')

  hbMenu.classList.add('menu')

  hbMenu.append(newMenu)

  array.map(data =>{
    let newArr = document.createElement('li')
    newArr.textContent = data
    newMenu.append(newArr)
    // array.data = document.createElement('li')
    // array.data.textContent = array[data]
    // newMenu.append(data)
  })

  //  const navMenu = document.querySelector('.menu-button')
  //  navMenu.addEventListener('click', event =>{
  //   hbMenu.classList.toggle('menu--open')
  //  })

  //Jquery Slide Open animation

  $('.articles').click(function() {
    $(".menu").hide();
  });

  $(".menu-button").click(function(){
    $(".menu").slideToggle();
  })
  
  $('.menu').click(function(event){
      event.stopPropagation();
  });

  return hbMenu;
}

const menu = document.querySelector('.header')
menu.append(createMenu(menuItems))

// console.log(createMenu(menuItems))


  /*

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/

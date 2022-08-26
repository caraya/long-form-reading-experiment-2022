/**
 * @name setSizes
 * @returns void
 * @description Dissplay the width of the content wrapper this is purely to illustrate that the same number of characters will have different width based on the font we use
*/
const setSizes = () => {
  // first we capture the width of the
  // #page-container element
  const pageWidth = document
      .querySelector("#page-container")
      .clientWidth;

  // Then we set the value of the data-size
  // attribute in page container to the value
  // we captured in the prior step and we append
  // the string px to indicate we're working
  // with Pixels
  document
    .querySelector("#page-container")
    .setAttribute("data-size", `${pageWidth} px`);
};

setSizes();

window.onresize = setSizes;

function toggleMenu() {
  // Captures constants for the menu tab title
  // and the menu underneath.

  // const myButton = document.getElementById('hideButton');
  // const menuTab = document.querySelector('#menu_tab');
  // const myMenu = document.querySelector('form#menuForm');

  const button = document.querySelector('button');
  const form = document.querySelector('#settings-wrap');

  button.addEventListener('click', (event) => {
    form.classList.toggle('visible');
  });

  // // We add a pointer down event to toggle
  // // a visible class that will show / hide
  // // the menu
  // menuTab.addEventListener('pointerdown', (event) => {
  //   myMenu.classList.toggle('visible');
  // });
}

toggleMenu();



// function menuSet() {
//   const classList = document.querySelector('menu li').remove('highlight');

//   console.log(classList);

//   classList.forEach((item) => {
//     console.log(item);
//   })

  // {
  //   //alert(item);
  //   if (item==='bed') {
  //       $('li.size1').addClass('highlight');
  //   }
  //   else if (item==='knee') {
  //       $('li.size2').addClass('highlight');
  //   }
  //   else if (item==='breakfast') {
  //       $('li.size3').addClass('highlight');
  //   }
  //   else if (item==='bg_grid') {
  //       grid_on = true;
  //       $('li.bg_on').addClass('highlight');
  //   }
  //   else if (item==='low') {
  //       $('li.lowc').addClass('highlight');
  //   }
  //   else if (item==='high') {
  //       $('li.highc').addClass('highlight');
  //   }
  //   else if (item==='ragged') {
  //       $('li.rag').addClass('highlight');
  //   }
  //   else if (item==='justified') {
  //       $('li.just').addClass('highlight');
  //   }
  //   else if (item==='helvetica') {
  //       $('li.hel').addClass('highlight');
  //   }
  //   else if (item==='georgia') {
  //       $('li.geo').addClass('highlight');
  //   }
  // });

// }

// menuSet();



// // -------------------------------------
// // Size toggles
// //
// $('.size1').click(function() {
// $('#content_container').attr("class", "bed");
// menuSet();
// });

// $('.size2').click(function() {
// $('#content_container').attr("class", "knee");
// menuSet();
// });

// $('.size3').click(function() {
// $('#content_container').attr("class", "breakfast");
// menuSet();
// });


// // -------------------------------------
// // Contrast Toggles
// //
// $('.highc').click(function() {
// $('body').removeClass('low high').addClass('high');
// menuSet();
// });

// $('.lowc').click(function() {
// $('body').removeClass('low high').addClass('low');
// menuSet();
// });


// // -------------------------------------
// // Justification Toggles
// //
// $('.just').click(function() {
// $('body').removeClass('ragged justified').addClass('justified');
// menuSet();
// });

// $('.rag').click(function() {
// $('body').removeClass('ragged justified').addClass('ragged');
// menuSet();
// });


// // -------------------------------------
// // Serif toggle
// //
// $('.hel').click(function() {
// $('body').removeClass('georgia helvetica').addClass('helvetica');
// menuSet();
// });

// $('.geo').click(function() {
// $('body').removeClass('helvetica georgia').addClass('georgia');
// menuSet();
// });

// JS Code

// function hasLocalStorage() {
//   try {
//     localStorage.setItem(mod, mod);
//     localStorage.removeItem(mod);
//     return true;
//   } catch (e) {
//     console.log('Local Storage Not Supported');
//     return false;
//   }
// }

// function setRootVar(name, value) {
//   let rootStyles = document.styleSheets[0].cssRules[1].style;
//   rootStyles.setProperty('--' + name, value);
// }

// weight.oninput = function() {
//   weightSlider.innerHTML = weight.value;
//   // setting the style
//   setRootVar('font-weight', ' "wght" ' + weight.value);
//   localStorage.setItem('font-weight', ' "wght" ' + weight.value);
//   localStorage.setItem('weight-value', weight.value);
// };

// window.addEventListener('DOMContentLoaded', event => {
//   if (localStorage.getItem('font-weight') &&
//     localStorage.getItem('font-weight') !== null) {
//     setRootVar('font-weight', localStorage.getItem('font-weight'));
//     robotoWeight.setAttribute(
//       'value',
//       localStorage.getItem('weight-value'),
//     );
//     weightSlider.innerHTML = localStorage.getItem('weight-value');
//   } else {
//     setRootVar('font-weight', 400);
//     robotoWeight.setAttribute(
//       'value',
//       localStorage.getItem(400),
//     );
//     weightSlider.innerHTML = 400;
//   }
// });

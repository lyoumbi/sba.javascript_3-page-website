let menuBtn = document.querySelector('.menu');
let navClosedBtn = document.querySelector('.nav_closed');
let navDiv = document.querySelector('.side_nav');

let navDisplay = () => {
  navDiv.style.display='inline';
  menuBtn.innerHTML = '';
};

menuBtn.addEventListener('click', navDisplay);

let navClosed = () => {
  navDiv.style.display='none';
  menuBtn.innerHTML = `<ion-icon name="menu-sharp"></ion-icon><span>MENU</span>`;
};
navClosedBtn.addEventListener('click', navClosed);

























// fetch("https://archive.org/metadata/principleofrelat00eins")
//   .then(response => response.json())
//   .then(data => console.log(data));
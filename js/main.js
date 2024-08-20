 /* ------------------------- header --------------------------- */
 const header = document.querySelector(".header");
 const headerHeight = header.offsetHeight;
 
 window.onscroll = function () {
   const windowTop = window.scrollY;
   if (windowTop >= headerHeight) {
     header.classList.add("header--active");
   } else {
     header.classList.remove("header--active");
   }
 };

const headerMenus = document.querySelectorAll('.header__menu li');
for (const headerMenu of headerMenus) {
    headerMenu.addEventListener('click', function () {
    const scrollPosition = document.querySelector(this.dataset.target).offsetTop;
    window.scrollTo({top:scrollPosition, behavior:'smooth'});
  });
}
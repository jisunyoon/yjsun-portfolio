 /* ------------------------- header/aside --------------------------- */
 const header = document.querySelector(".header");
 const headerHeight = header.offsetHeight;
 const topBtn = document.querySelector('.btn-top');
 
 window.onscroll = function () {
   const windowTop = window.scrollY;
   if (windowTop >= headerHeight) {
     header.classList.add("header--active");
   } else {
     header.classList.remove("header--active");
     
   }
   if(windowTop >= 500){
      topBtn.classList.remove('btn-top--hide');
   }else{
      topBtn.classList.add('btn-top--hide');
   }
 };

const headerMenus = document.querySelectorAll('.header__menu li');
for (const headerMenu of headerMenus) {
    headerMenu.addEventListener('click', function () {
    const scrollPosition = document.querySelector(this.dataset.target).offsetTop;
    window.scrollTo({top:scrollPosition, behavior:'smooth'});
  });
}

topBtn.addEventListener('click', function(){
  window.scrollTo({top:0, behavior:'smooth'})
});



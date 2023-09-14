document.addEventListener('click',documentClick);

function documentClick(e){
    const targetItem = e.target;

    if(targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}
document.querySelector('.icon-menu').addEventListener('click', function() {
    document.querySelector('.menu__body').classList.toggle('menu__open');
    document.querySelector('.icon-menu').classList.toggle('menu__open');
});

$(window).load(function() {
    setTimeout(function () { 
      $(".loader").delay(100).fadeOut().remove();   
    }, 2000);  
  });
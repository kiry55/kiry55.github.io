document.addEventListener('DOMContentLoaded', function(){
    const menuIcon = document.querySelector('.menuIcon--js')
    let openNav = false
    menuIcon.addEventListener('click', function() {
      
            document.body.classList.add('navopen');
            // const sideNav = document.querySelector('.sideNav');
            // sideNav.style.width="100%";
            // openNav = true;
      
         
    })
    const menuIconClose = document.querySelector('.sideNav')
    
    menuIconClose.addEventListener('click', function(e) {
      
            document.body.classList.remove('navopen');
            // const sideNav = document.querySelector('.sideNav');
            // sideNav.style.width="0px";
            // openNav = true;
            e.stopPropagation();
 
            document.body.style.overflow = "auto";
      
         
    })
})
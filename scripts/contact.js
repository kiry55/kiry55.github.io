document.addEventListener('DOMContentLoaded', function() {
    const contact = document.querySelector('.Contact__img');
    const contactOpen = document.querySelector('.Contact__img--open');
    const contactClosed = document.querySelector('.Contact__img--closed');
    const contactInfo =document.querySelector('.Contact__info');
    let open = false;
    contact.addEventListener('click', function() {
        if(open) {
            open=!open;
            contactOpen.style.display = 'none';
            contactClosed.style.display = 'block';
            // contactInfo.classList.remove('open');
            contactInfo.classList.add('open');  
        }
        else {
            open=!open;
            contactOpen.style.display = 'block';
            contactClosed.style.display = 'none';
            // contactInfo.classList.add('open');  
            contactInfo.classList.remove('open');       
        }
       
    })
})
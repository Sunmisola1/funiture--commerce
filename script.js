
        // Get references to the mobile menu button and the mobile menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
    
        // Add event listener to the mobile menu button
        mobileMenuBtn.addEventListener('click', (event) => {
            // Toggle the 'hidden' class on the mobile menu to show/hide it
            mobileMenu.classList.toggle('hidden');
            event.stopPropagation(); // Prevent event propagation to the document
        });
    
        // Add event listener to the document to close the menu when clicked outside of it
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnMenuButton = mobileMenuBtn.contains(event.target);
    
            // If the click is not inside the menu and not on the menu button, and the menu is open, close the menu
            if (!isClickInsideMenu && !isClickOnMenuButton && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
// slider
const swipers = new Swiper('.swiper-container', {
    slidesPerView: 1, // Display two slides at once
    spaceBetween: 30, // Add space between slides
    loop: true, // Enable loop mode
    autoplay: {
        delay: 5000, // Autoplay delay in milliseconds
        disableOnInteraction: false, // Enable autoplay even when user interacts with the slider
    },
    pagination: {
        
        clickable: true, // Allow pagination bullets to be clickable
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
;
// slide 2
const swiper = new Swiper('.swiper-containers', {
    slidesPerView: 2, // Display two slides at once
    spaceBetween: 1, // Add space between slides
    loop: true, // Enable loop mode
    autoplay: {
        delay: 5000, // Autoplay delay in milliseconds
        disableOnInteraction: false, // Enable autoplay even when user interacts with the slider
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allow pagination bullets to be clickable
    },
});
;
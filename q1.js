$(document).ready(function() {
    // Function to animate elements when they come into view
    function animateOnScroll() {
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();

        // Check each element with the class 'animated'
        $('.animated').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            // If the element is within the viewport
            if ((elementBottom >= windowTop) && (elementTop <= windowBottom)) {
                $(this).addClass('fadeInUp'); // Add the animation class
            }
        });
    }

    // Initial animation on page load
    animateOnScroll();

    // Animate elements on scroll
    $(window).scroll(function() {
        animateOnScroll();
    });
});

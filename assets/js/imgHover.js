/** Replaces the class on thumbnail images to have a proper in and out
animation when hovering over them with the cursor **/

// When the DOM is ready
$(function() {
    // Get all image elements
    let images = $('.transform-in');
    // When the cursor leaves the image
    images.on('mouseout', function() {
        // Replace class
        $(this).removeClass('transform-in').addClass('transform-out');
    });
    // When the cursor hovers over the image
    images.on('mouseover', function() {
        // Replace class
        $(this).removeClass('transform-out').addClass('transform-in');
    });
});

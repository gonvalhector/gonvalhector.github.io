/** Replaces the class on links to have a proper in and out
animation when hovering over them with the cursor **/

// When the DOM is ready
$(function() {
    // Get all link elements
    let links = $('a:not(.active, .list-group-item, .soundcloud-title, .navbar-brand)');
    // When the cursor leaves the link
    links.on('mouseout', function() {
        // Replace class in link
        $(this).removeClass('linkChangeIn').addClass('linkChangeOut');
        // Replace class in icon
        $(this).children('img').removeClass('iconChangeIn').addClass('iconChangeOut');
    });
    // When the cursor hovers over the link
    links.on('mouseover', function() {
        // Replace class in link
        $(this).removeClass('linkChangeOut').addClass('linkChangeIn');
        // Replace class in icon
        $(this).children('img').removeClass('iconChangeOut').addClass('iconChangeIn');
    });
});

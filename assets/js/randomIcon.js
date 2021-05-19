var icons = new Array("About", "Blog", "Contact", "Email", "Gallery", "Home", "Projects", "Return");
var icons_images = new Array("/assets/images/icons/about.svg",
    "/assets/images/icons/blog.svg",
    "/assets/images/icons/contact.svg",
    "/assets/images/icons/email.svg",
    "/assets/images/icons/gallery.svg",
    "/assets/images/icons/home.svg",
    "/assets/images/icons/projects.svg",
    "/assets/images/icons/return.svg"
);
var colors = new Array("Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Cyan", "White");

var randomIcon = Math.floor(Math.random() * icons.length);
var randomColor = Math.floor(Math.random() * colors.length);

var element = document.getElementById("sub-content");
var myString = "<p>You get the " + colors[randomColor] + " "  + icons[randomIcon] + " icon!</p>";
myString += '<img src="' + icons_images[randomIcon] + '" alt="' + icons[randomIcon] + 'icon"' + ' class="' + colors[randomColor] + '">';
element.innerHTML = myString;

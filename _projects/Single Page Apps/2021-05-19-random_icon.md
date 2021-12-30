---
category: spas
short_name: random_icon
title: Random Icon from the Site
pl:
    - type: Client-side
      name: JavaScript
image: https://lh3.googleusercontent.com/pw/ACtC-3cwLYNZbltgXHMBiiMZ-573cTdytEuzz6oaGNBBqy_swztqCwlWviOMAJw13Wj44MtG9ekTKr--jtla0Qeg0AQVeEJ-TZYGbyznCl9hCHMIL44HQpXXEETI8fRY_WhMUBCR-rIgJq5EP8aOgEW1LceB=w1200-h630-no?authuser=0
alt: Logo of the Random Icon from the Site single-page app
thumbs:
    PNG: https://lh3.googleusercontent.com/pw/ACtC-3fblZ9J6mfeSBr3FsTAY0xw--YNPcSEytwAACPzgMW2JtjWvo1dDmu2s-xAEevgw44xJ7TzmIPxx_DyE6sdAwl2GDx2G1tIvdMneC2_3IpacS9H91GsFLrj_u8zwMC9GfQRO_JJGLFd022fYFLTRERa
    JPG: https://lh3.googleusercontent.com/pw/ACtC-3dJcJHlyeDJ8MTD8szp0nc0k7l4pURous96OfGKNZPfk-9nA1-8KcF9O68690C2AY11GYhnM_YD4EHHRJlNNzuMoxjekicDMq-l42F8VnmGueaQmHxJdy1NTk8FffxE0sVFQyl4W-FSI0CJaZnE2GOM
js:
    - src: /assets/js/randomIcon.js
credits:
    - type: Image
      src: /assets/images/attribution/iconmonstr-logo-1.svg
      alt: iconmonstr logo
      class: true
      link: https://iconmonstr.com/
      textBefore: Icons by
---

Get a random icon from the site with a random color.  
Made for the **Week 1** assignment of the [JavaScript <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">](https://onemonth.com/courses/javascript) online course offered by [One Month <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">](https://onemonth.com/).

<h2 class="my-4">Random Icon</h2>

<div id="sub-content"></div>



<h2 class="my-4">JavaScript Code</h2>

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

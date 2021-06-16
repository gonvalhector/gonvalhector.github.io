---
layout: regular
title: About gonvalhector.com
image: https://lh3.googleusercontent.com/pw/ACtC-3d0dRsCe5ru27jacyXbmwKWJYc8Btb6E29SB-63mTFGv0nXUdqiSgAZf5E5oFiefFrPb_MT6QoRhPkzhOQeTPbSWrmSL6-Ss2ByAIT_F3okP5-7_WQGoHagNNaQwDqN2z17Q73tK6jDgB3gd1R_cS5j=w1200-h630-no?authuser=0
---

# About Me

{% assign date_now = "now" | date: "%s" %}
{% assign date_birth = "July 16, 1993" | date: "%s" %}
{% assign age = date_now | minus: date_birth | divided_by: 31556926 %}

Hi! My name is Hector Gonzalez, I'm {{ age }} years old and I'm from Mexico.
I'm studying to become a professional web developer and I also do [art] for fun.  
So far I've completed the [CS50's Introduction to Computer Science] course and I'm
currently finishing the [CS50's Web Programming with Python and JavaScript] course.

## Courses

- [x] [CS50's Introduction to Computer Science]
- [x] [CS50's Web Programming with Python and JavaScript]
- [ ] [CS50’s Introduction to Game Development]
- [x] [One Month's JavaScript Online Course]

## Certificates

- [CS50's Introduction to Computer Science from CS50]
- [CS50's Introduction to Computer Science from edX]
- [CS50's Web Programming with Python and JavaScript from CS50]
- [CS50's Web Programming with Python and JavaScript from edx]
- [Computer Science for Web Programming Professional Certificate from edX]
- [One Month's JavaScript Certification]

# About the Site

Originally developed as [Project 0] of the [CS50's Web Programming with Python and JavaScript] course, the site is now developed using [Jekyll], the static site generator.

## Resources

- **Pixel Art Tools, Tutorials and Palettes:** [Lospec]
- **Learn to Draw:** [Brent Eviston's "The Art & Science of Drawing" Master Class]

## Credits & Attributions

- **Static Site Generator:** [Jekyll]
- **CSS Library:** [Bootstrap 4]
- **Color Scheme:** [Coolors]
- **Icons:** [Iconmonstr]
- **Filter Generation:** [CSS Filter Generator]


[CS50's Introduction to Computer Science]: <https://cs50.harvard.edu/x/2019/>
[CS50's Introduction to Computer Science from CS50]: <https://certificates.cs50.io/6a7ba948-b64d-44e2-941d-96bf0c264d3d.png?size=letter>
[CS50's Introduction to Computer Science from edX]: <https://courses.edx.org/certificates/0eb091cad05f4ed3a7d014bb8f3ab120>
[CS50's Web Programming with Python and JavaScript]: <https://cs50.harvard.edu/web/2018/>
[CS50's Web Programming with Python and JavaScript from CS50]: <https://certificates.cs50.io/68fbe128-254d-42ef-a13c-a3c208bb3d2d.png?size=letter>
[CS50's Web Programming with Python and JavaScript from edx]: <https://courses.edx.org/certificates/d931bbd176bf45919b2228eb9d115be6>
[Computer Science for Web Programming Professional Certificate from edX]: <https://credentials.edx.org/credentials/387810e955f7483f8e4e63933acd16e5/>
[CS50’s Introduction to Game Development]: <https://cs50.harvard.edu/games/2018/>
[Project 0]: <https://docs.cs50.net/ocw/web/projects/0/project0.html>
[Jekyll]: <https://jekyllrb.com/>
[art]: <{{ site.baseurl }}{% link gallery.html %}>
[Bootstrap 4]: <https://getbootstrap.com/>
[Coolors]: <https://coolors.co/>
[Iconmonstr]: <https://iconmonstr.com/>
[CSS Filter Generator]: <https://codepen.io/sosuke/pen/Pjoqqp>
[Lospec]: <https://lospec.com/>
[Brent Eviston's "The Art & Science of Drawing" Master Class]: <https://www.skillshare.com/user/artandscienceofdrawing>
[One Month's JavaScript Online Course]: <https://onemonth.com/courses/javascript>
[One Month's JavaScript Certification]: <https://onemonth.com/certificates/v9RXaTVKaiEHpbpVQrKe>

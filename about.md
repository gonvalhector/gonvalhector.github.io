---
layout: regular
title: about
---

# About Me

{% assign date_now = "now" | date: "%s" %}
{% assign date_birth = "July 16, 1993" | date: "%s" %}
{% assign age = date_now | minus: date_birth | divided_by: 31556926 %}

Hi! My name is Hector Gonzalez, I'm {{ age }} years old and I'm from Mexico.
I'm studying to become a professional web developer and I also do [art]({{ site.baseurl }}{% link gallery.html %}) for fun.  
So far I've completed the [CS50's Introduction to Computer Science](https://cs50.harvard.edu/x/2020/notes/0/) course and I'm
currently finishing the [CS50's Web Programming with Python and JavaScript](https://cs50.harvard.edu/web/2020/) course.

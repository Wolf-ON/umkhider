// ==UserScript==
// @name         MatUMKHider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Wolf
// @match        https://plas.mat.umk.pl/moodle/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=umk.pl
// @grant        none
// ==/UserScript==

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function hideCourses(course) {
    let id = course.dataset['courseid'];
    let cookie = getCookie(id);
    if (cookie == 'hide')
        {
            course.hidden = true;
        }
}

let courses_list = document.getElementsByClassName("coursebox");

for(var i = 0; i<courses_list.length;i++)
    {
        hideCourses(courses_list[i]);
    }

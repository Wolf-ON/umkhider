function getCookie(cname) {
    let name = cname + '=';
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
    return '';
  }

  function hideCourses(course) {
    let id = course.dataset['courseid'];
    let cookie = getCookie(id);
    if (cookie == 'hide')
        {
            course.hidden = true;
        }
}

function addHideButton(element, indexEl)
{
    let adding = "<button onclick=\"buttonAction("+indexEl+")\">ukryj</button>";
    element.innerHTML = element.innerHTML + adding;
}

function buttonAction(indexEl)
{
    let listelement = courses_list[indexEl];
    listelement.hidden = true;
    let cookieName = listelement.dataset['courseid'];
    let cookieValue = 'hide';
    let tmptime = new Date();
    tmptime.setDate(tmptime.getDate()+360);
    let cookieExpires = tmptime.toUTCString;
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + cookieExpires + "path=/";
}

function unhideonce()
{
    for(var i = 0; i<courses_list.length;i++)
    {
        if(courses_list[i].hidden == true)
        courses_list[i].hidden = false;
    }
}

function unhideall()
{
    for(var i = 0; i<courses_list.length;i++)
    {
        let id = courses_list[i].dataset['courseid'];
    let cookie = getCookie(id);
    if (cookie == 'hide')
        {
            courses_list[i].hidden = false;
            document.cookie = id +'=;';
        }
    }
}

let courses_list = document.getElementsByClassName("coursebox");
let courses_elements = document.getElementsByClassName("coursename");

for(var i = 0; i<courses_list.length;i++)
    {
        hideCourses(courses_list[i]);
        addHideButton(courses_elements[i], i);
    }

let mainStage = document.getElementsByClassName("mdl-align")[0];
let buttonOnce = "<button onclick='unhideonce()'>Odsłoń raz</button>"
let buttonAll = "<button onclick ='unhideall()'>Usuń ukrycie</button>"
let buttons ="<div>"+ buttonOnce + buttonAll + "</div>";
mainStage.innerHTML = mainStage.innerHTML + buttons;

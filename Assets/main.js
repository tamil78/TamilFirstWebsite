/*SHOW MENU.if about menu is active all other menu should be inavtice
so write script/navid and toggleid is a variable*/
 

const showMenu = (toggleId, navId) => { 

      const toggle = document.getElementById(toggleId), 

            nav = document.getElementById(navId) 

 

      if(toggle && nav){ 

            toggle.addEventListener('click', () =>{ 

                  nav.classList.toggle('show') 

            }); 

      } 

} 

 

showMenu('nav_toggle','nav_menu') 

 

//ACTIVE & REMOVE ACTIVE 

const navLink = document.querySelectorAll('.nav_link') 

navLink.forEach(n => n.classList.remove('active')) 

 

function linkAction(){ 

      navLink.forEach(n => n.classList.remove('active')) 

      this.classList.add('active') 

      //const is used when i click about.it should disappear 

      const navMenu = document.getElementById('nav_menu') 

      navMenu.classList.remove('show') 

} 

 

navLink.forEach(n => n.addEventListener('click', linkAction)) 

 
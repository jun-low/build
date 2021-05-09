// This is where it all goes :)
// Init all plugin
$(document).on('ready', function () {
  // AOS Library
  AOS.init();

  // Show/hide menu when icon is clicked
  const menuItems   = $('.all-menu-wrapper .nav-link');
  const menuIcon    = $('.menu-icon, #navMenuIcon');
  const menuBlock   = $('.all-menu-wrapper');
  const reactToMenu = $('.page-main, .navbar-sidebar, .page-cover')
  const menuLinks   = $(".navbar-mainmenu a, .navbar-sidebar a");
  // Menu icon clicked
  menuIcon.on('click', function () {
    menuIcon.toggleClass('menu-visible');
    menuBlock.toggleClass('menu-visible');
    menuItems.toggleClass('menu-visible');
    reactToMenu.toggleClass('menu-visible');
    return false;
  });

  // Hide menu after a menu item clicked
  menuLinks.on('click', function () {
    menuIcon.removeClass('menu-visible');
    menuBlock.removeClass('menu-visible');
    menuItems.removeClass('menu-visible');
    reactToMenu.removeClass('menu-visible');
    return true;
  });
  
  // Typing effect
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan    = document.querySelector(".cursor");
  const textArray     = ["Hello!", "Bonjour!", "Hola!", "Ciào!", "Hallo!", "Olá!","G'day!","Hej!","Aloha!"];
  const typingDelay   = 100;
  const erasingDelay  = 80;
  const newTextDelay  = 1000; // Delay between current and next text
  let textArrayIndex  = 0;
  let charIndex       = 0;
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
    }
    else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
  // Initiate the typing effect on DOM load
  if(textArray.length) setTimeout(type, newTextDelay + 250);
},)
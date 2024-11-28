  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["Full Stack JAVA Developer", "FrontEnd Developer"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

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

  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  });


  const hamburgerMenu = document.querySelector('#navigation .nav-icon');
  const navContent = document.querySelector('#nav-content');
  const closeNavButton = document.querySelector('#nav-content .close-btn');
  const navLinks = document.querySelectorAll('#nav-content nav ul li a');

  hamburgerMenu.addEventListener('click', ()=> {
      navContent.classList.add('show');
      document.body.style.overflow="hidden";
  })
  closeNavButton.addEventListener('click', ()=>{
      navContent.classList.remove('show');
      document.body.style.overflow="initial";
  })
  navLinks.forEach(Link => {
      Link.addEventListener('click', () => {
          navContent.classList.remove('show');
          document.body.style.overflow="initial";   
      })
  })


  VANTA.RINGS({
    el: "#net",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x0
  })

  
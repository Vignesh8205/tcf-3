

(function() {
  "use strict";

// intern faq
  var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      if (document.querySelector('.mobile-nav-active')) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      }
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('.loader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  // scrollTop.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   // window.scrollTo({
  //   //   top: 0,
  //   //   behavior: 'smooth'
  //   // });
  // });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);

// emailjs configuration
  (function() {
    function encrypt(text) {
           
      let shift = parseInt(22);
      let result = '';

      for (let i = 0; i < text.length; i++) {
          let char = text[i];

          if (char.match(/[a-z]/i)) {
              let code = text.charCodeAt(i);

              if (code >= 65 && code <= 90) {
                  char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
              } else if (code >= 97 && code <= 122) {
                  char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
              }
          }

          result += char;
      }

      return  result;
  }
  
let  b= encrypt("BmIjjJmsrm43wVYz6")


    emailjs.init({
      publicKey: b,
    });

    
    
})();







})();

// toast function


// send email


function sendemail(){
  

  function encrypt(text) {
           
    let shift = parseInt(22);
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        result += char;
    }

    return  result;
}


      console.log("working");
      let params={
        to_name:document.getElementById("name").value,
        from_name:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
        mobile_number:document.getElementById("mobile_number").value

    }


    function validateForm() {
      // Get the form elements
    var user_name= document.querySelector("#user_name");
    var mobile=document.querySelector("#mobile")
    var emailvalid=document.querySelector("#email_valid")
      // Username validation: must not be empty and at least 3 characters long
      if (params.to_name === "") {
        user_name.innerHTML="Username must be filled out";
        
          return false;
      } else if (params.to_name < 3) {
          user_name.innerHTML="Username must be at least 3 characters long";
          return false;
      }
    
      // Email validation: must follow the email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(params.from_name)) {
        emailvalid.innerHTML="Please enter a valid email address";
          
          return false;
      }
    
      // Password validation: must not be empty and at least 6 characters long
      if (params.mobile_number === "") {
        mobile.innerHTML="mobile number must be filled out";
          
          return false;
      } else if (params.mobile_number.length == 10) {
        mobile.innerHTML="mobile number must be at least 6 characters long";
          return false;
      }
    

      emailvalid.innerHTML=""
      mobile.innerHTML=""
      user_name.innerHTML=""
      
      return true;
    }

    
    validateForm()
  if (validateForm()) {

  let  b=encrypt("wivzmgi_gmyrqu8");
  let  c=encrypt("xiqtpexi_nrnpvrt")

    emailjs.send(b,c,params).then((result) => {
      
      
       if (result.status==200) {
         alert(" send")
        
       }
        
    }).catch((err) => {
      if (err) {
       
        alert("not send")

      }
    });
   
    // emailjs
     
  } else {
    
    

  }  





  


}






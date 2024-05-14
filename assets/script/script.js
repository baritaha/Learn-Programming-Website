window.addEventListener('scroll', function() {
    var container = document.querySelector('.container');
    if (window.scrollY > window.innerHeight * 0.8) {
      container.classList.add('scrolled');
      container.classList.add('fixed');
    } else {
      container.classList.remove('scrolled');
      container.classList.remove('fixed');
    }
  });

  document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    var targetElement = document.getElementById('targetfotter'); // Get the target element

    // Scroll to the target element
    targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling behavior
        block: 'start' // Scroll to the top of the target element
    });
});

  document.getElementById('courses-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    var targetElement = document.getElementById('targetCourses'); // Get the target element

    // Scroll to the target element
    targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling behavior
        block: 'start' // Scroll to the top of the target element
    });
});
document.getElementById('Avaliable').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  var targetElement = document.getElementById('targetAvaliable'); // Get the target element

  // Scroll to the target element
  targetElement.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling behavior
      block: 'start' // Scroll to the top of the target element
  });
});
document.getElementById('free').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  var targetElement = document.getElementById('targetFree'); // Get the target element

  // Scroll to the target element
  targetElement.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling behavior
      block: 'start' // Scroll to the top of the target element
  });
});
document.getElementById('courses-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  var targetElement = document.getElementById('targetExplore'); // Get the target element

  // Scroll to the target element
  targetElement.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling behavior
      block: 'start' // Scroll to the top of the target element
  });
});
document.getElementById('aboutUs').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  var targetElement = document.getElementById('about-us'); // Get the target element

  // Scroll to the target element
  targetElement.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling behavior
      block: 'start' // Scroll to the top of the target element
  });
});
document.getElementById('community').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  var targetElement = document.getElementById('targetcommunity'); // Get the target element

  // Scroll to the target element
  targetElement.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling behavior
      block: 'start' // Scroll to the top of the target element
  });
});
document.getElementById('ach').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  var targetElement = document.getElementById('targetach'); // Get the target element

  // Scroll to the target element
  targetElement.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling behavior
      block: 'start' // Scroll to the top of the target element
  });
});

/*********************upper arrow*********************************************************/

const toTop = document.querySelector(".upper");

// Add event listener for scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

// Add event listener for click on scroll-to-top button
document.getElementById('top').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior
    });
});
document.getElementById('home-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Scroll to the top of the page
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
  });
});



  
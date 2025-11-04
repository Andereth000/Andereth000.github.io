let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let ham = document.getElementById('hamburger');
let circle = document.getElementById('square');

ham.addEventListener('click', function (e) {
  e.stopPropagation();
  square.classList.toggle('active');
  
  if (ham.classList.contains("mystyle")) {
    bar1.classList.remove("bar1");
    bar2.classList.remove("bar2");		
    ham.classList.remove("mystyle");
  } else {
    bar1.classList.add("bar1");
    bar2.classList.add("bar2");		
    ham.classList.add("mystyle");	 							
  }
});

// Prevent clicks on the menu from closing it
square.addEventListener('click', function(e) {
  e.stopPropagation();
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  if (
    !e.target.closest('#square') && 
    !e.target.closest('#hamburger') && 
    square.classList.contains('active')
  ) {
    square.classList.remove('active');
    bar1.classList.remove("bar1");
    bar2.classList.remove("bar2");		
    ham.classList.remove("mystyle");
  }
});
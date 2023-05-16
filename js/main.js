window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 70) {
    $('header').addClass('sticky');
  } else {
    $('header').removeClass('sticky');
  }
}
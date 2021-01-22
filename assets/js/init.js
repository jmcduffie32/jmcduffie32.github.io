$(document).ready(function () {
  $('.smoothScroll').on('click', function (e) {
    e.preventDefault();
    $(window).scrollTo($(this).attr('href'), 1000);
  });
});
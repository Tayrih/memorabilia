$(document).ready(function() {
  // SLIDESHOW
  $(function() {
    $('#slideshow > div:gt(0)').hide();
    setInterval(function() {
      $('#slideshow > div:first').fadeOut(1500).next().fadeIn(1500).end().appendTo('#slideshow');
    }, 3850);
  });
});

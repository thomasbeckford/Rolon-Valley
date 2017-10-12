
// add this first in head
// https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
// then:

  $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          window.location.hash = hash;
        });
      }
    });
  });

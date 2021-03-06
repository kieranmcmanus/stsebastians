$(document).ready(function(){
    // One page navigation
    $('.nav').singlePageNav({
        offset: $('.navbar').outerHeight()
    });

    // Scroll to top
    $('.smooth-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
    });
    // Contact
    $('#submit').click(function(){ 
        $.post("contactus.php", $(".frm").serialize(),  function(response) {
            $('#success').html(response);            
        });
        return false;   
    });
     
});
$(document).ready(function(){
	
	var Alll = {

		$b: $('body'),
    $s1: $('.jum__sliddr'),

		setupVars: function(){

		},


    AddEvents: function(){
    	
    	
         
    },


    loaDed: function(){

    	this.$b.addClass('loaded');

      this.$s1.slick({
        arrows: false,
        autoplay: true,
        dots: true,
        appendDots: $('.jum__sliddr-dots'), 
      });
    },


    // INITIALIZED
    init: function(){

      this.setupVars();
      this.loaDed();
      this.AddEvents();

    }

  };
  
  Alll.init(); 

});





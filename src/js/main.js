$(document).ready(function(){
	
	var Alll = {

		$b: $('body'),
    $s1: $('.jum__sliddr'),
    $s2: $('.partt__sliddr'),
    $s3: $('.reww__sliddr'),

    $hh: $('.head').height(),


		setupVars: function(){

		},


    AddEvents: function(){
      
      $('body').on( 'click', '.reww__sliddr-imgg', function(e){
        
        e.preventDefault();

        var over = $('.imgg__overr');
        
        over.find('img').attr( 'src', $(this).attr('data-hovvr') );

        over.css('display', 'block');

        $('body').addClass('ov-hidd');

      });



      $('body').on( 'click', '.imgg__overr-cloz', function(e){
        
        e.preventDefault();

        var over = $('.imgg__overr');

        over.css('display', 'none');

        $('body').removeClass('ov-hidd');

      });


      $(window).scroll(function(){

        console.log( this.$hh );

        if( $(window).scrollTop() > 100 ){
          var $hh = $( '.head' );
          
          $('body').css('paddingTop', $hh.attr( 'data-height' ) + 'px');

          $( '.head' ).addClass('active');
          
        }
        else{
          $( '.head' ).removeClass('active');
          $('body').css('paddingTop', '0px');

        }

      });


      $(window).on('load', function(){
        var $hd = $( '.head' );
         $hd.attr('data-height', $hd.outerHeight()); 
      });




    },

    


    loaDed: function(){

    	this.$b.addClass('loaded');

      this.$s1.slick({
        arrows: false,
        autoplay: true,
        dots: true,
        appendDots: $('.jum__sliddr-dots'), 
      });

       this.$s2.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('.partt__sliddr-prev'),
        nextArrow: $('.partt__sliddr-next'),
      });

      this.$s3.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('.reww__sliddr-prev'),
        nextArrow: $('.reww__sliddr-next'),
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





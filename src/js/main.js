$(document).ready(function(){
	
	var Alll = {

		$b: $('body'),
    $s1: $('.jum__sliddr'),
    $s2: $('.partt__sliddr'),
    $s3: $('.reww__sliddr'),

    $hh: $('.head').height(),


		calc: function(){

      var $proc = $('#proc');

      $proc.val( $proc.attr('data-default') );






        
      $( "#slider_summ" ).slider({
        range: "min",
        value: 500000,
        min: 20000,
        max: 1000000,
        step: 10000,
        slide: function( event, ui ) {

          $( "#summ" ).val( ui.value );

          var srok, platej, procent;

          srok = $('#srok').val();
          srok = srok * 12;

          platej = ui.value / srok;  

          procent = $('#proc').val();

          platej = platej + ( platej / 100 * procent );         

          $('#platej').val( Math.round( platej )  );
        
        }
      });

      $( "#summ" ).val( $( "#slider_summ" ).slider( "value" ) );




      $( "#slider_srok" ).slider({
        range: "min",
        value: 10,
        min: 1,
        max: 30,
        step: 1,
        slide: function( event, ui ) {
          
          $( "#srok" ).val( ui.value );

          var srok, platej, procent;

          srok = $('#srok').val();
          srok = srok * 12;

          platej = $('#summ').val() / srok;  

          procent = $('#proc').val();

          platej = platej + ( platej / 100 * procent );         

          $('#platej').val( Math.round( platej )  );

        }
      });

      $( "#srok" ).val( $( "#slider_srok" ).slider( "value" ) );




      ( function(){

          var srok, platej, procent;

          srok = $('#srok').val();
          srok = srok * 12;

          platej = $('#summ').val() / srok;  

          procent = $('#proc').val();

          platej = platej + ( platej / 100 * procent );         
          

          $('#platej').val( Math.round( platej )  );        

      } )();


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

      // var locHost = window.location.hostname.indexOf("v.cf");      
      var locHost = window.location.hostname.indexOf("loc");      
      
      if( locHost !== -1 ){
        this.calc();
        this.loaDed();
        this.AddEvents();
      }

    } 

  };
  



  Alll.init(); 

});





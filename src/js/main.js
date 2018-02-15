$(document).ready(function(){
	
	var Alll = {

		$b: $('body'),
		$s1: $('.jum__sliddr'),
		$s2: $('.partt__sliddr'),
		$s3: $('.reww__sliddr'),
		$s4: $('.jum__cont-slider'),
		$hh: $('.head').height(),


		calc: function(){

			var $proc = $('#proc');
			
			var $slider_summ = $( "#slider_summ" );
			var $slider_srok = $( "#slider_srok" );
			
			var isMonth = $slider_srok.attr('data-month');
				
			

			$proc.val( $proc.attr('data-defValue') );
			
			$slider_summ.slider({
				range: "min",
				value: parseInt( $slider_summ.attr('data-defValue') ),
				min: parseInt( $slider_summ.attr('data-minValue') ),
				max: parseInt( $slider_summ.attr('data-maxValue') ),
				
				slide: function( event, ui ) {

					$( "#summ" ).val( ui.value );

					var srok, platej, procent;

					srok = $('#srok').val();
					
					if( isMonth == undefined ){
						srok = srok * 12;
					}

					platej = ui.value / srok;  

					procent = $('#proc').val();

					platej = platej + ( platej / 100 * procent );         

					$('#platej').val( Math.round( platej )  );
				
				}
			});


			

			$( "#summ" ).val( $( "#slider_summ" ).slider( "value" ) );




			$slider_srok.slider({
				range: "min",
				value: parseInt( $slider_srok.attr('data-defValue') ),
				min: parseInt( $slider_srok.attr('data-minValue') ),
				max: parseInt( $slider_srok.attr('data-maxValue') ),
				step: 1,
				slide: function( event, ui ) {
					
					$( "#srok" ).val( ui.value );

					var srok, platej, procent;

					srok = $('#srok').val();
					
					if( isMonth == undefined ){
						srok = srok * 12;
					}

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
					
					// var isMonth = $( "#slider_srok" ).attr('data-month');
					// alert();
					// console.log( isMonth );	
					
					if( isMonth === undefined ){
						srok = srok * 12;
					}

					platej = $('#summ').val() / srok;  

					procent = $('#proc').val();

					platej = platej + ( platej / 100 * procent );         
					

					$('#platej').val( Math.round( platej )  );        

			} )();


		},


		AddEvents: function(){

			$('body').on( 'click', '.to-mod', function(e){
				e.preventDefault();	

				var targg = $(this).attr('data-targg');
				
				if( targg.length ){
					
					if( targg === '.modd-2' ){
						var txt =	$('.button.acct').text();
						$('.modd__descr').text( txt );

						$('.modd-2__summ').val( $('#summ').val() );
						$('.modd-2__srok').val( $('#srok').val() );
						$('.modd-2__proc').val( $('#proc').val() );
						$('.modd-2__platej').val( $('#platej').val() );
					}
					$('body').addClass('ov-hidd');
					$( targg ).css('display','block');	
					

				}								
			});			

			$('body').on( 'click', '.modd__close', function(e){	
				e.preventDefault();	
				var modall = $(this).parents('.modal');
				modall.css('display','none');
				$('body').removeClass('ov-hidd');	
							
			});	
			

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

			
			$(document).on('scroll', function() {
				
				if($(this).scrollTop()>=$('.head').position().top + 100){
					$( '.head' ).addClass('active');
				}
				else{
					$( '.head' ).removeClass('active');
				}

			});

			
			$('body').on( 'click', '.to-calcc', function(e){
				
				e.preventDefault();
				
				// $('body').addClass('ov-hidd');

				$('.jum__wrr-1.jum__wrr').css('display','block');
				
				// $('.mob-calc').css('display','block');
				
				// var cloned = $('.jum__calc-wrr').clone(true);
				// $('.jum__calc-wrr').clone(true).appendTo('.mob-calc');

				
				// $('.mob-calc').html( cloned );

				// console.log( cloned );

			});
			

			$('body').on( 'click', '.hamburger', function(e){
				e.preventDefault();
				$(this).toggleClass('is-active');
				$('.nav__wrr').addClass('activve');
			});


			$('body').on( 'click', '.nav__close', function(e){
				e.preventDefault();
				$('.hamburger').toggleClass('is-active');
				$('.nav__wrr').removeClass('activve');
			});


			$('body').on( 'click', '.to-mapp', function(e){
				e.preventDefault();
				 $('html,body').animate({
	          scrollTop: $('#map').offset().top - 80
	       }, 1000);
			});

			

		},

		setup: function(){

			var arr = ['sprite','main']; 
			
			// if( window.location.hostname.indexOf("v.cf") !== -1 ){
			if( window.location.hostname.indexOf("loc") !== -1 ){  
				arr.forEach( function(s) { 
					var link = document.createElement('link');
					link.rel = 'stylesheet';
					link.href = 'css/' + s + '.css';
					document.head.appendChild(link);
				});
			}
		},


		loaDed: function(){

			this.$b.addClass('loaded');

			this.$s1.slick({
				arrows: false,
				autoplay: true,
				dots: true,
				appendDots: $('.jum__sliddr-dots'), 
				asNavFor: '.jum__cont-slider',
				speed: 1000,
				// responsive: [
    //       {
    //           breakpoint: 1024,
    //           settings: "unslick"
    //       },
    //      ]
			});
			
			this.$s4.slick({
				arrows: false,
				autoplay: false,
				fade: true,
				asNavFor: '.jum__sliddr',
				speed: 1000,
				// responsive: [
	   //      {
	   //          breakpoint: 1024,
	   //          settings: "unslick"
	   //      },
    //    ]
			});


			 this.$s2.slick({
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: true,
				prevArrow: $('.partt__sliddr-prev'),
				nextArrow: $('.partt__sliddr-next'),
				  responsive: [
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        // autoplay: false
				      }
				    }
				  ]
			});

			this.$s3.slick({
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: true,
				prevArrow: $('.reww__sliddr-prev'),
				nextArrow: $('.reww__sliddr-next'),
				responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        // autoplay: false
			      }
			    }
			  ]
			}); 

			$('.kd-inp__phone').mask('+7(000)000-00-00'); 
					
		},
		
		mapInit: function(){
			var mapOptions = {
		    center: new google.maps.LatLng(45.039699, 41.968798),
		    zoom: 17,
			}
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);

			var marker = new google.maps.Marker({
        position: {lat: 45.039699, lng: 41.968798},
        map: map,
      });
		},
	 

		// INITIALIZED
		init: function(){
			this.setup();  

			// var locHost = window.location.hostname.indexOf("v.cf");      
			var locHost = window.location.hostname.indexOf("loc");      

			
			if( locHost !== -1 ){
				this.calc();
				this.loaDed();
				this.AddEvents();
				this.mapInit();
			}
		} 
	};
	



	Alll.init(); 

});





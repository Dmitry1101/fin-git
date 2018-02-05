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

			$proc.val( $proc.attr('data-default') );
			
			console.log( $( "#slider_summ" ).attr('data-defValue') );

			$( "#slider_summ" ).slider({
				range: "min",
				value: $( "#slider_summ" ).attr('data-defValue'),
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


			console.log( $( "#slider_summ" ).attr('data-defValue') );
			

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
			});
			
			this.$s4.slick({
				arrows: false,
				autoplay: true,
				fade: true,
				asNavFor: '.jum__sliddr',
				speed: 1000,
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





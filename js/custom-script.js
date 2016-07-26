$(document).ready(function() {

	$('.carousel').carousel({
  		interval: 3000
	})

	$('#contact-form').submit(function(e) {
		e.preventDefault();

		var $btn = $(this).find('button');
		$btn.button('loading');

		setTimeout(function(){
			$btn.button('sent');
			//$btn.button('reset');
		},2000);

	});

});
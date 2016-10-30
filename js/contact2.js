jQuery(document).ready(function ($) { // wait until the document is ready 1
	$('#send1').click(function(){ // when the button is clicked the code executes
		$('.error').fadeOut('slow'); // reset the error messages (hides them)

		var error = false; // we will set this true if the form isn't valid

		var name = $('input#name1').val(); // get the value of the input field
		if(name == "" || name == " ") {
			$('#err-name1').fadeIn('slow'); // show the error message
			error = true; // change the error state to true
		}

		var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
		var email = $('input#email1').val(); // get the value of the input field
		if (email == "" || email == " ") { // check if the field is empty
			$('#err-email1').fadeIn('slow'); // error - empty
			error = true;
		}else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable
			$('#err-emailvld1').fadeIn('slow'); // error - not right format
			error = true;
		}

			
		
	var phone_compare = /^([0-9-+]{10,13})$/; 
		
		var phone = $('input#phone1').val(); // get the value of the input field
		
		if (phone == "" || phone == " ") { // check if the field is empty
			$('#err-phone1').fadeIn('slow'); // error - empty
			error = true;
		}else if (!phone_compare.test(phone)) { // if it's not empty check the format against phone_compare variable
		$('#err-phonevld1').fadeIn('slow'); // error - not right format
		error = true;
		}

		if(error == true) {
			$('#err-form1').slideDown('slow');
			return false;
		}
		
		
		var data_string = $('#ajax-form1').serialize(); // Collect data from form

		$.ajax({
			type: "POST",
			url: $('#ajax-form1').attr('action'),
			data: data_string,
			timeout: 6000,
			error: function(request,error) {
				if (error == "timeout") {
					$('#err-timedout1').slideDown('slow');
				}
				else {
					$('#err-state1').slideDown('slow');
					$("#err-state1").html('Произошла ошибка при отправке сообщения: ' + error + '');
				}
			},
			success: function() {
				$('#ajax-form1').slideUp('slow');
				$('#ajaxsuccess1').slideDown('slow');
			}
		});
	
	
		return false; // stops user browser being directed to the php file
	}); // end click function
	
});


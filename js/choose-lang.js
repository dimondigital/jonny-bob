jQuery(document).ready(function($){
	$('#choose-lang').submit(function() {
	var form = $(this);
	var error = false;
	form.find('input').each(funciton(){
		if($(this).val() == '') {
			alert('Wrond language');
			error = true;
		}
	});
	if(!error) {
		var data = form.serialize();
		$.ajax({
			type: 'POST',
			url: 'choose-lang.php',
			dataType: 'json',
			data: data
		},
		success: function(data) {
			if(data['error']) {
				alert(data['error']);
			} else {
				
			}
		});
	}
});

	});
(function() {  "use strict";


// Breakpoints
$('#bp-form1').submit(function(){
	debugger;

	mustValidate = true;

	var val = $('#bp-input').val();
	if(/^\s*$/.test(val)) {
		return false;
	}
	
	$.ajax({
		url: 'https://api.deckbrew.com/mtg/cards/typeahead?q=' + val,
		data: {
			start: 0,
			limit: 10
		}
	})
	.done(function(data) {
		console.log(data);
		
		var len = data.length,
			result;
		if(len) {
			result = data.map(function(obj){
				return obj.name;
			})
		} else {
			result = ['No results found'];
		}
		
		$('#bp-output').text(result.join(', '));
	})
	.fail(function(jqXHR, textStatus, errorThrown) {
		$('#bp-output').text('Request countered. Error: ' + textStatus);
	});
	
	return false;
});

}());
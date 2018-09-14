function searchList() {
	$('#result').hide();	
	var filter = $('#searchList').val().toUpperCase();
	$("ul li.active").each(function(){
		var txt = $(this).text();
    if (txt.toUpperCase().indexOf(filter) > -1) {
      $(this).fadeIn('slow');
    } else {
      $(this).hide();
    }
  });
  var visivel = $('ul li').is(':visible');
	if (!visivel) {
		$('#result').show();
	}
}

$(document).ready(function() {

	$('select').change(function(){
		var item = $(this).val();
		$('input').val('');
  	$('#result').hide();
		$('.items li').hide().addClass('noactive').removeClass('active');
	 	if (item == 'all') {
	  	$('.items li').fadeIn('slow').removeClass('noactive').addClass('active');
  	} else {
	 		$('ul li.item-'+item).fadeIn('slow').addClass('active');
	 	}
	});

});
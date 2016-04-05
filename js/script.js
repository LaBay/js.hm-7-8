$(function () {
	
	$('#topic2').click(function(){
		$('#item1, #item3').addClass('hide');
		$('#item2').removeClass('hide')
		$('#topic2').removeClass('notActive');
		$('#topic1, #topic3').addClass('notActive');
	});
	
	$('#topic1').click(function(){
		$('#item2, #item3').addClass('hide');
		$('#item1').removeClass('hide')
		$('#topic1').removeClass('notActive');
		$('#topic2, #topic3').addClass('notActive');
	});	

	$('#topic3').click(function(){
		$('#item1, #item2').addClass('hide');
		$('#item3').removeClass('hide')
		$('#topic3').removeClass('notActive');
		$('#topic1, #topic2').addClass('notActive');
	});	

})
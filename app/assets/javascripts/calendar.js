
$(document).ready(function() {

	var userID = /[^/]*$/.exec(window.location.href)[0];

	 $("#show").click(function(){
		var results = [];
	
	  function myCallback(data) {
		results = data;
		console.log(results);

	  $('#calendar').fullCalendar( 
		{
		header: {
			left: 'prev, next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		defaultDate: '2018-09-18',
		editable: true,
        eventLimit: true, // allow "more" link when too many events
        weekends: false, // will hide Saturdays and Sundays
        events: results,
    	});
	}

	 var objJSON = $.getJSON('http://localhost:3000/user_working/'+userID, function(data) {
	 	myCallback(data);
	 });
	 });

});
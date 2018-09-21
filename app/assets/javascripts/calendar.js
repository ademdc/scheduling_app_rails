
$(document).ready(function() {

  //daterangepicker innitializatoin
  $('input[class="daterange"]').daterangepicker();

  //fetching the userID from URL, ex: localhost:3000/user/2, gets 2
  var url = window.location.href.split("/");
	var userID = url[url.length - 2];
  //var userID = /[^/]*$/.exec(window.location.href)[0];
	//array of working day schedules from json
	var results = [];
	
	var URL = "/users/"+userID.toString()+"/schedule";
	/*function called in the getJSON request to manipulate the data
	becasue it is asynchronous */
	function myCallback(data) {
		results = data;
		console.log("Picked dates: "+results);
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

	//load this just at this specific pathname
	if (window.location.pathname == URL) {
	// call for data from the URL in json format
	var objJSON = $.getJSON('http://localhost:3000/users/schedule/'+userID.toString()+'.json', function(data) {
		myCallback(data);
	});	
	}
	
	

	//generating the dates and schedules from daterange picker
	$("#generate").click(function(){

		var fullDateString = $("#picker").val();
		var fromDateString = fullDateString.substring(0, 10);
		var toDateString = fullDateString.substring(13, 23);

		var fromDate = parseDate(fromDateString);
		var toDate = parseDate(toDateString);

		console.log(fromDate+' '+toDate);

		// var day_diff = datediff(fromDate, toDate);

		// var events = [];


		// let i;
		// var currentDate = fromDate;
		// var followingDay;

		// console.log('currentDate: '+currentDate);

		// events.push({
		// 	title: "Before break",
		// 	start: currentDate+"T08:03:00.000Z",
		// 	end: currentDate+"T12:05:00.000Z"
		// },
		// {
		// 	title: "After break",
		// 	start: currentDate+"T13:05:00.000Z",
		// 	end: currentDate+"T16:03:00.000Z"
		// });

		// followingDay = currentDate.split('-');
		// followingDay[2]= parseInt((followingDay[2]))+1;

		// //must add one zero in front of number if its <10, because of time format
		// if(parseInt(followingDay[2])<10){
		// 	followingDay[2] = "0"+followingDay[2].toString();
		// }
		// followingDay = followingDay.join('-');


		// for(i=0; i<day_diff; i+=1){

		// 	var x = Math.floor((Math.random() * 30) + 1);
		// 	var y = 60-x;
		// 	var pause = Math.floor((Math.random() * 30) + 1);

		// 	if (pause<10){pause='0'+pause.toString()}
		// 	if (x<10){x='0'+x.toString()}

		// 		events.push({
		// 			title: "Before break",
		// 			start: followingDay+"T08:"+x.toString()+':00.000Z',
		// 			end: followingDay+"T12:"+pause.toString()+':00.000Z'
		// 		},
		// 		{
		// 			title: "After break",
		// 			start: followingDay+"T13:"+pause.toString()+':00.000Z',
		// 			end: followingDay+"T16:"+y.toString()+':00.000Z'
		// 		});

		// 	console.log(followingDay);

		// 	followingDay = followingDay.split('-');

		// 	if(followingDay[2]=='28' && followingDay[1]=='02'){
		// 		followingDay[2]='01';
		// 		followingDay[1]= parseInt((followingDay[1]))+1;
		// 		if(parseInt(followingDay[1])<10){
		// 			followingDay[1] = "0"+followingDay[1].toString();
		// 		}
		// 		followingDay = followingDay.join('-');
		// 	}else if(followingDay[2]=='30' && (followingDay[1]=='03' || followingDay[1]=='04' || followingDay[1]=='06' || followingDay[1]=='09' || followingDay[1]=='11' )){
		// 		followingDay[2]='01';
		// 		followingDay[1]= parseInt((followingDay[1]))+1;
		// 		if(parseInt(followingDay[1])<10){
		// 			followingDay[1] = "0"+followingDay[1].toString();
		// 		}
		// 		followingDay = followingDay.join('-');
		// 	}else if(followingDay[2]=='31' && (followingDay[1]=='01' || followingDay[1]=='05' || followingDay[1]=='07' || followingDay[1]=='08' || followingDay[1]=='10' || followingDay[1]=='12')){
		// 		followingDay[2]='01';

		// 		if(followingDay[1]=='12'){
		// 			followingDay[1]='01';
		// 			followingDay[0]= parseInt((followingDay[0]))+1;
		// 		}else{
		// 			followingDay[1]= parseInt((followingDay[1]))+1;
		// 		}
		// 		if(parseInt(followingDay[1])<10){
		// 			followingDay[1] = "0"+followingDay[1].toString();
		// 		}
		// 		followingDay = followingDay.join('-');
		// 	}else{
		// 		followingDay[2]= parseInt((followingDay[2]))+1;
		// 		//must add one zero in front of number if its <10, because of format
		// 		if(parseInt(followingDay[2])<10){
		// 			followingDay[2] = "0"+followingDay[2].toString();
		// 		}
		// 		followingDay = followingDay.join('-');
		// 	}
			
		// }


		// // fetch the full calendar plugin
		// $('#calendar2').fullCalendar( 
		// {
		// 	header: {
		// 		left: 'prev, next today',
		// 		center: 'title',
		// 		right: 'month,agendaWeek,agendaDay'
		// 	},
		// 	defaultDate: '2018-09-18',
		// 	editable: true,

  //       eventLimit: true, // allow "more" link when too many events
  //       events: events,
  //     });


		// //map the events array to a variable with appropirate key values for the request
		// var dataToSend;
	 //  dataToSend = events.map((currElement, index, array) => {
		//   currElement.user_id = userID;
		//   if(currElement.title=='Before break'){
		//   	 currElement.arrival = currElement.start;
		//   	 currElement.break_start = currElement.end;
		//   	 currElement.break_end = array[index+1].start;
		//   	 currElement.departure = array[index+1].end;
		//   }else if(currElement.title=='After break'){
		//   	 currElement.arrival = array[index-1].start;
		//   	 currElement.break_start = array[index-1].end;
		//   	 currElement.break_end = currElement.start;
		//   	 currElement.departure = currElement.end;
		// 	}
		//   return currElement;
		// });

	 //  //splicing the duplicate items in dataToSend
	 //  for(var j = 0; j < dataToSend.length; j++) {
  //   	dataToSend.splice(j+1,1);
		// }

		// dataToSend.map((currElement, index) => {
		//   console.log("The current iteration is: " + index);
		//   console.log("The current element arrival is: " + currElement.arrival);
		//   console.log("The current element break_start is: " + currElement.break_start);
		//   console.log("The current element break_end is: " + currElement.break_end);
		//   console.log("The current element departure is: " + currElement.departure);
		//   console.log("\n");
		//   return 'X';
		// });

		// var obj = {
		// 	working_day: {
		// 		user_id: 2,
		// 		arrival: '2018-09-24T08:05:00.000Z',
		// 		break_start: '2018-09-24T12:05:00.000Z',
		// 		break_end: '2018-09-24T13:13:00.000Z',
		// 		departure: '2018-09-24T17:05:00.000Z'
		// 	}
		// }

		$.ajax({
		  type: "POST",
		  url: URL,
		  data: { start_date: fromDate, end_date: toDate },
		  success: function(data, textStatus, jqXHR) {
        $("#demo").html(data); 
    		},
		  }
		);
	});

	/* parse the date string to a format suported by momentJS to calucalte the
	difference, format: YYYY-MM-DD */
	function parseDate(str) {
		var mdy = str.split('/');
		return (mdy[2]+'-'+mdy[0]+'-'+mdy[1]);
	}

	//helper to find number of days between two dates, using MomentJS
	function datediff(first, second) {
		return moment(second).diff(moment(first),"days")
	}

});

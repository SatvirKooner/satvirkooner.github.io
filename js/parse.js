

$("#parse_button").click(function(){
	//Normally a request would be made to a server, however here it is retrieved from local storage
	//Note: Google Chrome blocks attempts to access this local json file due to security protocols.
	//    	Either an alternative browser such as firefox or microsoft edge or the live server plugin with node.js

	$.getJSON("https://cdn.rawgit.com/SatvirKooner/SeamlessMD/7cd4171c/js/patient.json", function(data){

		// for future use purposes instead of appending the information is 
		// completely rewritten to overwite existing data
		$("#name").html("Name of patient: " + data.identifier[0].name[0].given[0] +" " +data.identifier[0].name[0].family[0]);
		$("#organization").html("Organization name: " + data.identifier[0].managingOrganization.display);
		$("#gender").html("Gender: " + data.identifier[0].gender);
		var conditions = data.identifier[0].conditions;
		$("#num_conditions").html("Number of conditions: " + conditions.length);

		//current conditions are cleared.
		$("#conditions").html("");

		//iterate through conditions
		for (var i = conditions.length - 1; i >= 0; i--) {
			$("#conditions").append("<li>" +conditions[i] +"</li>");
		}




	});
});

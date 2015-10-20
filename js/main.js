
(function() {
	var request = new XMLHttpRequest();
	request.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=16602,us&units=imperial&APPID=744fbdc3cfa185c0a85038642e92cd77",true);
	request.onload = function(){
		time = function(unixTime) {
			var date = new Date(unixTime*1000);
			// Hours part from the timestamp
			var hours = date.getHours();
			// Minutes part from the timestamp
			var minutes = "0" + date.getMinutes();
			// Will display time in 10:30:23 format
			if (hours > 11) {
				var formattedTime = hours + '' + minutes.substr(-2);
			}
			else {
				var formattedTime = hours + ':' + minutes.substr(-2);
			}			
			
			var hours24 = parseInt(formattedTime.substring(0,2));
			var hour = ((hours24 + 11) % 12) + 1;
			var amPm = hours24 > 11 ? 'pm' : 'am';
			var minute = formattedTime.substring(2);
			return hour + ':' + minute + amPm;
		}
		var temperature = Math.ceil(responseJSONData.main.temp);
		var responseJSONData = JSON.parse(request.responseText);
		document.getElementById("temp").innerHTML = Math.ceil(responseJSONData.main.temp)+"°F";
		document.getElementById("description").innerHTML = responseJSONData.weather[0].description;
		document.getElementById("city").innerHTML = responseJSONData.name;
		document.getElementById("sunrise").innerHTML = time(responseJSONData.sys.sunrise);
		document.getElementById("sunset").innerHTML = time(responseJSONData.sys.sunset);
		document.getElementById("icon").className ="owf owf-"+responseJSONData.weather[0].id+" owf-5x";
	}
	if (temperature < 32)
	{
		document.getElementById
		document.getElementByClass
	}
	else if (temperature < 50)
	{
		document.getElementById
		document.getElementByClass
	}
	else if (temperature < 70)
	{
		document.getElementById
		document.getElementByClass
	}
	else if (temperature < 80)
	{
		document.getElementById
		document.getElementByClass
	}
	else if (temperature > 90)
	{
		document.getElementById
		document.getElementByClass
	}
	else
	{
		console.log("Error Line 35 - 63 Temperature Border and background");
	}
	request.onerror = function(){
		console.log("Connection Error")
	}
	
	request.send();
	
})();
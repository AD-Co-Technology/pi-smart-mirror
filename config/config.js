/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
    module: "MMM-WeeklySchedule",
    position: "top_left",
    header: "Andrew's Daily Schedule",
    config: {
        schedule: {
            timeslots: [ "8:00am", "8:30am", "9:00am","9:30am", "10:00am","10:30am", "11:00am","11:30am", "12:00pm","12:30pm", "1:00pm","1:30pm", "2:00pm","2:30pm", "3:00pm","3:30pm", "4:00pm","4:30pm", "5:00pm","5:30pm", "6:00pm","6:30pm", "7:00pm","7:30pm", "8:00pm"],
            lessons: {
                mon: [ "ECON 123: American Economic History", "8:30am", "9:00am","BUS 103: Marketing and Distribution Management Lecture", "10:00am","10:30am", "11:00am","11:30am", "BUS 103: Marketing and Distribution Management Discussion","12:30pm", "1:00pm","1:30pm", "2:00pm","2:30pm", "3:00pm","3:30pm", "4:00pm","4:30pm", "5:00pm","5:30pm", "6:00pm","6:30pm", "7:00pm","7:30pm", "8:00pm" ],  
                tue: [ "8:00am", "8:30am", "9:00am","9:30am", "10:00am","10:30am", "11:00am","11:30am", "12:00pm","12:30pm", "1:00pm","1:30pm", "2:00pm","2:30pm", "3:00pm","3:30pm", "4:00pm","4:30pm", "ECON 119: Law and Economics","5:30pm", "6:00pm","6:30pm", "7:00pm","7:30pm", "8:00pm"],
                wed: [ "ECON 123: American Economic History", "8:30am", "9:00am","BUS 103: Marketing and Distribution Management Lecture", "10:00am","10:30am", "11:00am","11:30am", "12:00pm","12:30pm", "1:00pm","1:30pm", "2:00pm","2:30pm", "3:00pm","3:30pm", "4:00pm","4:30pm", "5:00pm","5:30pm", "6:00pm","6:30pm", "7:00pm","7:30pm", "8:00pm" ],
                thu: [ "8:00am", "8:30am", "9:00am","9:30am", "10:00am","10:30am", "11:00am","11:30am", "12:00pm","12:30pm", "1:00pm","1:30pm", "2:00pm","2:30pm", "3:00pm","3:30pm", "4:00pm","4:30pm", "ECON 119: Law and Economics","5:30pm", "6:00pm","BUS 138 International Finance", "7:00pm","7:30pm", "8:00pm" ],
                fri: [ "8:00am", "8:30am", "9:00am","9:30am", "10:00am","10:30am", "11:00am","11:30am", "12:00pm","12:30pm", "1:00pm","1:30pm", "2:00pm","2:30pm", "3:00pm","3:30pm", "4:00pm","4:30pm", "5:00pm","5:30pm", "6:00pm","6:30pm", "7:00pm","7:30pm", "8:00pm" ],
                
                sun: [ "", "", "" ]   
            }
        },
        updateInterval: 1 * 60 * 60 * 1000, 
        showNextDayAfter: "16:00"
    }
},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

		function isEmailAddr(email) {
 	 		var result = false
  			var theStr = new String(email)
	  		var index = theStr.indexOf("@");
  			if (index > 0) {
    			var pindex = theStr.indexOf(".",index);
    			if ((pindex > index+1) && (theStr.length > pindex+1))
					result = true;
  			}
  			return result;
		}

		function isEmpty(aTextField) {
   		if ((aTextField.length==0) || (aTextField==null)) {
      		return true;
  	 		}		
   		else { return false; }
		}	


		function isInteger (s) {   
			var i;
    		if (isEmpty(s)) 
     	  		if (isInteger.arguments.length == 1) return false;
       		else return (isInteger.arguments[1] == true);

    		// Search through string's characters one by one
    		// until we find a non-numeric character.
    		// When we do, return false; if we don't, return true.

    		for (i = 0; i < s.length; i++) {   
        		// Check that current character is number.
        		var c = s.charAt(i);
        		if (!isDigit(c)) return false;
    		}
    		// All characters are numbers.
    		return true;
		}
	
		function isSignedInteger (s) {   
			if (isEmpty(s)) 
       		if (isSignedInteger.arguments.length == 1) return false;
       		else return (isSignedInteger.arguments[1] == true);

    		else {
        		var startPos = 0;
        		var secondArg = false;

        		if (isSignedInteger.arguments.length > 1)
            	secondArg = isSignedInteger.arguments[1];

        		// skip leading + or -
        		if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           		startPos = 1;    
        		return (isInteger(s.substring(startPos, s.length), secondArg))
    		}
		}


		function isIntegerInRange (s, a, b) {   
				if (isEmpty(s)) 
       			if (isIntegerInRange.arguments.length == 1) return false;
       			else return (isIntegerInRange.arguments[1] == true);

    			// Catch non-integer strings to avoid creating a NaN below,
    			// which isn't available on JavaScript 1.0 for Windows.
    			if (!isSignedInteger(s, false)) return false;

  	  			// Now, explicitly change the type to integer via parseInt
    			// so that the comparison code below will work both on 
    			// JavaScript 1.2 (which typechecks in equality comparisons)
   			// and JavaScript 1.1 and before (which doesn't).
    			var num = parseInt (s);
    			return ((num >= a) && (num <= b));
		}


		function isDigit (c) {   

			return ((c >= "0") && (c <= "9"))
		}

		function trim(TRIM_VALUE){
			if(TRIM_VALUE.length < 1){
				return "";
			}	
			TRIM_VALUE = RTrim(TRIM_VALUE);
			TRIM_VALUE = LTrim(TRIM_VALUE);
			if(TRIM_VALUE==""){
				return "";
			} else{
				return TRIM_VALUE;
			}
		} //End Function

		function RTrim(VALUE){
			var w_space = String.fromCharCode(32);
			var v_length = VALUE.length;
			var strTemp = "";
			if(v_length < 0){
				return"";
			}
			var iTemp = v_length -1;

			while(iTemp > -1){
				if(VALUE.charAt(iTemp) == w_space){
				} else{
					strTemp = VALUE.substring(0,iTemp +1);
					break;
				}
				iTemp = iTemp-1;
			} //End While
			return strTemp;
		} //End Function

		function LTrim(VALUE){
			var w_space = String.fromCharCode(32);
			if(v_length < 1){
				return"";
			}
			var v_length = VALUE.length;
			var strTemp = "";

			var iTemp = 0;

			while(iTemp < v_length){
				if(VALUE.charAt(iTemp) == w_space){
				} else{
					strTemp = VALUE.substring(iTemp,v_length);
					break;
				}
				iTemp = iTemp + 1;
			} //End While
			return strTemp;
		} //End Function

		function reformatDate(dateStr) {
			var result;

			if(isEmpty(dateStr) || dateStr == "empty") return "";

			if(dateStr.length != 9){
				result = "";
			}else{
				var dd = dateStr.substring(0,2);
				var mm = convertMonth(dateStr.substring(3,6));
				var yy = convertYear(dateStr.substring(7,9));
				if(mm == "" || yy == "") result = "";
				result = mm + "/" + dd + "/" + yy;
			}
			return result;
		}

		function convertYear(yy){
			if(isInteger(yy)){
				yyyy = parseInt(yy);
				if(yyyy < 50) yyyy += 2000;
				else yyyy += 1900;
				return yyyy;
			}else{
				return "";
			}
		}

		function convertMonth(mmm){
			if(mmm == "Jan") return "01";
			if(mmm == "Feb") return "02";
			if(mmm == "Mar") return "03";
			if(mmm == "Apr") return "04";
			if(mmm == "May") return "05";
			if(mmm == "Jun") return "06";
			if(mmm == "Jul") return "07";
			if(mmm == "Aug") return "08";
			if(mmm == "Sep") return "09";
			if(mmm == "Oct") return "10";
			if(mmm == "Nov") return "11";
			if(mmm == "Dec") return "12";
			return "";
		}

		<!-- Original:  Ronnie T. Moore -->
		<!-- Web Site:  The JavaScript Source -->

		<!-- This script and many more are available free online at -->
		<!-- The JavaScript Source!! http://javascript.internet.com -->

		<!-- Begin
		function isValidDate(dateStr) {
			// Date validation function courtesty of 
			// Sandeep V. Tamhankar (stamhankar@hotmail.com) -->

			// Checks for the following valid date formats:
			// MM/DD/YY   MM/DD/YYYY   MM-DD-YY   MM-DD-YYYY

			var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/; // requires 4 digit year

			var matchArray = dateStr.match(datePat); // is the format ok?
			if (matchArray == null) {
				alert(dateStr + " Date is not in a valid format.")
				return false;
			}
			month = matchArray[1]; // parse date into variables
			day = matchArray[3];
			year = matchArray[4];
			if (month < 1 || month > 12) { // check month range
				alert("Month must be between 1 and 12.");
				return false;
			}
			if (day < 1 || day > 31) {
				alert("Day must be between 1 and 31.");
				return false;
			}
			if ((month==4 || month==6 || month==9 || month==11) && day==31) {
				alert("Month "+month+" doesn't have 31 days!")
				return false;
			}
			if (month == 2) { // check for february 29th
				var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
				if (day>29 || (day==29 && !isleap)) {
					alert("February " + year + " doesn't have " + day + " days!");
					return false;
   			}
			}
			return true;
		}

		function isValidTime(timeStr) {
			// Time validation function courtesty of 
			// Sandeep V. Tamhankar (stamhankar@hotmail.com) -->

			// Checks if time is in HH:MM:SS AM/PM format.
			// The seconds and AM/PM are optional.

			var timePat = /^(\d{1,2}):(\d{2})(:(\d{2}))?(\s?(AM|am|PM|pm))?$/;

			var matchArray = timeStr.match(timePat);
			if (matchArray == null) {
				alert("Time is not in a valid format.");
				return false;
			}
			hour = matchArray[1];
			minute = matchArray[2];
			second = matchArray[4];
			ampm = matchArray[6];

			if (second=="") { second = null; }
			if (ampm=="") { ampm = null }

			if (hour < 0  || hour > 23) {
				alert("Hour must be between 1 and 12. (or 0 and 23 for military time)");
				return false;
			}
			if (hour <= 12 && ampm == null) {
				if (confirm("Please indicate which time format you are using.  OK = Standard Time, CANCEL = Military Time")) {
					alert("You must specify AM or PM.");
					return false;
   			}
			}
			if  (hour > 12 && ampm != null) {
				alert("You can't specify AM or PM for military time.");
				return false;
			}
			if (minute < 0 || minute > 59) {
				alert ("Minute must be between 0 and 59.");
				return false;
			}
			if (second != null && (second < 0 || second > 59)) {
				alert ("Second must be between 0 and 59.");
				return false;
			}
			return true;
		}

		function dateDiff(date1Str,date2Str) {
			date1 = new Date();
			date2 = new Date();
			diff  = new Date();

			date1temp = new Date(date1Str + " 00:00:00");
			date1.setTime(date1temp.getTime());

			date2temp = new Date(date2Str + " 00:00:00");
			date2.setTime(date2temp.getTime());

			// sets difference date to difference of first date and second date
			result = (date1.getTime() - date2.getTime())

			/*
			diff.setTime(Math.abs(date1.getTime() - date2.getTime()));
	
			timediff = diff.getTime();
			weeks = Math.floor(timediff / (1000 * 60 * 60 * 24 * 7));
			timediff -= weeks * (1000 * 60 * 60 * 24 * 7);

			days = Math.floor(timediff / (1000 * 60 * 60 * 24)); 
			timediff -= days * (1000 * 60 * 60 * 24);

			hours = Math.floor(timediff / (1000 * 60 * 60)); 
			timediff -= hours * (1000 * 60 * 60);

			mins = Math.floor(timediff / (1000 * 60)); 
			timediff -= mins * (1000 * 60);

			secs = Math.floor(timediff / 1000); 
			timediff -= secs * 1000;

			alert(weeks + " weeks, " + days + " days, " + hours + " hours, " + mins + " minutes, and " + secs + " seconds");
			*/

			return result;
		}
//  End -->



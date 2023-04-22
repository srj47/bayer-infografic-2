HTTP_RESPONSE_STATUS_OK="200";
REQUEST_TYPE_GET= "GETPARAM";
REQUEST_TYPE_PUT= "PUTPARAM";
REQUEST_TYPE_EXIT= "EXITAU";
LESSON_STATUS_PASSED= "p";
LESSON_STATUS_FAILED= "f";
LESSON_STATUS_COMPLETED= "c";
LESSON_STATUS_BROWSED= "b";
LESSON_STATUS_INCOMPLETE= "i";
LESSON_STATUS_NOT_ATTEMPTED= "n";    
AICC_Lesson_Location = "";
LESSON_STATUS_COMPLETED = LESSON_STATUS_INCOMPLETE;
AICC_Lesson_Status = LESSON_STATUS_NOT_ATTEMPTED;
AICC_Score= "";
AICC_Time= "";
AICC_Comments= "";
AICC_Objectives_Status= "";
AICC_Student_Preferences= "";
AICC_Audio= 0;
AICC_Language= "";
AICC_Speed= 100;
AICC_Text= 0;
AICC_Data_Chunk= "";
AICC_LMS_Version= "";
AICC_Student_ID= "";
AICC_Student_Name= "";
AICC_Mastery_Score= "";
AICC_CourseID= ""
AICC_SID ="";
AICC_URL ="";
startDate=""
var api = {
    suspendedData:"",
    bookmarkData:"",
    apiInit:function(){
        queryString = api.getQueryString(),
        AICC_SID = queryString["AICC_SID"],
        AICC_URL = queryString["AICC_URL"]  
        api.getdata();      
    },
    setSuspendedData:function(data){
        if(data.lastIndexOf("##") == -1){
            var str = api.bookmarkData +"##"+data;
            AICC_Lesson_Location = str;
            console.log("AICC_Lesson_Location::: "+ AICC_Lesson_Location)
            console.log("AICC_Lesson_Location::: "+ str)
        }else{
           var Arr = data.split("##");
           var Str =  api.bookmarkData+"##"+Arr[1];
           AICC_Lesson_Location = Str;
           console.log("AICC_Lesson_Location::: "+ AICC_Lesson_Location)
           console.log("AICC_Lesson_Location::: "+ Str)
        }
        api.scormCommit();
    },
    getSuspendedData:function(){
        console.log("api.suspendedData:::: "+AICC_Lesson_Location);
        return AICC_Lesson_Location;
    },
    getCompletionStatus:function(){
        return LESSON_STATUS_COMPLETED;
    },
    setPassed : function (val) {
        if(val == "passed"){
            LESSON_STATUS_PASSED = "p";
        }else if(val == "failed"){
            LESSON_STATUS_PASSED = "f";
        }
        api.scormCommit();
     },
    setFailed : function () { 
        api.setStatus(LESSON_STATUS_FAILED); 
        api.scormCommit();
    },
    setCompleted : function (val) {
        if(val == "completed"){
            AICC_Lesson_Status = "c"
        }else if(val == "incompleted"){
            AICC_Lesson_Status = "i"
        }
        api.scormCommit();
    },
    setBrowsed : function (val) { 
        LESSON_STATUS_BROWSED = val;
        api.scormCommit();
    },
    setIncomplete : function (val) { 
        LESSON_STATUS_INCOMPLETE = val
        api.scormCommit(); 
    },
    setScore : function (value) {
         AICC_Score  = value; 
         api.scormCommit();
    },        
    setNotAttempted : function (val) { 
        LESSON_STATUS_NOT_ATTEMPTED =  val;
        api.scormCommit();
    },
    // setLessonLocation : function (value) {
    //      AICC_Lesson_Location = value; 
    //      api.scormCommit();
    //  },
    getLessonLocation : function () {
         return AICC_Lesson_Location; 
    },
    getCurrentStatus : function()
    {
        //console.log(AICC_Lesson_Status + " AAA")
        return AICC_Lesson_Status;
    },
    setStatus:function(strStatus) {
        AICC_Lesson_Status = strStatus;
        api.scormCommit();
    }, 
    getStudentName:function() {
       return AICC_Student_Name;
    }, 
    getStudentId:function() {
        return AICC_Student_ID;
     },  
    getScore : function () {
       return AICC_Score; 
    }, 
    getSessionTime:function(){
        return AICC_Time;
    },
    setSessionTime:function(val){
        AICC_Time = val;
        //api.scormCommit();
    },
    exit: function() {
        //log('Exiting by sending PUT command, then sending EXIT command to LMS...');
        //api.computeTime();
        api.performHttpRequestToLMS(REQUEST_TYPE_PUT,callback);
        api.performHttpRequestToLMS(REQUEST_TYPE_EXIT,calback);
    },
    getdata:function(){
        api.performHttpRequestToLMS(REQUEST_TYPE_GET,function(){
            return "getDataDone";
        });
    },
    scormCommit: function() {
        scorm_obj.computeTime();
        return api.performHttpRequestToLMS(REQUEST_TYPE_PUT);
    },
    performHttpRequestToLMS: function(strRequestType) {
        var data = "";
        var methodType = strRequestType; 
        if (strRequestType == REQUEST_TYPE_PUT) {
            methodType = 'POST';
            if (AICC_Lesson_Status == "b" || AICC_Lesson_Status == "i" || AICC_Lesson_Status =="unknown" || AICC_Lesson_Status =="n" || AICC_Lesson_Status =="n" || AICC_Lesson_Status !="c")
			{
				AICC_Lesson_Status = "i";
			}

            data = api.serializeAiccData();
        }else if(strRequestType == REQUEST_TYPE_GET){
            methodType = 'GET';  

        }else if( "REQUEST_TYPE_EXIT"){
            methodType = 'POST';
            if (AICC_Lesson_Status == "b" || AICC_Lesson_Status == "i" || AICC_Lesson_Status =="unknown" || AICC_Lesson_Status =="n" || AICC_Lesson_Status =="n" || AICC_Lesson_Status !="c")
			{
				AICC_Lesson_Status = "i";
			}

            data = api.serializeAiccData();
        }
        
        // construct a form and post the data to the LMS
        var error = false;
        var httpRequest;
        try {
           // httpRequest = new XMLHttpRequest;
           // httpRequest.open("POST", AICC_URL, false);
          //  HttpRequest.open("POST", AICC_URL, false);
            if (error == false) {
               // api.fn_HttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
               var strPostData = "session_id=" + encodeURIComponent(AICC_SID) +
               "&version=3.5" +
               "&command=" + encodeURIComponent(strRequestType) +
               "&aicc_data=" + encodeURIComponent(data);
            }
           
            var HttpRequest = $.ajax({
                url: AICC_URL,
                method: methodType,
                data:strPostData,
                contentType:"application/x-www-form-urlencoded"
              });               
              HttpRequest.done(function(res) {
                  if(methodType == 'GET'){
                    api.parseLmsResponse(res)

                   // controller.scormInitDone();  
                    //scorm_obj.bookmark = scorm_obj.getBookmarkData();
                    //scorm_obj.suspendData = scorm_obj.getSuspendedData();  
                    
                   // api.startTimer(); 
                    //api.computeTime(); 
                    //scorm_obj.loadPage();
                    //console.log("GET_res",res);
                   return false;
                    
                  }else if(methodType == 'POST'){
                    if(strRequestType == "REQUEST_TYPE_EXIT"){
                        return false;
                    }
                    //console.log("POST_res",res);
                  }
                 
               // api.completeHttpRequest(api.fn_HttpRequest.statusText, strRequestType, data, api.fn_HttpRequest.responseText, api.fn_HttpRequest.status, api.fn_HttpRequest.statusText);
              });               
              HttpRequest.fail(function( jqXHR, textStatus ) {
                alert( "Request failed: " + textStatus );
              });
        }
        catch (e) {
            error = true;
            api.completeHttpRequest(e.name, strRequestType, data, '', e.number, e.message);
        }
      

        //                // firefox, chrome, safari
        //                $.ajax({
        //                    url: AICC_URL,
        //                    type: "GET",
        //                    async: false,
        //                    crossDomain: true,
        //                    data: urlParameters,
        //                    //                   data: {
        //                    //                        session_id: AICC_SID,
        //                    //                        command: strRequestType,
        //                    //                        version: '3.5',
        //                    //                        aicc_data: data
        //                    //                    },
        //                    dataType: "html",
        //                    complete: function (httpRequest, textStatus) {
        //                        var errorMessage = 'HTTP response status: ' + httpRequest.Status + ' - ' + httpRequest.statusText;
        //                        completeHttpRequest(textStatus, strRequestType, data, httpRequest.responseText, httpRequest.Status, errorMessage);
        //                    }
        //                });
    },
    completeHttpRequest: function(textStatus, strRequestType, data, responseText, httpStatusCode, errorMessage) {
       // console.log('HTTP request to LMS: ' + textStatus.toUpperCase());
        if (httpStatusCode != HTTP_RESPONSE_STATUS_OK) {
            console.log('-- ' + errorMessage);
        }
       // console.log('-- URL: <a target="_blank" href="' + AICC_URL + '">' + AICC_URL + '</a>');
        //console.log('-- Sending Session_ID: ' + AICC_SID);
       // console.log('-- Sending Command: ' + strRequestType);
       // console.log('-- Sending Version: 3.5');
       // console.log('-- Sending AICC_DATA:' + api.formatAiccDataForLog(data));
       // console.log('-- Response received from LMS:' + api.formatAiccDataForLog(responseText));
        //console.log();
        if ((httpStatusCode == HTTP_RESPONSE_STATUS_OK) && (strRequestType == REQUEST_TYPE_GET)) {
            api.parseLmsResponse(responseText);
        }
    }, 
    //#region Parsing methods
    parseLmsResponse:function (strHtml) {

        var isValid = api.isLmsResponseValid(strHtml);
        if (!isValid) return;

        var lines = strHtml.toString().split("\n");
        for (var i = 0; i < lines.length; i++) {
            var strLine = lines[i].toString().replace(/\r/g, "");

            var name = api.getNameFromAiccLine(strLine);

            if (name != "") {
                var value = api.getValueFromAiccLine(strLine);
                switch (name) {
                    case "version":
                        var tempVersion = parseFloat(value);
                        if (isNaN(tempVersion)) {
                            tempVersion = 0;
                        }
                        AICC_LMS_Version = tempVersion;
                        break;
                    case "student_id":
                        AICC_Student_ID = value;
                        break;
                    case "student_name":
                        AICC_Student_Name = value;
                        break;
                    case "lesson_location":
                         var Arr = value.split("##")
                        AICC_Lesson_Location = Arr[0];
                        api.suspendedData = Arr[1];
                        break;
                    case "score":
                        AICC_Score = value;
                        break;
                    case "lesson_status":
                        var code = "X";
                        if (value.length > 0) {
                            code = value.charAt(0).toLowerCase();
                        }
                        switch (code) {
                            case LESSON_STATUS_PASSED:
                            case LESSON_STATUS_FAILED:
                            case LESSON_STATUS_COMPLETED:
                            case LESSON_STATUS_BROWSED:
                            case LESSON_STATUS_INCOMPLETE:
                            case LESSON_STATUS_NOT_ATTEMPTED:
                                AICC_Lesson_Status = code;
                                break;
                            default:
                                AICC_Lesson_Status = LESSON_STATUS_NOT_ATTEMPTED;
                        }
                        break;                       
                    case "time":
                        AICC_Time = value;
                        break;
                    case "mastery_score":
                        AICC_Mastery_Score = value;
                        break;
                    case "audio":
                        AICC_Audio = value;
                        break;
                    case "speed":
                        AICC_Speed = value;
                        break;
                    case "course_id":
                        AICC_CourseID = value;
                        break;
                   
                   
                }
            }
        }
    },

    isLmsResponseValid:function(strHtml) {

        // search the html for an error message
        var strErrorNumber = "";
        var strErrorText = "";
        var lines = strHtml.toString().split("\n");
        for (var i = 0; i < lines.length; i++) {
            var strLine = lines[i].toString().replace(/\r/g, "");
            if (strLine.toLowerCase().indexOf("error") > -1) {
                if (strLine.toLowerCase().indexOf("error_text") > -1) strErrorText = strLine;
                else strErrorNumber = strLine;
            }

        }

            if (strErrorNumber == "") {
                // probably a 404 error or LMS exploded
                console.log('LMS response is not valid:');
                //console.log('-- Error number: ' + strErrorNumber);
               // console.log('-- Error text: ' + strErrorText);
               // console.log();
                //api.warn("ERROR - LMS did not return a valid error number");
                return false;
            } else if (strErrorNumber != "" && strErrorNumber.toLowerCase().search(/error\s*=\s*0/) == -1) {
               // console.log('LMS returned an error:');
               // console.log('-- Error number: ' + strErrorNumber);
               // console.log('-- Error text: ' + strErrorText);
               // console.log();
                api.warn("ERROR - LMS returned a error number: " + strErrorNumber + " - " + strErrorText);
                return false;
            } else {
                return true;
            }
        },

        getValueFromAiccLine: function(strLine) {
            var strValue = "";
            strLine = new String(strLine);
            var i = strLine.indexOf("=");

            if (i > -1 && ((i + 1) < strLine.length)) {
                var strTemp = strLine.substring(i + 1);
                strTemp = strTemp.replace(/^\s*/, "");
                strTemp = strTemp.replace(/\s*$/, "");
                strValue = strTemp;
            }
            return strValue;
        },

        getNameFromAiccLine:function(strLine) {
            var i;
            var strTemp;
            var strName = "";
            strLine = new String(strLine);
            i = strLine.indexOf("=");
            if (i > -1 && i < strLine.length) {
                strTemp = strLine.substring(0, i);
                strTemp = strTemp.replace(/^\s*/, "");
                strTemp = strTemp.replace(/\s*$/, "");
                strName = strTemp;
            } else {
                i = strLine.indexOf("[");
                if (i > -1) {
                    strTemp = strLine.replace(/[\[|\]]/g, "");
                    strTemp = strTemp.replace(/^\s*/, "");
                    strTemp = strTemp.replace(/\s*$/, "");
                    strName = strTemp;
                }
            }
            return strName;
        },

        //#endregion

        //#region Utility methods

        getQueryString: function() {
            // returns a json object providing access to the QueryString
            // using syntax like this: var id = obj["id"];

            var queryString = {};
            (function () {
                var e,
                    a = /\+/g, // Regex for replacing addition symbol with a space
                    r = /([^&=]+)=?([^&]*)/g,
                    d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
                    q = window.location.search.substring(1);

                while (e = r.exec(q))
                    queryString[d(e[1])] = d(e[2]);
            })();
            return queryString;
        },

        formatAiccDataForLog:function(strAiccData) {
            //replace line breaks with br tags
            strAiccData = $.trim(strAiccData);
            if (strAiccData == '') strAiccData = '[none]';
            strAiccData = '\r\n' + strAiccData;
            return strAiccData.replace(/\r\n/gi, "<br>---- ");
        },

        serializeAiccData: function() {
            var data = "[Core]\r\n";
            data += "Lesson_Location=" + AICC_Lesson_Location + "\r\n";
            data += "Lesson_Status=" + AICC_Lesson_Status + "\r\n";
            data += "Score=" + AICC_Score + "\r\n";
            data += "Time=" + AICC_Time + "\r\n";
            data += "[Comments]\r\n" + AICC_Comments + "\r\n";
            data += "[Objectives_Status]\r\n" + AICC_Objectives_Status + "\r\n";
            data += "[Student_Preferences]\r\n";
            data += "Audio=" + AICC_Audio + "\r\n";
            data += "Language=" + AICC_Language + "\r\n";
            data += "Speed=" + AICC_Speed + "\r\n";
            data += "Text=" + AICC_Text + "\r\n";
            data += "[Core_Lesson]\r\n";
            data += AICC_Data_Chunk
           // console.log(data)
            return data;
        },

        log:function(str) {
            if (str == undefined) str = '';
            //objLog.append(str + '<br/>');
           // console.log(str)
        },

        warn:function(str) {
            str += "\r\n\r\nCheck the debug log for more details.";
           // alert(str);
        },

        startTimer:function() {
            
           startDate = new Date().getTime();
           //console.log("startDate :::::::::::::::"+startDate)
           api.computeTime();
        },

        computeTime:function(){
           if ( startDate != "00:00:00" )
           {
              var currentDate = new Date().getTime();
              var elapsedSeconds = ( (currentDate - startDate) / 1000 );
              var formattedTime = api.convertTotalSeconds(elapsedSeconds);
           }
           else
           {
              formattedTime = "00:00:00.0";
           }
           console.log("formattedTime :::::::::::::::"+formattedTime)
           AICC_Time  = formattedTime; 
           //api.scormCommit();
        
        },

        convertTotalSeconds:function(ts){
           var sec = (ts % 60);

           ts -= sec;
           var tmp = (ts % 3600);  //# of seconds in the total # of minutes
           ts -= tmp;              //# of seconds in the total # of hours

           // convert seconds to conform to CMITimespan type (e.g. SS.00)
           sec = Math.round(sec*100)/100;
           
           var strSec = new String(sec);
           var strWholeSec = strSec;
           var strFractionSec = "";

           if (strSec.indexOf(".") != -1)
           {
              strWholeSec =  strSec.substring(0, strSec.indexOf("."));
              strFractionSec = strSec.substring(strSec.indexOf(".")+1, strSec.length);
           }
           
           if (strWholeSec.length < 2)
           {
              strWholeSec = "0" + strWholeSec;
           }
           strSec = strWholeSec;
           
           if (strFractionSec.length)
           {
              strSec = strSec+ "." + strFractionSec;
           }


           if ((ts % 3600) != 0 )
              var hour = 0;
           else var hour = (ts / 3600);
           if ( (tmp % 60) != 0 )
              var min = 0;
           else var min = (tmp / 60);

           if ((new String(hour)).length < 2)
              hour = "0"+hour;
           if ((new String(min)).length < 2)
              min = "0"+min;

           var rtnVal = hour+":"+min+":"+strSec;

           return rtnVal;
        },

 fn_HttpRequest: function()
	{
		var xmlHttp = null;
		var arrCtrlName = new Array("MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp");
		var nIndex = 0;
		
		if (window.XMLHttpRequest) 
		{
			try
			{
				xmlHttp = new XMLHttpRequest();
			}
			catch (e)
			{
				xmlHttp = null;
			}
		}
		
		if (xmlHttp == null && window.ActiveXObject)
		{
			// Use the ActiveX Control
			while (xmlHttp == null && nIndex < arrCtrlName.length)
			{
				try
				{
					xmlHttp = new ActiveXObject(arrCtrlName[nIndex]);
				}
				catch (e)
				{
					xmlHttp = null;
				}
				
				nIndex++;
			}

		}

		return xmlHttp;
	}

}

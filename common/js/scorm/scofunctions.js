var scorm_obj = {
	startDate: null,
	exitPageStatus: null,
	bookmark: null,
	suspendData: null,
	"1_2": {
		"id": "cmi.core.student_id",
		"name": "cmi.core.student_name",
		"completionStatus": "cmi.core.lesson_status",
		"data": "cmi.suspend_data",
		"raw": "cmi.core.score.raw",
		"max": "cmi.core.score.max",
		"min": "cmi.core.score.min",
		"location": "cmi.core.lesson_location",
		"sessionTime": "cmi.core.session_time",
		"exit":  "cmi.core.exit",
		"mode": "cmi.core.lesson_mode"
	},
	"2004_2": {
		"id": "cmi.learner_id",
		"name": "cmi.learner_name",
		"completionStatus": "cmi.completion_status",
		"successStatus":"cmi.success_status",
		"data": "cmi.suspend_data",
		"scaled":"cmi.score.scaled",
		"raw": "cmi.score.raw",
		"max": "cmi.score.max",
		"min": "cmi.score.min",
		"passScore":"cmi.scaled_passing_score",
		"location": "cmi.location",
		"sessionTime": "cmi.session_time",
		"exit":  "cmi.exit",
		"mode": "cmi.mode"
	},
	"2004_3":{
		"id": "cmi.learner_id",
		"name": "cmi.learner_name",
		"completionStatus": "cmi.completion_status",
		"successStatus":"cmi.success_status",
		"data": "cmi.suspend_data",
		"scaled":"cmi.score.scaled",
		"raw": "cmi.score.raw",
		"max": "cmi.score.max",
		"min": "cmi.score.min",
		"passScore":"cmi.scaled_passing_score",
		"location": "cmi.location",
		"sessionTime": "cmi.session_time",
		"exit":  "cmi.exit",
		"mode": "cmi.mode"
	},
	"2004_4":{
		"id": "cmi.learner_id",
		"name": "cmi.learner_name",
		"completionStatus": "cmi.completion_status",
		"successStatus":"cmi.success_status",
		"data": "cmi.suspend_data",
		"scaled":"cmi.score.scaled",
		"raw": "cmi.score.raw",
		"max": "cmi.score.max",
		"min": "cmi.score.min",
		"passScore":"cmi.scaled_passing_score",
		"location": "cmi.location",
		"sessionTime": "cmi.session_time",
		"exit":  "cmi.exit",
		"mode": "cmi.mode"
	},
	"AICC":{
		"id": "AICC_Student_ID",
		"name": "AICC_Student_Name",
		"completionStatus": "LESSON_STATUS_COMPLETED",
		"successStatus":"",
		"successStatusPass":"LESSON_STATUS_PASSED",
		"LESSON_STATUS_PASSED":"LESSON_STATUS_PASSED",
		"successStatusFaild":"LESSON_STATUS_PASSED",
		"LESSON_STATUS_FAILED" : "LESSON_STATUS_FAILED",
		"LESSON_STATUS_COMPLETED": "LESSON_STATUS_COMPLETED",
		"LESSON_STATUS_BROWSED":"LESSON_STATUS_BROWSED",
		"LESSON_STATUS_INCOMPLETE":"i",
		"LESSON_STATUS_NOT_ATTEMPTED":"n",
		"data": "AICC_Data_Chunk",
		"scaled":"AICC_Score",
		"raw": "cmi.score.raw",
		"max": "cmi.score.max",
		"min": "cmi.score.min",
		"passScore":"AICC_Score",
		"location": "AICC_Lesson_Location",
		"sessionTime": "AICC_Time",
		"exit": "cmi.exit",
		"mode": "cmi.mode",

	},
	scormGetValue: function(key){
		var sc_itm = scorm_obj[model.scormVersion][key];
		if(model.scormVersion == "AICC"){
			return scorm_obj[model.scormVersion][key];
		}else{
			return doLMSGetValue(sc_itm);
		}
    },
	scormSetValue: function(key, data){
		var sc_itm = scorm_obj[model.scormVersion][key];
		if(model.scormVersion == "AICC"){
			sc_itm = data;
		}else{
			return doLMSGetValue(sc_itm);
		}
	},
	scormCommit: function(){
		if(model.scormVersion == "AICC"){
			scorm_obj.computeTime();
			api.scormCommit();
		}else{
			doLMSCommit();
		}
	},
	setSuspendedData: function(data){
		/******   This function is used to save suspended data on scorm  ******/
		if(model.scormVersion == "AICC"){
			api.setSuspendedData(data);
		}else{
			scorm_obj.scormSetValue("data", data);			
		}
		scorm_obj.scormCommit();
	},
	getSuspendedData: function(){
		/******   This function is used to get suspended data from scorm  ******/
		if(model.scormVersion == "AICC"){
			return api.getSuspendedData();
		}else{
			return scorm_obj.scormGetValue("data");
		}
		
	},
	getCompletionStatus: function(){
		/******   This function is used to get completion status from scorm  ******/
		if(model.scormVersion == "AICC"){
		   return	api.getCompletionStatus();
		}else{
			return scorm_obj.scormGetValue("completionStatus");
		}
		
	},
	setCompletionStatus: function(arg){
		/******   This function is used to save completion status on scorm  ******/
		if(model.scormVersion == "AICC"){
			return api.setCompleted(arg);
		}else{
			return scorm_obj.scormSetValue("completionStatus", arg);
		}
	},
	getSuccessStatus: function(){
		/******   This function is used to get success status from scorm  ******/
		if(model.scormVersion == "AICC"){
			//return api.getCurrentStatus();
		}else{
			return scorm_obj.scormGetValue("successStatus");
		}
		
	},
	setSuccessStatus: function(arg){
		/******   This function is used to save success status on scorm  ******/
		if(model.scormVersion == "AICC"){
			return 	api.setStatus(arg)
		}else{
			return scorm_obj.scormSetValue("successStatus", arg);
		}
		
	},
	getStudentName: function(){
		/******   This function is used to get lerner or student name from scorm  ******/
		if(model.scormVersion == "AICC"){
			return api.getStudentName()
		}else{
			var dummyName = scorm_obj.scormGetValue("name");
			var array1 = dummyName.split(",")
			return String(array1[1]+" "+array1[0]);
		}
	
	},
	getStudentId: function(){
		/******   This function is used to get lerner or student id from scorm  ******/
		if(model.scormVersion == "AICC"){
			return api.getStudentName()
		}else{
			return scorm_obj.scormGetValue("id");
		}
		
	},
	getStudentScore: function(){
		/******   This function is used to get lerner or student score from scorm  ******/
		if(model.scormVersion == "AICC"){
			return api.getScore()
		}else{
			return scorm_obj.scormGetValue("raw");
		}
		
	},
	setBookmarkData: function(arg){
		/******   This function is used to save bookmarking data on scorm  ******/
		if(model.scormVersion == "AICC"){
			 api.bookmarkData = arg;
		}else{
			scorm_obj.scormSetValue("location", arg);
		    scorm_obj.scormCommit();
		}
	},
	getBookmarkData: function(){
		/******   This function is used to get bookmarking data from scorm  ******/
		if(model.scormVersion == "AICC"){
			return api.getLessonLocation()
		}else{
			return scorm_obj.scormGetValue("location");
		}
		
	},
	setReportScore: function(scaledScore,obtained, maximum, minimum){
		/******   This function is used to set score report data on scorm  ******/
		
		if (model.scormVersion != "1_2") {
			//  passingScore scorm_obj.scormSetValue("passScore", passingScore); read only field set only by xml
			scorm_obj.scormSetValue("scaled", scaledScore);
		} 
		if(model.scormVersion != "AICC"){
			scorm_obj.scormSetValue("raw", obtained);
			scorm_obj.scormSetValue("max", maximum);
			scorm_obj.scormSetValue("min", minimum);
		}
		scorm_obj.scormCommit();
	},
	getSessionTime: function(){
		/******   This function is used to get session time from scorm  ******/
		if(model.scormVersion == "AICC"){
			return api.getSessionTime();
		}else{
			return scorm_obj.scormGetValue("sessionTime");
		}
		
	},
	setSessionTime: function(arg){
		/******   This function is used to save session time on scorm  ******/
		if(model.scormVersion == "AICC"){
			return api.setSessionTime(arg);
		}else{
			return scorm_obj.scormSetValue("sessionTime", arg);
		}
	},
	setExitStatus: function(arg){
		/******   This function is used to save session time on scorm  ******/
		if(model.scormVersion == "AICC"){
			return  api.exit();
		}else{
			return scorm_obj.scormSetValue("exit", arg);
		}
		
	},
	getMode: function(){
		/******   This function is used to get mode from scorm  ******/
		return scorm_obj.scormGetValue("mode");
	},
	loadAICC:function(){
		var res = api.apiInit();
		scorm_obj.startTimer();		 
	},
	loadPage: function(){
		if(model.scormVersion == "AICC" ){
			var status = scorm_obj.getCompletionStatus();
			
			if (status == "b" || status == "i" || status =="unknown" || status =="n" || status =="n" || status !="c")
			{
				scorm_obj.setCompletionStatus("incompleted");
				//scorm_obj.scormCommit();
			}
			scorm_obj.exitPageStatus = false;
			//api.computeTime();
		}else{
			var result = doLMSInitialize();
			var status = scorm_obj.getCompletionStatus();

			if (status == "not attempted" || status == "" || status =="unknown")
			{
				scorm_obj.setCompletionStatus("incomplete");
				if (model.scormVersion != "1_2") {
					scorm_obj.setSuccessStatus("unknown");
				} 
				scorm_obj.scormCommit();
			}
			scorm_obj.exitPageStatus = false;
			scorm_obj.bookmark = scorm_obj.getBookmarkData();
			scorm_obj.suspendData = scorm_obj.getSuspendedData();
			controller.scormInitDone();
			scorm_obj.startTimer();
		}

	},
	startTimer: function(){
	   scorm_obj.startDate = new Date().getTime();
	},
	computeTime: function()
	{
		var formattedTime = "00:00:00.0";
	   if ( scorm_obj.startDate != 0 )
	   {
	      var currentDate = new Date().getTime();
	      var elapsedSeconds = ( (currentDate - scorm_obj.startDate) / 1000 );
	      formattedTime = scorm_obj.convertTotalSeconds( elapsedSeconds );
	   }
	   scorm_obj.setSessionTime(formattedTime);
	},
	doBack: function()
	{
	   scorm_obj.setCompletionStatus( "incomplete" );
	   scorm_obj.setSuccessStatus("unknown");

	   scorm_obj.computeTime();
	   scorm_obj.exitPageStatus = true;
	   var result;
	   result = scorm_obj.scormCommit();
	   scorm_obj.setExitStatus( "suspend" );

	},
	doContinue: function( status )
	{
	   scorm_obj.setExitStatus( "" );

	   var mode = scorm_obj.getMode();

	   if ( mode != "review"  &&  mode != "browse" )
	   { 
	   		scorm_obj.setCompletionStatus(status);
	   }
	 
	   scorm_obj.computeTime();
	   scorm_obj.exitPageStatus = true;
	   
	   var result;
	   result = pipwerks.SCORM.data.save();
	},
	doQuit: function()
	{
	   scorm_obj.exitPageStatus = true;
	   var result;
	   result = scorm_obj.scormCommit();
	   if(model.scormVersion == "AICC"){
		api.exit();
	   }else{
		scorm_obj.setExitStatus("suspend");
	   }
	  
	},
	unloadPage: function()
	{
		if (scorm_obj.exitPageStatus != true)
		{
			scorm_obj.doQuit();
		}
	},
	 convertTotalSeconds: function(ts)
	{
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
	}

}
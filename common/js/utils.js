function isFunction(val) {
    return (typeof(val) == typeof(Function));
}

function isLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkSystem(supportedSystems) {
    systemDetect = new SystemDetect();
    systemDetect.init();

    var deviceType = systemDetect.deviceType;
    var os = systemDetect.osName;
    var osVer = systemDetect.osVersion;
    var browserVersion = Number(systemDetect.browserVersion);
    var browserName = systemDetect.browserName;

    var wW = screen.width;
    var wH = screen.height;

    if (supportedSystems.Browser.hasOwnProperty(browserName)) {
        if (browserVersion >= supportedSystems.Browser[browserName].version.value) {
            if ((wW >= supportedSystems.Resolution.width && wH >= supportedSystems.Resolution.height) || (wW >= supportedSystems.Resolution.height && wH >= supportedSystems.Resolution.width)) {
                return true;
            }
        }
    }

    return false;
}

function getCertificateDate() {
    var certificateDate = "";
    var d = new Date();
    var month = d.getMonth();
    var date = d.getDay();
    var dat = d.getDate();
    var year = d.getFullYear();
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    certificateDate = dat + " " + monthNames[month] + " " + year;

    return certificateDate;
}

function createEmbedAudio(src) {
    // var parent = $('embed#embedAudio').parent();
    var parent = $('#audioContainer');
    var newElement = '<embed id="embedAudio" height="1" width="1" src="' + src + '" autostart="true" loop="false">';

    $('embed#embedAudio').remove();
    parent.append(newElement);
}

function removeEmbedAudio() {
    $('embed#embedAudio').remove();
}

function ReportScore(obtained, maximum, minimum) {
    doLMSSetValue("cmi.core.score.raw", obtained);
    /*var errorCode = parseInt(doLMSGetLastError());
    if(errorCode){
        return false;
    }*/
    doLMSSetValue("cmi.core.score.max", maximum);
    /*errorCode = parseInt(doLMSGetLastError());
    if(errorCode){
        return false;
    }*/
    doLMSSetValue("cmi.core.score.min", minimum);
    /*errorCode = parseInt(doLMSGetLastError());
    if(errorCode){
        return false;
    }*/
    doLMSCommit();
    /*return true;*/


}


function SetSuspendedData(data) {
    doLMSSetValue("cmi.suspend_data", data);
    doLMSCommit();
}

function GetSuspendedData() {
    var str = doLMSGetValue("cmi.suspend_data");
    return str;
}

function GetLessonStatus() {
    return doLMSGetValue("cmi.core.lesson_status");
}

function SetLessonStatus(arg) {
    return doLMSSetValue("cmi.core.lesson_status", arg);
    doLMSCommit();
}

function GetStudentName() {
    var str1 = doLMSGetValue("cmi.core.student_name");
     return str1;
}

function GetStudentId() {
    var str2 = doLMSGetValue("cmi.core.student_id");
    return str2;
}

function GetStudentScore() {
    return doLMSGetValue("cmi.core.score.raw");
}

function fnSaveBookmark(arg) {
    doLMSSetValue("cmi.core.lesson_location", arg);
    doLMSCommit();
}

function getBookmarkData() {
    return doLMSGetValue("cmi.core.lesson_location");
}

function getSuspendData() {
    return doLMSGetValue("cmi.suspend_data");
}

function putSCORMInteractions(id,obj,tim,typ,crsp,wgt,srsp,res,lat,txt) {
    //console.log(doLMSGetValue('cmi.interactions._count')+" interactions count11")
   // alert(doLMSGetValue('cmi.interactions._count'))
    var IndexVar = parseInt( doLMSGetValue( 'cmi.interactions._count' ), 10 )
  var root    = 'cmi.interactions.' + IndexVar;  
  var Quesid = "Ques"+(parseInt(id));
  if(Quesid)   doLMSSetValue( root + '.id', Quesid);
  if(obj)  doLMSSetValue( root + '.objectives.0.id', obj);
  if(tim)  doLMSSetValue( root + '.time', tim);
  if(typ)  doLMSSetValue( root + '.type', typ);
  if(crsp) doLMSSetValue( root + '.correct_responses.0.pattern', crsp);
  doLMSSetValue( root + '.weighting', wgt);
  if(srsp) doLMSSetValue( root + '.student_response', srsp );
  if(res)  doLMSSetValue( root + '.result', res);
  if(lat)  doLMSSetValue( root + '.latency', lat);
  if(txt)  doLMSSetValue( root + '.text', txt);
   console.log(IndexVar+" interactions count")
}

function pretty_time_string(num) {
      return ( num < 10 ? "0" : "" ) + num;
}
function get_elapsed_time_string(total_seconds) {
    var hours = Math.floor(total_seconds / 3600);
    total_seconds = total_seconds % 3600;

    var minutes = Math.floor(total_seconds / 60);
    total_seconds = total_seconds % 60;

    var seconds = Math.floor(total_seconds);

    // Pad the minutes and seconds with leading zeros, if required
    hours = pretty_time_string(hours);
    minutes = pretty_time_string(minutes);
    seconds = pretty_time_string(seconds);

    // Compose the string for display
    var currentTimeString = hours + ":" + minutes + ":" + seconds;

    return currentTimeString;
}

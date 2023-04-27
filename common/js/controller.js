var model = { scormVersion: "AICC" };
$(document).ready(function() {
    scorm_obj.loadAICC();
    utility.init();
    controller.init();
});

var controller = {
    mainSection: '',
    topicState: [0, 0, 0, 0, 0, 0, 0, 0],
    pageDescription: '',
    assessment: '',
    assessmentPopup: '',
    assessmentPopupClose: '',
    assessment1: '',
    assessmentPopup1: '',
    assessmentPopupClose1: '',
    assessmentstart: '',
    assessmenttype1: '',
    assessmentSection1: '',
    assessmentstart1: '',
    assessmenttype2: '',
    assessmentSection2: '',
    feedback: '',
    feedbackClose: '',
    scenerioBtn: '',
    scenerioBackBtn: '',
    scenerioContinueBtn: '',
    videosArray: [],
    bookMarkData: "",
    bgMusic: '',
    fromBookmark: false,
    oneIsDone: false,
    // initFlipBook: [0, 0],
    moduleTitle: {
        mod_0: 'Introduction',
        mod_1: 'Introduction to Medical Malpractice Litigation',
        mod_2: 'The Initial Process of a Malpractice Suit',
        mod_3: 'The Deposition',
        mod_4: 'Heading to Trial',
        mod_5: 'Managing the Stress of Litigation',
        mod_6: 'Stressed or Less Stressed – Practice Your Preparedness',
        mod_7: 'Conclusion'
    },

    PageCalls: function(v, cb) {
        var arr1 = { "Section1": "m1t1p1", "Section2": "m1t1p2", "Section3": "m1t1p3", "Section4": "m1t1p4", "Section5": "m1t1p5", "Section6": "m1t1p6", "Section7": "m1t1p7", "Section8": "m1t1p8" };
        $('#' + v).load('common/pages/' + arr1[v] + '.html', cb);
    },

    init: function() {
        // $('.section1').load('common/pages/m1t1p1.html');
        // $('.section3').load('common/pages/m1t1p3.html');
        /* define id or call elements */
        // $('.section2').load('common/pages/m1t1p2.html');
        // $('.section3').load('common/pages/m1t1p3.html');
        // $('.section4').load('common/pages/m1t1p4.html');
        // $('.section5').load('common/pages/m1t1p5.html');

        // $('.section6').load('common/pages/m1t1p6.html');
        // $('.section').load('common/pages/m1t1p1.html');
        // $('#thankyou').load('common/pages/thankyou.html');
        //utility.pageClickTrigger();
        controller.setVideosrc();
        if(model.scormVersion == "AICC"){
            scorm_obj.loadAICC();
        }else{
            scorm_obj.loadPage();
        }       
        this.declaration();
        // controller.bookMarkData = scorm_obj.getBookmarkData();
        // // controller.bookMarkData = "Section3**1";
        // // controller.topicState = [1, 1, 0, 0, 0, 0, 0, 0];
        // if (controller.bookMarkData != "" && controller.bookMarkData != undefined && controller.bookMarkData != "undefined" && controller.bookMarkData != null && controller.bookMarkData != "null") {
        //     $('#player_bookmarkPopupWrapper').addClass('popon');
        //     controller.fromBookmark = true;
        //     utility.helpPopupClosed();
        // } else {
        //    // controller.setBookMarkData();
        //     // utility.helpBtnClicked();
             utility.openProfiler();
             utility.CallFullPageFun(1);
        // }
        utility.enableMenuBtn();
    },

    suspendDataSetup:function(){
        var suspendData = scorm_obj.getSuspendedData();
        if (suspendData != "" && suspendData != undefined && suspendData != "undefined" && suspendData != null && suspendData != "null") {
            controller.topicState = suspendData.split('**').map(function(item) {
                return parseInt(item);
            });
        }
        controller.bookMarkData = scorm_obj.getBookmarkData();
        // controller.bookMarkData = "Section3**1";
        // controller.topicState = [1, 1, 0, 0, 0, 0, 0, 0];
         if (controller.bookMarkData != "" && controller.bookMarkData != undefined && controller.bookMarkData != "undefined" && controller.bookMarkData != null && controller.bookMarkData != "null") {
            $('#player_bookmarkPopupWrapper').addClass('popon');
            controller.fromBookmark = true;
            utility.helpPopupClosed();
        } else {
           // controller.setBookMarkData();
            // utility.helpBtnClicked();
           // utility.openProfiler();
            //utility.CallFullPageFun(1);
            controller.PageCalls('Section1', function() {
                utility.pageSet('#Section1');
                controller.fromBookmark = false;
                controller.setBookMarkData();
                controller.setVideosrc();
            });
        }
    },
    unloadPage: function() {
        //controller.setBookMarkData();
        scorm_obj.setSuspendedData("");
        scorm_obj.unloadPage();
        // model.updateLmsData();
        unloadPage();
    },

    setBookMarkData: function(moduleSection) {
        $('.section').each(function() {
            if ($(this).hasClass('activeSection')) {
                var astr = $(this).attr('id');
                var currentSection = moduleSection;
                astr = astr + "**" + currentSection;
                scorm_obj.setBookmarkData(astr);
            }
        });
    },
    setVideosrc: function(src) {
     var windowWidth = $(window).innerWidth(); 
         if (windowWidth <= 1280) {
            $('.helpVideo').attr('src','common/video/Help_Screen_1280.mp4');
            $('.logoVideo').attr('src','common/video/logo_1280.mp4');
            $('.Bg_AnimVideo').attr('src','common/video/Bg_Anim_Video_1280.mp4');
            console.log("screen window 1280");
        }
       
        else if (windowWidth >1280 && windowWidth <= 1366) {
            $('.helpVideo').attr('src','common/video/Help_Screen_1366.mp4');
            $('.logoVideo').attr('src','common/video/logo_1366.mp4');
            $('.Bg_AnimVideo').attr('src','common/video/Bg_Anim_Video_1366.mp4');
            console.log("screen width 1366");
        }
        else if (windowWidth >= 1366 && windowWidth <= 1920) {
            $('.helpVideo').attr('src','common/video/Help_Screen_1920.mp4');
            $('.logoVideo').attr('src','common/video/logo_1920.mp4');
            $('.Bg_AnimVideo').attr('src','common/video/Bg_Anim_Video_1920.mp4');
            console.log("screen width 1366 to 1920");
        }
        else if (windowWidth >= 1920) {
            $('.helpVideo').attr('src','common/video/Help_Screen_1920.mp4');
            $('.logoVideo').attr('src','common/video/logo_1920.mp4');
            $('.Bg_AnimVideo').attr('src','common/video/Bg_Anim_Video_1920.mp4');
            console.log("screen width 1920");
        }
    },

    declaration: function() {
        controller.videosArray = document.getElementsByTagName("video");
        this.mainSection = $('#mainSection');
        this.pageDescription = $('pageDescription');
        this.assessment = $("assessment").parent('cover');
        //this.assessmentClose = $(".assessmentClose");
        //this.assessmentstart = $(".assessmentstart");

        //this.loadPage();
        this.defination();
        this.setMenu();

        //this.setFooter(); 
    },

    defination: function() {
        //this.assessment.off('click').on("click",this.assessmentTrigger);
        //this.assessmentClose.off('click').on("click",this.assessmentCloseTrigger);    
        //this.assessmentstart.off('click').on("click",this.assessmentstartTrigger);
    },

    setBookmarkLocation: function() {
        //  var arr = model.bookMarkData.split("**");
        var bookMarkData = controller.bookMarkData.split('**');
        var target = "#" + bookMarkData[0];
        $('.sections').html('');
        $('.sections').attr('id', bookMarkData[0]);
        //  utility.pageSet(target);
        controller.PageCalls(bookMarkData[0], function() {
            utility.pageSet(target);
            //controller.fromBookmark = false;
            controller.setBookMarkData();
        });

        console.log(target);
        $("#player_bookmarkPopupWrapper").removeClass('popon');
    },

    closeBookmarkPopup: function() {
        $("#player_bookmarkPopupWrapper").removeClass('popon');
        $('.sections').html('');
        $('.sections').attr('id', 'Section1');
        controller.PageCalls('Section1', function() {
            utility.pageSet('#Section1');
            controller.fromBookmark = false;
            controller.setBookMarkData();
            controller.setVideosrc();
        });
    },

    setMenu: function() {
        var desc = this.mainSection.find('.section');
        console.log($('#mainSection').find('.section').data('type'));
        this.pageDescription.text(desc.data('type'));
    },

    assessmentTrigger: function() {
        utility.hideSpecific();
        utility.audioPopupTrigger();
        controller.assessmentPopupTrigger(this);
        utility.transitionTrigger();
    },

    assessmentPopupTrigger: function(arg) {
        assessmentPopupId = $(arg).attr('rel');
        $(assessmentPopupId).addClass('popon');
        $(assessmentPopupId).find('assessmentSection').show();
        $(assessmentPopupId).find('popupContainer').removeClass('onen');
        $(assessmentPopupId).find(".scoreCardContainerwrapper").hide();
        $(assessmentPopupId).find(".questionContainer").html('');
        $(assessmentPopupId).find(".feedback_mainText").html('');
        $(assessmentPopupId).find("questiontitle").html('');
    },

    assessmentCloseTrigger: function() {
        utility.showSpecific();
        controller.assessmentPopupCloseTrigger(this);
        controller.feedbackCloseTrigger();
    },

    assessmentPopupCloseTrigger: function(arg) {
        assessmentPopupId = $(arg).attr('rel');
        $(assessmentPopupId).removeClass('popon');
    },

    assessmentstartTrigger: function() {
        //controller.assessmentClose.hide();
        $(this).parent('assessmentSection').hide();
        $(this).parent('assessmentSection').siblings('popupContainer').addClass('onen');

        if ($(this).attr('id') == "assessmentstart") {
            assessment.init();
        } else if ($(this).attr('id') == "assessmentstart1") {
            assessment1.init();
        }
    },
    scormInitDone: function() {
      
    },
}
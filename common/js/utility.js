var utility = {
    mainBanner: '',
    mainBannerHeading: '',
    menu: '',
    menuList: '',
    menuOverlay: '',
    menuClose: '',
    courseClose: '',
    courseCloseYes: '',
    courseCloseNo: '',
    nav: '',
    body: '',
    window: '',
    windowHeight: '',
    menuAnchor: '',
    sprite: '',
    audioPopup: '',
    podcast: '',
    videoPopup: '',
    video: '',
    videoPlay: '',
    videoPause: '',
    audio: '',
    popupClose: '',
    popupOpen: '',
    videoIcon: '',
    text: '',
    tooltip: '',
    isVideoPlaying: null,
    isAideoPlaying: null,
    pageClick: '',
    previousPage: '',
    nextPage: '',
    dtHead: "",
    assessmentBtn: "",
    thankyouclose: "",
    skip: '',
    firstClicked: false,
    count: 1,
    carouselMove: '',
    popupBox: '',
    sourcePopup: '',
    pageNav: '',
    help_popup: '',
    helpClosedBtn: '',
    setAll: '',
    mobileMenu: '',
    moduleNavigation: '',
    isMusicMute: false,
    sectionScroll_timeOut:'',
    scroll_btn_wrap:'',
    clickGotitBtn1:'',
    clickGotitBtn2:'',
    section3_timeOut:'',
    section6_timeOut:'',
    section9_timeOut:'',
    section11_timeOut:'',
    section12_timeOut:'',
    section13_timeOut:'',    
    section14_timeOut:'',
    section15_timeOut:'',
    section16_timeOut:'',
    section17_timeOut:'',
    section18_timeOut:'',
    section19_timeOut:'',
    section20_timeOut:'',    
    section21_timeOut:'',
    section22_timeOut:'',
    section23_timeOut:'',
    section24_timeOut:'',
    section25_timeOut:'',
    section26_timeOut:'',
    section27_timeOut:'',
    section28_timeOut:'',
    section29_timeOut:'',
    section30_timeOut:'',
    section31_timeOut:'',
    section32_timeOut:'',
    section33_timeOut:'',
    section34_timeOut:'',
    section35_timeOut:'',
    section36_timeOut:'',
    section37_timeOut:'',
    section37_1_timeOut:'',
    section38_timeOut:'',
    section39_timeOut:'',
    section40_timeOut:'',
    section41_timeOut:'',
    section42_timeOut:'',
    section43_timeOut:'',
    section7a_timeOut:'',
    topSlider: null,

    init: function() {
        utility.declaration();
        $('#mainVideo').on("ended", function() {
            $('#skip').text('Continue')
        });
    },

    declaration: function() {
        this.body = $(document);
        this.window = $(window);
        this.windowHeight = $(window).height();

        this.mainBanner = $('mainBanner');
        this.mainBannerHeading = $('mainBanner heading');

        this.courseClose = $("#mainclose");
        this.courseCloseYes = $("#exit_popup_yes");
        this.courseCloseNo = $("#exit_popup_no");
        this.courseFinish = $("#finish_popup_no");

        this.popupOpen = $('.click');
        this.popupClose = $('[data-close]');

        this.popupBox = $('popupbox');
        this.sourcePopup = $('.sourcePopup');
        this.pageNav = $('.gotoBtnWrap div')
        this.helpClosedBtn = $('.btnClosePopup');
        // menu
        this.menu = $("menu");
        this.menuList = $('menuwrapper ul > li');
        this.menuOverlay = $("menu overlay");
        this.nav = $('#nav');
        this.mobileMenu = $('.mobileMenuBtn')


        this.menuAnchor = $('[data-menuanchor]');

        this.sprite = $(".sprite");

        this.videoPlay = $(".playvideo");
        this.videoPause = $(".pauseMe");

        this.audio = $("audio");
        this.audioPopup = $("audioPopup");
        this.audioPlay = $(".audioPlay");
        this.audioPause = $(".audioPause");
        this.help_popup = $('.helpBtn');

        // video Icon

        this.videoIcon = $(".playVideo");

        this.text = $("text[tooltip]");

        this.tooltip = $("tooltip");

        this.pageClick = $('.pageClick');

        //footer
        this.previousPage = $('previousPage');
        this.nextPage = $('nextPage');

        this.dtHead = $('dt .heading');


        // assessment
        this.assessmentBtn = $('.assesmentBtn');
        this.moduleNavigation = $('.nav-bar li');

        this.thankyouclose = $('.thankyouWrapper close');

        this.skip = $('#skip');

        this.defination();

        //this.setall();
    },

    defination: function() {

        this.skip.off('click').on("click", this.skipTrigger);

        this.nav.off('click').on("click", this.menuOpenTrigger);
        this.menuOverlay.off('click').on("click", this.menuCloseTrigger);

        this.menuList.off('click').on("click", this.menuListTrigger);

        $(document).off('click').on("click", this.bodyTrigger);

        this.menuAnchor.off('click').on("click", this.menuAnchorTrigger);


        // this.videoPlay.off('click').on("click",this.videoPlayTrigger);
        // this.videoPause.off('click').on("click",this.videoPauseTrigger);

        this.audioPlay.off('click').on("click", this.audioPlayTrigger);
        this.audioPause.off('click').on("click", this.audioPauseTrigger);


        this.popupOpen.off('click').on("click", this.popupOpenTrigger);
        this.popupBox.off('click').on('click', function() {
            utility.popupBoxOpen($(this));
        });
        this.sourcePopup.off('click').on('click', function() {
            utility.sourceOpenClicked($(this));
        });
        this.help_popup.off('click').on("click", function() {
            utility.helpBtnClicked($(this));
        });
        this.helpClosedBtn.off('click').on("click", function(e) {
            utility.helpPopupClosed($(this));
        });
        this.pageNav.off('click').on('click', function() {
            utility.pageNavClicked($(this));
        })

        this.mobileMenu.off('click').on('click', function() {
            utility.mobileMenuClicked($(this));
        })

        this.moduleNavigation.off('click').on('click', function() {
            if ($(this).parent().hasClass('navOpen')) {
                $(this).parent().css('display', 'none');
                $(this).parent().removeClass('navOpen');
            }
            if ($(this).hasClass('active')) {
                return;
            }
            utility.pageClickTrigger($(this));
        })

        this.popupClose.off('click').on("click", this.popupCloseTrigger);


        // exit course
        //this.courseClose.off('click').on("click",this.courseCloseTrigger);
        this.courseCloseYes.off('click').on("click", this.courseCloseYesTrigger);
        this.courseCloseNo.off('click').on("click", this.courseCloseNoTrigger);
        this.courseFinish.off('click').on("click", this.courseFinishTrigger);

        //alert(utility.windowHeight)

        //this.text.on("hover", this.textTrigger);

        this.pageClick.off('click').on("click", function() { utility.pageClickTrigger($(this), 'navBtn') });


        this.dtHead.off('click').on("click", this.dtHeadTrigger);
        // footer

        // this.previousPage.off('click').on("click",this.previousPageTrigger);
        // this.nextPage.off('click').on("click",this.nextPageTrigger);

        // assessment

        this.assessmentBtn.off('click').on("click", this.assessmentBtnTrigger);


        this.thankyouclose.off('click').on("click", this.thankyoucloseTrigger);

    },

    wowAnimate: function() {
        wow = new WOW({
            animateClass: 'animated',
            offset: 100
        });
        wow.init();
    },

    hideSpecific: function() {
        utility.menu.removeClass('open openyes');
        //utility.courseClose.hide();
        utility.popupOpen.css('pointer-events', 'auto')
        //$('body').addClass('o-hidden');
    },
    showSpecific: function() {
        utility.menu.addClass('openyes');
        //utility.courseClose.show();
        //utility.checkTheme();
        $('.click').css('pointer-events', 'none')
        //$('body').removeClass('o-hidden');
    },

    stopScroll: function() {        
        console.log('stop Scrolling');
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    },

    startScroll: function() {
        console.log('start Scrolling');
        if ($.fn.fullpage.setAllowScrolling) {

            $.fn.fullpage.setAllowScrolling(true);
        }
        if ($.fn.fullpage.setKeyboardScrolling) {
            $.fn.fullpage.setKeyboardScrolling(true);
        };
    },

    checkTheme: function() {
        if ($('.section.active').hasClass('dark')) {
            utility.menu.addClass('dark');
            utility.courseClose.addClass('dark');
        } else {
            utility.menu.removeClass('dark');
            utility.courseClose.removeClass('dark');
        }
    },

    mobileMenuClicked: function(ele) {
        ele.siblings().slideToggle();
        if (ele.siblings().hasClass('navOpen')) {
            ele.siblings().removeClass('navOpen');
        } else {
            ele.siblings().addClass('navOpen');
        }
    },

    courseCloseYesTrigger: function() {
        window.top.close();

    },
    courseFinishTrigger: function() {
        $('#finish_popup').removeClass('popon');
    },
    courseCloseNoTrigger: function() {
        exitCourse = $(this).attr('rel');
        $(exitCourse).removeClass('popon');
        $('body').removeClass('o-hidden');


    },
    bodyTrigger: function() {
        if (utility.tooltip.hasClass('active')) {
            utility.tooltip.removeClass('active');
            utility.tooltip.html('');
            $('overlays').removeClass('on');
        }

        $('dt').removeClass('onhover')
        //tips.hideTooltip();
        // $('.hover').tipso('hide');
        //e.preventDefault();
    },

    menuOpenTrigger: function() {

        if (utility.menu.hasClass('open')) {

            utility.menu.removeClass('open');
            utility.hideSpecific();

        } else {

            utility.menu.addClass('open');
            utility.showSpecific();
        }
        if (utility.isVideoPlaying != null) {
            utility.pauseVideio();
        }
        utility.pauseAudio()

    },
    helpBtnClicked: function(ele) { 
        $('.helpPopWrapper').addClass('openPopup');

            var vidEl=document.getElementById("helpVideo1");
                vidEl.addEventListener('loadedmetadata', function() {
                  vidEl.currentTime = 2;
                }, false);
            $('#helpVideo1').get(0).load();
            $('#helpVideo1').get(0).play();
         
                   
          $('.helpContainer .clickToBegin-wrap').hide();
          utility.clickGotitBtn2=setTimeout(function(){
            $('.helpContainer .clickToBegin-wrap').fadeIn();
          },3000);
 
        // if (ele != undefined && ele != 'undefined' && ele != null) {
        //     utility.stopScroll();
        // }
    },
    openProfiler: function() {
        $('.langProfilerWrap').addClass('openPopup');
    },

    helpPopupClosed: function(ele) {
        $('.helpPopWrapper').removeClass('openPopup');
         $('#helpVideo1').get(0).pause();
         $('#helpVideo1').get(0).currentTime=0;
         utility.startScroll();
        // $.fn.fullpage.silentMoveTo(3,0);
        
         $.fn.fullpage.moveTo(3, 0);

         $('.helpContainer .clickToBegin-wrap').fadeOut();
         clearTimeout(utility.clickGotitBtn2);
         
        //utility.skipTrigger();
        // controller.bgMusic = $("#bgMusic");
        // controller.bgMusic.get(0).load();
        // controller.bgMusic.get(0).play();
        // controller.bgMusic.prop("volume", 0.5);

        // if (ele != undefined && ele != 'undefined' && ele != null) {
        //     $('.sections').html('');
        //     $('.sections').attr('id', 'Section1');
        //     controller.PageCalls('Section1', function() {
        //         utility.pageSet('#Section1');
        //         controller.fromBookmark = false;
        //         controller.setBookMarkData();
        //     });
        // }
    },

    menuAnchorTrigger: function() {
        utility.targetTrigger(this);
        utility.hideSpecific();
        //alert(utility.windowHeight +" : " +pos)
        //pos=2;
        $(target).addClass('active fp-completely yesData');
        $(target).siblings().removeClass('active fp-completely');
        $('.fullpage-wrapper').css({ 'transform': 'translate3d(0px, -' + (utility.windowHeight * 1) + 'px, 0px)', 'transition': 'all 700ms ease-in' });
    },

    menuCloseTrigger: function() {
        //alert()
        utility.hideSpecific();
        if (utility.menu.hasClass('open')) {
            utility.menu.removeClass('open');
        }
    },

    menuListTrigger: function() {

        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        utility.targetTrigger(this);
        pos = parseInt(pos) + 1;

        //alert(pos + " : " + (utility.windowHeight*pos))
        //alert(utility.windowHeight +" : " +pos)
        $('.fullpage-wrapper').css({ 'transform': 'translate3d(0px, -' + (utility.windowHeight * pos) + 'px, 0px)', 'transition': 'none' });
        //utility.setall();

    },

    popupOpenTrigger: function() {
        utility.popupDisplay(this);
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('disable');
        $('nav').toggleClass('disable');

    },
    popupDisplay: function(arg) {
        var target = $(arg).attr('rel');
        //alert(target)
        $(target).toggleClass('popon');

        //$('body').addClass('o-hidden');
        if (utility.isVideoPlaying != null) {
            utility.pauseVideio();
        }
        utility.audioIdPause();

        if ($(target).hasClass('popon')) {
            utility.stopScroll();
        } else {
            utility.startScroll();
        }

        if (target == '#help_popup') {
            if ($(target).hasClass('popon')) {
                $(target).find('video')[0].play();
                $(target).find('video').attr('controls', 'controls');
                $(target).find('video').attr('autoplay', 'autoplay');
                $(target).find('video')[0].currentTime = 0;
            } else {
                $(target).find('video')[0].pause();
                $(target).find('video')[0].currentTime = 0;
            }
        }

    },
    tooltipClick: function() {
        setTimeout(function() {
            $('.addAudio').off('click').on('click', function() {
                if (!$(".popNewAreaBox").hasClass('mainTab')) {
                    $("#audioPlayer").get(0).pause();
                    $("#audioPlayer")[0].currentTime = 0;
                    $(".popNewAreaBox").addClass("mainTab");
                } else {
                    $("#audioPlayer").get(0).play();
                    $(".popNewAreaBox").removeClass("mainTab");
                }
            });
            $('.addAudio3').off('click').on('click', function() {
                if (!$(".popNewAreaBox3").hasClass('mainTab3')) {
                    $("#audioPlayer").get(0).pause();
                    $("#audioPlayer")[0].currentTime = 0;
                    $(".popNewAreaBox3").addClass("mainTab3");
                } else {
                    $("#audioPlayer").get(0).play();
                    $(".popNewAreaBox3").removeClass("mainTab3");
                }
            });
            $('.addAudio4').off('click').on('click', function() {
                if (!$(".popNewAreaBox4").hasClass('mainTab4')) {
                    $("#audioPlayer").get(0).pause();
                    $("#audioPlayer")[0].currentTime = 0;
                    $(".popNewAreaBox4").addClass("mainTab4");
                } else {
                    $("#audioPlayer").get(0).play();
                    $(".popNewAreaBox4").removeClass("mainTab4");
                }
            });
            $('.sourcePopup').off('click').on('click', function() {
                utility.sourceOpenClicked($(this));
            });
        }, 500);
    },

    feedbackCorrectSound: function() {
        setTimeout(function() {
            $("#audioPlayerRight").get(0).play();
        }, 500);
    },

    feedbackIncorrectSound: function() {
        setTimeout(function() {
            $("#audioPlayerWrong").get(0).play();
        }, 500);
    },

    popupBoxOpen: function(ele) {
        $('#content_popup').addClass('popon');
        if (ele.hasClass('didYouKnow')) {
            $('#content_popup .popupScreenContainer').addClass('didYouKnowPopup');
        }
        if (ele.hasClass('exampleBtn')) {
            $('#content_popup .popupScreenContainer').addClass('examplePopup');
        }
        if (ele.hasClass('expertBtn')) {
            $('#content_popup .popupScreenContainer').addClass('expertPopup');
        }
        if (ele.hasClass('doBtn')) {
            $('#content_popup .popupScreenContainer').addClass('dodontPopup');
        }
        if (ele.hasClass('dontBtn')) {
            $('#content_popup .popupScreenContainer').addClass('dodontPopup');
        }
        if (ele.hasClass('pdfBtn')) {
            $('#content_popup .popupScreenContainer').addClass('pdfPopup');
        }

        if (ele.hasClass('openRest')) {
            $('#content_popup .popupScreenContainer closePopup').addClass('showNext');
        }

        var PopupContent = '';

        if (ele.hasClass('sideScroll')) {
            PopupContent = ele.attr('content');
        } else {
            PopupContent = '<div class="popCustomScroll">' + ele.attr('content') + '</div>';
            ele.addClass('completedTick');
        }

        $('#content_popup .popupScreenContainer > div.popupContent').html(PopupContent);
        $(".popCustomScroll").mCustomScrollbar();
        if (ele.hasClass('sparkAudio')) {
            $("#audioPlayer").get(0).play();
        } else {
            utility.tooltipClick();
        }
        utility.stopScroll();
    },

    sourceOpenClicked: function(ele) {

        if (ele.hasClass('sourceOpen')) {
            ele.removeClass('sourceOpen');
            $('.sourceContent').fadeOut();
        } else {
            $('.sourcePopup').removeClass('sourceOpen');
            ele.addClass('sourceOpen');
            $('.sourceContent').fadeOut();
            ele.siblings('.sourceContent').fadeIn();
        }
    },

    pageNavClicked: function(ele) {
        var slide = parseInt(ele.attr('moveTo'));
        $.fn.fullpage.moveTo(slide, 0);
    },

    popupExit: function(arg) {
        var target = $(arg).attr('rel');
        $(target).removeClass('popon');
        // $('#content_popup .popupScreenContainer > div.popupContent').removeAttr('class');
        if ($(arg).hasClass('showNext')) {
            $('.leftContainer .hideContent').fadeIn();
        }
        $('#content_popup .popupScreenContainer').removeClass('didYouKnowPopup');
        $('#content_popup .popupScreenContainer').removeClass('examplePopup');
        $('#content_popup .popupScreenContainer').removeClass('expertPopup');
        $('#content_popup .popupScreenContainer').removeClass('dodontPopup');
        $('#content_popup .popupScreenContainer').removeClass('pdfPopup');
        $('#content_popup .popupScreenContainer closePopup').removeClass('showNext');
        $('#content_popup .popupScreenContainer > div.popupContent').html('');
        if (target == '#help_popup') {
            $(target).find('video')[0].pause();
            $(target).find('video')[0].currentTime = 0;
        }
        if (target == '#feedback_popup') {
            $("#audioPlayerRight").get(0).pause();
            $("#audioPlayerRight")[0].currentTime = 0;
            $("#audioPlayerWrong").get(0).pause();
            $("#audioPlayerWrong")[0].currentTime = 0;
            $('#feedback_popup .popupScreenContainer > div.popupContent').html('');
            assessment.nextQuestion();
        } else {
            utility.startScroll();
        }
    },

    popupCloseTrigger: function() {
        utility.popupExit(this);
    },

    popupAllExit: function() {
        $('.popupScreen').removeClass('popon');
        $('.feedbackPopupScreen').removeClass('popon');

        $('#content_popup .popupScreenContainer').removeClass('didYouKnowPopup');
        $('#content_popup .popupScreenContainer').removeClass('examplePopup');
        $('#content_popup .popupScreenContainer').removeClass('expertPopup');
        $('#content_popup .popupScreenContainer').removeClass('dodontPopup');
        $('#content_popup .popupScreenContainer').removeClass('pdfPopup');
        $('#content_popup .popupScreenContainer closePopup').removeClass('showNext');
        $('#content_popup .popupScreenContainer > div.popupContent').html('');
        $('#feedback_popup .popupScreenContainer > div.popupContent').html('');
    },

    pauseVideio: function(arg) {
        // alert(utility.isVideoPlaying + " : "+ utility.isVideoPlayingType + " : " + $(utility.isVideoPlaying).find('video'))

        if (utility.isVideoPlayingType == 'videoLink') {
            //$(utility.isVideoPlaying).find('video')[0].pause();
        } else if (utility.isVideoPlayingType == 'blueLink') {
            $(utility.isVideoPlaying).find('iframe').attr('src', '');
        }

        $(utility.isVideoPlaying).addClass('hidden')
        $('videocaption').removeClass('hidden')
        utility.isVideoPlaying = null;
    },

    audioPlayTrigger: function() {
        utility.audioIdPlay(this);
    },

    pauseAudio: function(arg) {
        //$('#audioPopup').mediaelementplayer(pause,true)
        //this.videoIcon.parents('videoWrapper').removeClass('hidden')

        //        utility.isAideoPlaying.pause();
        //$(utility.isVideoPlaying).removeClass('hidden');
        utility.isAideoPlaying = null;
    },
    audioIdPlay: function(arg) {
        audioPopupId = $(arg).attr('rel');
        //alert(audioPopupId)

        $(audioPopupId).addClass('display');
        //$(audioPopupId).find('audio')[0].play();
        $(audioPopupId + 1).attr('autoplay', 'autoplay');
        //$(audioPopupId).find('audio')[0].currentTime=0;
        /*$(audioPopupId).find('audio')[0].on('muted', function(){
            alert("asdsdd")
        })*/
        /*document.getElementsByTagName('audio').addEventListener('muted', function(){
            //Your code.
            alert("dsaasd")
        });*/
        //$('.circle').removeClass('none')
        utility.isAideoPlaying = $(audioPopupId).find('audio')
        $(audioPopupId).find('audio').bind("play", function() {
            utility.isAideoPlaying = $(audioPopupId).find('audio');
        });
        var str = audioPopupId.split('#');
        // console.log( str[0])
        // console.log( str[1])
        //$('.'+str[1]).mediaelementplayer({


        if (utility.isVideoPlaying != null) {
            utility.pauseVideio()
        }


    },

    audioPauseTrigger: function() {
        utility.audioIdPause(this);
        //$('.playpodcast').css('pointer-events', 'auto')
    },

    audioIdPause: function(arg) {
        audioPopupId = $(arg).attr('rel');
        // alert(audioPopupId)
        if (audioPopupId == undefined || audioPopupId == 'undefined') {

        } else {
            $(audioPopupId).find('audio')[0].pause();
            utility.audioPlay.removeClass('active').parent().removeClass('active');
            $(audioPopupId).removeClass('display');

            $(audioPopupId).find('audio').attr('controls', '');
            $(audioPopupId + 1).attr('autoplay', '');
            $(audioPopupId).find('audio')[0].currentTime = 0;
        }
    },

    textTrigger: function(e) {
        $(this).find('tooltip').html($(this).attr('tooltip'))
        e.stopPropagation()

    },

    dtHeadTrigger: function(e) {
        $(this).parents('dt').addClass('onhover')
        $(this).parents('dt').siblings().removeClass('onhover')
        e.stopPropagation()
    },

    pageClickTrigger: function(ele, type) {
        var target = ele.attr('rel');
        // alert(target)
        $('.sections').html('');
        var loc1 = target.replace('#', '');
        $('.sections').attr('id', loc1);
        controller.PageCalls(loc1, function() {
            utility.pageSet(target);
        });

    },
    pageSet: function(target) {
        $('#player_preLoader').show();
        preloadImages.init(target);
        imageLoader.loadImages($('.courseImages'), utility.sectionload, target);
    },
    sectionload: function(target) {
        console.log(target);
        utility.popupAllExit();
        previous = $(target).data('prev');
        var activeBtn = parseInt(target.substring(9, 8));
        $('.nav-bar li').removeClass('active');
        $('.nav-bar li').eq(activeBtn - 1).addClass('active')
        id = $(target).attr('id');
        next = $(target).data('next');
        pageDescription = $(target).data('type');
        mainBannerHeading = $(target).data('title');

        //alert(target)
        $(target).removeClass('hide').addClass('activeSection');
        $(target).siblings('.section').addClass('hide').removeClass('activeSection');

        //var top = $(target).offset().top - 100;
        $('html,body').animate({ scrollTop: 0 }, 0)

        if ($('.section1').hasClass('activeSection')) {
            $('mainBanner').find('logo').show();
        } else {
            $('mainBanner').find('logo').hide();
        }


        if ($('.assessmentPage').hasClass('activeSection')) {
            $('.assessmentIntro').show();
            $('.assessmentSection').hide();
            $('.thankyouWrapper').addClass('hideon');
            $('.assessmentwrapper').addClass('background')
            $('.assessmentwrapper').removeClass('assessmentwrapperResult')
            $(".scoreCardContainerwrapper").hide();
            $(".questionContainer").html('');
            $(".feedback_mainText").html('');
            $("questiontitle").html('');
        }

        //alert($(target).data('next'))

        controller.pageDescription.text(pageDescription);
        utility.mainBannerHeading.html(mainBannerHeading);

        var split = id.split(''),
            splitNum = parseInt(split[7]);

        console.log(target + " : " + " : " + $(target) + " : " + previous + " : " + next + " : " + pageDescription + " : " + mainBannerHeading + " : " + splitNum)

        controller.setBookMarkData();

        if (!previous == "") {
            $('previousPage topicName').text(previous);
            $('previousPage .topicNumber').text('0' + (splitNum - 1));
            $('previousPage').attr('rel', '#Section' + (splitNum - 1))
            $('previousPage').removeClass('noOpacity');
            $('mainBanner').css('background-image', 'url(common/images/bg/section' + (splitNum) + '.jpg)');
        } else {
            $('previousPage').addClass('noOpacity')
        }

        if (!next == "") {
            $('nextPage topicName').text(next);
            $('nextPage .topicNumber').text('0' + (splitNum + 1));
            $('nextPage').attr('rel', '#Section' + (splitNum + 1))
            $('nextPage').removeClass('noOpacity');
            $('mainBanner').css('background-image', 'url(common/images/bg/section' + (splitNum) + '.jpg)');
        } else {
            $('nextPage').addClass('noOpacity')
        }
        // if (controller.oneIsDone && controller.fromBookmark) {
        //     $('.dark  article').fullpage.destroy('all');
        // }
        // $('.dark > article').fullpage.destroy('all');

        utility.CallFullPageFun(splitNum);



        $('footer').removeClass('on')

        if (utility.isVideoPlaying != null) {
            utility.pauseVideio();
        }
        utility.audioIdPause();
        utility.menuCloseTrigger();
    },

    assessmentBtnTrigger: function() {
        $('.assessmentIntro').hide();
        $('.assessmentSection').show();
        utility.stopScroll();
        assessment.init();
        $('.fpage, .nav, .click').addClass('disable')
    },

    thankyoucloseTrigger: function() {
        $(this).parent().addClass('hideon')
    },

    skipTrigger: function() {
        $('.main').show();
    },

    enableMenuBtn: function() {
        for (var i = 0; i < controller.topicState.length; i++) {
            if (controller.topicState[i] == 0) {
                $('.nav-bar li').eq(i).removeClass('disable');
                break;
            } else {
                $('.nav-bar li').eq(i).addClass('visited');
                $('.nav-bar li').eq(i).removeClass('disable');
            }
        }
    },

    muteBGMusic: function(bo) {
        if (bo) {
            // controller.bgMusic.animate({ volume: 0 }, 1000);
        } else {
            // controller.bgMusic.animate({ volume: 0.5 }, 1000);
        }
    },

    CallFullPageFun: function(splitNum) {
       
        var modNum = parseInt(splitNum - 1);
        var sectionNum = scorm_obj.getBookmarkData().split('**')[1];
        $('.courseTitleWrap .moduleTitle').text(controller.moduleTitle['mod_' + modNum]);
        if (controller.oneIsDone) {
            $('.dark  article').fullpage.destroy('all');
            controller.bgMusic.get(0).play();
            controller.bgMusic.prop("volume", 0.5);
        }

        if (modNum === 6 && !assessment.frstassessmentDone) {
            assessment.frstAssessmentPoint = [0, 0];

        } else if (modNum === 6 && !assessment.scndassessmentDone) {
            assessment.secndAssessmentPoint = [0, 0];
        }

        setTimeout(function() {
            $('#Section' + splitNum + ' > article').fullpage({
                slidesNavigation: false,
                scrollingSpeed: 1000,
                autoScrolling: true,
                // scrollOverflow: true,
                fitToSection: true,
                scrollBar: true,
                css3: true,
                afterLoad: function(anchorLink, index) {
                    console.log("After index :::::::: "+index);
                     
                    if(index ==1){                        
                        $('#logoVideo').get(0).play();
                    }
                    if(index ==2){
                        $('#helpVideo').get(0).play();
                    }
                    if(index >=3){
                    // $('.section_'+index+' .Bg_AnimVideo').get(0).load();                          
                    // $('.section_'+index+' .Bg_AnimVideo').get(0).play();

                    // $('.section .Bg_AnimVideo').get(0).load();                          
                    // $('.section .Bg_AnimVideo').get(0).play();

                    } 
                    
                    $('.clickContentWrap').hide();
                    $(".clipbox").removeClass("current visited fadebox");
                    $(".clipboxWrap").removeClass("moveLeft");
                    $(".rightboxWrap, .midboxWrap").removeClass("hideDiv");
                    $('#player_preLoader').fadeOut();
                    $(".rightSidebar ul li.downloadWrap").removeClass("dwnPulseAnim");
                    $(".section_3 .stepArea").removeClass("active");
                    $(".click_div_box, .click_div_box_sec16, .click_div_box_sec22, .click_div_box_sec27, .click_div_box_sec38").removeClass("expendDiv");
                    $(".section_18 .clipboxWrapUpIn").removeClass("moveLeft");
                    $(".section_18 .clickContentWrap, .section_18 .clickContent").hide();
                    $(".section_18 .screen1").removeClass("screenHide");
                    $(".section_18 .screen2").removeClass("screenShow");
                    $(".section_20 .showme").hide();
                    $(".section_20 .ttb2").hide();
                    $(".section_20 .clickme").show();
                    $(".section_31 .middle_section").removeClass("moveDiv");
                    $(".section_31 .fourImgdiv").removeClass("visited current");
                    $(".section_31 .clickContentWrap").hide();
                    $(".section_31 .clickContent").hide();
                    $(".section_31 .middle_section").removeClass("moveInitial");
                    $(".section_33 .bottomBg2_container").removeClass("hideDiv");
                    $(".section_33 .fourImgdiv").removeClass("visited current");
                    $(".section_33 .clickContent").removeClass("boxShow");
                    $(".section_40 .click_div").removeClass("visited");
                    $(".section_8 .headingsIn img, .section_16 .headingsIn img, .section_22 .headingsIn img, .section_27 .headingsIn img, .section_38 .headingsIn img").removeClass("open");
                    controller.setBookMarkData(index); 
                    scorm_obj.setSuspendedData("");
                    if (index === $('#Section' + splitNum + ' > article .section').length) {
                        setTimeout(function(){
                           $("#finish_popup").addClass("popon");
                        },3000);
                        console.log('page Completed');
                        controller.topicState[modNum] = 1;
                        var topicState = controller.topicState.join('**');                        
                        scorm_obj.setCompletionStatus("completed");
                        console.log("SCORM completed");
                    }
                    
                    var currentSection = $('.section_' + index);
                    if(index > 2) {
                        $('.rightSidebar, .menuWrap, header').fadeIn();
                    } else {
                        $('.rightSidebar, .menuWrap, header').fadeOut();
                    }
                    

                    if(index == 2 && !currentSection.hasClass('completed')) {
                        $('#helpVideo').get(0).load();
                        $('#helpVideo').get(0).play();
                        setTimeout(utility.stopScroll, 200);
                    }

                    
                    if (!controller.oneIsDone && 'sectionNum' != undefined && sectionNum != 'undefined' && sectionNum != null && sectionNum != 'null' && controller.fromBookmark) {
                        $.fn.fullpage.moveTo(sectionNum, 0);
                    }

                    

                    utility.enableMenuBtn();
                    controller.oneIsDone = true;
                    if(index == 1 && !currentSection.hasClass('completed')) {
                        setTimeout(utility.stopScroll, 200);
                    }

                    if(index == 3){
                        $.fn.fullpage.setAllowScrolling(false, 'up');
                        $.fn.fullpage.setKeyboardScrolling(false, 'up');
                    }
                    else{
                        $.fn.fullpage.setAllowScrolling(true);
                        $.fn.fullpage.setKeyboardScrolling(true);
                    }

                    utility.createRightTopSlider(index);
                    
                },
                onLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
                    console.log("onLeave index :::::::: "+index);
                    if(index >= 3){
                        $('.section .Bg_AnimVideo').show();
                        $('.section .Bg_AnimVideo').get(0).play();
                    }else{
                        $('.section .Bg_AnimVideo').get(0).pause();
                        $('.section .Bg_AnimVideo').hide();
                    }
                     if(index == 3){                        
                        $('.section_3 .Bg_AnimVideo_inner').get(0).play();
                    }else{
                       // $('.section_3 .Bg_AnimVideo_inner').get(0).pause();                        
                    }
                    $('.assessmentClose').trigger('click');
                    $('.media-wrapper').addClass('hidden');
                    $('.media-wrapper').find('iframe').attr('src', '');
                    $('.media-wrapper').parents('.videoBg').find('videoCaption').removeClass('hidden');
                    $('.transcript p').addClass('hideTranscript');
                    $(".upmove").removeClass('active');
                    $(".downmove").addClass('active');
                    $(".enable").removeClass('enable');
                    $(".enableimg").removeClass('enableimg');
                    utility.count = 1;
                    $('.show_1').addClass('enable');
                    $('.showimg_1').addClass('enableimg');
                    $('.navNum li').removeClass('currentNav');
                    $('.navNum li:first-child').addClass('currentNav');
                    $('.popNewAreaBox2').addClass('mainTab');
                    $('.popNewAreaBox3').addClass('mainTab3');
                    $(".rightSidebar ul li.pfciWrap").removeClass("active");    
                     
                    if(index >=3){

                    }

                    if (index==2) {
                        utility.clickGotitBtn1=setTimeout(function(){
                        //$('.section_2 .clickToBegin-wrap').fadeIn();
                      },3000);
                    }
                    else{
                        clearTimeout(utility.clickGotitBtn1);
                    }

                    if(index >=3){
                        utility.sectionScroll_timeOut = setTimeout(function(){
                        $('.scroll_btn_wrap').fadeIn();
                        },3000)
                     
                    }
                    else{
                        clearTimeout(utility.sectionScroll_timeOut);
                         // setTimeout(function(){
                         $('.scroll_btn_wrap').fadeOut();
                        // },500);
                        
                    }

                    if(index == 3) {
                        utility.section3_timeOut = setTimeout(function(){
                        $(".rightSidebar ul li.homeWrap").addClass("active");
                        },500);
                    }else{
                        clearTimeout(utility.section3_timeOut);
                         // setTimeout(function(){
                         $(".rightSidebar ul li.homeWrap").removeClass("active");
                        // },500);
                    }

                    // if(index == 4) {
                    //     utility.section4_timeOut = setTimeout(function(){
                    //         $(".section_4 .txtOne").hide();
                    //     },5000);
                    // }else{
                    //     clearTimeout(utility.section4_timeOut);
                    // }

                    if(index == 5) {
                        utility.section6_timeOut = setTimeout(function(){
                        $(".section_6 .middle_section,.section_6 .middle_section2").addClass("move_left");
                        $(".section_6 .middle_section2 .left_box,.section_6 .middle_section2 .to").addClass("move_left1");
                        $(".section_6 .middle_section2 .right_box").addClass("move_right");

                        },3000)
                    }else{
                        clearTimeout(utility.section6_timeOut);
                         // setTimeout(function(){
                        //  $(".section_6 .middle_section,.section_6 .middle_section2").removeClass("move_left");
                        //  $(".section_6 .middle_section2 .left_box,.section_6 .middle_section2 .to").removeClass("move_left1");
                        // $(".section_6 .middle_section2 .right_box").removeClass("move_right");
                        // },500);
                    }

                    /*----------------------------------------------*/
                    if(index == 6) {
                        $(".hhtest").addClass("slideDown");
                    }else{
                        clearTimeout(utility.section13a_timeOut);                       
                    }
                    /*------------------------------------------------*/

                    if(index == 7) {
                        $(".section_7 .box1 img").on("click", function(){
                             $(".section_7 .box1").hide();
                             $(".section_7 .box2").addClass("active");
                             $(".section_7 .box3").addClass("active");
                            utility.section7a_timeOut = setTimeout(function(){                      
                               $(".section_7 .box2").hide();
                               $(".section_7 .box3").addClass("active_a");
                               $(".section_7 .box4").show();
                               $(".section_7 .top_title").show();
                            },7500);
                        })
                    }else{
                        clearTimeout(utility.section7_timeOut);
                        clearTimeout(utility.section7a_timeOut);                       
                    }

                    if(index == 8) {
                                            
                    }else{
                        // setTimeout(function(){
                        //$(".click_div_box").removeClass("expendDiv");
                        $(".section_8 .popup_tab_div").removeClass("on"); 
                        $(".section_8 .mid_four_container").show();
                        $(".section_8 .mid_four_container").removeClass("hide_on");
                        $(".section_8 .popup_tab_div").removeClass("show_on");
                         // },500);
                    }

                    if(index == 9) {
                         utility.section9_timeOut = setTimeout(function(){
                        $(".section_9 .middle_section,.section_9 .middle_section2").addClass("move_left");
                        },5500)
                    }else{
                        clearTimeout(utility.section9_timeOut);
                         // setTimeout(function(){
                         //$(".section_9 .middle_section,.section_9 .middle_section2").removeClass("move_left");
                        // },500);
                    }

                    if(index == 10) {
                          utility.section10_timeOut = setTimeout(function(){
                            $(".section_10 .sec11_halfCircle, .section_10 .top_title, .section_10 .clipboxWrap").addClass("active_on");                           
                          },6000);
                    }else{
                        clearTimeout(utility.section11_timeOut);
                        
                    } 

                    if(index == 12) {    
                     utility.section12_timeOut = setTimeout(function(){                   
                        $(".section_12 .step1").addClass("active");
                        $(".section_12 .clickContentWrap").addClass("active"); 
                        $(".section_12 .clickContent1").addClass("active");
                         },2000);
                    }else{
                        clearTimeout(utility.section12_timeOut); 
                    }

                    /*--------------------------------*/

                    if(index == 14) {    
                        $('.hhtest1').addClass('bounce-in-right');
                        $('.hhtest1').delay(6000).fadeOut();
                        $('.whdi').delay(6000).fadeIn();
                    }

                    /*----------------------------------*/

                    if(index == 17) {
                          utility.section11_timeOut = setTimeout(function(){
                            $(".section_16 .sec11_halfCircle,.section_16 .mentor_div,.section_16 .pot_div,.section_16 .table_div, .section_16 .bottom_strip").addClass("active_on");
                            $(".section_16 .mid_four_container_wrapper").removeClass("active_on");
                            $(".section_16 .mid_four_container").addClass("animated");
                            $(".section_16 .mid_four_container").removeClass("hide_on"); 
                          },8000);
                    }else{
                        clearTimeout(utility.section11_timeOut);
                         // setTimeout(function(){
                        //$(".click_div_box_sec16").removeClass("expendDiv");
                        $(".section_16 .sec11_halfCircle,.section_16 .mentor_div,.section_16 .pot_div,.section_16 .table_div,.section_16 .bottom_strip").removeClass("active_on");
                        $(".section_16 .mid_four_container_wrapper").addClass("active_on");
                        $(".section_16 .sec11_halfCircle").removeClass("active_on").removeClass("hide_on"); 
                        $(".section_16 .mid_four_container").removeClass("animated");
                        $(".section_16 .mid_four_container").removeClass("hide_on");                
                        $(".section_16 .popup_tab_div").removeClass("show_on");                     
                        // },500);
                    }

                    if(index == 18) {    
                        utility.section17_timeOut = setTimeout(function(){                   
                            // $(".section_17 .screen1").addClass("screenHide");
                            // $(".section_17 .screen2").addClass("screenShow");
                        },6000);
                    }else{
                        clearTimeout(utility.section17_timeOut);
                        // $(".section_17 .screen1").removeClass("screenHide");
                        // $(".section_17 .screen2").removeClass("screenShow");
                    }

                    if(index == 19) {
                        utility.section18_timeOut = setTimeout(function(){
                            //$(".section_18 .screen1").addClass("screenHide");
                            //$(".section_18 .screen2").addClass("screenShow");
                            /*$(".section_18 .container_inner").addClass("visibleFlow");
                            $(".section_18 .rightboxWrap").addClass("moveRight");
                            var showWrapIn = setTimeout(function(){
                                $(".section_18 .clipboxWrapUpIn").addClass("showWrap");
                            },200);*/
                        },25000);
                    }else{
                        clearTimeout(utility.section18_timeOut);
                        /*$(".section_18 .clipboxWrapUpIn").removeClass("moveLeft");
                        $(".section_18 .clickContentWrap, .section_18 .clickContent").hide();*/
                        /*setTimeout(function(){
                            $(".section_18 .screen1").removeClass("screenHide");
                            $(".section_18 .screen2").removeClass("screenShow");
                        },500);*/
                    }

                    if(index == 20) {    
                     utility.section19_timeOut = setTimeout(function(){                   
                        $(".section_19 .step2").addClass("active");
                        $(".section_19 .clickContentWrap").addClass("active"); 
                        $(".section_19 .clickContent2").addClass("active");
                         },2000);
                    }else{
                        clearTimeout(utility.section19_timeOut); 
                    }

                    if(index == 22) {
                        utility.section21_timeOut = setTimeout(function(){
                            $(".section_21 .midboxWrap").addClass("moveRight");
                            var showWrapIn = setTimeout(function(){
                                $(".section_21 .clipboxWrapIn").addClass("showWrapIn");
                            },200);
                        },4000);
                    }else{
                        clearTimeout(utility.section21_timeOut);
                        /*setTimeout(function(){
                            $(".section_13 .midboxWrap").removeClass("moveRight");
                            $(".section_13 .clipboxWrapIn").removeClass("showWrapIn");
                        },500);*/
                    }
                    
                    if(index == 23) {
                          utility.section22_timeOut = setTimeout(function(){
                            $(".section_22 .sec11_halfCircle").addClass("active_on");
                            $(".section_22 .mid_four_container_heading, .section_22 .mid_four_container").addClass("active_on");
                            // var showWrapIn = setTimeout(function(){
                                // $(".section_22 .mid_four_container_heading, .section_22 .mid_four_container").addClass("active_on");
                            // },200);
                            // $(".section_22 .mid_four_container_heading, .section_22 .mid_four_container").removeClass("animated");
                            //$(".section_22 .mid_four_container").removeClass("hide_on");                            
                          },6000);
                    }else{
                        clearTimeout(utility.section22_timeOut);
                        //$(".click_div_box_sec22").removeClass("expendDiv");
                         
                        // setTimeout(function(){
                            //$(".section_22 .table_div,.section_22 .sec14_halfCircle,.section_22 .mentor_div,.section_22 .pot_div, .section_22 .bottom_strip").addClass("active_on");
                            //$(".section_22 .mid_four_container_wrapper").addClass("active_on");
                            $(".section_22 .sec14_halfCircle").removeClass("hide_on"); 
                            //$(".section_22 .mid_four_container").removeClass("animated");
                            $(".section_22 .mid_four_container").removeClass("hide_on");
                            $(".section_22 .popup_tab_div").removeClass("show_on");                                                  
                        // },500);
                    }

                    if(index == 24) {
                        utility.section23_timeOut = setTimeout(function(){
                            $(".section_23 .container_inner").addClass("visibleFlow");
                            $(".section_23 .rightboxWrap").addClass("moveRight");
                            var showWrapIn = setTimeout(function(){
                                $(".section_23 .clipboxWrapIn").addClass("showWrapIn");
                            },200);
                        },4000);
                    }else{
                        clearTimeout(utility.section23_timeOut);
                        /*setTimeout(function(){
                            $(".section_15 .container_inner").removeClass("visibleFlow");
                            $(".section_15 .rightboxWrap").removeClass("moveRight");
                            $(".section_15 .clipboxWrapUpIn").removeClass("showWrap");
                        },500);*/
                    }

                    if(index == 25) {    
                     utility.section24_timeOut = setTimeout(function(){                   
                        $(".section_24 .step3").addClass("active");
                        $(".section_24 .clickContentWrap").addClass("active"); 
                        $(".section_24 .clickContent3").addClass("active");
                         },2000);
                    }else{
                        clearTimeout(utility.section24_timeOut); 
                    }

                    if(index == 29) {
                          utility.section27_timeOut = setTimeout(function(){                           
                            $(".section_27 .frstSection,.section_27 .sec17_halfCircle,.section_27 .mentor_div,.section_27 .pot_div,.section_27 .table_div,.section_27 .bottom_strip,.section_27 .callout_div1").addClass("active_on");
                            $(".section_27 .mid_four_container,.forBox").removeClass("active_on");
                            $(".section_27 .mid_four_container_wrapper").removeClass("active_on");
                            $(".section_27 .mid_four_container").addClass("animated");
                            $(".section_27 .mid_four_container, .section_27 .forShadow").removeClass("hide_on");                            
                          },4500);
                    }else{
                        clearTimeout(utility.section27_timeOut);
                        //$(".click_div_box_sec27").removeClass("expendDiv");
                        // setTimeout(function(){                        
                            $(".section_27 .table_div,.section_27 .sec17_halfCircle,.section_27 .mentor_div,.section_27 .pot_div, .section_27 .bottom_strip").removeClass("active_on");
                            $(".section_27 .mid_four_container, .forBox").addClass("active_on");
                            $(".section_27 .sec17_halfCircle").show();
                            $(".section_27 .popup_tab_div").removeClass("show_on"); 
                            $(".section_27 .mid_four_container_wrapper").addClass("active_on");
                            $(".section_27 .sec17_halfCircle").removeClass("active_on").removeClass("hide_on"); 
                            $(".section_27 .mid_four_container").removeClass("animated");
                            $(".section_27 .mid_four_container, .section_27 .forShadow").removeClass("hide_on");               
                            $(".section_27 .popup_tab_div").removeClass("show_on");

                            $(".section_27 .mid_four_container, .section_27 .forShadow").removeClass("hide_on");
                            $(".section_27 .popup_tab_div").removeClass("show_on"); 
                            $(".section_27 .sec17_halfCircle").removeClass("hide_on");


                        // },500);
                    }

                    if(index == 30) {
                     utility.section28_timeOut = setTimeout(function(){                   
                        $(".section_28 .step4").addClass("active");
                        $(".section_28 .clickContentWrap").addClass("active"); 
                        $(".section_28 .clickContent4").addClass("active");
                         },2000);
                    }else{
                        clearTimeout(utility.section28_timeOut); 
                    }

                    if(index == 33) {
                          utility.section31_timeOut = setTimeout(function(){
                            $(".section_31 .middle_section, .section_31 .bottom_bg, .section_31 .bottomBg2_container").addClass("active_on");
                          },4000);
                    }else{
                        clearTimeout(utility.section31_timeOut);
                        // setTimeout(function(){
                            //$(".section_31 .middle_section, .section_31 .bottom_bg, .section_31 .bottomBg2_container").removeClass("active_on");
                            /*$(".section_31 .middle_section").removeClass("moveDiv");
                            $(".section_31 .fourImgdiv").removeClass("visited current");
                            $(".section_31 .clickContentWrap").hide();
                            $(".section_31 .clickContent").hide();*/
                        // },500);
                    }
                    if(index == 32) {
                        utility.section32_timeOut = setTimeout(function(){
                            $(".section_32 .midboxWrap").addClass("moveRight");
                            var showWrapIn = setTimeout(function(){
                                $(".section_32 .clipboxWrapIn").addClass("showWrapIn");
                            },200);
                        },4000);
                    }else{
                        clearTimeout(utility.section32_timeOut);
                        /*setTimeout(function(){
                            $(".section_13 .midboxWrap").removeClass("moveRight");
                            $(".section_13 .clipboxWrapIn").removeClass("showWrapIn");
                        },500);*/
                    }
                    if(index == 33) {
                          utility.section33_timeOut = setTimeout(function(){
                            $(".section_33 .middle_section, .section_33 .bottom_bg, .section_33 .bottomBg2_container").addClass("active_on");
                            //$(".section_33 .mid_four_container").removeClass("active_on");
                          },4000);
                    }else{
                        clearTimeout(utility.section33_timeOut);
                        // setTimeout(function(){
                        //$(".section_33 .middle_section, .section_33 .bottom_bg, .section_33 .bottomBg2_container").removeClass("active_on");
                        //$(".section_33 .mid_four_container").addClass("active_on");

                        /*$(".section_33 .bottomBg2_container").removeClass("hideDiv");
                        $(".section_33 .fourImgdiv").removeClass("visited current");*/
                        // },500);
                    }

                    if(index == 34) {
                         utility.section34_timeOut = setTimeout(function(){
                        $(".section_34 .middle_section2").addClass("move_left");
                        },500)
                    }else{
                        clearTimeout(utility.section34_timeOut);
                    }

                    if(index == 35) {    
                     utility.section35_timeOut = setTimeout(function(){                   
                        $(".section_35 .step5").addClass("active");
                        $(".section_35 .clickContentWrap").addClass("active"); 
                        $(".section_35 .clickContent5").addClass("active");
                         },2000);
                    }else{
                        clearTimeout(utility.section35_timeOut); 
                    }

                    if(index == 36) {
                          utility.section36_timeOut = setTimeout(function(){
                            $(".section_36 .midboxWrapInUpper").addClass("active_on");
                          },5000);
                    }else{
                        clearTimeout(utility.section36_timeOut);
                        // setTimeout(function(){
                         //$(".section_20 .midboxWrapInUpper").removeClass("active_on");
                        // },500);
                    }
                    if(index == 37) {
                        utility.section37_timeOut = setTimeout(function(){
                            $(".section_37 .midboxWrap").addClass("moveRight");
                            // var showWrapIn = setTimeout(function(){
                            //     $(".section_37 .clipboxWrapIn").addClass("showWrapIn");
                            // },500);
                        },500);
                        utility.section37_1_timeOut = setTimeout(function(){
                            $(".section_37 .clb1").addClass("moveRightbox");
                            $(".section_37 .clb2").addClass("showWrapIn");
                        },6000);
                        
                    }else{
                        clearTimeout(utility.section37_timeOut);
                        clearTimeout(utility.section37_1_timeOut);
                        setTimeout(function(){
                            $(".section_37 .clb1").removeClass("moveRightbox");
                            $(".section_37 .clb2").removeClass("showWrapIn");
                        },500);
                    }
                    if(index == 38) {
                          utility.section38_timeOut = setTimeout(function(){
                            $(".section_38 .sec11_halfCircle, .section_38 .mid_four_container").addClass("active_on");
                            // $(".section_38 .sec21_halfCircle,.section_38 .mentor_div,.section_38 .pot_div,.section_38 .table_div, .section_38 .bottom_strip").addClass("active_on");
                            // $(".section_38 .mid_four_container_wrapper").removeClass("active_on");
                            // $(".section_38 .mid_four_container").addClass("animated");
                            // $(".section_38 .mid_four_container").removeClass("hide_on");                            
                          },4000);
                    }else{
                        clearTimeout(utility.section38_timeOut);
                        //$(".click_div_box_sec38").removeClass("expendDiv");
                         // setTimeout(function(){
                            /*$(".section_38 .sec21_halfCircle,.section_38 .mentor_div,.section_38 .pot_div,.section_38 .table_div, .section_38 .bottom_strip").removeClass("active_on");
                            $(".section_38 .mid_four_container_wrapper").addClass("active_on");
                            $(".section_38 .sec21_halfCircle").removeClass("active_on").removeClass("hide_on"); 
                            $(".section_38 .mid_four_container").removeClass("animated");*/
                            //$(".section_38 .mid_four_container").addClass("hide_on");                
                            $(".section_38 .popup_tab_div").removeClass("show_on");                         
                        // },500);
                    } 

                    if(index == 39) {    
                     utility.section39_timeOut = setTimeout(function(){                   
                        $(".section_39 .step6").addClass("active");
                        $(".section_39 .clickContentWrap").addClass("active"); 
                        $(".section_39 .clickContent6").addClass("active");
                         },2000);
                    }else{
                        clearTimeout(utility.section39_timeOut); 
                    }

                    if(index == 40) {
                          utility.section40_timeOut = setTimeout(function(){
                          //  $(".section_40 .sec22_halfCircle,.section_40 .rightBox").addClass("moveLeft");
                            $(".section_40 .click_div").css("pointer-events","auto");                            
                          },4000);
                    }else{
                        clearTimeout(utility.section40_timeOut);
                     //  utility.section40a_timeOut = setTimeout(function(){  
                            /*$(".section_22 .sec22_halfCircle,.section_22 .rightBox, .section_22 .container_inner").removeClass("moveLeft");
                            $(".section_22 .click_div").css("pointer-events","none"); 
                            $(".section_22 .mid_four_container").removeClass("hide_on"); 
                            $(".section_22 .sec22_halfCircle, .section_22 .rightBox").removeClass("hide_on");*/      
                            $(".section_40 .leftBox").removeClass("hide_on");
                            $(".section_40 .rightBox").removeClass("hide_on");                             
                            $(".section_40 .popup_tab_div").removeClass("show_on");                         
                       // },500);
                    }

                    if(index == 41) {                         
                          //$(".section_41 .bottom_strip").addClass("active_on");   
                    }else{ 

                    }

                    if(index == 42) {
                          //$(".section_42 .bottom_strip").addClass("active_on");   
                    }else{ 

                    }

                    if(index == 43) {
                        utility.section43_timeOut = setTimeout(function(){
                           $(".rightSidebar ul li.downloadWrap").addClass("dwnPulseAnim");
                        },2000);
                    }else{ 
                        clearTimeout(utility.section43_timeOut);
                    }

                    if(index == 3) {
                        setTimeout(function(){
                          $(".section_3 .scale_up").addClass("scale_up_go");                            
                          },1000);                         
                    }else{ 

                    }
                    if(index == 12) {
                         setTimeout(function(){
                          $(".section_12 .scale_up").addClass("scale_up_go");                             
                          },1000);  
                          
                    }else{ 

                    }
                    if(index == 19) {
                         setTimeout(function(){
                          $(".section_19 .scale_up").addClass("scale_up_go");                          
                          },1000);  
                            
                    }else{ 

                    }
                    if(index == 24) {
                         setTimeout(function(){
                          $(".section_24 .scale_up").addClass("scale_up_go");                            
                          },1000);  
                         
                    }else{ 

                    }
                    if(index == 28) {
                         setTimeout(function(){
                          $(".section_28 .scale_up").addClass("scale_up_go");                            
                          },1000);  
                          
                    }else{ 

                    }
                    if(index == 35) {
                         setTimeout(function(){
                         $(".section_35 .scale_up").addClass("scale_up_go");                         
                          },1000);  
                           
                    }else{ 

                    }
                    if(index == 39) {
                         setTimeout(function(){
                          $(".section_39 .scale_up").addClass("scale_up_go");                        
                          },1000);  
                          
                    }else{ 

                    }
                    if(index == 43) {
                         setTimeout(function(){
                           $(".section_43 .scale_up").addClass("scale_up_go");
                          },1000);  
                         
                    }else{ 

                    }
 
                //utility.revertAnimaionFn(index);                                      
                                        
                }
            });
        }, 500)
    },

    revertAnimaionFn: function(slideN){
        var getCurSl = parseInt(slideN-1);
        if(getCurSl == 3){
            utility.hrReverseAnimFN(".section_3 *", -250);
        }
       
    },

    hrReverseAnimFN: function(obj, endVal){
        TweenMax.set(obj,{x:0, opacity:1});
        TweenMax.staggerTo(obj,0.5,{x:endVal, opacity:0, ease:Linear.easeNone, delay:0.1, timeScale:0},0.1)
    },

    createRightTopSlider: function(slideN){
        var el = $(".rightMenuSlider ul li");
        el.removeClass("active")
        var leftVal = 0;
        var enblMn = 0;
        if(slideN >= 5 && slideN <= 6){           
            leftVal = 60;
            enblMn = 1;
        }
        else if(slideN >= 7 && slideN <= 11){            
            leftVal = 0;
            enblMn = 2;
        }
        else if(slideN >= 12 && slideN < 19){           
            leftVal = -70;    
            enblMn = 3;   
        }
        else if(slideN >= 19 && slideN < 24){            
            leftVal = -141; 
            enblMn = 4;
        }
        else if(slideN >= 24 && slideN < 28){            
            leftVal = -211;          
            enblMn = 5; 
        }
        else if(slideN >= 28 && slideN < 35){           
            leftVal = -280;  
            enblMn = 6;        
        }
        else if(slideN >= 35 && slideN < 39){            
            leftVal = -350; 
            enblMn = 7;          
        }
        else if(slideN >= 39){            
            leftVal = -410; 
            enblMn = 8;
        }          
        el.eq(enblMn-1).addClass("active");
        $(".rightMenuSlider ul").css("margin-left", leftVal+"px");    
        $(".menuIconWrap").removeAttr("id").attr("id", "enableSVG"+enblMn);

        if(slideN > 41 || slideN < 5){
            el.hide();
            $(".rightMenuSlider ul").css("margin-left", "130px");
        }
        else{
           el.show(); 
        } 
    }
};
var mainHeader = $('mainBanner'),
        secondaryNavigation = $('menu'),
        //this applies only if secondary nav is below intro section
        belowNavHeroContent = $('.main'),
        headerHeight = mainHeader.height();

    //set scrolling variables
    var scrolling = false,
        previousTop = 0,
        currentTop = 0,
        scrollDelta = 10,
        scrollOffset = 100;


        var stickyOffset = $('.main').offset().top;

        $(window).on('resize', function() {
            stickyOffset = $('.main').offset().top;


        });

    $(window).on('scroll', function() {
        if (!scrolling) {
            scrolling = true;
            //(!window.requestAnimationFrame) ?setTimeout(autoHideHeader, 250): requestAnimationFrame(autoHideHeader);
        }



        var sticky = $('menu'),
        mainSection = $('.main'),
        menuHeight = $('menu').height()
        scroll = $(window).scrollTop();

           // console.log(stickyOffset +  " : "  + scroll)

        if (scroll >= (stickyOffset - menuHeight ) )
        {
            sticky.addClass('fixedHeader');
            mainSection.addClass('is-top')
        }
        else {
            sticky.removeClass('fixedHeader');
            mainSection.removeClass('is-top')
        }



        if (!$('cyu').is(":in-viewport")){
            $('.assessmentClose').trigger('click');
        }
        


        if (utility.isVideoPlaying != null) {
            if (!$('.videos').is(":in-viewport")) {
                // $('videoSubsection').find('video').empty();
                // $('videoSubsection').find('video').append($(utility.isVideoPlaying).html())
                // //alert($(utility.isVideoPlaying)[0].currentTime)
                // $('#subVideo').show();
                // $('#subVideo')[0].currentTime = $(utility.isVideoPlaying)[0].currentTime;
                // $('#subVideo')[0].play()

                //  $('videoSubsection').fadeIn(3000);
                utility.pauseVideio()
                //lizVideo
                // $('videoSubsection').animate({ top: $(window).scrollTop()+$(window).height()-300, left: 50 });
            }
        }

        if (utility.isAideoPlaying != null) {

            if (!$('.audioWrapper').is(":in-viewport")) {
                utility.pauseAudio()
                
            }

        }


        // if (utility.menu.hasClass('open') && mainSection.hasClass('is-top')) {
        //     utility.menu.addClass('fixedHeader');
        // }
        // else{
        //     utility.menu.addClass('fixedHeader');
        // }
       // $('videoSubsection').offset({ top: $(window).scrollTop() + $(window).height() - 300, left: 50 });
    });

    

    
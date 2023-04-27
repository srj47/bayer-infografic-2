var preloadImages = {

    init: function(get_page) {
        $('.courseImages').html('');

        var imgPath = "<img src='common/images";
        var closeDiv = " />";
        var imageContainer = $('.courseImages');

        if (get_page == "#Section1") {
            imageContainer.append(imgPath + "/section1/05_caseIcon.png' />");
        } 

    },

}
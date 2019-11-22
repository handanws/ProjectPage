
function animateEle(cc, yan) {
    var yanse = yan
    var b = {
        top: $(window).scrollTop(),
        bottom: $(window).scrollTop() + $(window).height()
    };
    cc.each(function () {
        if (b.top <= $(this).offset().top && b.bottom >= $(this).offset().top && !$(this).data('bPlay')) {
            $(this).data('bPlay', true);
            var a = $(this).find('font').text().replace(/\%/, '');
            if ($(this).find("font").text() !== "0%") {
                $(this).svgCircle({
                    parent: $(this)[0],
                    w: 100,
                    R: 40,
                    sW: 5,
                    color: [yanse, yanse, yanse],
                    perent: [100, a],
                    speed: 150,
                    delay: 400
                })
            }
            if ($(this).find("font").text() == "0%") {
                $(this).find("font").css("color", "#a9a9a9");
                $(this).svgCircle({
                    parent: $(this)[0],
                    w: 100,
                    R: 40,
                    sW: 5,
                    color: ["#d1d1d1", "#d1d1d1", "#d1d1d1"],
                    perent: [100, a],
                    speed: 150,
                    delay: 400
                })
            }
        }
    })
}


function animateElecc(cc, yan) {
    var yanse = yan
    var b = {
        top: $(window).scrollTop(),
        bottom: $(window).scrollTop() + $(window).height()
    };
    cc.each(function () {
        if (b.top <= $(this).offset().top && b.bottom >= $(this).offset().top && !$(this).data('bPlay')) {
            $(this).data('bPlay', true);
            var a = $(this).find('font').text().replace(/\%/, '');
            if ($(this).find("font").text() !== "0%") {
                $(this).svgCirclecc({
                    parent: $(this)[0],
                    w: 100,
                    R: 30,
                    sW: 5,
                    color: [yanse, yanse, yanse],
                    perent: [100, a],
                    speed: 150,
                    delay: 400
                })
            }
            if ($(this).find("font").text() == "0%") {
                $(this).find("font").css("color", "#a9a9a9");
                $(this).svgCirclecc({
                    parent: $(this)[0],
                    w: 100,
                    R: 30,
                    sW: 5,
                    color: ["#d1d1d1", "#d1d1d1", "#d1d1d1"],
                    perent: [100, a],
                    speed: 150,
                    delay: 400
                })
            }
        }
    })
}
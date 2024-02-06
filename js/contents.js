$("#happy").on("click", function() {
    speed('#happy');

    setTimeout(function() {
        // 动画已结束的处理代码
        $("#circleClick").css({
            'display': 'none'
        })
        $("#happyClick").css({
            'display': 'block'
        })
    }, 2000); // 2000毫秒（2秒）后执行
})

$("#angry").on("click", function() {
    speed('#angry');

    setTimeout(function() {
        // 动画已结束的处理代码
        $("#circleClick").css({
            'display': 'none'
        })
        $("#angryClick").css({
            'display': 'block'
        })
    }, 2000); // 2000毫秒（2秒）后执行
})

$("#sad").on("click", function() {
    speed('#sad');

    setTimeout(function() {
        // 动画已结束的处理代码
        $("#circleClick").css({
            'display': 'none'
        })
        $("#sadClick").css({
            'display': 'block'
        })
    }, 2000); // 2000毫秒（2秒）后执行
})

$("#fear").on("click", function() {
    speed('#fear');

    setTimeout(function() {
        // 动画已结束的处理代码
        $("#circleClick").css({
            'display': 'none'
        })
        $("#fearClick").css({
            'display': 'block'
        })
    }, 2000); // 2000毫秒（2秒）后执行
})

function backClick(){
    window.location.reload();
}

function speed(circle){
    $('.conTxt').css({
        'opacity' : '0'
    })
    $('#conBG').css({
        'opacity' : '0'
    })
    $("#happy").css({
        'transform': 'translate(0, 1000px)',
        'transition': 'transform 2.8s ease-in-out'
    })
    $("#angry").css({
        'transform': 'translate(0, 1000px)',
        'transition': 'transform 3.0s ease-in-out'
    })
    $("#sad").css({
        'transform': 'translate(0, 1000px)',
        'transition': 'transform 3.2s ease-in-out'
    })
    $("#fear").css({
        'transform': 'translate(0, 1000px)',
        'transition': 'transform 3.5s ease-in-out'
    })
    $(circle).css({
        'transform': 'translate(0, 1000px)',
        'transition': 'transform 2.0s ease-in-out'
    })
}


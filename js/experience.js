$("#clickDoor").on("click", function() {
	$(".door-left,.door-right")
		.toggleClass("click");
  $("#clickDoor").hide();
  $(".doorImg").css("opacity", 1); /* 点击按钮后将透明度设置为1，触发淡入效果 */
  $(".dropImg").css("opacity", 1);
  $(".goBack").hide();
});

// 獲取圖片元素
var zoomedDropImage = document.getElementById('clickDrop');
// var zoomedDoorImage = document.getElementById('clickDoor');


$("#clickDrop").on("click", function(){
  // $(".doorImg").css("opacity", 0.3);
  $(".doorImg").css({
      'transform': 'scale(4)',
      'transition': 'transform 2.0s ease-in-out'  // 添加淡入淡出效果，0.5秒的動畫時間
  });
  $(".dropImg").css({
    'transform': 'scale(4)',
    'transition': 'transform 2.0s ease-in-out'  // 添加淡入淡出效果，0.5秒的動畫時間
  });
  $("#clickDrop").on("transitionend", function() {
    // 在這裡顯示按鈕
    $(".recordBtn").css({
        'display': 'block'
    });
    // 移除事件監聽器，以免多次觸發
    $("#clickDrop").off("transitionend");
  });
});

//錄音
$("#startBtn").on("click", function(){
  $("#endBtn").css({
    'display': 'block',
  });
  $("#startBtn").css({
    'display': 'none',
  });
  $("#recordGIF").css({
    'display': 'block',
  })
})

//結束錄音 播放動畫
$("#endBtn").on("click", function(){
  $("#endBtn").css({
    'display': 'none',
  });
  $("#recordGIF").css({
    'display': 'none',
  });
  $(".doorImg").css({
    'display': 'none',
  })
  $(".dropImg").css({
    'display': 'none',
  })
  $("#sayEng").css({
    'display': 'none',
  })

  $("#loadingMessage").css({
    'display': 'block',
  });

  window.setTimeout(function() {
    $("#loadingMessage").css({
        'opacity': '0'
    });

    // 在淡出动画完成后，将 display 设置为 'none'
    window.setTimeout(function() {
        $("#loadingMessage").css({
            'display': 'none'
        });
        $("#videoPlay").css({
          'display': 'block'
        });
    }, 1000); // 等待淡出动画时间
  }, 2000);
  
})

var video = document.getElementById('videoPlay');
    var overlay = document.getElementById('overlay');
    var overlayButtons = document.getElementById('overlayButtons');

    video.addEventListener('ended', function() {
        // 影片播放結束時淡入遮罩和按鈕
        overlay.style.display = 'block';
        overlayButtons.style.display = 'block';

        // 強制重新繪製以觸發淡入效果
        window.getComputedStyle(overlay).opacity; 
        window.getComputedStyle(overlayButtons).opacity;

        overlay.style.background = 'rgba(0, 0, 0, 0.7)';
        overlayButtons.style.opacity = 1;
    });

    function restartVideo() {
        // // 重新播放影片
        // video.currentTime = 0;
        // video.play();

        // // 隱藏遮罩和按鈕
        // overlay.style.display = 'none';
        // overlayButtons.style.display = 'none';
        window.location.href = 'experience.html';
    }

    function openAnotherPage() {
        // 跳轉到其他頁面，可以根據需求修改 URL
        window.location.href = 'index.html';
    }

//在圖片上添加點擊事件，當點擊時放大
zoomedDropImage.addEventListener('click', function() {
    // 使用共享的放大比例
    this.style.transform += ' translate(-25px, -60px)';
});

// 當頁面載入完成後執行
document.addEventListener("DOMContentLoaded", function() {
    // 獲取所有具有fade-in-element類別的元素
    var elements = document.querySelectorAll('.fade-in-element');

    // 遍歷每個元素
    elements.forEach(function(element) {
      // 建立IntersectionObserver實例，監視元素是否進入視窗
      var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          // 如果元素進入視窗，就添加淡入效果
          if (entry.isIntersecting) {
            element.style.opacity = 1;
            observer.unobserve(element); // 停止觀察
          }
        });
      }, { threshold: 0.5 }); // 定義觸發點為元素50%可見

      // 開始觀察元素
      observer.observe(element);
    });
  });
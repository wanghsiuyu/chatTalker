// 好評如潮 swiper
function initSwiper() {
  /* 
    id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
    要抓取 id "#comment-swiper"
    */
  const swiper = new Swiper("#comment-swiper", {
    /*自動輪播*/
    speed: 1000, //輪播速度
    loop: true, //無限循環播放
    autoplay: {  
      delay: 3000, //幾秒換下一張
    },
    
    /*  預設要顯示幾個卡片 */
    slidesPerView: 1,
    /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      992: {
        slidesPerView: 3,
      },
      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      768: {
        slidesPerView: 2,
      },
      /* 更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1,
      },
    },
    /* 卡片元素的間隔 */
    spaceBetween: 16,
    pagination: {
      /* 我想將分頁圓點綁在哪個 class */
      el: ".swiper-pagination",
      /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
      clickable: true,
    },
  });
}
/* 觸發自己定義的函式 */
initSwiper();


//常見問題
$(document).ready(function () {
  $('.question').click(function (e) { 
    e.preventDefault();
    //本身樣式：
    $(this).find('.questionTxt').toggleClass('open');
    $(this).find('.plus').toggleClass('d-none');
    $(this).find('.minus').toggleClass('d-none');
    $(this).siblings('.answer').slideToggle();
    //另外兩個樣式：
    $(this).parent().siblings().find('.questionTxt').removeClass('open');
    $(this).parent().siblings().find('.minus').addClass('d-none');
    $(this).parent().siblings().find('.plus').removeClass('d-none');
    $(this).parent().siblings().find('.answer').slideUp();
  });
});
$(document).ready(function () {
  $('.userNumBtn').click(function (e) { 
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    if($(this).text()=='10000位'){
      $('.basicNum').text('10000');
      $('.basicCost').text('600');
      $('.standardNum').text('10000');
      $('.standardCost').text('1600');
    } else if($(this).text()=='15000位'){
      $('.basicNum').text('15000');
      $('.basicCost').text('800');
      $('.standardNum').text('15000');
      $('.standardCost').text('2000');
    } else if($(this).text()=='20000位'){
      $('.basicNum').text('20000');
      $('.basicCost').text('1000');
      $('.standardNum').text('20000');
      $('.standardCost').text('2600');
    } else if($(this).text()=='25000位'){
      $('.basicNum').text('25000');
      $('.basicCost').text('1200');
      $('.standardNum').text('25000');
      $('.standardCost').text('3200');
    } else if($(this).text()=='>25000位'){
      $('.basicNum').text('>25000');
      $('.basicCost').text('1500');
      $('.standardNum').text('>25000');
      $('.standardCost').text('4000');
    }
  })
});
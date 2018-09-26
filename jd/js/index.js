//页面一打开加载完毕才会执行js代码;
window.addEventListener('load',function(){
//顶部js
// 获取顶部
var header=document.querySelector('#header');
//添加滚动事件
window.addEventListener('scroll',function(){

//获取页面滚动距离
var scrollTop=document.documentElement.scrollTop;

//获取轮播图的高度
var slideHeight=document.querySelector('#slide').offsetHeight;

//获取透明度
var opacity=scrollTop/slideHeight;

if(opacity>1){
    header.style.backgroundColor=' rgba(222, 24, 27,1) ';
}else{
    header.style.backgroundColor='rgba(222, 24, 27,'+opacity+')';
}


})


//倒计时
//获取future时间
// getTime是获取一个时间的毫秒数除以1000就是毫秒数
var futureTime=Math.floor(new Date(2018,8,22,22,00,00).getTime()/1000);

//获取当前时间的毫秒数
var nowTime=Math.floor(new Date().getTime()/1000);
//获取倒计时的总秒数
var time=futureTime-nowTime;
//获取所有的span
var spans=document.querySelectorAll('.down-time span');

//定一个定时器,时间每隔一秒
setInterval(function(){
time--;
    //如果时间为0或者小于0,那么就写死一个时间,时间为0时就再次调用此调用时间;
    if(time<=0){
        time=7200;
    }

//计算出倒计时的时分秒;
var hour=Math.floor(time/3600);  
var minute=Math.floor(time%3600/60);//secondTimes%3600的余数再除以60;
var second=Math.floor(time%60);//secondTimes%3600的余数再%60

// 7284  2小时 1分钟  
//将计算出的时分秒加入span中
spans[0].innerHTML=Math.floor(hour/10);
spans[1].innerHTML=Math.floor(hour%10);
spans[3].innerHTML=Math.floor(minute/10);
spans[4].innerHTML=Math.floor(minute%10);
spans[6].innerHTML=Math.floor(second/10);
spans[7].innerHTML=Math.floor(second%10);

},1000)

//轮播图

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    // // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })

})


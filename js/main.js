$(document).ready(function () {
    window.onscroll = function (){  
        var clienth = document.documentElement.clientHeight;  //屏幕高度
        var scrollt = document.documentElement.scrollTop || document.body.scrollTop; //滚动条滚动高度(滚动条纵坐标位置)
        var ani5 = document.getElementById('ani5')
        var aniArr = document.getElementById('aniArr')

        console.log(scrollt+clienth, 'aa scrollt+clienth')
        // TODO: 遍历 判断屏幕宽度做适配
        if (scrollt+clienth>=1200) {
            ani5.className = 'product clearfix ani5'
        }
        if (scrollt+clienth>=1850) {
            aniArr.getElementsByClassName('aniTwo')[0].className = 'aniTwo ani2'
            aniArr.getElementsByClassName('aniTwo')[1].className = 'aniTwo ani2'
            aniArr.getElementsByClassName('aniThree')[0].className = 'aniThree ani3'
            aniArr.getElementsByClassName('aniThree')[1].className = 'aniThree ani3'
            aniArr.getElementsByClassName('aniThree')[2].className = 'aniThree ani3'
        }
    }
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
});

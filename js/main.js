let findArrow = document.getElementById('arrowImg').className

// arrow 이미지 깜빡거리기
function arrowOpacity0(){
    if(findArrow ==='mobileBannerArrow'){
        findArrow = document.getElementById('arrowImg').className = 'mobileBannerArrowOpacity'
    }
    else{
        findArrow = document.getElementById('arrowImg').className = 'mobileBannerArrow'
    }
}

// // 리팩토링 or 글이 아닌 그림으로 다시
// // slide opacity 
// function finddreamStartDescriptionHeadSlide(){
//     if(window.scrollY > 300){
//         finddreamStartDescriptionHead.className = 'dreamStartedDescriptionH2Slide'
//         console.log(window.scrollY)
//     }
// }
// function finddreamStartDescriptionPSlide(){
//     if(window.scrollY > 450){
//         finddreamStartDescriptionP.className = 'dreamStartedDescriptionPSlide'
//         console.log(window.scrollY)
//     }
// }


// function finddreamBannerTextHeadSlide(){
//     if(window.scrollY > 900){
//         findBannerTextHead.className = 'bannerTexth1Slide'
//         console.log(window.scrollY)
//     }
// }
// function finddreamBannerTextPSlide(){
//     if(window.scrollY > 1100){
//         findBannerTextP.className = 'bannerTextPSlide'
//         console.log(window.scrollY)
//     }
// }


// function findFirstClassEggHeadSlide(){
//     if(window.scrollY > 1170){
//         findFirstClassEggHead.className = 'firstClassEggHead'
//         console.log(window.scrollY)
//     }
// }
// function findFirstClassEggPSlide(){
//     if(window.scrollY > 1350){
//         findFirstClassEggP.className = 'firstClassEggP'
//         console.log(window.scrollY)
//     }
// }

// // 이부분까지



// document.addEventListener('scroll',finddreamStartDescriptionHeadSlide)
// document.addEventListener('scroll',finddreamStartDescriptionPSlide)
// document.addEventListener('scroll',finddreamBannerTextHeadSlide)
// document.addEventListener('scroll',finddreamBannerTextPSlide)
// document.addEventListener('scroll',findFirstClassEggHeadSlide)
// document.addEventListener('scroll',findFirstClassEggPSlide)


setInterval(function()
{
    arrowOpacity0();
}, 400 );


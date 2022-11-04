let findArrow = document.getElementById('arrowImg').className
let finddreamStartDescriptionHead = document.querySelector('.dreamStartedDescription h2')

// arrow 이미지 깜빡거리기
function arrowOpacity0(){
    if(findArrow ==='mobileBannerArrow'){
        findArrow = document.getElementById('arrowImg').className = 'mobileBannerArrowOpacity'
    }
    else{
        findArrow = document.getElementById('arrowImg').className = 'mobileBannerArrow'
    }
}
// 나타나기
function finddreamStartDescriptionHeadSlide(){
    if(window.scrollY > 300){
        console.log('하하하')
    }
    
}




document.addEventListener('scroll',finddreamStartDescriptionHeadSlide)

setInterval(function()
{
    arrowOpacity0();
}, 400 );


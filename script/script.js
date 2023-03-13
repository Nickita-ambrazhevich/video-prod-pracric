let offset = 0;
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-button-next').addEventListener('click', function(){
offset = offset + 480;
if(offset > 960){
    offset = 0;
}
sliderLine.style.left = -offset + "px";
});

document.querySelector('.slider-button-prev').addEventListener('click', function(){
    offset = offset - 480;
    if(offset < 0){
        offset = 1399;
    }
    sliderLine.style.left = -offset + "px";
    });
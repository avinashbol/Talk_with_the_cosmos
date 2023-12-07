var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "shut up";
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "Tolk";
	}

}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "Tolk";
}

var audio1 = document.getElementById('audio1');
var playPauseBTN1 = document.getElementById('playPauseBTN1');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio1.play();
		playPauseBTN1.innerHTML = "shut up";
	}else{
		count = 0;
		audio1.pause();
		playPauseBTN1.innerHTML = "Tolk";
	}

}

function stop(){
	playPause()
	audio1.pause();
	audio1.currentTime = 0;
	playPauseBTN1.innerHTML = "Tolk";
}



var audio2 = document.getElementById('audio2');
var playpauseBTN2 = document.getElementById('playpauseBTN2');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio2.play();
		playpauseBTN2.innerHTML = "shut up";
	}else{
		count = 0;
		audio2.pause();
		playpauseBTN2.innerHTML = "Tolk";
	}

}

function stop(){
	playPause()
	audio2.pause();
	audio2.currentTime = 0;
	playpauseBTN2.innerHTML = "Tolk";
}




var audio3 = document.getElementById('audio3');
var playpauseBTN3 = document.getElementById('playpauseBTN3');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio3.play();
		playpauseBTN3.innerHTML = "shut up";
	}else{
		count = 0;
		audio3.pause();
		playpauseBTN3.innerHTML = "Tolk";
	}

}

function stop(){
	playPause()
	audio3.pause();
	audio3.currentTime = 0;
	playpauseBTN3.innerHTML = "Tolk";
}



var audio4 = document.getElementById('audio4');
var playpauseBTN4 = document.getElementById('playpauseBTN4');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio4.play();
		playpauseBTN4.innerHTML = "shut up";
	}else{
		count = 0;
		audio4.pause();
		playpauseBTN4.innerHTML = "Tolk";
	}

}

function stop(){
	playPause()
	audio4.pause();
	audio4.currentTime = 0;
	playpauseBTN4.innerHTML = "Tolk";
}


var audio5 = document.getElementById('audio5');
var playpauseBTN5 = document.getElementById('playpauseBTN5');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio5.play();
		playpauseBTN5.innerHTML = "shut up";
	}else{
		count = 0;
		audio5.pause();
		playpauseBTN5.innerHTML = "Tolk";
	}

}

function stop(){
	playPause()
	audio5.pause();
	audio5.currentTime = 0;
	playpauseBTN5.innerHTML = "Tolk";
}


var audio6 = document.getElementById('audio6');
var playpauseBTN6 = document.getElementById('playpauseBTN6');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio6.play();
		playpauseBTN6.innerHTML = "shut up";
	}else{
		count = 0;
		audio6.pause();
		playpauseBTN6.innerHTML = "Tolk";
	}

}

function stop(){
	playPause()
	audio6.pause();
	audio6.currentTime = 0;
	playpauseBTN6.innerHTML = "Tolk";
}

var audio7 = document.getElementById('audio7');
var playpauseBTN7 = document.getElementById('playpauseBTN7');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio7.play();
		playpauseBTN7.innerHTML = "shut up";
	}else{
		count = 0;
		audio7.pause();
		playpauseBTN7.innerHTML = "Tolk";
	}

}

function stop(){
	playPause()
	audio7.pause();
	audio7.currentTime = 0;
	playpauseBTN7.innerHTML = "Tolk";
}

var audio8 = document.getElementById('audio8');
var playpauseBTN8 = document.getElementById('playpauseBTN8');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio8.play();
		playpauseBTN8.innerHTML = "shut up";
	}else{
		count = 0;
		audio8.pause();
		playpauseBTN8.innerHTML = "Tolk";
	}

}

function stop(){
	playPause()
	audio8.pause();
	audio8.currentTime = 0;
	playpauseBTN8.innerHTML = "Tolk";
}

var audio9 = document.getElementById('audio9');
var playpauseBTN9 = document.getElementById('playpauseBTN9');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio9.play();
		playpauseBTN9.innerHTML = "shut up";
	}else{
		count = 0;
		audio9.pause();
		playpauseBTN9.innerHTML = "Tolk";
	}

}

function stop(){
	playPause()
	audio9.pause();
	audio9.currentTime = 0;
	playpauseBTN9.innerHTML = "Tolk";
}




//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;


nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}





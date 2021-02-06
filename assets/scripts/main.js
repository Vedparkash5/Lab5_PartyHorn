var slider = document.getElementById("volume-slider");
var volNum = document.getElementById("volume-number");
var soundImg = document.getElementById("sound-image");
var sound = document.getElementById("horn-sound");
var volImg = document.getElementById("volume-image");
var honkBtn = document.getElementById("honk-btn");
var hornSound = document.getElementById("horn-sound");

document.getElementById("volume-number").addEventListener("input", volNumFunc);
function volNumFunc(input) {
    slider.value = +document.getElementById("volume-number").value;

    var soundVal = slider.value / 100;
    hornSound.volume = soundVal;

    if (slider.value < 1) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        honkBtn.disabled = true;
    }
    else if (slider.value > 0 && slider.value < 34) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        honkBtn.disabled = false;
    }
    else if (slider.value > 33 && slider.value < 64) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        honkBtn.disabled = false;
    }
    else {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        honkBtn.disabled = false;
    }
};
document.getElementById("volume-slider").addEventListener("input", function() {
    volNum.value = +document.getElementById("volume-slider").value;

    var soundVal = volNum.value / 100;
    hornSound.volume = soundVal;

    if (slider.value < 1) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        honkBtn.disabled = true;
    }
    else if (slider.value > 0 && slider.value < 34) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        honkBtn.disabled = false;
    }
    else if (slider.value > 33 && slider.value < 64) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        honkBtn.disabled = false;
    }
    else {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        honkBtn.disabled = false;
    }
});

/*honk button playing */
 honkBtn.addEventListener("click", honkFunc);

function honkFunc(evt) {
    sound.play();
    evt.preventDefault();
};

/*radio horn changing */
document.getElementById("radio-air-horn").addEventListener("click", function() {
    soundImg.src = "./assets/media/images/air-horn.svg";
    sound.src = "./assets/media/audio/air-horn.mp3"
});
document.getElementById("radio-car-horn").addEventListener("click", function() {
    soundImg.src = "./assets/media/images/car.svg";
    sound.src = "./assets/media/audio/car-horn.mp3"
});
document.getElementById("radio-party-horn").addEventListener("click", function() {
    soundImg.src = "./assets/media/images/party-horn.svg";
    sound.src = "./assets/media/audio/party-horn.mp3"
});
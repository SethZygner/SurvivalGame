import {ref} from "vue";


let BackgroundMusic = new Audio('../public/MysteriousMusic_1.mp3');
let FourWhispers = new Audio('../public/FourWhispers.mp3');
let ButtonClick = new Audio('../Public/ClickedButton.wav');
let MusicOn = ref(false);

function ToggleBackgroundMusic(action){
    switch (action){
        case "On":
            BackgroundMusic.loop = true;
            BackgroundMusic.volume = 0.8;
            BackgroundMusic.play();
            MusicOn.value = true;

            break;
        case "Off":
            BackgroundMusic.pause();
            MusicOn.value = false;
            break;
    }
}

function OptionClick(){
    ButtonClick.volume = .3;
    ButtonClick.play();
}

export default {
    ToggleBackgroundMusic,
    OptionClick,
    MusicOn
}

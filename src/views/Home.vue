<script setup>

import {ref} from "vue";
import MusicAndSound from "../MusicAndSound.js";

let LocalStorage = window.localStorage;

let ShowOptions = ref(false);

let NewGame = ref(false);

let Continue = ref(false);

let UserName = ref("");

let ErrorMessage = ref("");



if(LocalStorage.getItem('User')){
  Continue.value = true;
}

function StartNewGame(){
  if(UserName.value.trim().length > 3){
    if(LocalStorage.getItem('User')){
      LocalStorage.clear();
    }

    let User = {
      UserName: UserName.value.trim()
    }

    LocalStorage.setItem('User', JSON.stringify(User));
  }else{
    ErrorMessage.value = "Name is too short. Must be 3-15 characters long."
  }
}


</script>

<template>

  <div class="row container-fluid">
    <div class="col-md-4 d-flex align-items-center justify-content-center" >
      <ul class="Menu-Options" v-if="!ShowOptions && !NewGame">
        <li v-if="Continue"><h1>Continue</h1></li>
        <li><h1 @click="MusicAndSound.OptionClick(); NewGame=true;">New Game</h1></li>
        <li><h1 @click="ShowOptions=true; MusicAndSound.OptionClick()">Options</h1></li>
      </ul>

      <ul v-if="ShowOptions" class="Menu-Options">
        <li v-if="MusicAndSound.MusicOn.value"><h1 @click="MusicAndSound.ToggleBackgroundMusic('Off');">Music: On</h1></li>
        <li v-else><h1 @click="MusicAndSound.ToggleBackgroundMusic('On');">Music: Off</h1></li>
        <li><h1 @click="MusicAndSound.OptionClick(); ShowOptions=false;">Back</h1></li>
      </ul>

      <div v-if="NewGame" class="text-center">
        <input class="Simple-Input mb-5" type="text" placeholder="Enter Name" maxlength="15" v-model="UserName">
        <br>
        <button class="mb-3" @click="StartNewGame">Play</button>

        <h3 class="Text-Hover" @click="NewGame = false;">Cancel</h3>
      </div>
    </div>

    <div class="col-md-8" >
      <img src="../assets/HomeBackground.jpg" class="img-fluid" alt="">
    </div>

  </div>

</template>

<style scoped>


.Menu-Options{
  list-style-type: none;
  text-align: center;


}

.Menu-Options li{
  margin-top: 2em;
}

.Menu-Options li h1:hover{
  cursor: pointer;
  text-decoration: underline;
}




</style>

<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import MusicAndSound from './MusicAndSound.js';

import {ref} from "vue";

let LocalStorage = window.localStorage;
let NextPage = ref(false);


useRouter().push('/');





function EnableAudio(){
  MusicAndSound.OptionClick();
  NextPage.value = true;
  MusicAndSound.ToggleBackgroundMusic('On');

}


</script>

<template>

<div v-if="!NextPage" class="mx-auto text-center" id="Audio">
  <h4>Would you like to enable background audio? This can be changed at any time.</h4>
  <button @click="EnableAudio">Yes</button>
  <button @click="NextPage = true;">No</button>

</div>



  <div id="View" v-else>
    <RouterView></RouterView>
  </div>



</template>

<style scoped>



#Audio{
  margin-top: 10em;
}

</style>

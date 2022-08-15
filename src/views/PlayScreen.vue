<script setup>

import {useRouter} from 'vue-router';
import MusicAndSound from "../MusicAndSound.js";
import {ref} from "vue";

let router = useRouter();
let showPlayButton = ref(false);

setTimeout(()=>{
  showPlayButton.value = true;
}, 5000);

function Clicked(){
  MusicAndSound.OptionClick();
  router.push('/HomeScreen');
}




</script>



<template>

  <div  id="All-Content" >

    <div class="mx-auto d-flex justify-content-evenly align-items-center col-md-5" id="Title">
      <h5 id="L" class="Letter">L</h5>
      <h5 id="I" class="Letter">I</h5>
      <h5 id="G" class="Letter">G</h5>
      <h5 id="H" class="Letter">H</h5>
      <h5 id="T" class="Letter">T</h5>
    </div>

    <div v-if="showPlayButton" class="text-center mt-5">
      <button @click="Clicked">Play</button>
    </div>
  </div>

</template>



<style scoped>

#Title{
  height: fit-content;
  margin-top: 20em;
  animation: Introduction ease-out forwards 6s;
}


@keyframes Introduction {
  0%{
    width: 20%;
    opacity: 0;
  }

  33.33%{
    width: 40%;
    opacity: .4;
  }

  33.33%{
    width: 60%;
    opacity: .8;
  }

  100%{
    width: 80%;
    opacity: 1;

  }
}


</style>

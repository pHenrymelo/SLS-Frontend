<template>
    <div class=" w-8/12 grid grid-cols-2 grid-rows-3 gap-4 py-12 boder border border-white rounded-sm ">
        <div class=" flex justify-center items-center gap-6">
            <img src="@/assets/icons/dumbell.svg" alt="stranght" class="w-14 svg-shadow">
            <h2 class=" text-white text-2xl"> STR: </h2>
            <h2 class="text-white text-3xl font-bold text-shadow-blue"> 10 </h2>
        </div>
        <div class=" flex justify-center items-center gap-6">
            <img src="@/assets/icons/heart.svg" alt="stranght" class="w-10 svg-shadow">
            <h2 class=" text-white text-2xl "> VIT: </h2>
            <h2 class="text-white text-3xl font-bold text-shadow-blue"> 10 </h2>
        </div>
        <div class=" flex justify-center items-center gap-6">
            <img src="@/assets/icons/running.svg" alt="stranght" class="w-10 svg-shadow">
            <h2 class=" text-white text-2xl "> AGI: </h2>
            <h2 class="text-white text-3xl font-bold text-shadow-blue"> 10 </h2>
        </div>
        <div class=" flex justify-center items-center gap-6">
            <img src="@/assets/icons/brain.svg" alt="stranght" class="w-14 svg-shadow">
            <h2 class=" text-white text-2xl "> INT: </h2>
            <h2 class="text-white text-3xl font-bold text-shadow-blue"> 10 </h2>
        </div>
        <div class=" flex justify-center items-center gap-6">
            <img src="@/assets/icons/eye.svg" alt="stranght" class="w-10 svg-shadow">
            <h2 class=" text-white text-2xl "> PER: </h2>
            <h2 class="text-white text-3xl font-bold text-shadow-blue"> 10 </h2>
        </div>
        <div class=" flex justify-center items-center gap-8 text-center">
            <h2 class=" text-white text-lg "> Avaliable <br> Ability <br> Points:</h2>
            <h2 class="text-white text-3xl font-bold text-shadow-blue"> 0 </h2>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'statsComponent',
  setup () {
    return {

    }
  }
})

</script>

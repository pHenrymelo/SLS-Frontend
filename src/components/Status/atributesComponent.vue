<template>
    <div class=" flex w-8/12 justify-center gap-12 py-4 px-12 rounded-sm border border-white">

      <div class=" flex justify-center items-center w-5/12 gap-4">

        <div class=" flex flex-col w-fit justify-center items-center" >
          <img src="@/assets/icons/health-cross-firstaid.svg" alt="health" class="w-10 svg-shadow">
          <h3 class=" text-white text-lg font-bold text-shadow-blue">HP</h3>
        </div>

        <div class=" flex flex-col justify-center items-center w-full">
          <div class=" border-2 border-white w-full h-4 rounded-lg svg-shadow flex items-center px-1">
            <div class="border-2 border-white w-full rounded-lg"></div>
          </div>
          <p class=" text-white text-sm ml-auto"><span class="text-shadow-blue text-lg font-bold">100</span>/100</p>
        </div>

      </div>

      <div class=" flex justify-center items-center w-5/12 gap-4 ">

        <div class=" flex flex-col w-fit justify-center items-center" >
          <img src="@/assets/icons/lab-flask.svg" alt="mana" class="w-10 svg-shadow">
          <h3 class=" text-white text-lg font-bold text-shadow-blue">MP</h3>
        </div>

        <div class=" flex flex-col justify-center items-center w-full ">
          <div class=" border-2 border-white w-full h-4 rounded-lg svg-shadow flex items-center px-1">
            <div class="border-2 border-white w-full rounded-lg"></div>
          </div>
          <p class=" text-white text-sm ml-auto"><span class="text-shadow-blue text-lg font-bold">10</span>/10</p>
        </div>
      </div>

      <div class=" w-2/12 flex flex-col justify-center items-center">
        <img src="@/assets/icons/energy.svg" alt="energy" class="w-10 svg-shadow">
        <div class=" flex justify-center items-center gap-2">
          <h3 class=" text-white text-lg font-bold text-shadow-blue">FATIGUE: </h3>
          <h3 class="text-white text-xl font-bold text-shadow-blue"> 0 </h3>
        </div>
      </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'atributesComponent',
  setup () {
    return {

    }
  }
})

</script>

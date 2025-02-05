<template>
    <div class=" w-8/12 h-1/4 grid grid-cols-2 grid-rows-3 gap-4 p-4 boder ">
        <div class=" flex justify-center items-center">
            <img src="@/assets/icons/dumbell.svg" alt="stranght" class="w-16">
            <h2 class=" text-white text-2xl font-bold"> STR: </h2>
            <h2 class="text-white text-2xl font-bold"> XXX </h2>
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

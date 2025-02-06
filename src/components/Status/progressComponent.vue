<template>
    <div class=" w-8/12 flex gap-20 py-8 rounded-sm justify-center items-center">
      <div class=" flex flex-col gap-2 justify-center items-center h-full w-1/2">
        <h2 class="text-white text-7xl font-bold text-shadow-blue">1</h2>
        <h3 class=" text-white text-lg font-bold ">Level</h3>
      </div>
      <div class=" flex flex-col gap-1 mt-auto w-1/2">

        <div class=" text-white text-lg">Name:  <Span class=" text-xl text-shadow-blue font-bold">Pedro Henrique Braga Melo</Span> </div>
        <div class=" text-white text-lg">Job:  <Span class=" text-xl text-shadow-blue font-bold">Shadow Monarch</Span> </div>
        <div class=" text-white text-lg">Title: <Span class=" text-xl text-shadow-blue font-bold">The one who left it all behind</Span> </div>
      </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'progressComponent',
  setup () {
    return {

    }
  }
})

</script>

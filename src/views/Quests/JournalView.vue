<template>
 <div class=" bg-blue-950 w-full h-full flex items-center flex-col justify-center">

    <h1 class=" my-4 text-white text-4xl font-bold border w-1/4 text-center py-4 text-shadow-blue">
      Missões
    </h1>
    <questlistComponent />
    <div class="w-full p-4 flex items-center justify-center text-white h-1/6">
      <span class="border p-1 border-white rounded-md flex flex-col mx-auto gap-4 h-fill">
        <a href="/newQuest" class=" p-4 border-l-4 border-r-4 border-blue-700 rounded-sm hover:bg-transparent hover:border-t-4 hover:border-b-4 duration-500"> Nova missão </a>
      </span>
    </div>
 </div>
</template>

<script>

import questlistComponent from '@/components/Quests/questlistComponent.vue'

export default {
  name: 'JournalView',
  components: {
    questlistComponent
  }
}

</script>

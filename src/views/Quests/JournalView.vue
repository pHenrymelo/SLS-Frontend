<template>
 <div class=" bg-blue-950 w-full h-full flex items-center flex-col justify-center">

    <h1 class=" my-4 text-white text-4xl font-bold border-b-4 border-t-4 w-1/4 text-center py-4">
      Missões
    </h1>
    <questlistComponent />
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

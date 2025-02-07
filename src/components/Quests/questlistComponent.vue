<template>
    <div class="w-3/5 h-4/5 border p-4 border-white rounded-md flex flex-col mx-auto gap-4 overflow-auto"
    >
        <div
        v-for="quest in quests"
        :key="quest.id"
        class=" p-6 text-white w-full h-fit border border-white rounded-sm">
        <div class="w-full flex justify-between relative">
          <a href=""><img class="w-8 svg-shadow" src="../../assets/icons/gear.svg" alt="edit"></a>
          <a href=""><img class="w-5 svg-shadow" src="../../assets/icons/x.svg" alt="delete"></a>
        </div>
        <h2 class=" mx-auto w-fit font-bold text-2xl mb-4 text-shadow-blue">
            {{ quest.title }}
        </h2>
        <p class=" w-4/5 mx-auto text mb-4 text-center">
            {{ quest.description }}
        </p>
        <div class=" flex flex-col gap-2">

          <span class=" w-fit mx-auto  p-2"
          v-if="quest.completed === true"
          > <img class=" w-6 svg-shadow" src="@/assets/icons/checkbox.svg" alt="checked"> </span>
          <span class=" w-fit mx-auto fill-blue-800 "
          v-else
          > <img class=" w-7 svg-shadow" src="@/assets/icons/checkbox-unchecked.svg" alt=""> </span>
          <span class=" w-fit mx-auto"> {{ quest.createdAt }} </span>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import api from '@/services/api'
import { ref, defineComponent, onMounted } from 'vue'

interface Quest{
    id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string
}

export default defineComponent({
  name: 'journalComponent',
  setup () {
    const quests = ref<Quest[]>([])

    const fetchQuests = async () => {
      try {
        const res = await api.get('quests')
        quests.value = res.data
        console.log(quests)
        return res.data
      } catch (err) {
        console.error('erro na requisição das missões: ', err)
        throw err
      }
    }
    onMounted(() => {
      fetchQuests()
    })
    return {
      quests,
      fetchQuests
    }
  }

})

</script>

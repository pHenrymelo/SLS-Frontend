<template>
    <div class=" w-full h-full flex items-center flex-col p-12">
        <h1 class=" my-4 text-white text-4xl font-bold border-b-4 border-t-4 w-1/4 text-center py-4">Status</h1>
        <atributesComponent />
        <progressComponent />
        <statsComponent />
    </div>
</template>

<script lang="ts">

import atributesComponent from '@/components/Status/atributesComponent.vue'
import progressComponent from '@/components/Status/progressComponent.vue'
import statsComponent from '@/components/Status/statsComponent.vue'

export default {
  name: 'StatusView',
  components: {
    atributesComponent,
    progressComponent,
    statsComponent
  }
}

</script>

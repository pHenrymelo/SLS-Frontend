<template>
    <div class=" w-full h-full flex items-center flex-col p-12 gap-4 ">
      <h1 class="my-4 text-white text-4xl font-bold border w-1/4 text-center py-4 text-shadow-blue">{{form}}</h1>

        <div v-if="form === 'signIn'" class="w-full flex gap-4 items-center justify-center">
            <signInComponent />
        </div>
        <div v-if="form === 'signUp'" class="w-full flex gap-4 items-center justify-center">
            <signUpComponent />
        </div>

        <div>
          <button @click="switchForm"
          class="p-2 rounded-sm border border-white text-white shadow-lg text-shadow-blue "
          >{{formSwap}}</button>
        </div>
    </div>
</template>

<script>

import signUpComponent from '@/components/Users/signUpComponent.vue'
import signInComponent from '@/components/Users/sigInComponent.vue'

export default {
  name: 'UserFormView',
  data () {
    return {
      form: 'signIn',
      formSwap: 'signUp'
    }
  },
  methods: {
    switchForm () {
      const temp = this.form
      this.form = this.formSwap
      this.formSwap = temp

      return this.form
    }
  },
  components: {
    signUpComponent,
    signInComponent
  }

}
</script>

<template>
    <div class=" w-full h-full flex items-center flex-col p-12 gap-4 ">
        <div v-if="form === 'signIn'">
            <signInComponent />
        </div>
        <div v-if="form === 'signUp'">
            <signUpComponent />
        </div>
        <div>
          <button @click="switchForm"
          class="p-2 rounded-sm border border-white text-white shadow-lg text-shadow-blue "
          >{{form}}</button>
        </div>
    </div>
</template>

<script lang="ts">

import signUpComponent from '@components/Users/signUpComponent.vue'
import signInComponent from '@/components/Users/sigInComponent.vue'

export default {
  name: 'UserFormView',
  data () {
    return {
      form: 'signIn'
    }
  },
  methods: {
    switchForm () {
      if (this.form === 'signIn') {
        this.form = 'signUp'
        return this.form
      }

      this.form = 'signIn'
      console.log(this.form)
      return this.form
    }
  },
  components: {
    signUpComponent,
    signInComponent
  }
}
</script>

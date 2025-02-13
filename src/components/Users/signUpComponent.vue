<template>
    <div class=" w-4/12 flex flex-col gap-4 border border-white rounded-sm p-12">
        <form @submit.prevent="signUp" class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label for="username" class=" text-white font-bold text-lg text-shadow-blue">Username</label>
                <input v-model="username" type="text" name="username" class="border border-white rounded-sm p-2 text-white text-shadow-blue bg-transparent" placeholder="Qaul o seu nome, jogador?">
            </div>
            <div class="flex flex-col gap-2">
                <label for="email" class=" text-white font-bold text-lg text-shadow-blue">Email</label>
                <input v-model="email" type="email" name="email" class="border border-white rounded-sm p-2 text-white text-shadow-blue bg-transparent" placeholder="email@email.com">
            </div>
            <div class="flex flex-col gap-2">
                <label for="password" class=" text-white font-bold text-lg text-shadow-blue">Senha</label>
                <input v-model="password" type="password" name="password" class="border border-white rounded-sm p-2 text-white text-shadow-blue bg-transparent" placeholder="********">
            </div>

            <div class="w-full flex justify-center my-2">
                <button type="submit"
                class="p-2 rounded-sm border border-white text-white shadow-lg text-shadow-blue"
                >Criar Usuario</button>
            </div>

        </form>
    </div>

</template>

<script>

import api from '@/services/api'

export default {
  name: 'signUpComponent',

  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },

  methods: {
    async signUp () {
      try {
        const response = await api.post('/register', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        console.log('Usuario cadastrado com sucesso', response.data)
        this.username = ''
        this.email = ''
        this.password = ''
      } catch (err) {
        console.error('erro ao cadastrar', err)
      }
    }
  }
}

</script>

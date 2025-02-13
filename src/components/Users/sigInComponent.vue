<template>
  <div class=" w-4/12 flex flex-col gap-4 border border-white rounded-sm p-12">
    <form @submit.prevent="signIn" class="flex flex-col gap-4">
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
            >Iniciar Sessão</button>
        </div>

    </form>
</div>
</template>
<script>
import api from '@/services/api'

export default {
  name: 'signInFormComponent',
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async signIn () {
      try {
        const response = await api.post('/session', {
          email: this.email,
          password: this.password
        })

        console.log('Usuário logado com sucesso', response.data)
        return this.$router.push('/')
      } catch (err) {
        console.error('erro ao logar', err)
      }
    }
  }
}

</script>

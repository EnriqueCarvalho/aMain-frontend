<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px;">
      <q-card-section>
        <div class="text-h6">Cadastro de Usuário</div>
      </q-card-section>

      <q-form @submit.prevent="onSubmit">
        <q-card-section>
          <q-input v-model="form.idPaciente" label="ID do Paciente" type="number" />
          <q-input v-model="form.publicoAlvo.idPublicAlvo" label="ID do Público Alvo" type="number" />
          <q-input v-model="form.publicoAlvo.descrPublico" label="Descrição do Público Alvo" />
          <q-input v-model="form.observacoes" label="Observações" />
          <q-checkbox v-model="form.reposavel" label="Responsável" />
          <q-input v-model="form.usuario.nome" label="Nome" />
          <q-input v-model="form.usuario.email" label="Email" type="email" />
          <q-input v-model="form.usuario.password" label="Senha" type="password" />
          <q-input v-model="form.usuario.tipo" label="Tipo" />
          <q-input v-model="form.usuario.dtNascimento" label="Data de Nascimento" type="date" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancelar" color="negative" @click="onCancel" />
          <q-btn label="Salvar" type="submit" color="primary" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/authstore';

const router = useRouter();
const authStore = useAuthStore();

const form = ref({
  idPaciente: 0,
  publicoAlvo: {
    idPublicAlvo: 0,
    descrPublico: ''
  },
  observacoes: '',
  reposavel: false,
  usuario: {
    nome: '',
    email: '',
    password: '',
    tipo: '',
    dtNascimento: ''
  }
});

const onSubmit = async () => {
  try {
    await authStore.register(form.value);
    router.push('/login');
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
  }
};

const onCancel = () => {
  router.push('/');
};
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

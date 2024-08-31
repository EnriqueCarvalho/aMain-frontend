<!-- FormularioCadastro.vue -->
<template>
  <main class="flex flex-center">
    <q-card class="q-pa-md m-10" style="width: 400px;">
      <q-card-section>
        <div class="text-h6">Cadastro de {{ tipo }}</div>
      </q-card-section>

      <q-form @submit="onSubmit(tipo)">
        <q-card-section v-if="tipo === 'paciente'">
          <q-input v-model="formPaciente.observacoes" label="Observações" />
          <q-checkbox v-model="formPaciente.reposavel" label="Responsável" />
          <q-separator class="my-4 w-full" />
          <span class="font-bold">Dados do usuário:</span>
          <q-input v-model="formPaciente.usuario.nome" label="Nome" />
          <q-input v-model="formPaciente.usuario.email" label="Email" type="email" />
          <q-input v-model="formPaciente.usuario.password" label="Senha" type="password" />
          <q-input v-model="formPaciente.usuario.dtNascimento" label="Data de Nascimento" type="date" />

          <q-separator class="my-4 w-full" />
          <div>
            <span class="font-bold">Público Alvo:</span>
            <div v-for="item in publicoAlvo" :key="item.idPublicAlvo">
              <q-radio v-model="formPaciente.publicoAlvo" :label="item.descrPublico" :val="item.idPublicAlvo" />
            </div>
          </div>
        </q-card-section>

        <q-card-section v-if="tipo === 'profissional'">
          <q-input v-model="formProfissional.valorConsulta" label="Valor da Consulta" />
          <q-input type="textarea" v-model="formProfissional.biografia" label="Biografia" />
          <q-separator class="my-4 w-full" />
          <span class="font-bold">Dados do usuário:</span>
          <q-input v-model="formProfissional.usuario.nome" label="Nome" />
          <q-input v-model="formProfissional.usuario.email" label="Email" type="email" />
          <q-input v-model="formProfissional.usuario.password" label="Senha" type="password" />
          <q-input v-model="formProfissional.usuario.dtNascimento" label="Data de Nascimento" type="date" />

          <q-separator class="my-4 w-full" />
          <div>
            <span class="font-bold">Área de Atuação:</span>
            <div v-for="item in areaAtuacao" :key="item.idAreaAtuacao">
              <q-radio v-model="formProfissional.areaAtuacao" :label="item.descrArea" :val="item.idAreaAtuacao" />
            </div>
          </div>
          <q-input v-model="formProfissional.crp" label="Número CRP" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancelar" color="negative" @click="onCancel" />
          <q-btn label="Salvar" type="submit" color="primary" />
        </q-card-actions>
      </q-form>
    </q-card>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/authstore';
import instance from 'src/services/interceptor/interceptor';
import { useQuasar } from 'quasar';

const router = useRouter();
const authStore = useAuthStore();

const $q = useQuasar();

const props = defineProps<{
  tipo: string;
}>();

const formPaciente = ref({
  observacoes: '',
  reposavel: false,
  usuario: {
    nome: '',
    email: '',
    password: '',
    dtNascimento: ''
  },
  publicoAlvo: []
});

const formProfissional = ref({
  valorConsulta: 0,
  biografia: '',
  usuario: {
    nome: '',
    email: '',
    password: '',
    dtNascimento: ''
  },
  areaAtuacao: [],
  crp: 0
});

const publicoAlvo = ref([
  {
    "idPublicAlvo": 1,
    "descrPublico": "Crianças"
  },
  {
    "idPublicAlvo": 2,
    "descrPublico": "Idosos"
  },
  {
    "idPublicAlvo": 3,
    "descrPublico": "Jovens"
  },
  {
    "idPublicAlvo": 4,
    "descrPublico": "Pessoas com deficiência"
  },
  {
    "idPublicAlvo": 5,
    "descrPublico": "Pessoas com doenças crônicas"
  },
  {
    "idPublicAlvo": 6,
    "descrPublico": "Adultos"
  },
]);

const areaAtuacao = ref([
  {
    "idAreaAtuacao": 1,
    "descrArea": "Psicanálise"
  },
  {
    "idAreaAtuacao": 2,
    "descrArea": "Psicoterapia Cognitivo-Comportamental (TCC)"
  },
  {
    "idAreaAtuacao": 3,
    "descrArea": "Psicoterapia Humanista"
  },
  {
    "idAreaAtuacao": 4,
    "descrArea": "Psicologia Analítica"
  },
  {
    "idAreaAtuacao": 5,
    "descrArea": "Ontopsicologia"
  },
  {
    "idAreaAtuacao": 6,
    "descrArea": "Psicoterapia Familiar e de Casal"
  },
  {
    "idAreaAtuacao": 7,
    "descrArea": "Psicoterapia Somática"
  },
  {
    "idAreaAtuacao": 8,
    "descrArea": "Psicanálise"
  },
  {
    "idAreaAtuacao": 9,
    "descrArea": "Psicoterapia Cognitivo-Comportamental (TCC)"
  },
  {
    "idAreaAtuacao": 10,
    "descrArea": "Psicoterapia Humanista"
  },
  {
    "idAreaAtuacao": 11,
    "descrArea": "Psicologia Analítica"
  },
  {
    "idAreaAtuacao": 12,
    "descrArea": "Ontopsicologia"
  },
  {
    "idAreaAtuacao": 13,
    "descrArea": "Psicoterapia Familiar e de Casal"
  },
  {
    "idAreaAtuacao": 14,
    "descrArea": "Psicoterapia Somática"
  },
  {
    "idAreaAtuacao": 15,
    "descrArea": "Psicanálise"
  },
  {
    "idAreaAtuacao": 16,
    "descrArea": "Psicoterapia Cognitivo-Comportamental (TCC)"
  },
  {
    "idAreaAtuacao": 17,
    "descrArea": "Psicoterapia Humanista"
  },
  {
    "idAreaAtuacao": 18,
    "descrArea": "Psicologia Analítica"
  },
  {
    "idAreaAtuacao": 19,
    "descrArea": "Ontopsicologia"
  },
  {
    "idAreaAtuacao": 20,
    "descrArea": "Psicoterapia Familiar e de Casal"
  },
  {
    "idAreaAtuacao": 21,
    "descrArea": "Psicoterapia Somática"
  }
]);

const fetchPublicoAlvo = async () => {
  try {
    const response = await instance.get('/publicoAlvo');
    publicoAlvo.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar público alvo:', error);
  }
};

onMounted(() => {
  if (props.tipo === 'paciente') {
    //fetchPublicoAlvo();
  }
});

const onSubmit = async (tipo) => {
  console.log(tipo)
  
  try {
    if (tipo === "paciente") {
      const res = await authStore.registerPaciente(formPaciente.value);
      console.log(res)
      

      $q.notify({
          type: 'positive',
          message: `usuário cadastrado com sucesso`,
        });
  
    }
    router.push('/login');
    if (tipo === "profissional") {
      await authStore.registerProfissional(formPaciente.value);
    }
    router.push('/login');
  } catch (error) {
    $q.notify({
            type: 'negative',
            message: `Falha ao cadastrar usuário`,
          });
  }
};

const onCancel = () => {
  router.back();
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

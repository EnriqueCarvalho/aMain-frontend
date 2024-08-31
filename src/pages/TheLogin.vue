<template>
  <main class="grid grid-col grid-cols-1 lg:grid-cols-5 w-full h-full">
    <div class="col-span-3 h-screen relative flex items-center justify-center overflow-hidden" v-if="$q.screen.gt.sm">
      <img src="/public/assets/login.png" alt="imagem do login" class="w-[85%] h-auto object-cover" />
    </div>
    <div class="flex flex-col col-span-2 items-center justify-center w-full gap-5 h-screen lg:h-full">
      <div class="flex flex-col items-center justify-center w-full gap-5 h-full div-login">
        <div class="bg-card-bg h-5/6 rounded-lg p-15 gap-4">
          <div class="flex flex-col justify-start w-full">
            <div class="flex justify-center w-full">
              <img src="/public/assets/logo_app.png" alt="logo da empresa" class="w-[250px] h-auto" />
            </div>
          </div>
          <div class="pt-10">
            <h1 class="text-xl text-center font-bold">{{ $t('login.title') }}</h1>
            <h1 class="text-lg text-center text-dark-light">{{ $t('login.subtitle') }}</h1>
          </div>
          <q-form @submit.prevent="onSubmit" class="flex flex-col gap-5 w-full p-3 lg:p-10 items-center justify-center">
            <GenericInput bg-color="white" color="primary" v-model:model-value="formData.email"
              :label="$t('login.email')" class="w-full" :rules="[val => !!val || $t('requiredField')]" type="email" />
            <GenericInput bg-color="white" color="primary" v-model:model-value="formData.password"
              :label="$t('login.password')" class="w-full" :rules="[val => !!val || $t('requiredField')]"
              type="password">
              <template v-slot:prepend>
                <q-icon name="lock" size="20px" />
              </template>
            </GenericInput>
            <div class="flex">
              <q-checkbox class="flex w-full justify-center text-slate-600" v-model="manterConectado"
                :label="$t('login.stayConnected')" />
              <h2 class="justify-center text-red font-semibold">{{ $t('login.forgetPassword') }}</h2>
            </div>
            <q-btn class="w-full rounded-lg" type="submit" color="primary" text-color="white"
              :label="$t('login.loginBtn')" size="lg" />
          </q-form>

          <div class="p-0 m-0 text-center">
            Não tem uma conta? <span @click="navigateToRegister()"
              class="cursor-pointer underline text-green-700 font-bold">Registre-se</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import GenericInput from 'src/components/global/GenericInput.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from 'src/stores/authstore';
import { login } from 'src/services/AuthService';
import { ILogin } from 'src/types/models/ILogin';
import { useRouter } from 'vue-router';
import { triggerNegative } from 'src/utils/NotificacaoUtil';
import { route } from 'quasar/wrappers';

defineOptions({ name: 'TheLogin' });

const { t } = useI18n();
const $router = useRouter();

const authstore = useAuthStore();

const isPwd = ref(true);
const manterConectado = ref<boolean>(false);
const formData = ref({
  email: '',
  password: ''
});

const navigateToRegister = () => {
  $router.push({ name: 'register' });
};


const onSubmit = async () => {

  try {
    const response = await login(formData.value!, manterConectado.value).catch((error) => {
      throw new Error(error.response?.data.error);
    });
    $router.push('/dashboard');
  } catch (error) {
    authstore.logout()
  };
};
</script>
<style lang="scss">
.div-login {
  background-color: #A8D5BA;
  background-image: linear-gradient(180deg, #c4f0d5, #A8D5BA);
}
</style>

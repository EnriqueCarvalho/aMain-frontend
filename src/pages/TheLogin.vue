<template>
  <div :class="!$q.screen.lt.sm ? 'col-4' : 'col-12'" class="min-h-full">
    <q-card
      class=""
      :style="
        !$q.screen.lt.sm
          ? 'height: 100vh; z-index: 2;'
          : 'height: 100%; z-index: 2;'
      "
    >
      <q-card-section class="flex flex-col justify-between min-h-full px-0">
        <div class="flex flex-col gap-4 mt-4 px-10 items-center">
          <img alt="Logomarca" style="height: 80px; width: 240px" />
          <q-form
            class="flex flex-col form no-wrap pt-8 gap-4 w-full"
            @submit="login"
          >
            <q-input
              dense
              filled
              square
              :bg-color="$q.dark.isActive ? 'black' : 'white-1'"
              label="Login"
              data-cy="main-login-login"
              v-model="usuarioLogin.login"
              type="text"
              placeholder="Insira seu login"
              lazy-rules
              :rules="[(val: any) => !!val || 'Insira um login']"
            >
            </q-input>
            <q-input
              dense
              filled
              square
              :bg-color="$q.dark.isActive ? 'black' : 'white-1'"
              label="Senha"
              data-cy="main-login-senha"
              v-model="usuarioLogin.senha"
              :type="esconderSenha ? 'password' : 'text'"
              placeholder="Insira sua senha"
              lazy-rules
              :rules="[(val: any) => !!val || 'Insira uma senha']"
            >
              <template v-slot:append>
                <q-icon
                  :name="esconderSenha ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="esconderSenha = !esconderSenha"
                />
              </template>
            </q-input>
            <q-checkbox
              v-model="manterConectado"
              label="Matenha-me conectado"
            ></q-checkbox>
            <div class="column items-end">
              <a class="esqueci" href="#">Esqueci minha senha</a>
            </div>

            <div class="column items-center">
              <q-btn
                label="Entrar"
                type="submit"
                color="primary"
                style="width: 100%"
                class="q-mt-md"
                aria-label="Botão de Entrar"
              />
            </div>
          </q-form>
        </div>

        <div
          class="flex flex-col items-center border-t border-gray-300 w-full text-white text-center"
        >
          FOOTER
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({ name: 'TheLogin' });

const $q = useQuasar();
const $router = useRouter();

const esconderSenha = ref(true);
const manterConectado = ref<boolean>(false);
const usuarioLogin = ref({
  login: '',
  senha: '',
});

const login = async () => {
  try {
    $router.push('/dashboard');
  } catch (err: unknown) {
    $q.notify({
      message: 'Usuário e/ou senha incorretos',
      color: 'negative',
    });
  }
};
</script>
<style lang="scss"></style>

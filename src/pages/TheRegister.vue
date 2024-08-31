<!-- HomePage.vue -->
<template>
  <main class="flex flex-center">
    <div class="flex justify-center items-center h-screen w-full">
      <q-btn label="Voltar" color="negative" @click="onCancel" class="flex absolute-top-left m-10" />
      <h1 class="text-3xl text-green-700 font-bold w-full text-center m-0 p-0">Quem é você?</h1>
      <div class="flex space-x-10">
        <div class="bg-card-bg text-gray-600 text-center p-10 rounded-lg cursor-pointer transition overflow-hidden"
          @click="navigateTo('paciente')">
          <img src="/src/assets/paciente_register.svg" style="width: 20em;" />
          <h1 class="text-bold text-4xl paciente-title">Paciente</h1>
        </div>
        <div class="bg-card-bg text-gray-600 text-center p-10 rounded-lg cursor-pointer transition"
          @click="navigateTo('profissional')">
          <img src="/src/assets/profissional_register.svg" style="width: 20em;" />
          <h1 class="text-bold text-4xl">Profissional</h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (role) => {
  router.push({ name: 'Cadastro', params: { tipo: role } });
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
.paciente-title{
  padding-top: 45px;
}
</style>

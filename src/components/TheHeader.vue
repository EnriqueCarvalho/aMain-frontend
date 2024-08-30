<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <!-- Botão de menu -->
      <q-btn dense flat round icon="menu" @click="handleClick" />

      <!-- Título e Avatar -->
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Title
      </q-toolbar-title>

      <!-- Seletor de Idioma -->
      <q-select
        outlined
        dense
        v-model="selectedLanguage"
        :options="languageOptions"
        @update:model-value="changeLanguage"
        class="q-ml-md"
      />

      <!-- Alternar Modo Dark -->
      <div class="toggle-container q-ml-md">
        <q-toggle
          v-model="isDarkMode"
          :label="isDarkMode ? 'Dark Mode' : 'Light Mode'"
          @update:model-value="toggleDarkMode"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  toggleLeftDrawer: () => void;
}>();

const handleClick = (evt: Event) => {
  evt.preventDefault();
  props.toggleLeftDrawer();
};

// Gerenciar o idioma selecionado
const { locale } = useI18n();
const selectedLanguage = ref(locale.value);
const languageOptions = [
  { label: 'English', value: 'en' },
  { label: 'Português', value: 'pt' },
  // Adicione mais opções de idioma conforme necessário
];

const changeLanguage = (lang: string) => {
  locale.value = lang;
};

// Gerenciar o modo escuro
const $q = useQuasar();
const isDarkMode = ref($q.dark.isActive);

const toggleDarkMode = () => {
  $q.dark.set(isDarkMode.value);
};

watch(
  () => $q.dark.isActive,
  (newValue) => {
    isDarkMode.value = newValue;
  }
);
</script>

<style scoped>
.toggle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px; /* Ajuste conforme necessário */
}
.q-toggle {
  font-size: 18px; /* Ajuste conforme necessário */
}
</style>

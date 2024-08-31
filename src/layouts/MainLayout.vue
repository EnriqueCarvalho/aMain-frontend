<template>
  <q-layout view="lHh LpR ffr">
    <TheHeader :toggleLeftDrawer="toggleLeftDrawer" title="Title" />

    <TheSidebar :modal-open="leftDrawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script setup lang="ts">
import TheHeader from 'src/components/TheHeader.vue';
import TheSidebar from 'src/components/TheSidebar.vue';
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

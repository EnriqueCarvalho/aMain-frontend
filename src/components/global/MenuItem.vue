<template>
  <q-item clickable v-ripple>
    <q-item-section avatar>
      <q-icon :name="icon" color="black" style="font-size: 22px"></q-icon>
    </q-item-section>
    <q-item-section>{{ label }}</q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  icon: string;
  label?: string;
}>();
</script>

<style scoped></style>

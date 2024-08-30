<template>
  <q-input
    v-bind="props"
    clearable
    outlined
    dense
    :dark="Dark.isActive"
    @update:modelValue="updateValue"
  >
    <template v-slot:prepend>
      <slot name="prepend">
        {{ props.prepend }}
      </slot>
    </template>
    <template v-slot:label>
      <slot name="label">
        {{ props.label }}
      </slot>
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { Dark, QInputProps } from 'quasar';

interface InputPrimary extends QInputProps {
  placeholder?: string;
  class?: string;
  label?: string;
  prepend?: string;
}

defineOptions({ name: 'InputPrimary' });
const props = defineProps<InputPrimary>();
const emit = defineEmits(['update:modelValue']);

const updateValue = (val: string | number | null) => {
  emit('update:modelValue', val);
};
</script>

<style lang="scss"></style>

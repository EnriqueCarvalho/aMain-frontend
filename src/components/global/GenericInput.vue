<template>
  <q-input v-bind="props" outlined :dark="Dark.isActive" @update:modelValue="updateValue"
    :type="isPwd && type.includes('password') ? 'password' : 'text'">
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
    <template v-slot:append>
      <slot name="append">
        {{ props.append }}
      </slot>
      <q-icon v-if="type?.includes('password')" :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
        @click="togglePasswordVisibility" />
    </template>
  </q-input>
</template>
<script setup lang="ts">
import { Dark, QInputProps } from 'quasar';
import { ref } from 'vue';

interface InputPrimary extends QInputProps {
  placeholder?: string;
  class?: string;
  label?: string;
  prepend?: string;
  append?: string;
}

const isPwd = ref<boolean>(true)

defineOptions({ name: 'InputPrimary' });
const props = defineProps<InputPrimary>();
const emit = defineEmits(['update:modelValue']);

const updateValue = (val: string | number | null) => {
  emit('update:modelValue', val);
};
const togglePasswordVisibility = () => {
  isPwd.value = !isPwd.value;
};
</script>

<style lang="scss"></style>

<template>
  <q-drawer
    :width="300"
    show-if-above
    v-model="drawerOpen"
    side="left"
    behavior="desktop"
    bordered
    class="space-y-12"
  >
    <div class="flex flex-row ml-10 space-y-2 mt-8">
      <div class="flex flex-row">
        <h1 class="text-5xl poppins font-bold">Sedap</h1>
        <h1 class="text-5xl font-bold text-green">.</h1>
      </div>
      <div class="flex flex-row">
        <h2 class="text-base font-bold text-gray-300">
          Modern Admin Dashboard
        </h2>
      </div>
    </div>

    <div class="flex flex-col justify-center max-w-64 pl-10">
      <q-list padding class="menu-list w-full space-y-2">
        <MenuItem
          icon="mdi-home-outline"
          label="Dashboard"
          :active="activeMenu === 'dashboard'"
          @click="setActiveMenu('dashboard')"
        />
        <MenuItem
          icon="mdi-format-list-bulleted-square"
          label="Order List"
          :active="activeMenu === 'order-list'"
          @click="setActiveMenu('order-list')"
        />
        <MenuItem
          icon="mdi-file-outline"
          label="Order Detail"
          :active="activeMenu === 'order-detail'"
          @click="setActiveMenu('order-detail')"
        />
        <MenuItem
          icon="mdi-account-multiple-outline"
          label="Customer"
          :active="activeMenu === 'customer'"
          @click="setActiveMenu('customer')"
        />
        <MenuItem
          icon="mdi-chat-outline"
          label="Chat"
          :active="activeMenu === 'chat'"
          @click="setActiveMenu('chat')"
        />
        <MenuItem
          icon="mdi-wallet-outline"
          label="Wallet"
          :active="activeMenu === 'wallet'"
          @click="setActiveMenu('wallet')"
        />
        <MenuItem icon="mdi-exit-to-app" label="Logout" />
      </q-list>
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import MenuItem from 'src/components/global/MenuItem.vue';

const props = defineProps<{
  modalOpen: boolean;
}>();

const drawerOpen = ref(props.modalOpen);

const flag = ref(false);
const filter = ref('');

const activeMenu = ref('dashboard'); // Inicialmente o item 'Dashboard' está ativo

const setActiveMenu = (menu: string) => {
  activeMenu.value = menu;
};

watch(
  () => props.modalOpen,
  (newVal) => {
    drawerOpen.value = newVal;
  }
);
</script>

<style lang="scss" scoped>
.poppins {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
}
.barlow {
  font-family: 'Barlow', sans-serif;
  font-style: normal;
}
.menu-list .q-item {
  border-radius: 8px 8px 8px 8px;
}
</style>

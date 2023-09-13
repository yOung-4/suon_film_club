<script>
import ToolBar from "src/components/ToolBar.vue";
import SideBar from "src/components/SideBar.vue";

export default {
  components: {
    ToolBar,
    SideBar,
  },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <ToolBar @changeSideBarDisplay="leftDrawerOpen = !leftDrawerOpen" />
    </q-header>
    <q-drawer overlay side="left" v-model="leftDrawerOpen" dark bordered>
      <SideBar />
    </q-drawer>
    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  emits: ["changeSideBarDisplay"],
  data() {
    return {
      tab: "home",
    };
  },
};
</script>

<template>
  <q-toolbar class="text-white bg-black shadow-5">
    <q-btn class="lt-md" icon="list" @click="$emit('changeSideBarDisplay')" />
    <q-avatar class="gt-sm" @click="$router.push({ name: 'main' })">
      <q-img src="film-broader.png" />
    </q-avatar>
    <q-toolbar-title>
      <div
        class="text-h5 text-bold gt-sm"
        @click="this.$router.push({ name: 'main' })"
      >
        SuOn Film Club
      </div>
      <div class="text-h5 text-bold lt-md">{{ tab }}</div>
    </q-toolbar-title>
    <q-tabs v-model="tab" stretch shrink class="gt-sm">
      <q-route-tab name="home" :to="{ name: 'main' }" label="home" />
      <q-route-tab
        class="hidden"
        name="about"
        :to="{ name: 'about' }"
        label="about"
      />
      <q-route-tab name="contact" :to="{ name: 'contact' }" label="contact" />
    </q-tabs>
  </q-toolbar>
</template>

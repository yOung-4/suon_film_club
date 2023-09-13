<script>
export default {
  data() {
    return {
      tab: "home",
    };
  },
};
</script>

<template>
  <div class="text-h5 text-bold text-center q-mt-md q-mb-md">
    Suon Film Club
  </div>
  <q-separator dark />
  <q-tabs v-model="tab" vertical>
    <q-route-tab name="home" :to="{ name: 'main' }" label="home" />
    <q-route-tab
      class="hidden"
      name="about"
      :to="{ name: 'about' }"
      label="about"
    />
    <q-route-tab name="contact" :to="{ name: 'contact' }" label="contact" />
  </q-tabs>
</template>

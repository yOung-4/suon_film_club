<template>
  <q-input
    v-if="!this.show"
    v-model="ibpm"
    filled
    label="BPM"
    style="margin: 2%"
  />
  <q-input
    v-if="!this.show"
    v-model="imaxnum"
    filled
    label="Max Number"
    style="margin: 2%"
  />
  <q-btn
    v-if="!this.show"
    label="start"
    style="margin: 2%"
    @click="this.show = true"
  />
  <FullScreen
    v-if="this.show"
    :bpm="ibpm"
    :maxnum="imaxnum"
    @click="this.show = false"
  />
</template>

<script>
import FullScreen from "components/Metronome/FullScreen.vue";

export default {
  components: {
    FullScreen,
  },
  data() {
    return {
      show: false,
      ibpm: 100,
      imaxnum: 4,
    };
  },
};
</script>

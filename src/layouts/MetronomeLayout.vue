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
    class="bg-primary text-white"
    style="margin: 2%"
    @click="this.show = true"
  />
  <q-btn
    v-if="!this.show"
    label="clear count"
    style="margin: 2%"
    @click="count = 1"
  />
  <FullScreen
    v-if="this.show"
    :bpm="ibpm"
    :maxnum="imaxnum"
    :saveCount="count"
    @click="this.show = false"
    @saveCount="(saveCount) => (this.count = saveCount)"
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
      count: 1,
    };
  },
};
</script>

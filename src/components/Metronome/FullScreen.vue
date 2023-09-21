<script>
export default {
  data() {
    return {
      num: 1,
      count: this.saveCount,
    };
  },
  props: {
    bpm: Number,
    maxnum: Number,
    saveCount: Number,
  },
  mounted() {
    const interval = setInterval(() => {
      if (this.num > this.maxnum - 1) {
        this.num = 1;
        this.count++;
      } else {
        this.num++;
      }
    }, (60 / this.bpm) * 1000);
  },
  unmounted() {
    clearInterval(this.interval);
    this.$emit("saveCount", this.count);
  },
};
</script>

<template>
  <div class="bg-black fullscreen row">
    <div class="text-white text-left" style="font-size: 1500%; margin-left: 5%">
      {{ count }}
    </div>
    <q-space />
    <div class="text-red text-center fixed-center" style="font-size: 5800%">
      {{ num }}
    </div>
    <q-space />
  </div>
</template>

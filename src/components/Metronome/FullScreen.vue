<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  props: ["bpm", "maxnum"],
  mounted() {
    const interval = setInterval(() => {
      if (this.num > this.maxnum - 1) {
        this.num = 1;
      } else {
        this.num++;
      }
    }, (60 / this.bpm) * 1000);
  },
  unmounted() {
    clearInterval(this.interval);
  },
};
</script>

<template>
  <div class="bg-black fullscreen">
    <div class="text-white text-center" style="font-size: 5800%">
      {{ num }}
    </div>
  </div>
</template>

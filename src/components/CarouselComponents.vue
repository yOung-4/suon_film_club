<script>
export default {
  data() {
    return {
      slide: "one",
    };
  },
};
</script>

<template>
  <q-carousel
    v-model="slide"
    transition-prev="jump-right"
    transition-next="jump-left"
    animated
    infinite
    swipeable
    arrows
    navigation
    dark
    height="500px"
  >
    <q-carousel-slide
      name="one"
      style="background-image: url('src/assets/camera-3244872.jpg')"
    >
      <div class="q-ml-xl" style="margin-top: 7%; margin-left: 5%">
        <div class="text-h2">get</div>
        <div class="text-h1">MORE</div>
        <div class="text-h3">than just watching a film</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="two">
      <div>slide 2</div>
    </q-carousel-slide>
  </q-carousel>
</template>

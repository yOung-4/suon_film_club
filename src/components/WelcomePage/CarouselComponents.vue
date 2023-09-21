<script>
export default {
  data() {
    return {
      slide: "three",
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
    :autoplay="true"
    swipeable
    arrows
    navigation
    dark
    height="400px"
  >
    <q-carousel-slide
      name="one"
      img-src="https://r2.suon-film-club.com/camera-3244872.jpg"
    >
      <div style="margin-top: 7%; margin-left: 5%">
        <div class="text-h2">get</div>
        <div class="text-h1 text-bold">MORE</div>
        <div class="text-h3">than just watching a film</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      name="two"
      img-src="https://r2.suon-film-club.com/backgroung2.jpg"
    >
      <div class="row" style="margin-left: 5%">
        <div style="margin-top: 2.5%">
          <div class="text-h4">to tell</div>
          <div class="text-h3 text-bold">SOMETHING</div>
          <div class="text-h4">that</div>
          <div class="text-h4">themselves will</div>
          <div class="text-h2 text-bold">NEVER</div>
          <div class="text-h3">KNOW</div>
        </div>
        <q-separator
          dark
          size="2px"
          color="white"
          vertical
          style="margin-right: 0%; margin-left: 2%; margin-top: 2.5%"
        />
        <div style="margin-top: 2.5%; margin-left: 1%">
          <div class="text-h4">to show</div>
          <div class="text-h3 text-bold">SOMETHING</div>
          <div class="text-h4">that</div>
          <div class="text-h4">themselves will</div>
          <div class="text-h2 text-bold">NEVER</div>
          <div class="text-h3">SEE</div>
        </div>
        <q-space />
        <div style="margin-top: 7%; margin-right: 10%">
          <div class="text-h1" style="margin-bottom: 1%">WHY US?</div>
          <q-separator dark size="5px" color="white" />
          <div class="text-h3">Join Us...</div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      name="three"
      img-src="https://r2.suon-film-club.com/background3.jpg"
      @click="this.$router.push({ name: 'news' })"
    >
      <div class="text-center text-h1 text-bold" style="margin-top: 5%">
        Play Next
      </div>
      <q-separator
        dark
        size="2px"
        color="white"
        style="margin-left: 10%; margin-right: 10%; margin-top: 1.5%"
      />
      <div class="text-center text-h3 text-bold" style="margin-top: 1%">
        Yi Yi
      </div>
      <div class="text-center text-h4" style="margin-top: 0.5%">
        time is not decided yet...
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

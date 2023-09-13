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
  <div>
    <q-card class="bg-black shadow-5" style="margin: 3%; margin-top: 5%">
      <q-card-section horizontal>
        <q-img
          src="film.png"
          width="20%"
          height="20%"
          class="shadow-10"
          style="margin-top: 3%; margin-left: 2%"
        ></q-img>
        <div style="margin-top: 2%; margin-left: 5%">
          <div class="text-h4 text-bold text-white">SuOn</div>
          <div class="text-h3 text-bold text-white">Film Club</div>
        </div>
      </q-card-section>
    </q-card>
    <q-carousel
      v-model="slide"
      transition-prev="slide-down"
      transition-next="slide-up"
      animated
      infinite
      :autoplay="true"
      swipeable
      navigation
      height="250px"
      vertical
      class="shadow-5"
      style="margin: 3%"
    >
      <q-carousel-slide
        name="one"
        img-src="https://r2.suon-film-club.com/backgroung2.jpg"
      >
        <div style="margin-top: 15%">
          <div class="text-h5 text-white text-bold">get</div>
          <div class="text-h3 text-white text-bold">MORE</div>
          <div class="text-h5 text-white text-bold">
            than just watching a film
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="two"
        img-src="https://r2.suon-film-club.com/backgroung2.jpg"
      >
        <div style="margin-top: 5%">
          <div class="text-h5 text-white text-bold">to tell</div>
          <div class="text-h4 text-white text-bold">SOMETHING</div>
          <div class="text-h5 text-white text-bold">that themselves will</div>
          <div class="text-h3 text-white text-bold">NEVER</div>
          <div class="text-h5 text-white text-bold">KNOW</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="three"
        img-src="https://r2.suon-film-club.com/backgroung2.jpg"
      >
        <div style="margin-top: 5%">
          <div class="text-h5 text-white text-bold">to show</div>
          <div class="text-h4 text-white text-bold">SOMETHING</div>
          <div class="text-h5 text-white text-bold">that themselves will</div>
          <div class="text-h3 text-white text-bold">NEVER</div>
          <div class="text-h5 text-white text-bold">SEE</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <q-card class="bg-primary shadow-5" style="margin: 3%">
      <q-card-section>
        <div class="text-h4 text-bold text-white" style="margin-top: 3%">
          Keywords of Us
        </div>
      </q-card-section>
      <q-separator
        color="white"
        style="margin-top: 2%; margin-right: 15%; margin-left: 3%"
      />
      <q-card-section>
        <div class="text-h6 text-white">- Inspire Creativity</div>
        <div class="text-h6 text-white">- "Extend" Life</div>
        <div class="text-h6 text-white">- Create Free Will</div>
      </q-card-section>
    </q-card>
    <q-card class="bg-secondary shadow-5" style="margin: 3%">
      <q-card-section>
        <div>
          <div class="text-h4 text-white text-center">Join Us Now</div>
          <q-separator
            color="white"
            style="margin-top: 2%; margin-right: 3%; margin-left: 3%"
          />
          <div class="text-h5 text-white text-center">13th Sept 3:00pm</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

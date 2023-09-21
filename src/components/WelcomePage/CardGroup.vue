<script>
export default {
  data() {
    return {
      slide: "two",
    };
  },
};
</script>

<template>
  <div class="row" style="margin-top: 6%">
    <q-carousel
      v-model="this.slide"
      :padding="0"
      height="30vh"
      animated
      transition-duration="600"
      transition-prev="slide-down"
      transition-next="slide-up"
      style="width: 25%"
    >
      <q-carousel-slide name="one" style="margin: 2%">
        <div class="text-h1 text-right">Keyword</div>
        <div class="text-h2 text-right">of</div>
        <div class="text-h1 text-right">Us</div>
      </q-carousel-slide>
      <q-carousel-slide name="two" style="margin-top: 2%">
        <div class="text-h3 text-right text-bold">Creativity</div>
        <div class="text-h5 text-right">is the fountainhead of</div>
        <div class="text-h4 text-right text-bold">enthusiasm</div>
        <div class="text-h5 text-right">help us to confront the</div>
        <div class="text-h4 text-right text-bold">absurdity and nihility</div>
        <div class="text-h5 text-right">of life</div>
      </q-carousel-slide>
      <q-carousel-slide name="three" style="margin-top: 10%">
        <div class="text-h5 text-right">Since the invention of film,</div>
        <div class="text-h5 text-right">humans' life have been extended to</div>
        <div class="text-h3 text-right text-bold">three times.</div>
        <div class="text-h5 text-right">— Edward Yang</div>
      </q-carousel-slide>
      <q-carousel-slide name="four" style="margin-top: 10%">
        <div class="text-h5 text-right">Even though shackles in the</div>
        <div class="text-h4 text-right text-italic">reality</div>
        <div class="text-h5 text-right">can't be broke,</div>
        <div class="text-h5 text-right">
          you'll always own the free will in the
        </div>
        <div class="text-h3 text-right text-bold">film</div>
      </q-carousel-slide>
    </q-carousel>
    <q-separator vertical color="black" size="2px" />
    <div style="width: 15%; margin: 2%">
      <q-btn
        label="Inspire Creativity"
        no-caps
        no-wrap
        rounded
        dense
        unelevated
        class="text-h4 text-left"
        style="margin-bottom: 2%"
        @click="this.slide = 'two'"
        @mouseout="this.slide = 'one'"
      />
      <q-btn
        label='"Extend" Life'
        no-caps
        no-wrap
        rounded
        dense
        unelevated
        class="text-h4 text-left"
        style="margin-bottom: 2%"
        @click="this.slide = 'three'"
        @mouseout="vTouchSwipe.slide = 'one'"
      />
      <q-btn
        label="Create Free Will"
        no-caps
        no-wrap
        rounded
        dense
        unelevated
        class="text-h4 text-left"
        @click="this.slide = 'four'"
        @mouseout="this.slide = 'one'"
      />
    </div>
    <q-space />
    <q-btn
      unelevated
      rounded
      no-caps
      dense
      style="margin-right: 3%; width: 40%"
      @click="this.$router.push({ name: 'news' })"
    >
      <div style="width: 100%">
        <div class="text-h1 text-left">PLAY NEXT:</div>
        <q-separator
          color="black"
          size="2px"
          style="margin-top: 0%; margin-right: 15%"
        />
        <div class="text-h1 text-bold text-left">Yi Yi</div>
      </div>
    </q-btn>
  </div>
</template>

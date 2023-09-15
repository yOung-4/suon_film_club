<script>
export default {
  data() {
    return {
      showDescription: false,
    };
  },
  methods: {
    changeShowDescription() {
      this.showDescription = !this.showDescription;
    },
  },
};
</script>

<template>
  <div class="row" style="margin-top: 6%">
    <div style="margin-left: 3%">
      <div class="text-h1 text-right" style="margin-bottom: 2%">Keyword</div>
      <div class="text-h2 text-right" style="margin-bottom: 2%">of</div>
      <div class="text-h1 text-right">Us</div>
    </div>
    <q-separator
      vertical
      color="black"
      size="2px"
      style="margin-left: 2%; margin-right: 2%"
    />
    <div style="margin-top: 2%">
      <div class="text-h4 text-left" style="margin-bottom: 15%">
        Inspire Creativity
      </div>
      <div class="text-h4 text-left" style="margin-bottom: 15%">
        "Extend" Lif
      </div>
      <div class="text-h4 text-left">Create Free Will</div>
    </div>
    <q-space />
    <div
      class="cursor-pointer"
      style="margin-right: 3%; width: 40%"
      @click="this.$router.push({ name: 'news' })"
    >
      <div class="text-h1" style="margin-left: 4%">News</div>
      <q-separator
        color="black"
        size="2px"
        style="margin-top: 0%; margin-right: 15%"
      />
      <div class="text-h3" style="margin-left: 5%; margin-top: 2%">
        Play Next:
      </div>
      <div class="text-h1 text-bold" style="margin-left: 5%">Yi Yi</div>
    </div>
  </div>
</template>

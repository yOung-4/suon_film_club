<script>
import CarouselComponent from "src/components/WelcomePage/CarouselComponents.vue";
import MobileIndex from "src/components/WelcomePage/MobileIndex.vue";
import CardGroup from "src/components/WelcomePage/CardGroup.vue";

export default {
  components: {
    CarouselComponent,
    MobileIndex,
    CardGroup,
  },
};
</script>

<template>
  <CarouselComponent v-if="$q.platform.is.desktop" />
  <CardGroup v-if="$q.platform.is.desktop" />
  <MobileIndex v-if="$q.platform.is.mobile" />
</template>

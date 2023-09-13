<script>
import CarouselComponent from "components/CarouselComponents.vue";
import MobileIndex from "src/components/MobileIndex.vue";
import CardGroup from "src/components/CardGroup.vue";

export default {
  components: {
    CarouselComponent,
    MobileIndex,
    CardGroup,
  },
};
</script>

<template>
  <CarouselComponent class="gt-sm" />
  <CardGroup class="gt-sm" />
  <MobileIndex class="lt-md" />
</template>

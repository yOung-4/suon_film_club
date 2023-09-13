<script>
import DesktopContact from "src/components/DesktopContact.vue";
import MobileContact from "src/components/MobileContact.vue";

export default {
  components: {
    DesktopContact,
    MobileContact,
  },
};
</script>

<template>
  <DesktopContact class="gt-sm" />
  <MobileContact class="lt-md" />
</template>

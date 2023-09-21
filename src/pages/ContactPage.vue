<script>
import DesktopContact from "src/components/ContactPage/DesktopContact.vue";
import MobileContact from "src/components/ContactPage/MobileContact.vue";

export default {
  components: {
    DesktopContact,
    MobileContact,
  },
};
</script>

<template>
  <DesktopContact v-if="$q.platform.is.desktop" />
  <MobileContact v-if="$q.platform.is.mobile" />
</template>

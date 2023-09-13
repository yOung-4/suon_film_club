<script>
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();

    return {
      showNotif() {
        $q.notify({
          message: "copied to clipboard",
          type: "positive",
          position: "top",
          icon: "info",
          timeout: "500",
        });
      },
    };
  },
};
</script>
<template>
  <div class="text-h6 text-white cursor-pointer" @click="showNotif">
    <slot></slot>
  </div>
</template>

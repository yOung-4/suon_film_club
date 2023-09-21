<script>
import EmailAddress from "./EmailAddress.vue";
export default {
  components: {
    EmailAddress,
  },
  methods: {
    writeToClipboard(address) {
      navigator.clipboard.writeText(address);
    },
    retoute_to_outer_URL(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<template>
  <div style="margin-left: 2%; margin: 3%">
    <div class="text-primary text-h3 text-boldr" style="margin-top: 25%">
      Contact Us~
    </div>
    <q-card class="bg-light-blue" style="margin-top: 5%">
      <div class="row" style="margin-left: 2%">
        <q-icon
          name="email"
          color="white"
          size="30px"
          left
          style="margin-top: 2%"
        />
        <div class="text text-h5 text-white text-bold" style="margin-top: 2%">
          Email
        </div>
      </div>

      <div class="text text-h6 text-bold text-white" style="margin-left: 2%">
        For general purpose:
      </div>
      <EmailAddress
        style="margin-left: 2%; margin: 3%"
        @click="writeToClipboard('contact@suon-film-club.com')"
        >contact@suon-film-club.com</EmailAddress
      >
      <div class="text text-h6 text-bold text-white" style="margin-left: 2%">
        For technical support:
      </div>
      <EmailAddress
        style="margin-left: 2%; margin: 3%"
        @click="writeToClipboard('young@young-4.com')"
        >young@young-4.com</EmailAddress
      >
    </q-card>
    <q-card class="bg-light-blue" style="margin-top: 5%">
      <div class="row" style="margin-left: 2%">
        <q-icon
          name="discord"
          color="white"
          size="30px"
          left
          style="margin-top: 2%"
        />
        <div class="text-h5 text-white" style="margin-top: 2%">Discord</div>
      </div>
      <div class="text-white text-h6" style="margin-left: 2%">
        https://discord.gg/NwHzdgGb
      </div>
    </q-card>
    <q-card class="bg-light-blue" style="margin-top: 5%">
      <div class="row" style="margin-left: 2%">
        <q-icon
          name="code"
          color="white"
          size="30px"
          left
          style="margin-top: 2%"
        />
        <div class="text text-h4 text-white" style="margin-top: 2%">
          Contribute
        </div>
        <div
          class="text-h6 text-white cursor-pointer"
          style="text-decoration: underline"
          @click="
            retoute_to_outer_URL('https://github.com/yOung-4/suon_film_club')
          "
        >
          yOung-4/suon_film_club
        </div>
      </div>
    </q-card>
  </div>
</template>

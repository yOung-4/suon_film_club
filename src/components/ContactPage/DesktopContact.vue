<script>
import EmailAddress from "src/components/ContactPage/EmailAddress.vue";
import ParallaxCompoents from "src/components/ContactPage/ParallaxCompoents.vue";

export default {
  components: {
    EmailAddress,
    ParallaxCompoents,
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
  <div>
    <ParallaxCompoents>
      <div
        class="text-h1 text-center"
        style="margin-top: 5%; margin-bottom: 1%"
      >
        Contact Us~
      </div>
    </ParallaxCompoents>
    <q-separator color="grey" />
    <div class="row" style="margin-left: 5%; margin-top: 5%">
      <q-card class="bg-primary shadow-5" style="width: 25%">
        <q-card-section horizontal style="margin-bottom: 3%">
          <q-icon
            name="email"
            color="white"
            size="55px"
            left
            right
            style="margin-top: 1%"
          />
          <div class="text-white text-h3" style="margin-top: 2%">Email</div>
        </q-card-section>
        <q-separator color="white" style="margin-right: 25%; margin-left: 3%" />
        <q-card-section>
          <div class="text-white text-h5 text-bold">For general purpose:</div>
          <EmailAddress @click="writeToClipboard('contact@suon-film-club.com')"
            >contact@suon-film-club.com</EmailAddress
          >
          <div class="text-white text-h5 text-bold">For technical support:</div>
          <EmailAddress @click="writeToClipboard('young@young-4.com')"
            >young@young-4.com</EmailAddress
          >
        </q-card-section>
      </q-card>
      <q-card class="bg-primary shadow-5" style="width: 25%; margin-left: 10%">
        <q-card-section horizontal style="margin-bottom: 3%">
          <q-icon
            name="discord"
            color="white"
            size="55px"
            left
            right
            style="margin-top: 1%"
          />
          <div class="text-white text-h3" style="margin-top: 2%">Discord</div>
        </q-card-section>
        <q-separator color="white" style="margin-right: 25%; margin-left: 3%" />
        <q-card-section>
          <div class="text-white text-h5 text-bold">For general purpose:</div>
          <EmailAddress @click="writeToClipboard('contact@suon-film-club.com')"
            >contact@suon-film-club.com</EmailAddress
          >
        </q-card-section>
      </q-card>
      <q-card class="bg-primary shadow-5" style="width: 25%; margin-left: 10%">
        <q-card-section horizontal style="margin-bottom: 3%">
          <q-icon
            name="code"
            color="white"
            size="55px"
            left
            right
            style="margin-top: 1%"
          />
          <div class="text-white text-h3" style="margin-top: 2%">
            Contribute
          </div>
        </q-card-section>
        <q-separator color="white" style="margin-right: 25%; margin-left: 3%" />
        <q-card-section>
          <div class="text-white text-h5 text-bold">
            fork our repo on Github:
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
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<template>
  <div class="gallery">

    <!--	PORTFOLIO  -->

    <v-card v-if="onoff4 == 4">
      <v-card-row class="light-blue darken-4" light>
        <v-card-title>
          <span class="white--text">Dental Clinic</span>
          <v-spacer></v-spacer>
          <v-menu id="space" bottom left origin="top right" transition="v-scale-transition">
            <v-btn icon="icon" slot="activator" class="white--text">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-item>
                <v-list-tile>
                  <v-list-tile-title v-on:click="remove_card">Remove Card</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
              <v-list-item>
                <v-list-tile>
                  <v-list-tile-title>Send Feedback</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
      </v-card-row>
      <v-card-row class="gallery__image" img="http://davedeveloper.eu/img/medical.JPG" height="350px"></v-card-row>
      <v-card-text class="light-blue darken-4 white--text">
        <div v-text="card_text"></div>
        <div v-text="divider"></div>
        <div v-text="technologies"></div>
      </v-card-text>
      <v-card-row actions class="light-blue darken-1 mt-0">
        <a href="http://dentalclinic.davedeveloper.eu" target="_blank">
          <v-btn flat class="white--text">Try DEMO</v-btn>
        </a>
        <v-spacer></v-spacer>
        <a href="https://github.com/michu1234/medical" target="_blank">
          <v-btn icon>
            <v-icon class="white--text">explore</v-icon>
            <i class="icon-github-circled"></i>
          </v-btn>
        </a>
      </v-card-row>
    </v-card>

  </div>
</template>

<!-- SCRIPT -->

<script>
  export default {
    props: ['onoff4'],
    data() {
      return {
        card_text: 'Responsywna strona kliniki dentystycznej (strona główna + kilka podstron). Utrzymana w stylu wordpressowych szablonów BeTheme.',
        divider: '-----------------------',
        technologies: 'Technologie: HTML5, CSS3, jQuery'
      }
    },
    methods: {
      remove_card: function () {
        this.$emit('nulled', '0');
      }
    }
  }

</script>

<!-- CSS -->

<style scoped>
  .gallery {
    position: absolute;
    top: 10vh;
    right: 6vw;
    max-width: 50vw;
    max-height: 100vh;
    box-shadow: 0 0 20px black;
  }

  .gallery__image {
    filter: grayscale(100%);
    transition: all .3s;
  }

  .gallery__image:hover {
    filter: grayscale(0);
  }

  i {
    color: #fff;
    font-size: 21px;
  }

  a {
    text-decoration: none;
  }

</style>


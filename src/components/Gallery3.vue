<template>
  <div class="gallery">

    <!--	PORTFOLIO  -->

    <v-card v-if="onoff3 == 3">
      <v-card-row class="pink darken-4" light>
        <v-card-title>
          <span class="white--text">Web Developer Portfolio</span>
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
      <v-card-row class="gallery__image" img="http://davedeveloper.eu/img/portfolio.JPG" height="350px"></v-card-row>
      <v-card-text class="pink darken-4 white--text">
        <div v-text="card_text"></div>
        <div v-text="divider"></div>
        <div v-text="technologies"></div>
      </v-card-text>
      <v-card-row actions class="pink darken-3 mt-0">
        <a href="http://dev.davedeveloper.eu" target="_blank">
          <v-btn flat class="white--text">
            <v-icon>input</v-icon>&nbsp; DEMO</v-btn>
        </a>
        <v-spacer></v-spacer>
        <a href="https://github.com/michu1234/port" target="_blank">
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
    props: ['onoff3'],
    data() {
      return {
        card_text: 'Portfolio web developera, zawierające listę projektów oraz dane kontaktowe. W tle strony umieszczono dwa rodzaje animacji wykonanych przy pomocy biblioteki P5.js.',
        divider: '-----------------------',
        technologies: 'Technologie: HTML5, CSS3, jQuery, P5.js'
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


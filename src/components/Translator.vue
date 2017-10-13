<template>
  <v-flex v-if="show2 === 1" class="translator container" xs12 sm6 offset-sm3>
    <v-card>
      <v-toolbar class="cyan" light>
        <v-toolbar-title>
          <v-icon>translate &nbsp; </v-icon>Simple Translator
          <small>| powered by Yandex API</small>
        </v-toolbar-title>
        <v-menu id="marriot" bottom left origin="top right">
          <v-btn icon="icon" slot="activator" class="white--text">
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-item>
              <v-list-tile>
                <v-list-tile-title v-on:click="remove_card">Remove Card</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
      <div class="container">
        <v-flex xs8>
          <v-subheader>Translator with language auto-detection</v-subheader>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs2>
            <v-select v-bind:items="language_from" v-model="e1" label="Translate to:" class="input-group--focused" item-value="text"></v-select>
          </v-flex>
          <v-flex xs8>
            <v-text-field v-model="word_to_translate" name="input-1" label="Enter text to translate..." dark></v-text-field>
          </v-flex>
        </v-layout>
        <h5>
          <strong>Original text:</strong> {{word_to_translate}}...</h5>
        <word_translated :word_translated2.sync="word_translated"></word_translated>
        <v-layout class="justify-end">
          <v-btn @click.native="grab_data(word_to_translate)" dark>Translate</v-btn>
        </v-layout>
      </div>
    </v-card>
  </v-flex>
</template>
<!-- SCRIPT -->
<script>
  export default {
    props: ['show2'],
    data() {
      return {
        language_f: "",
        word_to_translate: "",
        word_translated: "",
        e1: null,
        e2: null,
        language_from: [{
          text: 'pl'
        }, {
          text: 'en'
        }, {
          text: 'de'
        }, {
          text: 'es'
        }, {
          text: 'it'
        }]
      }
    },
    methods: {
      grab_data: function (word) {
        fetch(
          'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170706T220630Z.b3c8c9b12a1d0bb3.9dd94f7897ac1d37e6a1cf4902631a54ae7251b3&lang=' +
          this.e1 + '&text=' + word, {
            method: 'get'
          }).then(function (response) {
          return response.json()
        }).then((data) => {
          this.word_translated = data.text["0"];
          console.log(this.word_translated);
        }).catch(function () {
          alert("error");
        });
      },
      remove_card: function () {
        this.$emit('nulled', '0');
      }
    }
  }

</script>
<!-- CSS -->
<style scoped>
  .translator {
    margin-top: -200px;
    margin-right: 30px;
  }

</style>


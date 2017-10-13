<template>
  <div class="sourceselection">
    <h5>Hot News Aggregator! </h5>
    <v-subheader>Powerd by Vue.js</v-subheader>
    <div class="container">
      <v-flex xs6> </v-flex>
      <v-flex xs6>
        <v-select v-bind:items="sources" v-model="source" label="Choose news source:" class="input-group--focused" item-value="text"></v-select>
      </v-flex>
      <a v-if="source" v-on:click="sourceChanged" class="btn btn-primary" target="_blank">Check News from&nbsp;&nbsp;
        <mark>&nbsp;&nbsp;{{source}}&nbsp;&nbsp;</mark>
      </a>
    </div>
  </div>
  </div>
  </div>
</template>


<script>
  export default {
    name: 'News_source',
    data() {
      return {
        arrayOfSources: [],
        sources: [],
        source: ''
      }
    },
    created: function () {
      fetch('https://newsapi.org/v1/sources?language=en', {
        method: 'get'
      }).then(function (response) {
        return response.json()
      }).then((data) => {
        this.arrayOfSources = data.sources;
        for (let i = 0; i < this.arrayOfSources.length; i++) {
          this.sources.push({
            text: this.arrayOfSources[i].id
          })
        }
      }).catch(function () {
        alert("error");
      });
    },
    methods: {
      sourceChanged: function (e) {
        this.$emit('sourceChanged', this.source);
      }
    }
  }

</script>

<style scoped>
  h5 {
    margin-bottom: -10px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  mark {
    background: #fff;
    border-radius: 7px;
  }

</style>

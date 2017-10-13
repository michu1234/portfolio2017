<template>
  <v-flex xs12 sm6 offset-sm3>
    <h5>
      <strong>Translated: </strong>
      <v-alert primary value="true">
        {{word_translated2}}
      </v-alert>
    </h5>
  </v-flex>
</template>
<!-- SCRIPT -->
<script>
  export default {
    props: ['word_translated2'],
  }

</script>
<!-- CSS -->
<style scoped>


</style>


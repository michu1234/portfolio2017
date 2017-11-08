<template>
 
</template>

<!-- SCRIPT -->
 
<script>
  export default {
    data() {
      return {
         loaded: true,
      }
    },
    created: function () {
      this.loaded = true;
      setTimeout(() => this.loaded = false, 5000)
    }
  }

</script>

<!-- CSS -->

<style scoped>
 

</style>

<template>
<div v-if="about_me_on == 1" class="contact-field">
	<v-card horizontal>
		<v-card-row img="http://davedeveloper.eu/img/laptop.jpg" height="130px"></v-card-row>
		<v-card-column>
			<v-card-row height="75px" class="blue-grey darken-4 white--text">
				<v-card-text>
					<strong>I am a web developer from Warsaw, Poland and currently living in Torun. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.</strong>

	</v-card-text>
	</v-card-row>
			<v-card-row actions class="blue-grey darken-4indigo">
				<strong>Torun, &nbsp;</strong>
				<div>Feb 23, 7:00pm &nbsp;</div>
				<v-btn flat class="white--text">
					<v-icon left light v-on:click="close_card">directions</v-icon>Close
	</v-btn>








	</v-card-row>
	</v-card-column>
	</v-card>
	</div>
</template>
<!-- SCRIPT -->
<script>
	export default {
		props: ['about_me_on'],
		data() {
			return {

			}
		},
		methods: {
			close_card: function() {
				this.$emit('nulled', '0');
			}
		}
	}
</script>
<!-- CSS -->
<style scoped>

</style>

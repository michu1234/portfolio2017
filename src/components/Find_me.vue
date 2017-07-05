<template>
<div v-if="onoff_find_me" class="find_me">
	<v-card >
		<v-card-row class="blue-grey darken-4">
			<v-card-title>
				<span class="white--text">Find Me</span>
				<v-spacer></v-spacer>
				<div>
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
							<v-list-item>
								<v-list-tile>
									<v-list-tile-title>Send Feedback</v-list-tile-title>
	</v-list-tile>
	</v-list-item>
	</v-list>
	</v-menu>
	</div>
	</v-card-title>
	</v-card-row>
		<v-card-text>
			<v-card-row>

				<v-icon class="mr-5" dark>phone_android</v-icon>
				<div>
					<div>Phone number:</div><strong>+48 534 931 482</strong>

	</div>
	</v-card-row>
	</v-card-text>
		<v-divider></v-divider>
		<div id="map">


			<gmap-map
								:center="center"
								:zoom="7"
								style="min-width: 100%; height: 400px"
								>
				<gmap-marker
										 :key="index"
										 v-for="(m, index) in markers"
										 :position="m.position"
										 :clickable="true"
										 :draggable="true"
										 @click="center=m.position"
										 ></gmap-marker>
	</gmap-map>



	</div>
		<v-card-row actions>

			<v-btn v-tooltip:left="{ html: 'davedeveloper@gmail.com' }" flat class="green--text darken-1">View Email</v-btn>
	</v-card-row>
	</v-card>
	</div>
</template>
<!-- SCRIPT -->
<script>

	export default {
		props: ['onoff_find_me'],
		data() {
			return {
				center: {lat: 53.0, lng: 19.0},
				markers: [{
					position: {lat: 53.02, lng: 18.61}
				}, {
					position: {lat: 52.19, lng: 20.99}
				}]
			}
		},
		methods: {
			remove_card: function() {
				this.$emit('nulled', '0');
			}
		}
	}
</script>
<!-- CSS -->
<style scoped>
	.find_me {
	 width: 70vw;
	 position: absolute;
	 right: 10px;
	 top: 60px;
	}
	#map {
		min-width: 100%;
		height: 400px;
	}


</style>

<template>
<div v-if="find_me_on" class="find_me">
	<v-card >
		<v-card-row class="blue-grey darken-4">
			<v-card-title>
				<span class="white--text">Marriot Rewards</span>
				<v-spacer></v-spacer>
				<div>
					<v-menu id="marriot" bottom left origin="top right">
						<v-btn icon="icon" slot="activator" class="white--text">
							<v-icon>more_vert</v-icon>
	</v-btn>
						<v-list>
							<v-list-item>
								<v-list-tile>
									<v-list-tile-title>Never show rewards</v-list-tile-title>
	</v-list-tile>
	</v-list-item>
							<v-list-item>
								<v-list-tile>
									<v-list-tile-title>Remove Card</v-list-tile-title>
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

				<v-icon class="mr-5" dark>card_membership</v-icon>
				<div>
					<div>Membership Number</div><strong>113241423</strong>

	</div>
				<iframe
								width="400"
								height="350"
								frameborder="0" style="border:0"
								src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDldz14Oyg-u4u46e_G8OWodsysE6YrdBI
										 &q=Space+Needle,Seattle+WA" allowfullscreen>
	</iframe>
	</v-card-row>
	</v-card-text>
		<v-divider></v-divider>
		<v-card-row actions>
			<v-btn flat class="green--text darken-1">View Email</v-btn>
	</v-card-row>
	</v-card>
	</div>
</template>
<!-- SCRIPT -->
<script>
	export default {
		data() {
			return {
				find_me_on: false,

			}
		}
	}
</script>
<!-- CSS -->
<style scoped>
	.find_me {
	 width: 70vw;
	 margin-left: auto;
	 margin-top: -200px;
	}

</style>

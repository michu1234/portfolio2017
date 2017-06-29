<template>
<div class="gallery">

	<!--	PORTFOLIO  -->

	<v-card v-if="onoff10 == 10">
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
								<v-list-tile-title v-on:click="testowa122">Remove Card</v-list-tile-title>
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
		<v-card-row class="gallery__image" img="http://davedeveloper.eu/img/blog-jason.jpg" height="350px"></v-card-row>
		<v-card-text class="pink darken-1 darken-4 white--text">
			<div v-text="card_text"></div>
	</v-card-text>
		<v-card-row actions class="pink darken-3darken-1 mt-0">
			<v-btn flat class="white--text">Try DEMO</v-btn>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon class="white--text">explore</v-icon>
				<i class="icon-github-circled"></i>
	</v-btn>
	</v-card-row>
	</v-card>

	</div>
</template>

<!-- SCRIPT -->

<script>
	export default {
		props: ['onoff10'],
		data () {
			return {
				card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
			}
		},
		methods: {
			testowa122: function() {
				this.onoff2 = 0;
			}
		}
	}
</script>

<!-- CSS -->

<style scoped>
	.gallery {
		position: absolute;
		top: 10vh;
		right: 2vw;
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
</style>

<template>
<div class="gallery">

	<!--	PORTFOLIO  -->

	<v-card v-if="onoff5 == 5">
		<v-card-row class="amber darken-3" light>
			<v-card-title>
				<span class="white--text">Sound Production ver. 1</span>
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
		<v-card-row class="gallery__image" img="http://davedeveloper.eu/img/music.jpg" height="350px"></v-card-row>
		<v-card-text class="amber darken-3 white--text">
			<div v-text="card_text"></div>
			<div v-text="divider"></div>
			<div v-text="technologies"></div>
	</v-card-text>
		<v-card-row actions class="amber lighten-1 mt-0">
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
		props: ['onoff5'],
		data () {
			return {
				card_text: 'Responsywna strona internetowa oparta na frameworku Bootstrap. Tematyczne dedykowana branży muzycznej. Zbudowana w dwóch wersjach kolorystycznych.',
				divider: '-----------------------',
				technologies: 'Technologie: HTML5, CSS3, jQuery, Bootstrap'
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

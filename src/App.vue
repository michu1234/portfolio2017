<template>
	<v-app v-on:click="about_me_onoff" id="example-2">
		<v-navigation-drawer temporary v-model="drawer" :mini-variant="mini" light>
			<v-list class="pa-0">
				<v-list-item v-if="mini">
					<v-list-tile @click.native.stop="mini = !mini">
						<v-list-tile-action>
							<v-icon light>chevron_right</v-icon>
						</v-list-tile-action>
					</v-list-tile>
				</v-list-item>
				<v-list-item>
					<v-list-tile avatar tag="div">
						<v-list-tile-avatar>
							<img src="http://davedeveloper.eu/img/profile-img222.png" /> </v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title v-if="not_on_firefox">Dawid Nawrocki</v-list-tile-title>
						</v-list-tile-content>
						<v-list-tile-action>
							<v-btn icon dark @click.native.stop="mini = !mini">
								<v-icon>chevron_left</v-icon>
							</v-btn>
						</v-list-tile-action>
					</v-list-tile>
				</v-list-item>
			</v-list>
			<v-card height="555px" class="grey lighten-4" id="navigation-1">
				<v-list dense>
					<template v-for="(item, i) in items">
							<v-layout row v-if="item.heading" align-center :key="i">
								<v-flex xs6>
									<v-subheader v-if="item.heading"> {{ item.heading }} </v-subheader>
								</v-flex>
								<v-flex xs6 class="text-xs-center"> </v-flex>
							</v-layout>
							<v-divider dark v-else-if="item.divider" class="my-4" :key="i"></v-divider>
							<v-list-item :key="i" v-else>
								<v-list-tile>
									<v-list-tile-action>
										<v-icon v-on:click="onoff_gallery">{{ item.icon }}</v-icon>
									</v-list-tile-action>
									<v-list-tile-content>
										<v-list-tile-title v-on:click="onoff_gallery22"> {{ item.text }} </v-list-tile-title>
									</v-list-tile-content>
								</v-list-tile>
							</v-list-item>
</template>
				</v-list>
			</v-card>
		</v-navigation-drawer>
		<v-toolbar v-on:click="onoff_contact_input" fixed class="grey darken-4" light>
			<v-toolbar-side-icon class="hidden-sm-and-down" light @click.native.stop.prevent="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title>DaveDeveloper.eu</v-toolbar-title>
			<v-toolbar-items v-on:click="onoff_find_me_card">
				<v-toolbar-item class="hidden-xs-only">About Me</v-toolbar-item>
				<v-toolbar-item class="hidden-xs-only">Find Me</v-toolbar-item>
				<v-menu origin="center center" transition="v-scale-transition" bottom>
					<v-btn class="hidden-xs-only" primary light slot="activator">Contact Me</v-btn>
				</v-menu>
				<v-menu offset-y left bottom origin="top right" transition="v-scale-transition">
					<v-btn icon light slot="activator">
						<v-icon class="hidden-xs-only">more_vert</v-icon>
					</v-btn>
					<v-list>
						<v-list-item v-for="task in tasks" :key="item">
							<v-list-tile>
								<v-list-tile-title v-text="task.title"></v-list-tile-title>
							</v-list-tile>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-toolbar-items>
		</v-toolbar>
		<main>
			<v-container v-on:mousemove="move_small_rhino" fluid>
				<div v-on:mousemove="move_rhino">
					<div v-if="onoff_clouds" class="clouds"></div>
					<img class="hidden-lg-and-up hidden-sm-and-down not_on_firefox" v-bind:style="{display: display_rihno, transform: transform_rhino, position: absolute2, bottom: small_rhino_b + 'px', left: small_rhino_l + 'px' }" src="http://davedeveloper.eu/img/adult.svg" alt="">
					<img class="hidden-lg-and-up hidden-xs-only not_on_firefox" v-bind:style="{display: display_rihno, position: absolute2, top: rhino_t + 'px', right: rhino_r + 'px'}" src="http://davedeveloper.eu/img/big-adult.svg" alt="">
					<div v-on:click="off_clouds" class="title hidden-xs-only">
						<v-btn outline class="indigo--text">Turn off clouds!</v-btn>
					</div>
					<router-view class="hello"></router-view>
					<to_do :onoff0="onoff_todo" v-on:nulled="update_gallery"></to_do>
					<gallery :onoff="onoff_gallery1" v-on:nulled="update_gallery"></gallery>
					<gallery2 :onoff2="onoff_gallery2" v-on:nulled="update_gallery"></gallery2>
					<gallery3 :onoff3="onoff_gallery3" v-on:nulled="update_gallery"></gallery3>
					<gallery4 :onoff4="onoff_gallery4" v-on:nulled="update_gallery"></gallery4>
					<gallery5 :onoff5="onoff_gallery5" v-on:nulled="update_gallery"></gallery5>
					<gallery6 :onoff6="onoff_gallery6" v-on:nulled="update_gallery"></gallery6>
					<gallery7 :onoff7="onoff_gallery7" v-on:nulled="update_gallery"></gallery7>
					<gallery8 :onoff8="onoff_gallery8" v-on:nulled="update_gallery"></gallery8>
					<gallery9 :onoff9="onoff_gallery9" v-on:nulled="update_gallery"></gallery9>
					<gallery10 :onoff10="onoff_gallery10" v-on:nulled="update_gallery"></gallery10>
					<gallery11 :onoff11="onoff_gallery11" v-on:nulled="update_gallery"></gallery11>
					<contact_field :onoff_contact="onoff_contact1" v-on:nulled="update_gallery"></contact_field>
					<find_me :onoff_find_me1="onoff_find_me" v-on:nulled="update_gallery"></find_me>
					<about_me :about_me_on="onoff_about_me" v-on:nulled="update_gallery"></about_me>
					<translator :show2="onoff_translator" v-on:nulled="update_gallery"></translator>
					<news :show_news="onoff_news" v-on:nulled="update_gallery"></news>
					<!--v-router-->
				</div>
			</v-container>
		</main>

<v-footer v-on:click="onoff_todo_card" class="pa-3 light-blue darken-4">
			<contact></contact>
			<v-btn class="hidden-sm-and-down"  primary fab small dark>
				<v-icon>done_all</v-icon>
			</v-btn>
			<v-btn class="hidden-sm-and-down"  primary fab small dark>
				<v-icon>translate</v-icon>
			</v-btn>
			<v-btn class="hidden-sm-and-down"  primary fab small dark>
				<v-icon>public</v-icon>
			</v-btn>
			<v-spacer></v-spacer>
			<div class="hidden-sm-and-down">
				<small>powered by Vue.js | Dawid Nawrocki © {{ new Date().getFullYear() }}</small>
			</div>
		</v-footer>
		</v-card>
	</v-app>
</template>

<!-- SCRIPT -->
<script>
	import Contact from './components/Contact.vue'
	export default {
		components: {
			'contact': Contact
		},
		data() {
			return {
				onoff_news: 0,
				onoff_translator: 0,
				e2: 1,
				display_rihno: "",
				transform_rhino: "scale(0.5)",
				absolute2: "absolute",
				rhino_r: -400,
				rhino_t: 0,
				small_rhino_l: -550,
				small_rhino_b: -200,
				onoff_about_me: 0,
				onoff_clouds: true,
				onoff_contact1: 0,
				onoff_find_me: 0,
				onoff_todo: 0,
				onoff_gallery1: 0,
				onoff_gallery2: 0,
				onoff_gallery3: 0,
				onoff_gallery4: 0,
				onoff_gallery5: 0,
				onoff_gallery6: 0,
				onoff_gallery7: 0,
				onoff_gallery8: 0,
				onoff_gallery9: 0,
				onoff_gallery10: 0,
				onoff_gallery11: 0,
				onoff_gallery12: 0,
				onoff_gallery13: 0,
				drawer: null,
				item: 0,
				mini: false,
				right: null,
				items: [{
					heading: 'Apps'
				}, {
					icon: 'lightbulb_outline',
					text: 'Informator'
				}, {
					icon: 'touch_app',
					text: 'ToDO'
				}, {
					divider: true
				}, {
					heading: 'Websites'
				}, {
					icon: 'account_box',
					text: 'Dev Portfolio'
				}, {
					icon: 'archive',
					text: 'Dental Clinic'
				}, {
					icon: 'music_video',
					text: 'Sound Production ver. 1'
				}, {
					icon: 'queue_music',
					text: 'Sound Production ver. 2'
				}, {
					divider: true
				}, {
					icon: 'chat_bubble',
					text: 'Economini'
				}, {
					icon: 'filter_vintage',
					text: 'Garden Portfolio'
				}, {
					icon: 'assessment',
					text: 'Marketing'
				}, {
					icon: 'play_circle_outline',
					text: 'Outdoor cinema'
				}, {
					icon: 'format_paint',
					text: 'Farba Śnieżka'
				}],
				mini: false,
				right: null,
				tasks: [{
					title: 'Send Feedback'
				}, {
					title: 'Request Help'
				}, {
					title: 'Contact Developer'
				}]
			}
		},
		methods: {
			onoff_gallery: function(e) {
				e.target.textContent == "lightbulb_outline" ? this.onoff_gallery1 = 1 : this.onoff_gallery1 = 0;
				e.target.textContent == "touch_app" ? this.onoff_gallery2 = 2 : this.onoff_gallery2 = 0;
				e.target.textContent == "account_box" ? this.onoff_gallery3 = 3 : this.onoff_gallery3 = 0;
				e.target.textContent == "archive" ? this.onoff_gallery4 = 4 : this.onoff_gallery4 = 0;
				e.target.textContent == "music_video" ? this.onoff_gallery5 = 5 : this.onoff_gallery5 = 0;
				e.target.textContent == "queue_music" ? this.onoff_gallery6 = 6 : this.onoff_gallery6 = 0;
				e.target.textContent == "chat_bubble" ? this.onoff_gallery7 = 7 : this.onoff_gallery7 = 0;
				e.target.textContent == "filter_vintage" ? this.onoff_gallery8 = 8 : this.onoff_gallery8 = 0;
				e.target.textContent == "assessment" ? this.onoff_gallery9 = 9 : this.onoff_gallery9 = 0;
				e.target.textContent == "play_circle_outline" ? this.onoff_gallery10 = 10 : this.onoff_gallery10 = 0;
				e.target.textContent == "format_paint" ? this.onoff_gallery11 = 11 : this.onoff_gallery11 = 0;
			},
			onoff_gallery22: function(e) {
				e.target.textContent == " Informator " ? this.onoff_gallery1 = 1 : this.onoff_gallery1 = 0;
				e.target.textContent == " ToDO " ? this.onoff_gallery2 = 2 : this.onoff_gallery2 = 0;
				e.target.textContent == " Dev Portfolio " ? this.onoff_gallery3 = 3 : this.onoff_gallery3 = 0;
				e.target.textContent == " Dental Clinic " ? this.onoff_gallery4 = 4 : this.onoff_gallery4 = 0;
				e.target.textContent == " Sound Production ver. 1 " ? this.onoff_gallery5 = 5 : this.onoff_gallery5 = 0;
				e.target.textContent == " Sound Production ver. 2 " ? this.onoff_gallery6 = 6 : this.onoff_gallery6 = 0;
				e.target.textContent == " Economini " ? this.onoff_gallery7 = 7 : this.onoff_gallery7 = 0;
				e.target.textContent == " Garden Portfolio " ? this.onoff_gallery8 = 8 : this.onoff_gallery8 = 0;
				e.target.textContent == " Marketing " ? this.onoff_gallery9 = 9 : this.onoff_gallery9 = 0;
				e.target.textContent == " Outdoor cinema " ? this.onoff_gallery10 = 10 : this.onoff_gallery10 = 0;
				e.target.textContent == " Farba Śnieżka " ? this.onoff_gallery11 = 11 : this.onoff_gallery11 = 0;
			},
			update_gallery: function() {
				this.onoff_gallery1 = 0;
				this.onoff_gallery2 = 0;
				this.onoff_gallery3 = 0;
				this.onoff_gallery4 = 0;
				this.onoff_gallery5 = 0;
				this.onoff_gallery6 = 0;
				this.onoff_gallery7 = 0;
				this.onoff_gallery8 = 0;
				this.onoff_gallery9 = 0;
				this.onoff_gallery10 = 0;
				this.onoff_gallery11 = 0;
				this.onoff_gallery12 = 0;
				this.onoff_gallery13 = 0;
				this.onoff_about_me = 0;
				this.onoff_contact1 = 0;
				this.onoff_find_me = 0;
				this.onoff_todo = 0;
				this.onoff_translator = 0;
				this.onoff_news = 0;
			},
			onoff_find_me_card: function(e) {
				e.target.textContent == "Find Me" ? this.onoff_find_me = 1 : this.onoff_find_me = 0;
			},
			onoff_todo_card: function(e) {
				e.target.textContent == "done_all" ? this.onoff_todo = 1 : this.onoff_todo = 0;
				e.target.textContent == "translate" ? this.onoff_translator = 1 : this.onoff_translator = 0;
				e.target.textContent == "public" ? this.onoff_news = 1 : this.onoff_news = 0;
			},
			hello_dialog: window.onload = function() {
				console.log(":-) HELLO EVERYBODY! :-)");
			},
			onoff_contact_input: function(e) {
				e.target.textContent == "Contact Me" ? this.onoff_contact1 = 1 : this.onoff_contact1 = 0;
			},
			off_clouds: function() {
				this.onoff_clouds = !this.onoff_clouds;
			},
			move_rhino: function(event) {
				let mouseX = event.screenX / 10;
				let mouseY = event.screenY / 10;
				setTimeout(() => {
					this.rhino_t = mouseY;
					this.rhino_r = -400 + mouseX;
				}, 150)
			},
			move_small_rhino: function(event) {
				let mouseX = event.screenX / 50;
				let mouseY = event.screenY / 10;
				setTimeout(() => {
					this.small_rhino_b = -200 + mouseY;
					this.small_rhino_l = -550 + mouseX;
				}, 150)
			},
			about_me_onoff: function(e) {
				e.target.textContent == "About Me" ? this.onoff_about_me = 1 : this.onoff_about_me = 0;
			}
		},
		computed: {
			not_on_firefox: function() {
				if (navigator.userAgent.indexOf("Chrome") === -1) {
					this.display_rihno = "none";
				}
			}
		}
	}
</script>

<!-- CSS -->
<style scoped>
	#example-2 {
		background: #235ba5;
		background-image: -moz-radial-gradient(center, ellipse cover, #235ba5 0%, #002872 100%);
		background-image: -webkit-gradient(radial, center center, 0px, center center, 100%, , color-stop(0%, #235ba5), color-stop(100%, #002872));
		background-image: -webkit-radial-gradient(center, ellipse cover, #235ba5 0%, #002872 100%);
		background-image: -o-radial-gradient(center, ellipse cover, #235ba5 0%, #002872 100%);
		background-image: -ms-radial-gradient(center, ellipse cover, #235ba5 0%, #002872 100%);
		background-image: radial-gradient(ellipse at center, #235ba5 0%, #002872 100%);
		background-repeat: no-repeat;
		background-position: 1% 50%, 50% 50%;
		background-size: cover;
		background-size: contain, cover;
		overflow: hidden;
	}

	#navigation-1 a {
		text-decoration: none;
	}

	.icon--light {
		color: gray;
	}

	.text_footer {
		display: flex;
		justify-content: center;
		padding: 10px;
		margin: auto;
		color: #fff;
	}

	.bottom-nav {
		height: 38px;
		z-index: 0;
		position: absolute;
	}

	.clouds {
		background: transparent url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat top center;
		z-index: 0;
		filter: grayscale(10%) drop-shadow(0 0 20px purple);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		display: block;
		-moz-animation: move-clouds-back 200s linear infinite;
		-ms-animation: move-clouds-back 200s linear infinite;
		-o-animation: move-clouds-back 200s linear infinite;
		-webkit-animation: move-clouds-back 200s linear infinite;
		animation: move-clouds-back 200s linear infinite;
	}

	@keyframes move-clouds-back {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 10000px 0;
		}
		;
	}

	.title {
		z-index: 1000;
	}

	.hello {
		margin-top: -50px;
	}

</style>

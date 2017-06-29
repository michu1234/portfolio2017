<template>
<v-app id="example-2">

		<v-navigation-drawer temporary v-model="drawer" :mini-variant.sync="mini" light>
			<v-list class="pa-0">
				<v-list-item>
					<v-list-tile avatar tag="div">
						<v-list-tile-avatar> <img src="http://davedeveloper.eu/img/profile-img222.png" /> </v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>Dawid Nawrocki</v-list-tile-title>
						</v-list-tile-content>
						<v-list-tile-action>
							<v-btn icon dark @click.native.stop="mini = !mini">
								<v-icon>chevron_left</v-icon>
							</v-btn>
						</v-list-tile-action>
					</v-list-tile>
				</v-list-item>
			</v-list>
			<v-card v-on:click="testowa" height="555px" class="grey lighten-4" id="navigation-1">
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
									<v-icon>{{ item.icon }}</v-icon>
								</v-list-tile-action>
								<v-list-tile-content>
									<v-list-tile-title> {{ item.text }} </v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
					</template>
				</v-list>
			</v-card>
</v-navigation-drawer>
		<v-toolbar fixed class="grey darken-4" light>
			<v-toolbar-side-icon light @click.native.stop.prevent="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title>DaveDev.De</v-toolbar-title>
			<v-toolbar-items>
				<v-toolbar-item>Home</v-toolbar-item>
				<v-toolbar-item>Contact</v-toolbar-item>
				<v-menu origin="center center" transition="v-scale-transition" bottom>
					<v-btn primary light slot="activator"> Scale Transition </v-btn>
					<v-list>
						<v-list-item v-for="item in apps" :key="item">
							<v-list-tile>
								<v-list-tile-title>{{ item.title }}</v-list-tile-title>
							</v-list-tile>
						</v-list-item>
					</v-list>
				</v-menu>
				<v-menu offset-y left bottom origin="top right" transition="v-scale-transition">
					<v-btn icon light slot="activator">
						<v-icon>more_vert</v-icon>
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
			<v-container fluid>
				<div class="title">Kliknij w sidebar by powiększyć.</div>
				<router-view></router-view>
				<gallery :onoff.sync="onoff_gallery1"></gallery>
				<gallery2 :onoff2.sync="onoff_gallery2"></gallery2>
				<gallery3 :onoff3.sync="onoff_gallery3"></gallery3>
				<gallery4 :onoff4.sync="onoff_gallery4"></gallery4>
				<gallery5 :onoff5.sync="onoff_gallery5"></gallery5>
				<gallery6 :onoff6.sync="onoff_gallery6"></gallery6>
				<gallery7 :onoff7.sync="onoff_gallery7"></gallery7>
				<gallery8 :onoff8.sync="onoff_gallery8"></gallery8>
				<gallery9 :onoff9.sync="onoff_gallery9"></gallery9>
				<gallery10 :onoff10.sync="onoff_gallery10"></gallery10>
				<gallery11 :onoff11.sync="onoff_gallery11"></gallery11>
				<!--v-router-->
			</v-container>
		</main>
		<v-footer class="pa-3 light-blue darken-4">
			<contact></contact>
			<v-spacer></v-spacer>
			<div><small>powered by Vue.js | Dawid Nawrocki © {{ new Date().getFullYear() }}</small></div>
		</v-footer>
	</v-app>
</template>
<!-- SCRIPT -->
<script>
	import Contact from './components/Contact.vue'
	export default {
		components: {
			'contact': Contact
		}
		, data() {
			return {
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
				items: [
					{
						heading: 'Apps'
					}
					, {
						icon: 'lightbulb_outline'
						, text: 'Informator'
					}
					, {
						icon: 'touch_app'
						, text: 'ToDO'
					}
					, {
						divider: true
					}
					, {
						heading: 'Websites'
					}
					, {
						icon: 'account_box'
						, text: 'Dev Portfolio'
					}
					, {
						icon: 'archive'
						, text: 'Dental Clinic'
					}
					, {
						icon: 'music_video'
						, text: 'Sound Production ver. 1'
					}
					, {
						icon: 'queue_music'
						, text: 'Sound Production ver. 2'
					}
					, {
						divider: true
					}
					, {
						icon: 'chat_bubble'
						, text: 'Economini'
					}
					, {
						icon: 'filter_vintage'
						, text: 'Garden Portfolio'
					}
					, {
						icon: 'assessment'
						, text: 'Marketing'
					}
					, {
						icon: 'play_circle_outline'
						, text: 'Outdoor cinema'
					}
					, {
						icon: 'format_paint'
						, text: 'Farba Śnieżka'
					}
				]
				, mini: false
				, right: null
				, tasks: [
					{
						title: 'Send Feedback'
					}
					, {
						title: 'Request Help'
					}
					, {
						title: 'Contact Developer'
					}
				]
				, apps: [
					{
						title: 'Click Me'
					}
					, {
						title: 'Click Me'
					}
					, {
						title: 'Click Me'
					}
					, {
						title: 'Click Me 2'
					}
				]
			}
		},
		methods: {
			testowa: function(e){
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
			hello_dialog: window.onload = function() {
				console.log(":-) HELLO EVERYBODY! :-)");
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
</style>

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
									<v-icon v-on:click="testowa">{{ item.icon }}</v-icon>
								</v-list-tile-action>
								<v-list-tile-content>
									<v-list-tile-title> {{ item.text }} </v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
						</v-list-item>
					</template>
				</v-list>
			</v-card>
			<!--
			<v-list class="pt-0" dense>
				<v-divider></v-divider>
				<v-list-item v-for="item in items" :key="item">
					<v-list-tile>
						<v-list-tile-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>{{ item.title }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-item>
			</v-list>
--></v-navigation-drawer>
		<v-toolbar fixed class="grey darken-4" light>
			<v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
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
				<gallery></gallery>
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
				onoff_preview: 0,
				drawer: null,
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
				switch (e.target.textContent) {
					case "lightbulb_outline":
						this.onoff_preview = 1
						break;
					case "touch_app":
						this.onoff_preview = 2
						break;
					case "account_box":
						this.onoff_preview = 3
						break;
					case "archive":
						this.onoff_preview = 4
						break;
					case "music_video":
						this.onoff_preview = 5
						break;
					case "queue_music":
						this.onoff_preview = 6
						break;
					case "chat_bubble":
						this.onoff_preview = 7
						break;
					case "filter_vintage":
						this.onoff_preview = 8
						break;
					case "assessment":
						this.onoff_preview = 9
						break;
					case "play_circle_outline":
						this.onoff_preview = 10
						break;
					case "format_paint":
						this.onoff_preview = 11
						break;
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
</style>

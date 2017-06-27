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
		</v-navigation-drawer>
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
			<v-footer class="pa-3 light-blue darken-4">
				<contact></contact>
				<v-spacer></v-spacer>
				<div><small>powered by Vue.js | Dawid Nawrocki © {{ new Date().getFullYear() }}</small></div>
			</v-footer>
		</main>
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
				drawer: null
				, items: [
					{
						title: 'Start'
						, icon: 'dashboard'
					}
					, {
						title: 'O mnie'
						, icon: 'question_answer'
					}
					, {
						title: 'Contacts'
						, icon: 'contacts'
					}
					, {
						title: 'App downloads'
						, icon: 'phonelink'
					}
					, {
						title: 'Got to the old version'
						, icon: 'keyboard'
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
	}
</style>

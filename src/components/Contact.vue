<template>
	<div class="contact">
		<v-dialog v-model="dialog" fullscreen transition="v-dialog-bottom-transition" :overlay=false>
			<v-btn primary light slot="activator">Open Dialog </v-btn>
			<v-card>
				<v-card-row>
					<v-toolbar light>
						<v-btn icon="icon" @click.native="dialog = false" light>
							<v-icon>close</v-icon>
						</v-btn>
						<v-toolbar-title>Contact</v-toolbar-title>

					</v-toolbar>
				</v-card-row>
				<v-divider></v-divider>
				<v-layout row justify-start>
					<v-flex xs12 sm6 offset-sm3>
						<v-card>
							<v-card-row img="http://davedeveloper.eu/img/mozaika.jpg" height="300px">
								<v-card-text class="white--text pa-0">
									<v-card-title>
										<v-btn light icon>
											<v-icon>chevron_left</v-icon>
										</v-btn>
										<v-spacer></v-spacer>
										<v-btn light icon>
											<v-icon>more_vert</v-icon>
										</v-btn>
									</v-card-title>
									<v-card-row height="100%" class="pl-5 pt-5">
										<div class="display-1 pl-5 pt-5">Dawid Nawrocki</div>
									</v-card-row>
								</v-card-text>
							</v-card-row>
							<v-list two-line>
								<v-list-item>
									<v-list-tile>
										<v-list-tile-action>
											<v-icon class="indigo--text">phone</v-icon>
										</v-list-tile-action>
										<v-list-tile-content>
											<v-list-tile-title>+48 534 931 482</v-list-tile-title>
											<v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
										</v-list-tile-content>
										<v-list-tile-action>
											<v-icon dark>chat</v-icon>
										</v-list-tile-action>
									</v-list-tile>
								</v-list-item>
								<v-list-item>
									<v-list-tile>
										<v-list-tile-action></v-list-tile-action>
										<v-list-tile-content>
											<v-list-tile-title>davedeveloper.eu</v-list-tile-title>
											<v-list-tile-sub-title>Portfolio</v-list-tile-sub-title>
										</v-list-tile-content>
										<v-list-tile-action>
											<v-icon dark>thumb_up</v-icon>
										</v-list-tile-action>
									</v-list-tile>
								</v-list-item>
								<v-divider inset></v-divider>
								<v-list-item>
									<v-list-tile>
										<v-list-tile-action>
											<v-icon class="indigo--text">mail</v-icon>
										</v-list-tile-action>
										<v-list-tile-content>
											<v-list-tile-title>nawrocki@poczta.pl</v-list-tile-title>
											<v-list-tile-sub-title>Personal</v-list-tile-sub-title>
										</v-list-tile-content>
									</v-list-tile>
								</v-list-item>
								<v-list-item>
									<v-list-tile>
										<v-list-tile-action></v-list-tile-action>
										<v-list-tile-content>
											<v-list-tile-title>dawiddeveloper@gmail.com</v-list-tile-title>
											<v-list-tile-sub-title>Work</v-list-tile-sub-title>
										</v-list-tile-content>
									</v-list-tile>
								</v-list-item>
								<v-divider inset></v-divider>
								<v-list-item>
									<v-list-tile>
										<v-list-tile-action>
											<v-icon class="indigo--text">location_on</v-icon>
										</v-list-tile-action>
										<v-list-tile-content>
											<v-list-tile-title>Kozacka 64/9</v-list-tile-title>
											<v-list-tile-sub-title>Toruń, 87-109</v-list-tile-sub-title>
										</v-list-tile-content>
									</v-list-tile>
								</v-list-item>
							</v-list>
						</v-card>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>

			</v-card>
		</v-dialog>
	</div>
</template>

<!-- SCRIPT  -->

<script>
	export default {
		data() {
			return {
				dialog: false
			}
		}
	}
</script>

<!-- CSS  -->

<style scoped>

</style>

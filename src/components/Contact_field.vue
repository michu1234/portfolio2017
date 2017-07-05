<template>
<div v-if="onoff_contact === 1" class="contact-field">
		<v-container fluid>
			<v-layout row wrap>
				<v-flex xs12 md8 offset-md2>
					<v-card>
						<v-toolbar class="pink" light>
							<v-icon class="white--text" v-on:click="close_card">arrow_back</v-icon>
							<v-toolbar-title>Compose</v-toolbar-title>
							<v-icon class="white--text" v-on:click="close_card">send</v-icon>
						</v-toolbar>
						<v-card-row>
							<v-container fluid class="pa-0">
								<v-layout wrap>
									<v-flex xs2>
										<v-subheader>To</v-subheader>
									</v-flex>
									<v-flex xs10 class="text-xs-right">
										<v-chip>
											<v-avatar> <img src="http://davedeveloper.eu/img/profile-img222.png" /> </v-avatar> Dawid Nawrocki </v-chip>
									</v-flex>
									<v-flex xs12>
										<v-divider></v-divider>
										<v-text-field label="Subject" value="Hi, I've got job for you!" single-line full-width class="mb-0"></v-text-field>
									</v-flex>
									<v-flex xs12>
										<v-divider></v-divider>
										<v-text-field label="Message" v-model="title" counter max="120" full-width multi-line single-line></v-text-field>
									</v-flex>
								</v-layout>
							</v-container>
						</v-card-row>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<!-- SCRIPT -->
<script>
	export default {
		props: ['onoff_contact'],
		data() {
				return {
					title: 'Hi,\nI just wanted to check in and see if you had any plans the upcoming week. We are thinking about...'
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
	.contact-field {
		margin-top: -20px;
	}
</style>

<template>


<v-flex v-if="show2" class="to-do" xs12 sm6 offset-sm3>
	<v-card>
		<v-toolbar class="cyan" light>
			<v-toolbar-side-icon light></v-toolbar-side-icon>
			<v-toolbar-title>Simple Translator</v-toolbar-title>
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
	</v-list>
	</v-menu>
	</v-toolbar>
		<v-flex xs8>
			<v-text-field
										name="input-1"
										label="Label Text"
										dark
										></v-text-field>
	</v-flex> <v-btn dark>Normal</v-btn>

</v-card>
</v-flex>

</template>
<!-- SCRIPT -->
<script>

	export default {
		data() {
			return {
				show2: false
				}
		}
	}
</script>
<!-- CSS -->
<style scoped>

</style>

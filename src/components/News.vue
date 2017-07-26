<template>
<v-flex v-if="show_news === 1" class="news container" xs12 sm6 offset-sm3>
		<v-card>
			<v-toolbar class="cyan" light>
				<v-icon>public</v-icon>
				<v-toolbar-title>NEWS Aggregator | Powerd by NewsAPI.org</v-toolbar-title>
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
			<v-list three-line>
				<v-card class="grey lighten-4 elevation-0">
					<v-card-text>
						<v-container fluid>
							<newssource v-on:sourceChanged="sourceChanged"></newssource>
							<newslist v-bind:source="source"></newslist>
						</v-container>
					</v-card-text>
				</v-card>
			</v-list>
		</v-card>
	</v-flex>
</template>
<script>
	import News_list from './News_list'
	import News_source from './News_source'
	export default {
		components: {
			'newslist': News_list,
			'newssource': News_source
		},
		props: ['show_news'],
		data() {
			return {
				source: ''
			}
		},
		methods: {
			sourceChanged: function(source) {
				this.source = source;
			},
			remove_card: function() {
				this.$emit('nulled', '0');
			}
		}
	}
</script>
<style scoped>
	.news {
		margin-top: -200px;
	}
</style>

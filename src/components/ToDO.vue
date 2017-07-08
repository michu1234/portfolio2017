<template>
<v-flex class="to-do container" xs12 sm6 offset-sm3>
	<v-card v-if="onoff0 == 1">
		<v-toolbar class="cyan" light>
			<v-icon>done_all</v-icon>
			<v-toolbar-title>TODO APP</v-toolbar-title>
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
						<v-layout row>
							<v-flex xs4>
								<v-subheader>Add new task to daily schedule!
									<v-icon right>schedule</v-icon>
	</v-subheader>
	</v-flex>
							<v-flex xs4>
								<form action="">
									<v-text-field v-model="newTask" name="input-1" label="Feed my cat..."></v-text-field>
									<v-btn v-on:click.native="addTask" class="primary white--text">Add Task
										<v-icon right>add_alert</v-icon>
	</v-btn>
	</form>
	</v-flex>
	</v-layout>
	</v-container>
	</v-card-text>
	</v-card>
			<v-card>
				<v-card-title> Nutrition
					<v-spacer></v-spacer>
					<v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
	</v-card-title>
				<v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
					<template slot="items" scope="props">
						<td>
							<v-edit-dialog :class="{selected: items.done}" @open="props.item._name = props.item.name" @cancel="props.item.name = props.item._name || props.item.name" lazy> {{ props.item.name }}
								<v-text-field slot="input" label="Edit" v-bind:value="props.item.name" v-on:change="val => props.item.name = val" single-line counter="counter"></v-text-field>
	</v-edit-dialog>
	</td>
						<td class="text-xs-right">
							<input v-model="items.done" type="checkbox"> </td>
						<td class="text-xs-right">
							<v-btn small primary light v-on:click.native="deleteTask(task)">Delete task</v-btn>
	</td>
						<td>
							<v-edit-dialog class="text-xs-right" @open="props.item._iron = props.item.iron" @cancel="props.item.iron = props.item._iron || props.item.iron" large lazy>
								<div class="text-xs-right">{{ props.item.iron }}</div>
								<div slot="input" class="mt-3 title">Update Iron</div>
								<v-text-field slot="input" label="Edit" v-bind:value="props.item.iron" v-on:blur="val => props.item.iron = val" single-line counter autofocus></v-text-field>
	</v-edit-dialog>
	</td>
</template>
<template slot="pageText" scope="{ pageStart, pageStop }"> From {{ pageStart }} to {{ pageStop }} </template>
</v-data-table>
</v-card>
</v-list>
</v-card>
</v-flex>
</template>
<script>
	export default {
		props: ['onoff0'],
		name: 'hello'
		, data() {
			return {
				ex7: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
				newTask: ''
				, search: ''
				, pagination: {}
				, headers: [
					{
						text: 'New task name'
						, left: true
						, sortable: false
						, value: 'name'
					}
					, ]
				, items: [{name: "Feed my cat", done: false }]
				, msg: 'Welcome to Your Vue.js App'
				, }
		}
		, methods: {
			addTask: function (e) {
				e.preventDefault();
				this.items.push({
					name: this.newTask,
					done: false
				});
			}
			, deleteTask: function (task) {
				this.items.splice(this.items.indexOf(task), 1)
			},
			remove_card: function(){
				this.$emit('nulled', '0');
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
	.to-do {
		position: absolute;
		top: 1vh;
		width: 95vw;
	}
	.selected {
		color: white;
		background: #3737ff;
	}
</style>

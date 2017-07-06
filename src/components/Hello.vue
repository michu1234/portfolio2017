<template>
	<div class="hello">
		<div class="welcome">
			<h1>{{ msg }}</h1>
			<v-flex v-if="skills" class="skills-list" xs12 sm6 offset-sm3>
				<v-card>
					<v-toolbar class="light-blue" light>
						<v-toolbar-side-icon light></v-toolbar-side-icon>
						<v-toolbar-title>My Skill Set</v-toolbar-title>
						<v-spacer></v-spacer>
						<v-btn light icon>
							<v-icon>search</v-icon>
						</v-btn>
						<v-btn light icon>
							<v-icon>view_module</v-icon>
						</v-btn>
					</v-toolbar>
					<v-list two-line subheader>
						<v-subheader inset>Programming Skills</v-subheader>
						<v-list-item v-for="item in items" v-bind:key="item.title">
							<v-list-tile avatar>
								<v-list-tile-avatar>
									<v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>{{ item.title }}</v-list-tile-title>
									<v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
								</v-list-tile-content>
								<v-list-tile-action>
									<v-btn icon ripple>
										<v-icon class="grey--text text--lighten-1">trending_up</v-icon>
									</v-btn>
								</v-list-tile-action>
							</v-list-tile>
						</v-list-item>
						<v-divider inset></v-divider>
						<v-subheader inset>Programming Environment</v-subheader>
						<v-list-item v-for="item in items2" v-bind:key="item.title">
							<v-list-tile>
								<v-list-tile-avatar>
									<v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-content>
									<v-list-tile-title>{{ item.title }}</v-list-tile-title>
									<v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
								</v-list-tile-content>
								<v-list-tile-action>
									<v-btn icon ripple>
										<v-icon class="grey--text text--lighten-1">info</v-icon>
									</v-btn>
								</v-list-tile-action>
							</v-list-tile>
						</v-list-item>
					</v-list>
				</v-card>
			</v-flex>
			<p>
				<v-btn v-on:click.native="toggles" light primary class="deep-purple darken-3 hidden-xs-only">{{link}} </v-btn> <span light v-tooltip:bottom="{ html: '★★★' }" primary> | {{JavaScript}},</span>
				<span class="underline" light v-tooltip:bottom="{ html: '★★★' }" primary>{{Vue}},</span> <span light v-tooltip:bottom="{ html: '★★★★' }" primary>{{jQuery}},</span> <span light v-tooltip:bottom="{ html: '★★★★' }" primary>{{P5}},</span> <span light v-tooltip:bottom="{ html: '★★★★★' }" primary>{{CSS3}},</span> <span light v-tooltip:bottom="{ html: '★★★★★' }" primary>{{HTML5}}</span> </p>

			<span class="social-media"><a href="https://github.com/michu1234" target="_blank"><i class="icon-github-circled"></i></a><a href="https://www.linkedin.com/in/dawid-nawrocki-1a333913b/" target="_blank"><i class="icon-linkedin-squared"></i></a><a href="https://codepen.io/DaveDeveloperDe/" target="_blank"><i class="icon-codepen"></i></a><a href="https://join.slack.com/dev-info-team/shared_invite/MjAwMjQwNTA0NzQyLTE0OTc3MzczODktNmJjY2U1NjZkMQ" target="_blank"><i class="icon-slack"></i></a>
    	<i class="clasa"></i>
    	<i class="clasa"></i>
    	<i class="clasa"></i></span> </div>
	</div>
</template>
<!-- SCRIPT -->
<script>
	export default {
		name: 'hello'
		, data() {
			return {
				skills: false
				, msg: 'Dawid Nawrocki'
				, link: "Front-end developer"
				, JavaScript: "JavaScript"
				, Vue: "Vue.js"
				, jQuery: "jQuery"
				, P5: "P5.js"
				, CSS3: "CSS3"
				, HTML5: "HTML5"
				, items: [
					{
						icon: 'check_box'
						, iconClass: 'grey lighten-1 white--text'
						, title: 'HTML5'
						, subtitle: 'Clean markup with HTML5 semantic tags'
					}
					, {
						icon: 'check_box'
						, iconClass: 'grey lighten-1 white--text'
						, title: 'CSS'
						, subtitle: 'RWD or Bootstrap, Vuetify, Foundation etc.'
					}
					, {
						icon: 'check_box'
						, iconClass: 'grey lighten-1 white--text'
						, title: 'JavaScript'
						, subtitle: '+ AJAX & JSON'
					}
					, {
						icon: 'check_box'
						, iconClass: 'grey lighten-1 white--text'
						, title: 'Vue.js | jQuery | P5.js'
						, subtitle: 'Modern javascript frameworks and libraries'
					}
			]
				, items2: [
					{
						icon: 'assignment'
						, iconClass: 'blue white--text'
						, title: 'Sass / Less'
						, subtitle: 'with BEM / SMACKS / OOCSS'
					}
					, {
						icon: 'call_to_action'
						, iconClass: 'amber white--text'
						, title: 'Gulp / GIT / JIRA'
						, subtitle: '...and more...'
					}
			, ]
			}
		}
		, methods: {
			toggles: function (e) {
				e.preventDefault();
				this.skills = !this.skills;
			}
		}
	}
</script>
<!-- CSS -->
<style scoped>
	.skills-list {
		position: absolute;
		top: -235px;
		right: 50px;
		z-index: 1;
		width: 400px;
		transition: all .3s;
	}

	.hello {
		display: flex;
		justify-content: center;
		transform: translateY(25vh);
	}

	h1 {
		text-align: center;
		color: #fff;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 5em;
		font-weight: 600;
		text-shadow: 0px -1px 0px #000;
		margin: 0 0 0 0;
		padding: 0;
	}

	p {
		margin: 0 auto;
		width: 80vw;
		padding: 15px;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 1.5em;
		text-shadow: 0px -1px 0px #000;
		color: #fff;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		text-align: center;
	}

	a {
		color: #fff;
	}
	.social-media {
		display: flex;
		justify-content: center;
		font-size: 20px;
		color: white;
	}
	i {
		transition: all .3s;
	}
	i:hover {
		color: #000052;
	}
	.underline {
		text-decoration: underline;
	}
</style>

<template>
  <div id='github'>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="cyan" dark>
            <v-toolbar-side-icon @click.native="slideIn"></v-toolbar-side-icon>
            <v-toolbar-title>- GitHub News -</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="slideOut"><v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list class="card" three-line>
            <v-subheader>
              <img class="gitAvatar" :src="avatarUrl">{{title}}<br/>&#9733; {{author}} </v-subheader>
            <template v-for="git in gitData">
              <v-list-tile avatar v-bind:key="git.name" :href="git.html_url" target="_blank">
                <v-list-tile-avatar>
                  <span class="github__language">{{git.language}}</span>
                  <span class="github__date">{{ git.updated_at | sliceDate }}</span>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="git.name"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="git.description"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Github',
    data() {
      return {
        title: 'REPOSITORIES (alphabetical order):',
        author: 'Dawid Nawrocki',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/24733645?v=4',
        slideInGit: false,
        gitData: []
      }
    },
    created() {
      fetch('https://api.github.com/users/michu1234/repos', {
        method: 'get'
      }).then(function (response) {
        return response.json()
      }).then((data) => {
        this.gitData = data;
      }).catch(function () {
        alert("error");
      });
    },
    methods: {
        slideIn() {
         let slider = document.querySelector('#github');
         slider.style.right = "0";
         slider.style.transition = ".3s";
        },
        slideOut() {
         let slider = document.querySelector('#github');
         slider.style.right = "-670" + "px";
         slider.style.transition = ".3s";
        }
    },
    filters: {
        sliceDate: function(data) {
            data = data.toString();
            return data.slice(0,10);
        }
    }
  }

</script>

<style scoped>
  #github {
    position: absolute;
    margin-top: -180px;
    right: -670px;
    z-index: 4;
    width: 1000px;
  }

  .github__slideIn {
      right: 0;
      transition: .4s;
  }

  .github__card {
    overflow-y: hidden;
    height: 100%;
  }

  .github__language {
    width: 120px;
    text-align: left;
    font-size: 1.3rem;
    color: #001e4f;
    padding-top: 20px;
    padding-left: 14px;
  }

  .card {
    max-width: 500px;
    max-height: 78vh;
  }

  .list--three-line {
    overflow: scroll;
  }

  a {
    text-decoration: none;
  }

  .list__tile__avatar {
      display: flex;
      flex-direction: column;
      font-size: 10px;
  }

  .gitAvatar {
    max-width: 50px;
    margin-right: 40px;
  }
.github__date {
    margin-left: -20px;
     border-right: 1px dashed dimgray;
    margin-right: 10px;
    width: 100%;
    padding: 0 14px 0 0;
}

@media screen and (max-width: 760px) {
  #github {
    display:none;
  }
}
 
</style>


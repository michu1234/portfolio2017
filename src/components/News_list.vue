<template>
<div class="newslist">
    <div class="container">

      <ul class="media-list">
        <li class="media" v-for="article in articles">
          <div class="media-left">
            <a v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <p class="headline media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></p>
            <p class="subheading"><i>by {{article.author}}</i></p>
            <p class="article-lead">{{article.description}}</p>
          </div>
        </li>
      </ul>

    </div>
  </div>

</template>

<script>
export default {
    name: 'News_list',
    props: ['source'],
    watch: {
        source: function(val){
            this.updateSource(val);
        }
    },
    data() {
        return {
            articles: []
        }
    },
    methods: {
        updateSource: function(source) {
				fetch('https://newsapi.org/v1/articles?source=' + source + '&apiKey=08952dd3e4054fed896dc4e18ebdd80d', {
					method: 'get'
				}).then(function(response) {
					return response.json()
				}).then((data) => {
					this.articles = data.articles;
					console.log(this.word_translated);
				}).catch(function() {
					alert("error");
				});
			}
    },
    created: function() {
        this.updateSource(this.source);
    }
}
</script>

<style scoped>
.media-object {
    width: 250px;
    max-height: 140px;
    padding: 10px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding: 20px 0 20px 0;
  }
  .media-left {
      float: left;
  }
  .media-list {
    list-style: none;
  }
  .article-lead {
    max-width: 80%;
  }
  .media-body {
    overflow: hidden;
  }
  a {
    text-decoration: none;
  }
</style>

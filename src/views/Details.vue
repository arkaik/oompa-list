<template>
  <div class="about" v-if="details !== undefined">
    <img :src="details.image" alt="Oompa's icon" class="icon"/>
    <div class="data">
      <h1>{{fullName}}</h1>
      <h2 v-if="details.gender === 'M'">Man</h2>
      <h2 v-else>Woman</h2>
      <h3 class="profession">{{details.profession}}</h3>
      <p v-html="details.description"></p>

    </div>
    <blockquote class="quote">{{details.quota}}</blockquote>
    <div class="fav">
      <dl>
        <div class="btitle">Personal data</div>
        <dt>Email:</dt><dd>{{details.email}}</dd>
        <dt>Age:</dt><dd>{{details.age}}</dd>
        <dt>Country:</dt><dd>{{details.country}}</dd>
        <dt>Height:</dt><dd>{{details.height}} inch</dd>
      </dl>
      <dl>
        <div class="btitle">Favorites</div>
        <dt>Color:</dt><dd>{{details.favorite.color}}</dd>
        <dt>Food:</dt><dd>{{details.favorite.food}}</dd>
        <dt>Song:</dt><dd><pre>{{details.favorite.song}}</pre></dd>
        <dt>Random String:</dt><dd class="mono">{{details.favorite.random_string}}</dd>
      </dl>
    </div>
  </div>
  <div class="no-data" v-else>
    <h1>We can't find who is oompa-loompa number {{$route.params.id}}</h1>
  </div>

</template>

<script>
import store from 'store'
export default {
  data () {
    return {
      details: undefined
    }
  },
  methods: {
    async retrieveData () {
      let id = this.$route.params.id
      let key = `oompa${id}`
      let data = store.get(key)
      if (data === undefined) {
        let response = await fetch(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`)
        data = await response.json()
        store.set(key, data, new Date().getTime + 86400000)
      }
      this.details = Object.assign({}, data)
    }
  },
  computed: {
    fullName () {
      return `${this.details.first_name} ${this.details.last_name}`
    }
  },
  beforeMount () {
    this.retrieveData()
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.retrieveData()
  }
}
</script>

<style scoped>
.about {
  display: grid;
  margin: 10vmin 20vmin;
  grid-template-areas:
    "image short"
    "quote favourite";
  grid-template-columns: 1.25fr 1fr;
  column-gap: 2rem;
  row-gap: 3rem;
}

.icon {
  grid-area: image;
  width: 100%;
  object-fit: cover;
}

.data {
  grid-area: short;
}

.quote {
  grid-area: quote;
  background: #ddd;
  padding: 15px;
}

.fav {
  grid-area: favourite;
}

blockquote::before {
  content: "“"
}
blockquote::after {
  content: "”"
}

.btitle {
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: underline;
}

dt {
  font-weight: bold;
}

dl {
  border: 1px solid black;
  padding: 5px;
}

pre {
  word-break: break-word;
}

h3 {
  font-style: italic;
}

.mono {
  font-family: monospace;
  word-break: break-word;
}
</style>

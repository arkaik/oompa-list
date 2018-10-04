<template>
  <div class="home">
    <div class="filterbox">
      <div class="filter">
        <input v-model="filterText" placeholder="Search" />
        <img src="../assets/ic_search.png" alt="Search icon"/>
      </div>
    </div>
    <h1>Find your Oompa Loompa</h1>
    <h2>There are more than 100K</h2>
    <div class="oompa-list">
      <oompa-card v-for="oompa in filteredList" :key="oompa.id" :subject="oompa" />
    </div>
  </div>
</template>

<script>
import store from 'store'
import OompaCard from '../components/OompaCard.vue'

// @ is an alias to /src
export default {
  data () {
    return {
      oompas: [],
      filterText: '',
      loadedPages: 0,
      totalPages: 1
    }
  },
  methods: {
    async fetchPage (n) {
      let storeKey = `page${n}`
      let initData = store.get(storeKey)
      if (initData === undefined) {
        let initialResponse = await fetch(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${n}`)
        initData = await initialResponse.json()
        store.set(storeKey, initData, new Date().getTime + 86400000)
      }
      this.oompas = this.oompas.concat(initData.results)
      return initData
    },
    async initialize () {
      let initData = await this.fetchPage(1)
      this.loadedPages = 1
      this.totalPages = initData.total
    },
    infiniteScroll () {
      window.onscroll = () => {
        let bottom = window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 10
        if (bottom && this.loadedPages < this.totalPages) {
          this.loadedPages += 1
          this.fetchPage(this.loadedPages)
        }
      }
    }
  },
  computed: {
    filteredList () {
      let list = this.oompas
      if (/\w+/g.test(this.filterText)) {
        let wordlist = this.filterText.toLowerCase().split(' ')
        list = this.oompas.filter(x => {
          let compareArray = [
            x.first_name.toLowerCase(),
            x.last_name.toLowerCase(),
            x.profession.toLowerCase()
          ]
          return wordlist.every(y => {
            return compareArray.some(z => z.includes(y))
          })
        })
      }
      return list
    }
  },
  beforeMount () {
    this.initialize()
  },
  mounted () {
    this.infiniteScroll()
  },
  components: {
    OompaCard
  }
}
</script>

<style scoped>
.home {
  margin: 0 20vmin;
}
.oompa-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.oompa-list > * {
  flex: 0 0 30%;
}
.filterbox {
  display: flex;
  justify-content: flex-end;
  --align-items: center;
  height: 2rem;
}
.filter {
  display: flex;
  align-items: center;
  height: 100%;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
}
.filter > img {
  height: 50%;
  width: auto;
  padding: 3px 5px 3px 5px;
}
.filter > input {
  padding: 1px 0px 1px 1px;
  height: 26px;
  border-width: 0 1px 0 0;
}
h1, h2 {
  font-family: sans-serif;
  text-align: center;
}
h2 {
  color: grey;
}
</style>

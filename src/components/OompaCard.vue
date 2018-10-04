<template>
  <router-link :to="{ name: 'details', params: {id: subject.id} }" class="card">
    <img :src="subject.image" :alt="imageAlternativeText" class="responsive">
    <div class="full-name">{{fullName}}</div>
    <div class="genre" v-if="subject.gender === 'M'">Man</div>
    <div class="genre" v-else>Woman</div>
    <div class="profession">{{subject.profession}}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    subject: Object
  },
  computed: {
    imageAlternativeText () {
      return this.subject.first_name + '\'s image'
    },
    fullName () {
      return `${this.subject.first_name} ${this.subject.last_name}`
    }
  }
}
</script>

<style lang="css">
.card {
  display: block;
  text-decoration: none;
}

.full-name {
  font-weight: bold;
  font-size: 1.25rem;
}

.profession {
  font-style: italic;
}

a:visited, a {
  color: black;
}

a:hover {
  color: teal;
}

img.responsive {
  width: 100%;
  height: 65%;
  object-fit: cover;
}
</style>

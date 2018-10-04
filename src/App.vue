<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img alt="Oompa Loompa logo" src="./assets/logo.png" class="logo" />
        Oompa Loompa's Crew
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  height: 3vmax;
  padding: 2vmin 20vmin;
  background-color: lightgrey;
}

#nav a {
  display: inline-flex;
  font-weight: bold;
  color: #2c3e50;
  height: 100%;
  align-items: center;
  text-decoration: none;
}

img.logo {
  height: 75%;
  object-fit: scale-down;
  margin-right: 2rem;
}
</style>

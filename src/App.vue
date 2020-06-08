<template>
  <div id="app">
    <b-dropdown id="dropdown-left" text="Menü" variant="primary" class="m-2">
      <!--<b-dropdown-item ><router-link to="/events">Finde dein Event</router-link></b-dropdown-item>-->
      <b-dropdown-item ><router-link to="/">Start</router-link></b-dropdown-item>
      <b-dropdown-item ><router-link to="createyourevent">Erstelle ein Event</router-link></b-dropdown-item>
      <b-dropdown-item ><router-link to="projects">Wohin fließt meine Spende?</router-link></b-dropdown-item>
      <b-dropdown-item ><router-link to="aboutvca">Wer ist Viva con Agua?</router-link></b-dropdown-item>
    </b-dropdown>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

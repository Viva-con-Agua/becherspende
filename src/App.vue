<template>
  <div id="app">
    <NavBar/>
    <Footer/>
    <router-view/>
  </div>
</template>
<script>
  import NavBar from "./components/NavBar";
  import Footer from "./components/Footer";
  export default {
    components: { NavBar, Footer }
  }

</script>
<style>
#app {
  font-family: museo,  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #363636;
}


</style>

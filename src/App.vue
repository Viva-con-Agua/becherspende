<template>
    <div id="app" >
        <Header class="top"/>
            <router-view/>
                <Footer class="bottom"/>
    </div>
</template>
<script>
import backgroundImage from './assets/img/background_big.jpg'
import Header from './components/Header'
import Footer from "./components/Footer";
export default {
    components: { Header, Footer },
    data () {
        backgroundImage
    }
}

</script>
<style>
* {
  box-sizing: border-box;
}
#app {
    font-family: museo,  sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    font-weight: bold;
    color: #363636;

    background-image: url('~@/assets/img/BackgroundApp.jpg');
    background-size: cover;
  /* Add the blur effect */
}
.bottom {
    margin-top: 100px;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 1.0em;
  margin: 0.9em;
  text-align: center;
}


/* Create three equal columns that sits next to each other */
.column {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 2vw;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
    .row {
        -webkit-flex-direction: column;
        flex-direction: column;

    }
}




</style>

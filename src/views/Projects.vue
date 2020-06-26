<template>
    <div class="projects">
        <div class="header">
        </div>

        <div class="row">
            <div class="column">
                <div class="card">
                <h2>
                    Wasserprojekte - klingt einfach und ist doch so vielseitig!
                </h2>
                <p>
                    Viva con Agua hat - zusammen mit seinen Projektpartnern - rund 3 Millionen Menschen (Stand: April 2019) weltweit mit WASH-Projekten erreicht. Die Projekte beinhalten:
                </p>
                <ol>
                    <li>Zugang zu sauberem Trinkwasser</li>
                    <li>Sanitären Anlagen</li>
                    <li>Hygieneeinrichtungen</li>
                    <li>sowie Schulungen und Ausbildungen</li>
                </ol>
                   <p>
                    Mit deiner Spende werden Projekte unter anderem in Mosambik, Äthiopien und Malawi finanziert.
                </p>
                <p>
                    Wie die Projekte genau aussehen zeigen wir dir gerne:
                </p>
            </div>
            </div>
            <div class="column">

            <div class="project" @mouseover="mosHover = true" @mouseleave="mosHover = false">
                    <a href="https://vivaconagua.ch/mosambik">
                        <div class="project-text">
                        <span>Mosambik</span>
                    </div>
                    <div class="project-img" :class="{hover: mosHover}">
                    <img src="../assets/img/Mosambik.png">
                    </div>
                    </a>
            </div>
            <div class="project" @mouseover="aetHover = true" @mouseleave="aetHover = false">
                <a href="https://www.vivaconagua.org/index.htm?post&id=2241">
                    <div class="project-text">
                        <span>Äthiopien</span>
                    </div>
                    <div class="project-img" :class="{hover: aetHover}">
                    <img src="../assets/img/Aethiopien.jpg">
                    </div>
                    </a>
            </div>
            <div class="project" @mouseover="malHover = true" @mouseleave="malHover = false">
                     <a href="https://www.vivaconagua.at/index.htm?post&id=94">
                        <div class="project-text">
                        <span>Malawi</span>
                    </div>
                    <div class="project-img" :class="{hover: malHover}">
                    <img src="../assets/img/malawi.jpg">
                    </div>
                    </a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Projects",
        data () {
            return {
                mosHover: false,
                aetHover: false,
                malHover: false
            }
        }
    }
</script>

<style scoped> *{
    text-align: left;
}

/* Style the header */

.hover {
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.project img {
     max-width: 100%; 
    height: auto;    
}
.project a {
    width: 100%;
}

.project-text {
      position: absolute;
      top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
    
}
.project-text span {
    font-size: 40pt;
    color: white;
}
.project {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 1.0em;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
    .row {
        -webkit-flex-direction: column;
        flex-direction: column;
    }
}
</style>

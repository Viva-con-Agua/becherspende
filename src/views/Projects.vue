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
            </div>
            </div>
            <div class="column">
                <div class="card">
                <p>
                    Mit deiner Spende werden Projekte unter anderem in Mosambik, Äthiopien und Malawi finanziert.
                </p>
                <p>
                    Wie die Projekte genau aussehen zeigen wir dir gerne:
                </p>
                <div id="mosambik">
                    <h4>Mosambik</h4>
                    <a href="https://vivaconagua.ch/mosambik">
<!--
                        <img border="0" alt="Mosambik" src="./src/assets/static/moz.png" width="100" height="100">
-->
                    </a>
                </div>
                <div id="Äthiopien">
                    <h4>Äthiopien</h4>
                    <a href="https://www.vivaconagua.org/index.htm?post&id=2241">
<!--
                        <img border="0" alt="Äthiopien" src="src/assets/static/ath.png" width="100" height="100">
-->
                    </a>
                </div>
                <div id="Malawi">
                    <h4>Malawi</h4>
                    <a href="https://www.vivaconagua.at/index.htm?post&id=94">
<!--
                        <img border="0" alt="Malawi" src="src/assets/static/mal.png" width="100" height="100">
-->
                    </a>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Projects"
    }
</script>

<style scoped> *{
    text-align: left;
}

/* Style the header */


/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
    .row {
        -webkit-flex-direction: column;
        flex-direction: column;
    }
}
</style>

<template>
    <div class="projects">
        <div class="header">
        </div>

        <div class="row">
            <div class="column">
                <h2>
                    Für eine Welt ohne Durst!
                </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/elymJVBx0YQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>
                    Viva con Agua setzt sich dafür ein, dass alle Menschen weltweit Zugang zu sauberem TRINKWASSER haben. Darum fördern wir Wasserprojekte und Aktionen im In- und Ausland nach dem Motto "Wasser für alle - alle für Wasser". Dabei setzen wir auf jede Menge positiven Aktivismus:
                </p>
                <p>
                    Als ALL PROFIT Organisation (Non-Profit klingt so freudlos) setzen wir auf die universellen Sprachen Musik, Kunst und Sport um Menschen für sauberes Trinkwasser zu aktivieren und Spenden zu generieren.
                </p>
            </div>
            <div class="column">
                <p>
                    Dafür besuchen wir Konzerte und Festivals um Pfandbecher zu sammeln, halten Vorträge an Schulen und Universitäten, arbeiten mit Unternehmen zusammen und aktivieren überall, wo es Spaß macht!
                    Durch freudvolle Aktionen generieren wir Gelder die schließlich in WASH-Projekte in immer mehr Viva con Agua Ländern fließen.
                    WASH steht für Wasser, Sanitär und Hygiene und verbessert so die Lebensumstände von vielen Menschen langfristig.
                    Der Verein Viva con Agua de Sankt Pauli e.V. wurde 2006 offiziell eingetragen und als gemeinnützig anerkannt.
                </p>
                <p>
                    Seit diesen Anfangstagen ist der Viva con Agua Kosmos stetig gewachsen und steht inzwischen für ein Netzwerk von mehr als 10.000 ehrenamtlichen Supportern. Es gibt Viva con Agua Ehrenamts-Crews in unzähligen deutschen Städten und eigenständige eingetragene Vereine in der Schweiz, Österreich und den Niederlanden.
                </p>
                <p>
                    Mit der Gründung von Viva con Agua Kampala in Uganda ist seit Anfang 2015 auch eine VcA-Crew in einem Projektland vertreten - Ugander sammeln Spenden für Projekte in Uganda und führen eigene Projekte vor Ort durch. Die Idee der ALL PROFIT Organisation und des Spendensammelns mit Spaß und Freude ist also zur internationalen Idee geworden und bewarheitet die Vision "Wasser für alle - alle für Wasser"!
                </p>
            </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>* {
    box-sizing: border-box;
}

p, ol, h2 {
    background-color: white;
    padding: 2vh;
    border-radius: 20px;
}

/* Style the header */


/* Container for flexboxes */
.row {
    background-size: cover;
    background-repeat: no-repeat;
    display: -webkit-flex;
    display: flex;

}

/* Create three equal columns that sits next to each other */
.column {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 5vw;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
    .row {
        -webkit-flex-direction: column;
        flex-direction: column;
    }
}
</style>

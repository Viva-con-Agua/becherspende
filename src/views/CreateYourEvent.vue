<template>
    <div class="projects">
        <div class="header">
        </div>

        <div class="row">
            <div class="column">
                <div class="card">
                <p style="text-align=left;">
                    Du hättest Viva con Agua gerne zu deiner Veranstaltung eingeladen aber das Event kann nicht stattfinden?
                    Du planst ein Konzert, ein Streaming Event, ein Autokino, oder eine andere Veranstaltung und wir dürfen digital dabei sein?
                    <br>Du kannst Viva con Agua bei der Online Becherjagd supporten und damit Spenden für sauberes Trinkwasser sammeln.
                    </p>
                </div>
                <div class="card">
                   
                    <h2>Das geht ganz einfach!</h2><br>
                <p>
                    So geht´s
                <ol>
                    <li>
                        Trage dich unten im Formular ein und lade eine Bilddatei hoch, die wir im Header deiner Spendenseite anzeigen sollen.
                    </li>
                    <li>
                        Wir erstellen für dein Event eine individuelle Spendenseite, zu der du einen Link erhälst.
                    </li>
                    <li>
                        Du bekommst von uns ein Social Media Paket, mit dem du deine Follower auf die Aktion aufmerkasam machen kannst.
                    </li>
                </ol>
                    Das war´s auch schon...
                </p>
                <p>
                    Gerne können wir dir die Spendenseite auch als Iframe zur Verfügung stellen. So kannst du es einfach auf deiner Hompage einbinden.
                </p>
                </div>
            </div>
            <div class="column">
                <div class="card">
                         <iframe src="https://www.cognitoforms.com/f/NFxzm6caT0eT5YUmXcK4pA?id=73" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="yes" seamless="seamless" height="531" width="100%"></iframe>
                          
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: "Projects",
        components: {
        },
        data() {
            return {
                event: {
                    eventname: null,
                    asp: null,
                    email: null,
                },
            }
        },
        methods: {
            getValidationState({ dirty, validated, valid = null }) {
                return dirty || validated ? valid : null;
            },
            resetForm() {
                this.event = {
                    eventname: null,
                    asp: null,
                    email: null
                };
                this.$nextTick(() => {
                    this.$refs.observer.reset();
                });
            },
            onSubmit() {
                alert("Form submitted!");
            }
        }
    }
</script>

<style scoped> *{
    text-align: left;
}
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
    .row {
        -webkit-flex-direction: column;
        flex-direction: column;
    }
}


</style>

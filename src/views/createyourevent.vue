<template>
    <div id="createyourevent">
        <div id="text">
            <p>Du hättest Viva con Agua gerne zu deiner Veranstaltung eingeladen aber das Event kann nicht stattfinden?
            </p><p>Du planst ein Konzert, ein Streaming Event, ein Autokino, oder eine andere Veranstaltung und wir dürfen digital dabei sein?
        </p><p>Du kannst Viva con Agua bei der Online Becherjagd supporten und damit Spenden für sauberes Trinkwasser sammeln.
        </p><p>Das geht ganz einfach!

        </p><p>So geht´s

        </p><p>1. Trage dich unten im Formular ein und lade eine Bilddatei hoch, die wir im Header deiner Spendenseite anzeigen sollen.
        </p><p>2. Wir erstellen für dein Event eine individuelle Spendenseite, zu der du einen Link erhälst.
        </p><p>3. Du bekommst von uns ein Social Media Paket, mit dem du deine Follower auf die Aktion aufmerkasam machen kannst.
        </p><p>Das war´s auch schon...
        </p><p>Gerne können wir dir die Spendenseite auch als Iframe zur Verfügung stellen. So kannst du es einfach auf deiner Hompage einbinden.
        </p>
    </div>
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
                <validation-provider
                        name="Event"
                        :rules="{ required: true, min: 3 }"
                        v-slot="validationContext">
                    <b-form-group id="eventname_group" label="Eventname:" label-for="Veranstaltung:">
                        <b-form-input
                                id="event"
                                name="event"
                                v-model="event.eventname"
                                :state="getValidationState(validationContext)"
                                aria-describedby="input-1-live-feedback"
                        ></b-form-input>

                        <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </validation-provider>
                <validation-provider
                        name="asp"
                        :rules="{ required: true, min: 3 }"
                        v-slot="validationContext">
                    <b-form-group id="eventasp_group" label="Ansprechpartner:in:" label-for="Ansprechpartner:in:">
                        <b-form-input
                                id="asp"
                                name="asp"
                                v-model="event.asp"
                                :state="getValidationState(validationContext)"
                                aria-describedby="input-1-live-feedback"
                        ></b-form-input>

                        <b-form-invalid-feedback id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </validation-provider>
                <validation-provider
                        name="email"
                        :rules="{ required: true, min: 3 }"
                        v-slot="validationContext">
                    <b-form-group id="eventemail_group" label="E-Mail Adresse:" label-for="Kontaktemail">
                        <b-form-input
                                id="email"
                                name="email"
                                v-model="event.email"
                                :state="getValidationState(validationContext)"
                                aria-describedby="input-1-live-feedback"
                        ></b-form-input>

                        <b-form-invalid-feedback id="input-3-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </validation-provider>
                <b-button href="https://dropbox.com/request/ma46BPbksfZe7tuJLgJku" target="_blank">Upload Image</b-button>
                <br>
                <b-button href="https://dropbox.com/sh/" target="_blank"> Dein Social Media Paket zum Downloaden</b-button>
                <br>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button class="ml-2" @click="resetForm()">Reset</b-button>

            </b-form>
        </validation-observer>
               </div>
</template>

<script>
    export default {
        name: "createyourevent",
/*        components: {
            ValidationProvider,
            ValidationObserver
        },*/
        data() {
            return {
                event: {
                    eventname: null,
                    asp: null,
                    email: null,
                }
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

<style scoped>
    #text {

    }

</style>
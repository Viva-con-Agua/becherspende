<template>
    <div role="group">
        <label for="input-live">Eventname:</label>
        <b-form-input
                id="input-live"
                v-model="event"
                :state="eventState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Wofür sammelst du?"
                trim
        ></b-form-input>

        <!-- This will only be shown if the preceding input has an invalid state -->
        <b-form-invalid-feedback id="input-live-feedback">
            Wir benötigen mindestens drei Zeichen
        </b-form-invalid-feedback>

        <!-- This is a form text block (formerly known as help block) -->
        <b-form-text id="input-live-help">Wie heisst dein Event?</b-form-text>
    </div>
</template>

<script>
    export default {
        name: "createyourevent",
        computed: {
            nameState() {
                return this.event.length > 2 ? true : false
            }
        },
        data() {
            return {
                event: ''
            }
        }
    }
</script>

<style scoped>

</style>
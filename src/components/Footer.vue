<template>
    <div class="footer">
        <div class="links">
            <a href="https://www.vivaconagua.org/datenschutzerklaerung">DATENSCHUTZHINWEIS </a>
            <a href="https://www.vivaconagua.org/impressum"> IMPRESSUM</a>
        </div>
        <div class="cr">
            ©2020, Viva con Agua
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 2vh;
        background-color: grey;
        color: white;
    }
    .links {
        float: left;
    }
    a:link {
        text-decoration: none;
        color: white;
    }

    a:visited {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: underline;
    }

    a:active {
        text-decoration: underline;
    }

    .cr {
        float: right;
    }

    /* GRID SYSTEM for responsive*/

    @media screen and (max-width: 600px) {
        .footer a:not(:first-child) {display: none;}
        .footer a.icon {
            float: right;
            display: block;
        }
    }

    @media screen and (max-width: 600px) {
        .footer.responsive {position: relative;}
        .footer.responsive a.icon {
            position: absolute;
            right: 0;
            top: 0;
        }
        .footer.responsive a {
            float: none;
            display: block;
            text-align: left;
        }
    }
</style>
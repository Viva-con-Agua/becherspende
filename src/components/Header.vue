<template>
    <div id="header">
    <div class="row" :style="{ backgroundImage: `url(${headerImg})` }">
    <div class="container">
        <div class="row">
            <div id="heading" class="col-md-4" :style="{ backgroundImage: `url(${heading})` }"></div>
            <div class="col-md-6 d-sm-none d-md-block"></div>
            <div id="logo" class="col-md-2" :style="{ backgroundImage: `url(${logo})` }"></div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import headerImg from '../assets/img/background_big.jpg'
import heading from '../assets/img/Spende_deinen_Becher_header.svg'
import logo from '../assets/img/logo_black.svg'
export default {
    name: 'Header',
    data () {
        return {
            headerImg,
            heading,
            logo
        }
    }
}
</script>
<style scoped lang="scss">

$blue: #008FC3;
$light_blue: #66D4FC;
$grey: #363636;
@mixin cover {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
@mixin contain {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
}
#header {
    margin-bottom: 13rem;
    @media screen and (min-width: 1200px){
        margin-bottom: 300px;
    }
    &> .row {
        @include cover();
        height: 375px;
        @media screen and (min-width: 1200px){
            position: relative;
        }
    }
    #logo {
        position: absolute;
        left: 50%;
        top: 20px;
        transform: translateX(-50%);
        height: 40px;
        z-index: 2;
        @include contain();
        @media screen and (min-width: 1200px){
            left: auto;
            right: 0;
            top: 52px;
            transform: translateX(-50%);
            height: 76px;
        }
        &.festival {
            @media screen and (max-width: 1199px){
                top: 60px;
                transform: translateX(-50%);
                height: 80px; 
            }
        }
    }
    #heading {
        height: 203px;
        position: absolute;
        top: 70px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        @include contain();
        @media screen and (min-width: 1200px){
            left: 13%;
        }
    }
    #cup_start,
    #cup_start_festival {
        position: absolute;
        top: 310px;
        background-color: $light_blue;
        border-radius: 50%;
        height: 150px;
        width: 150px;
        z-index: 2;
        left: 50%;
        transform: translateX(-50%);
        @media screen and (min-width: 1200px){
            top: 117px;
            height: 170px;
            width: 170px;
        }
    }
    #cup_start_festival {
        height: 240px;
        width: 240px;
        top: 204px;
        background-color: $blue;
        z-index: 0;
        #heading_festival {
            margin-top: 25px;
            transform: scale(1.2);
            width: 100%;
            height: 100px;
            @include contain();
        }
        @media screen and (min-width: 1200px){
            top: 117px;
            height: 300px;
            width: 300px;
            #heading_festival {
                margin-top: 46px;
                margin-left: 50%;
                transform: translatex(-50%) scale(2);
            }
        }
    }
    #splashes_header {
        height: 375px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        @include cover();
        background-size: 600px;
        background-repeat: space; 
        &.festival {
            background-position: 26px 36px;
            transform: rotate(147deg);
        }
        @supports (-ms-ime-align:auto) {       
            background-size: auto;
            background-repeat: no-repeat;
            background-position: 400px -50px; 
            &.festival {
                background-position: 400px -50px; 
            }
        }
    }
}
</style>

<template>
        <div class="footer">
            <div class="container">
            <span id="footer-logo" ></span>
            <div class="row">
                <div class="col-xl-9 col-md-12">
                    <h3>About</h3>
                    <p>{{about_text }}</p>
                </div>
                <div class="col-3 d-md-block d-xs-block d-xl-none"></div>
                <div class="col-xl-3 col-md-6">
                    <h3>Kontakt</h3>
                    <div id="contact">
                        <div class="de">
                            <div class="flag full  show" :style="{ backgroundImage: `url(${de})` }">
                            </div>
                            <div class="flag outline"
                                 :style="{ backgroundImage: `url(${de_outline})` }"></div>
                        </div>
                        <div class="icons de">
                            <a :href="links.de.mail"
                                :style="{ backgroundImage: `url(${mail})` }"></a>
                            <a :href="links.de.fb" :style="{ backgroundImage: `url(${fb})` }"></a>
                            <a :href="links.de.insta"
                               :style="{ backgroundImage: `url(${insta})` }"></a>
                        </div>
                        <div class="at">
                            <div class="flag full show" :style="{ backgroundImage: `url(${at})` }">
                            </div>
                            <div class="flag outline"
                                 style="background-image: ./assets/img/at_outline.svg)"></div>
                        </div>
                        <div class="icons at">
                            <a :href="links.at.mail"
                               style="background-image: ./assets/img/mail.svg"></a>
                            <a :href="links.at.fb" style="background-image: ./assets/img/fb.svg"></a>
                            <a :href="links.at.insta"
                               style="background-image: ./assets/img/insta.svg"></a>
                        </div>
                        <div class="ch">
                            <div class="flag full show" :style="{ backgroundImage: `url(${ch})` }">
                            </div>
                            <div class="flag outline"
                                 style="background-image: ./assets/img/ch_outline.svg)"></div>
                        </div>
                        <div class="icons ch">
                            <a :href="links.ch.mail"
                               style="background-image: ./assets/img/mail.svg"></a>
                            <a :href="links.ch.fb" style="background-image: ./assets/img/fb.svg"></a>
                            <a :href="links.ch.insta"
                               style="background-image: ./assets/img/insta.svg"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <ul id="footer-links" class="col-md-9 col-sm-12">
                    <li>
                        <a :href="privacy_link">Datenschutzhinweis</a>
                    </li>
                    <li>
                        <a :href="imprint_link">Impressum</a>
                        </li>
                </ul>
                <div id="copyright" class="col-md-3 col-sm-12">&copy;{{copyright}}</div>
            </div>
        </div>
        </div>
</template>

<script>
import de from '../assets/img/de.svg'
import de_outline from '../assets/img/de_outline.svg'
import at from '../assets/img/at.svg'
import at_outline from '../assets/img/at_outline.svg'
import ch from '../assets/img/ch.svg'
import ch_outline from '../assets/img/ch_outline.svg'
import mail from '../assets/img/mail.svg'
import insta from '../assets/img/insta.svg'
import fb from '../assets/img/fb.svg'

export default {
    name: "Footer",
    data () {
        return {
            copyright: '2020, Viva con Agua',
            about_text: 'Viva con Agua setzt sich weltweit für einen menschenwürdigen Zugang zu sauberem Trinkwasser und sanitärer Basisversorgung ein. Mach mit!',
            privacy_link: 'https://www.vivaconagua.org/datenschutzerklaerung',
            imprint_link: 'https://www.vivaconagua.org/impressum',
            links: {
                de: {
                    insta: 'https://www.instagram.com/vivaconagua/',
                    fb: 'https://www.facebook.com/vivaconagua',
                    mail: 'mailto:action@vivaconagua.org'
                },
                at: { 
                    insta: 'https://www.instagram.com/vivaconagua_oesterreich/',
                    fb: 'https://www.facebook.com/vivaconaguaoesterreich/',    
                    mail: 'mailto:action@vivaconagua.org'
                },
                ch: { 
                    insta: 'https://www.instagram.com/vivaconagua_ch/',
                    fb: 'https://www.facebook.com/vivaconaguaschweiz/',
                    mail: 'mailto:action@vivaconagua.org'
                }
            },
            de,
            de_outline,
            at,
            at_outline,
            ch,
            ch_outline,
            mail,
            insta,
            fb
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

.footer {
	background-color: $grey;
	color: #ffffff;
	position: relative;
	text-align: center;
	padding: 3rem 0;
	h3 {
		font-size: 24px;
		font-family: "johntape",  sans-serif;
		letter-spacing: .29px;
		font-weight: 100;
	}
	p, a, div {
		font-size: 12px;
		font-family: 'roboto', sans-serif;
	}
	#footer-logo {
		position: absolute;
		width: 87px;
		height: 87px;
		left: 50%;
		transform: translateX(-50%);
		top: -50px;
        background-image: url('~@/assets/img/footer_logo.svg');
		@include cover();

       
		@media screen and (min-width: 1200px){
			transform: translateX(-50%) scale(1.5);
		}
	}
	.row {
		@media screen and (min-width: 1200px){
			text-align: left;
		}
		.col-xl-9 {
			@media screen and (min-width: 1200px){
				padding-right: 300px;
				padding-left: 0;
			}
		}
		.col-xl-3 {
			padding-right: 0;
		}
		&:first-of-type {
			padding-bottom: 4rem;
		}
		&:nth-of-type(2)::before {
			content: '';
			display: inline-block;
			background-color: #ffffff;
			height: 1px;
			width: 80vw;
			margin-left: 10vw;
			@media screen and (min-width: 1200px){
				width: 100%;
				margin-left: 0;
			}
		}
	} 
	#footer-links {
		list-style: none;
		padding-left: 0;
		display: flex;
		flex-direction: row;
		padding: 1rem 0 2rem;
		li {
			line-height: 2;
			&:first-of-type::after {
				content: "|";
				display: inline-block;
				width: 15px;
				text-align: center;
			}
			a  {
				text-transform: uppercase;
				color: #ffffff;
			}
		}
		@media screen and (max-width: 767px){
			display: inline-block;
			li:first-of-type::after {
				content: none;
			}
		}
	}
	#contact {
		display: flex;
		justify-content: center;
		height: 70px;
		position: relative;
		@media screen and (min-width: 1200px){
			justify-content: start;
		}
		& > div {
			padding: 0 10px;
			width: 60px;
			position: relative;
		}
		.icons {
			width: 100%;
			position: absolute;
			top: 60px;
			left: 50%;
			transform: translateX(calc(-50%));
			display: none;
			@media screen and (min-width: 1200px){
				padding: 0;
			}
			&.show {
				display: block;       
			}
			a {
				width: 42px;
				height: 42px;
				margin-right: 16px;
				display: inline-block;
			}
		}
		.flag {
			display: none;
			width: 41px;
			height: 41px;
			position: absolute;
			top: 0;
			left: 0;
			@include contain();
			&.show {
				display: inline-block;
			}
		}
	}
	#copyright {
		font-weight: bold;
		@media screen and (min-width: 1200px){
			padding-top: 28px;
		}
	}
}

/* Bugfix for crappy Safari */
@media not all and (min-resolution:.001dpcm) { 
	@supports (-webkit-appearance:none) {
		#first_img  { 
			height: 66.666666667vw;
		}
		#second_img  { 
			height: 66.666666667vw;
		}
		#third_img  { 
			height: 66.666666667vw;
		}
		#fourth_img  { 
			height: 66.666666667vw;
		}
	}
}
</style>

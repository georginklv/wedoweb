<template>
	<v-app id="app">
		<TheNavBar />
		<v-main>
			<transition name="fade">
				<router-view />
			</transition>
		</v-main>
		<TheFooter />
	</v-app>
</template>

<script>
import TheNavBar from './components/TheNavBar';
import TheFooter from './components/TheFooter';

export default {
	name: 'App',

	components: {
		TheFooter,
		TheNavBar,
	},

	data: () => ({
		//
	}),
};
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables.scss';
@font-face {
	font-family: 'Phenomena-Regular';
	src: url('../public/fonts/Phenomena-Regular.woff2');
}
$font-size-root: 20px !important;
$body-font-family: 'Phenomena-Regular' !important;
html,
body,
.v-application {
	font-family: $body-font-family;
}
html,
body {
	font-size: 17px;
	color: #ccc;
}
.v-application {
	.display-4,
	.display-3,
	.display-2,
	.display-1,
	.headline,
	.title,
	.subtitle-1,
	.subtitle-2,
	.body-1,
	.body-2,
	.caption,
	.overline {
		font-family: $body-font-family;
	}
}
.v-parallax__image {
	transform: none !important;
	width: 100% !important;
}
.v-application--wrap {
	min-height: unset;
}
.theme--light.v-application {
	background: transparent !important;
}
.v-btn {
	transition: background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	&:active,
	&:focus,
	&:hover {
		background-color: #301aff !important;
		color: #fff !important;
	}
}
.wrapper {
	display: flex;
	flex-direction: column;
	padding: 0 40px 20px;
	max-width: 1600px;
	margin: 0 auto;
	width: 100%;
}
.background-wrapper {
	background-image: url('./assets/stillBackground2.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
.row {
	flex-wrap: nowrap;
}
.line {
	width: 250px;
	height: 10px;
	background: linear-gradient(to right, #27a6e3 0%, #6200ab 100%);
	border-radius: 30px;
	margin: 0 40px 0 0;
}
.title p {
	font-size: 80px;
	margin-bottom: 40px;
}
.description {
	font-size: 16px;
	font-weight: normal;
	padding: 20px 0;
	max-width: 800px;
}

//portfolio video
.vue-video-section__overlay-content-wrapper__background {
	background: unset !important;
	opacity: 1 !important;
	border: none !important;
}
.vue-video-section-wrapper {
	z-index: 1 !important;
}

//fade between pages
.fade-enter-active,
.fade-leave-active {
	transition-property: opacity;
	transition-duration: 0.25s;
}

.fade-enter-active {
	transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>

<template>
	<v-app id="app" class="main-wrapper">
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
	metaInfo() {
		return {
			title:
				'We do web - Website Design and Development, SEO Optimization, Corporate Identity, Website Re-design.',
			meta: [
				{
					name: 'description',
					content:
						'We do web can help to biuld you brand! We will create you corporate identity, design and develop you website and going to make your SEO optimazation!',
				},
				{
					property: 'og:title',
					content:
						'We do web - Website Design and Development, SEO Optimization, Corporate Identity, Website Re-design.',
				},
				{ property: 'og:site_name', content: 'We do web' },
				{ property: 'og:type', content: 'website' },
				{ name: 'robots', content: 'index,follow' },
			],
		};
	},
	data: () => ({
		//
	}),
	methods: {
		track() {
			this.$ga.page('/');
		},
	},
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
.main-wrapper {
	overflow: hidden;
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
	z-index: 100;
}
.background-wrapper {
	background-image: url('./assets/stillBackground.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
.row {
	flex-wrap: nowrap;
}
.line {
	width: 250px;
	height: 7px;
	background: linear-gradient(
		to right,
		#301aff 0%,
		#8376fd 44%,
		#0cb9f2 77%,
		#76fdb2 100%
	);
	border-radius: 30px;
	margin: 0 40px 0 0;
	border: 1px solid #cccccc;
	z-index: 100;
}
.title p {
	font-size: 60px;
	margin-bottom: 25px;
	color: #666666;
	z-index: 100;
}
.description {
	font-size: 16px;
	font-weight: normal;
	padding: 20px 0;
	max-width: 800px;
	color: #666666;
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
@media screen and (max-width: 600px) {
	.title p {
		font-size: 40px;
		margin-bottom: 10px;
	}
}
</style>

<template>
	<v-app id="app">
		<TheNavBar />
		<v-main>
			<TheHeader />
			<WeKnowWeb />
			<transition name="fade">
				<router-view />
			</transition>
		</v-main>
		<TheFooter />
	</v-app>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheNavBar from "./components/TheNavBar";
import TheFooter from "./components/TheFooter";
import WeKnowWeb from "./components/WeKnowWeb";

export default {
	name: "App",

	components: {
		TheHeader,
		TheFooter,
		TheNavBar,
		WeKnowWeb,
	},

	data: () => ({
		//
	}),
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/settings/_variables.scss";
@font-face {
	font-family: "Phenomena-Regular";
	src: url("../public/fonts/Phenomena-Regular.woff2");
}
$font-size-root: 20px !important;
$body-font-family: "Phenomena-Regular" !important;
html,
body,
.v-application {
	font-family: $body-font-family;
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

.v-application--wrap {
	min-height: unset;
}
.wrapper {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1600px;
	margin: 0 auto;
	padding: 0 40px 20px;
}
.row {
	flex-wrap: nowrap;
}
.line {
	width: 300px;
	height: 10px;
	background: linear-gradient(to right, #27a6e3 0%, #6200ab 100%);
	border-radius: 30px;
	margin: 0 40px 0 0;
}
</style>

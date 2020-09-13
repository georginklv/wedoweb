<template>
	<v-app id="app">
		<TheNavBar />
		<v-main>
			<TheHeader />
			<WeKnowWeb />
			<OurProjects />
			<TheTeam />
			<TheBlog />
			<TheQuestions />
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
import OurProjects from "./components/OurProjects";
import TheBlog from "./components/TheBlog";
import TheTeam from "./components/TheTeam";
import TheQuestions from "./components/TheQuestions";

export default {
	name: "App",

	components: {
		TheHeader,
		TheFooter,
		TheNavBar,
		WeKnowWeb,
		OurProjects,
		TheBlog,
		TheTeam,
		TheQuestions,
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
.theme--light.v-application {
	background: transparent !important;
}
.wrapper {
	display: flex;
	flex-direction: column;
	padding: 0 40px 20px;
	max-width: 1600px;
	margin: 0 auto;
	width: 100%;
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
</style>

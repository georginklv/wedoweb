<template>
	<v-app>
		<v-main>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<TheNavBar />
					<TheHeader />
					<router-view />
				</v-row>
			</v-container>
		</v-main>
		<TheFooter />
	</v-app>
</template>
<style lang="scss" scoped>
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
.wrapper {
	display: flex;
	flex-direction: column;
	max-width: 1600px;
}
</style>
<script>
import TheHeader from "./components/TheHeader";
import TheNavBar from "./components/TheNavBar";
import TheFooter from "./components/TheFooter";

export default {
	name: "App",

	components: {
		TheHeader,
		TheFooter,
		TheNavBar,
	},

	data: () => ({
		//
	}),
};
</script>

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
<style lang="scss" scoped></style>
<script>
import TheHeader from './components/TheHeader';
import TheNavBar from './components/TheNavBar';
import TheFooter from './components/TheFooter';

export default {
	name: 'App',

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

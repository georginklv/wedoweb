<template>
	<v-app>
		<div class="background-wrapper">
			<TheHeader />
			<WeKnowWeb />
			<OurProjects />
			<TheBlog />
			<TheQuestions />
		</div>
	</v-app>
</template>

<script>
import TheHeader from '../components/TheHeader';
import WeKnowWeb from '../components/WeKnowWeb';
import OurProjects from '../components/OurProjects';
import TheBlog from '../components/TheBlog';
import TheQuestions from '../components/TheQuestions';
export default {
	name: 'Home',

	components: {
		TheHeader,
		WeKnowWeb,
		OurProjects,
		TheBlog,
		TheQuestions,
	},
	metaInfo: {
		title: 'We do web',
		// override the parent template and just use the above title only
		titleTemplate: null,
	},
	data: () => ({
		//
	}),
};
</script>

<style scoped lang="scss">
.background-wrapper {
	background-image: url('../assets/stillBackground.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>

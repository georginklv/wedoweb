<template>
	<v-app>
		<TheHeader />
		<WeKnowWeb />
		<OurProjects />
		<TheBlog />
		<TheQuestions />
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

	data: () => ({
		//
	}),
};
</script>

<style scoped lang="scss"></style>

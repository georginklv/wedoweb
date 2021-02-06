<template>
	<div class="background-wrapper">
		<GoBack />

		<v-layout column align-center justify-center>
			<img :src="require(`@/assets/${blog.image}`)" :alt="blog.name" />
			<h1 class="title-blog">
				{{ blog.name }}
			</h1>
			<p>{{ blog.description }}</p>
			<p>{{ blog.description2 }}</p>
			<p>{{ blog.description3 }}</p>
			<p>{{ blog.description4 }}</p>
		</v-layout>
	</div>
</template>
<script>
import storeBlogs from '@/data/storeBlogs';
import GoBack from '@/components/GoBack';

export default {
	components: {
		GoBack,
	},
	data() {
		return {};
	},
	props: {
		slug: {
			type: String,
			required: true,
		},
	},
	computed: {
		blog() {
			return storeBlogs.blogs.find((blog) => blog.slug === this.slug);
		},
	},
};
</script>

<style scoped>
img {
	max-width: 750px;
	height: auto;
	width: 100%;
	border-radius: 30px;
}

p {
	margin: 0 50px 50px 50px;
	font-size: 20px;
	text-align: left;
}

.title-blog {
	font-size: 3em;
	margin: 20px;
}
</style>

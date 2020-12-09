<template>
	<div>
		<GoBack />
		<section class="destinations">
			<h1>
				{{ blog.name }}
			</h1>
			<div class="blog-details">
				<img :src="require(`@/assets/${blog.image}`)" :alt="blog.name" />
				<p>{{ blog.description }}</p>
				asdadasdasd
			</div>
		</section>
	</div>
</template>
<script>
import store from '@/store';
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
			return store.blogs.find((blog) => blog.slug === this.slug);
		},
	},
};
</script>

<style scoped>
img {
	max-width: 600px;
	height: auto;
	width: 100%;
	max-height: 400px;
}
.experiences {
	padding: 40px 0;
}
.destination-details {
	display: flex;
	justify-content: space-between;
}
p {
	margin: 0 40px;
	font-size: 20px;
	text-align: left;
}
.cards {
	display: flex;
	justify-content: space-between;
}
.cards img {
	max-height: 200px;
}
.card {
	padding: 0 20px;
	position: relative;
}
.card__text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	font-size: 25px;
	font-weight: bold;
	text-decoration: none;
}
</style>

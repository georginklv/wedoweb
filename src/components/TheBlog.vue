<template>
	<v-app>
		<div class="wrapper mt-16">
			<v-col class="pa-0">
				<div class="title">
					<p class="font-weight-medium text-uppercase">Our</p>
					<p class="font-weight-black text-uppercase">Blog</p>
					<div class="line"></div>
				</div>
				<v-row class="card-wrapper my-10">
					<hooper :autoPlay="true" :playSpeed="7000" :itemsToShow="1">
						<slide :key="blog.id" v-for="blog in blogs">
							<img :src="require(`@/assets/${blog.image}`)" />
						</slide>
					</hooper>
				</v-row>
				<v-row class="card-wrapper my-10">
					<v-btn to="/blog" color="orange" class="rounded-pill" text>
						blog
					</v-btn>
				</v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
import storeBlogs from '@/data/storeBlogs';
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
	components: {
		Hooper,
		Slide,
	},
	data() {
		return {
			blogs: storeBlogs.blogs,
		};
	},
	methods: {
		asd(blog) {
			console.log(blog);
		},
	},
};
</script>

<style lang="scss" scoped>
.hooper-track {
	padding-left: 0px !important;
}
.hooper {
	width: 100%;
	height: 100%;

	li,
	img {
		width: 100% !important;
		height: 100%;
	}
}
.hooper-track {
	padding-left: 0px !important ;
}
.v-btn {
	background-color: #ff4f40;
	padding: 10px 50px !important;
	color: #fff !important;
	&:active,
	&:focus,
	&:hover {
		color: #fff !important;
		background-color: #301aff !important;
	}
}

.row {
	display: flex;
	flex-wrap: wrap !important;
	flex: 0 1 auto;
	justify-content: space-around;
}
</style>

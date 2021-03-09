<template>
	<v-app>
		<div class="wrapper mt-16">
			<v-col class="pa-0">
				<div class="title" data-aos="fade-up" data-aos-duration="1000">
					<p class="font-weight-medium text-uppercase">Our</p>
					<p class="font-weight-black text-uppercase">Blog</p>
					<div class="line"></div>
				</div>
				<v-row class="card-wrapper my-10">
					<v-carousel cycle>
						<v-carousel-item
							:key="blog.id"
							v-for="blog in blogs"
							reverse-transition="fade-transition"
							transition="fade-transition"
						>
							<img :src="require(`@/assets/${blog.image}`)"
						/></v-carousel-item>
					</v-carousel>
				</v-row>
				<v-row class="card-wrapper my-10">
					<v-btn to="/blog" color="orange" class="rounded-pill" 
					text data-aos="zoom-in" data-aos-duration="1500">
						blog
					</v-btn>
				</v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
import storeBlogs from '@/data/storeBlogs';

export default {
	components: {},
	data() {
		return {
			blogs: storeBlogs.blogs,
		};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
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
img {
	height: 100%;
}
</style>

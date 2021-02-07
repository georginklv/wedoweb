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
					<v-carousel>
						<v-carousel-item
							v-for="(item, i) in items"
							:key="i"
							:src="item.src"
							reverse-transition="fade-transition"
							transition="fade-transition"
						></v-carousel-item></v-carousel
				></v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					src: './assets/needweb.png',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
				},
			],
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
.row {
	display: flex;
	flex-wrap: wrap !important;
	flex: 0 1 auto;
	justify-content: space-around;
}
</style>

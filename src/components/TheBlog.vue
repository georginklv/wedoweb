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
					<v-carousel
						cycle
						height="400"
						hide-delimiter-background
						show-arrows-on-hover
						interval="4000"
						vertical
						vertical-delimiters
					>
						<v-carousel-item v-for="(slide, i) in slides" :key="i">
							<v-sheet :color="colors[i]" height="100%">
								<v-row class="fill-height" align="center" justify="center">
									<div class="display-3">{{ slide }} Slide</div>
								</v-row>
							</v-sheet>
						</v-carousel-item>
					</v-carousel></v-row
				>
			</v-col>
		</div>
	</v-app>
</template>

<script>
export default {
	props: {
		cycle: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
			slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
		};
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

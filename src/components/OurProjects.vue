<template>
	<v-app>
		<div class="wrapper mt-16">
			<v-col class="pa-0">
				<div class="title">
					<p class="font-weight-medium text-uppercase">Our</p>
					<p class="font-weight-black text-uppercase">Projects</p>
					<div class="line"></div>
				</div>
				<v-row class="card-wrapper my-10">
					<vue-video-section
						:elementId="'header-background-video'"
						:ref="'header-background-video'"
						:mp4Source="require('../assets/Animated_iMac_MockupsForFree.mp4')"
						:mobileBreakpoint="992"
						:desktopHeight="550"
						:mobileHeight="450"
						:playsinline="true"
						:loop="true"
						:autoplay="true"
						:autobuffer="true"
						:muted="true"
					>
					</vue-video-section>
				</v-row>
				<v-row class="card-wrapper my-10">
					<v-btn color="orange" class="rounded-pill" text>
						Explore
					</v-btn>
				</v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
import 'vue-video-section/dist/vue-video-section.css';
import VueVideoSection from 'vue-video-section';
export default {
	components: {
		VueVideoSection,
	},

	data: () => ({
		//
	}),
};
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	flex-wrap: wrap !important;
	flex: 0 1 auto;
	justify-content: space-around;
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
.vue-video-section__overlay-content-wrapper__background {
	background: unset !important;
	opacity: 1 !important;
	border: none !important;
}
</style>

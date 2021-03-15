<template>
	<v-app>
		<div class="wrapper mt-16">
			<v-col class="pa-0">
				<div class="title" data-aos="fade-up" data-aos-duration="500">
					<p class="font-weight-medium text-uppercase">Our</p>
					<p class="font-weight-black text-uppercase">Space</p>
					<div class="line"></div>
				</div>
				<v-container>
					<v-row class="card-wrapper my-10">
						<div class="frame">
							<div class="">
								<img src="../assets/mockUpWide.png" class="mock-up" />
							</div>
						</div>
					</v-row>
				</v-container>
				<v-row class="card-wrapper my-10">
					<v-btn
						to="/portfolio"
						color="orange"
						class="rounded-pill"
						text
						data-aos="zoom-in"
						data-aos-duration="1500"
					>
						portfolio
					</v-btn>
				</v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
export default {
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
@media screen and (max-width: 900px) {
	#planet {
		width: 70%;
	}
}
@media screen and (max-width: 670px) {
	.frame iframe {
		display: none;
	}
	.imageMobile {
		display: contents;
	}
	.mock-up {
		max-width: 1060px;
	}
}
</style>

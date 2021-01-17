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
					<div class="video-scroll">
						<img src="../assets/mockUpWide.png" class="mock-up" />
						<div class="img-box"></div>
					</div>
				</v-row>
				<v-row class="card-wrapper my-10">
					<v-btn to="/portfolio" color="orange" class="rounded-pill" text>
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
.video-scroll {
	display: flex;
	flex-direction: column;
	position: relative;
	box-shadow: 0 0 40px 0 #00000040;
	margin: 0 auto;
}
.img-box {
	z-index: 100;
    width: 564px;
    height: 338px;
    background: black;
    transition: ease-in-out 10s; 
    background: url(/vuejs-pwa/img/georginklvSite.0870ff71.png);
    background-size: cover;
    background-position: top;
    position: absolute;
    transform: translate(212%, 105px);
    cursor: pointer;
}
.img-box:hover {
	background-position: bottom;
}
.mock-up {
	z-index: 0;
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

@media screen and (max-width: 601px) {
	// .video-scroll {
	// 	background: url("../assets/mockUpMobile.png");
	// }
}
</style>

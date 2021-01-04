<template>
	<v-app>
		<div class="wrapper">
			<v-col cols="auto" class="pa-0">
				<div class="header-pic">
					<img src="../assets/headerText2.png" class="headerImg" alt="header-image" />
					<div class="morph"></div>
				</div>
				<v-row class="btn-wrapper">
					<div class="line"></div>
					<talk-button />
				</v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
import TalkButton from './TalkButton.vue';
export default {
	components: {
		TalkButton: TalkButton,
	},
};
</script>

<style scoped lang="scss">
.header-pic {
	display: flex;
	// height: 700px;
	flex-direction: column;
}

.headerImg {
	background-size: cover;
	width: 100%;
	background-repeat: no-repeat;
	position: relative;
	display: flex;
	margin: 0 0 0 -2vh;
	max-width: 1300px;
	z-index: 100;
}
.morph {
	max-width: 1300px;
	width: calc(100% - 107px);
	max-height: 1000px;
	height: calc(100% - 70px);
	content: '';
	border-radius: 54% 46% 42% 58% / 60% 58% 42% 40%;
	background: #9dfdc7; /* Old browsers */
	background: -moz-linear-gradient(-45deg, #9dfdc7 9%, #84f2cf 37%, #69e7d9 65%, #31cbeb 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(
		-45deg,
		#9dfdc7 9%,
		#84f2cf 37%,
		#69e7d9 65%,
		#31cbeb 100%
	); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(
		135deg,
		#9dfdc7 9%,
		#84f2cf 37%,
		#69e7d9 65%,
		#31cbeb 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	animation: wave 10s linear infinite;
	margin: -4vh 0 0 0;
	transform: rotate(11deg);
	z-index: 1;
	position: absolute;
}
.line {
	width: 500px;
}
.wrap {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
}

@keyframes wave {
	20% {
		border-radius: 45% 55% 60% 35%/ 50% 51% 49% 47%;
	}
	40% {
		border-radius: 45% 55% 49% 51%/ 36% 51% 49% 64%;
	}
	60% {
		border-radius: 60% 40% 57% 43%/ 47% 62% 38% 53%;
	}
	80% {
		border-radius: 60% 40% 32% 68%/ 38% 36% 64% 62%;
	}
}

// landscape
//.................................................
// 1366x768
// 1920x1080
// 1536x864
// 1440x900
// 1280x720

// tablet
//.................................................
// 768x1024
// 1280x800
// 800x1280
// 601x962
// 962x601

@media screen and (max-width: 962px) {
	.morph {
		margin: -3vh 0 0 0;
	}
}
@media screen and (max-width: 768px) {
	.morph {
		margin: -1vh 0 0 0;
	}
}
@media screen and (max-width: 601px) {
	.headerImg {
		width: 150%;
		margin: 0 0 0 -18vh;
	}
	.morph {
		max-width: 1300px;
		width: calc(170% - 107px);
		max-height: 1000px;
		height: calc(110% - 70px);
		margin: -10vh 0 0 -15vh;
	}
}

// mobile
//.................................................
// 360x640
// 375x667
// 414x896
// 360x780
// 375x812

@media screen and (max-width: 450px) {
	.headerImg {
		width: 200%;
		margin: 0 0 0 -13vh;
	}
	.morph {
		max-width: 1300px;
		width: calc(170% - 107px);
		max-height: 1000px;
		height: calc(110% - 70px);
		margin: -8vh 0 0 -8vh;
		transform: rotate(2deg);
	}
}
@media screen and (max-width: 375px) {
	.headerImg {
		width: 200%;
		margin: 0 0 0 -13vh;
	}
	.morph {
		max-width: 1300px;
		width: calc(170% - 107px);
		max-height: 1000px;
		height: calc(110% - 70px);
		margin: -5vh 0 0 -8vh;
		transform: rotate(7deg);
	}
}
</style>

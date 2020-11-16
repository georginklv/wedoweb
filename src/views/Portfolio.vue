<template>
	<v-app>
		<div class="main">
			<div class="parallax">
				<div class="fixed">
					<v-layout justify-center>
						<v-flex>
							<v-card shaped class="elevation-0">
								<v-container grid-list-xl>
									<v-layout row wrap>
										<v-flex v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
											<v-card>
												<v-img
													:src="card.src"
													height="250px"
													@mouseenter="card.showDetails = true"
													@mouseleave="card.showDetails = false"
												>
													<v-card-actions class="description" v-show="card.showDetails">
														<h3 class="discription-title">{{ card.title }}</h3>
														<span class="discription-info">{{ card.description }}</span>
														<v-btn class="discription-img">Demo</v-btn>
													</v-card-actions>
												</v-img>
											</v-card>
										</v-flex>
									</v-layout>
								</v-container>
							</v-card>
						</v-flex>
					</v-layout>
				</div>
				<div class="parallax__layer parallax__layer--back">
					<div class="starfield">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="parallax__layer parallax__layer--back2">
					<div class="starfield">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="parallax__layer parallax__layer--back3">
					<div class="starfield">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="parallax__layer parallax__layer--base">
					<div class="starfield">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		cards: [
			{
				title: 'Pre-fab homesdd',
				src: '../assets/ux.png',
				flex: 11,
				description: 'Random Image',
				showDetails: false,
			},
			{
				title: 'Pre-fab homes',
				src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
				flex: 11,
				description: 'House Image',
				showDetails: false,
			},
			{
				title: 'Favorite road trips',
				src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
				flex: 11,
				description: 'Road Image',
				showDetails: false,
			},
			{
				title: 'Best airlines',
				src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
				flex: 11,
				description: 'Plane Image',
				showDetails: false,
			},
		],
		hover: false,
		hover2: false,
	}),
	methods: {},
};
</script>

<style lang="scss" scoped>
.v-card {
	background: unset !important;
}
.main {
	/*   background: linear-gradient(135deg, #3e028c -50%, #000 100%); */
	background-image: linear-gradient(
		135deg,
		#000a4f 0%,
		#001050 25%,
		#0a1163 50%,
		#46193d 75%,
		#0a090d 100% 100%
	) !important;
}
::-webkit-scrollbar {
	// display: none;
}
.fixed {
	position: fixed;
	color: white;
	font-weight: 700;
	text-align: center;
	width: 100vw;
	top: 10%;
	font-size: 24px;
	z-index: 1000;
}
.parallax {
	height: calc(100vh - (64px + 200px));
	overflow-x: hidden;
	overflow-y: auto;
	-webkit-perspective: 1px;
	perspective: 1px;
}

.parallax__layer {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

.parallax__layer--base {
	-webkit-transform: translateZ(0);
	transform: translateZ(0);
}

.parallax__layer--back {
	-webkit-transform: translateZ(-4px) scale(3);
	transform: translateZ(-4px) scale(3);
}
.parallax__layer--back2 {
	-webkit-transform: translateZ(-7px) scale(5);
	transform: translateZ(-7px) scale(5);
}
.parallax__layer--back3 {
	-webkit-transform: translateZ(-12px) scale(6);
	transform: translateZ(-12px) scale(6);
}
.starfield > * {
	background-size: 200px 200px;
	background-image: radial-gradient(2px 2px at 40px 60px, #ccc, rgba(0, 0, 0, 0)),
		radial-gradient(2px 2px at 20px 50px, #ddd, rgba(0, 0, 0, 0)),
		radial-gradient(2px 2px at 30px 100px, #eee, rgba(0, 0, 0, 0)),
		radial-gradient(2px 2px at 40px 60px, rgb(0, 255, 0), rgba(0, 0, 0, 0)),
		radial-gradient(2px 2px at 110px 90px, rgb(255, 0, 0), rgba(0, 0, 0, 0)),
		radial-gradient(2px 2px at 190px 150px, rgb(255, 200, 0), rgba(0, 0, 0, 0));
	background-repeat: repeat;
}
.starfield > * {
	position: absolute;
	top: -250%;
	left: 0;
	height: 500%;
	width: 100%;
}

.starfield span:nth-child(2) {
	transform: rotate(45deg);
}
.starfield span:nth-child(3) {
	transform: rotate(69deg);
}
.starfield span:nth-child(4) {
	transform: rotate(123deg);
}
.v-card {
	position: relative;
	transition: 2s linear;
}
.description {
	display: flex;
	align-items: center;
	justify-content: center;
	background: #0000008c;
	color: #fff;
	font-size: 2em;
	height: 100%;
	width: 100%;
	max-width: none;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
}
</style>

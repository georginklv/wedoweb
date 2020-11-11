<template>
	<v-app>
		<div class="wrapper mt-16">
			<v-layout justify-center>
				<v-flex xs12 sm6>
					<v-card>
						<v-container fluid grid-list-md>
							<v-layout row wrap>
								<v-flex v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
									<v-card>
										<v-img
											:src="card.src"
											height="200px"
											@mouseenter="card.showDetails = true"
											@mouseleave="card.showDetails = false"
										>
											<v-card-actions class="description" v-show="card.showDetails">
												{{ card.description }}
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
	</v-app>
</template>

<script>
export default {
	data: () => ({
		cards: [
			{
				title: 'Pre-fab homes',
				src: 'https://picsum.photos/800/800',
				flex: 6,
				description: 'Random Image',
				showDetails: false,
			},
			{
				title: 'Pre-fab homes',
				src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
				flex: 6,
				description: 'House Image',
				showDetails: false,
			},
			{
				title: 'Favorite road trips',
				src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
				flex: 6,
				description: 'Road Image',
				showDetails: false,
			},
			{
				title: 'Best airlines',
				src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
				flex: 6,
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
	position: relative;
	transition: 2s linear;
}
.description {
	display: flex;
	align-items: center;
	justify-content: center;
	background: #000;
	color: #fff;
	font-size: 2em;
	height: 100%;
	width: 100%;
}
</style>

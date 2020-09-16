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
					<v-col cols="auto">
						<v-card class="mx-auto" max-width="400">
							<v-img
								class="white--text align-end"
								height="200px"
								src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
							>
								<v-card-title>Top 10 Australian beaches</v-card-title>
							</v-img>

							<v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions>
								<v-btn color="orange" text>
									Share
								</v-btn>

								<v-btn color="orange" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="auto">
						<v-card class="mx-auto" max-width="400">
							<v-img
								class="white--text align-end"
								height="200px"
								src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
							>
								<v-card-title>Top 10 Australian beaches</v-card-title>
							</v-img>

							<v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions>
								<v-btn color="orange" text>
									Share
								</v-btn>

								<v-btn color="orange" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="auto">
						<v-card class="mx-auto" max-width="400">
							<v-img
								class="white--text align-end"
								height="200px"
								src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
							>
								<v-card-title>Top 10 Australian beaches</v-card-title>
							</v-img>

							<v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions>
								<v-btn color="orange" text>
									Share
								</v-btn>

								<v-btn color="orange" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	flex-wrap: wrap !important;
	flex: 0 1 auto;
	justify-content: space-between;
}
.v-btn {
	&:active,
	&:focus,
	&:hover {
		color: #fff !important;
		background-color: #301aff !important;
	}
}
</style>

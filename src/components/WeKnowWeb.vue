<template>
	<v-app>
		<div class="wrapper">
			<v-col class="pa-0">
				<div class="title">
					<p class="font-weight-medium text-uppercase">we</p>
					<p class="font-weight-black text-uppercase">know web</p>
					<div class="line"></div>
				</div>
				<p class="description">
					Izpolvame nai-novite tehnologii koito ni pozvolqvat nashite produkti da rabotqt bezuprechno i byrzo. Nashiq
					kod e chist i lesen za poddryjka,a dizaina ni e moderen i inovativen. Nashiq ekip ima kapacitet da syzdade
					vashiq brand ot 0.
				</p>
				<v-row class="card-wrapper">
					<v-col cols="auto">
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Web design & Development</v-list-item-title>

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
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Corporate Identity</v-list-item-title>

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
						<v-card class="mx-auto " max-width="400" elevation="0" disabled>
							<v-row justify="center">
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Online Shop</v-list-item-title>

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
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Website Re-design</v-list-item-title>

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
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">SEO Optimization</v-list-item-title>

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
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">UX/UI</v-list-item-title>

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
	justify-content: space-around;
}
.v-card {
	cursor: unset;
	transition: 0.2s linear;
	&:hover {
		background-color: #f6f6f6;
	}
}
.v-card__actions {
	padding: 16px;
}
</style>

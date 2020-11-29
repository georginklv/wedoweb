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
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="90"> <img src="../assets/web.png" alt="" /> </v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Web design & Development</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="90"><img src="../assets/corporate.png" alt="" /> </v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Corporate Identity</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" elevation="0" disabled>
							<v-row justify="center">
								<v-list-item-avatar tile size="90"><img src="../assets/shop.png" alt=""/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Online Shop</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="90"><img src="../assets/redesign.png" alt=""/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Website Re-design</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="90"><img src="../assets/seo.png" alt=""/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">SEO Optimization</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto rounded" max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="90"><img src="../assets/ux.png" alt=""/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">UX/UI</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
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
.theme--light.v-card {
	background-color: unset;
}
.v-card {
	cursor: unset;
	transition: 0.2s linear;
	&:hover {
		box-shadow: 0 0 35px -2px rgba(0, 0, 0, 0.2) !important;
		.v-list-item__avatar {
			transition: color 0.3s, transform 0.3s ease-out;
			transform: scale(1.1);
		}
	}
}
.v-card__actions {
	padding: 20px;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
	margin-right: 0 !important;
}
.boxes {
	justify-content: center;
	display: flex;
	text-align: center;
}
.v-btn {
	background-color: #ff4f40;
	padding: 0 30px !important;
}
.btn-wrapper {
	justify-content: center;
}
</style>

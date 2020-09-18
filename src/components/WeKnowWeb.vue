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
						<v-card class="mx-auto" max-width="400">
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
						<v-card class="mx-auto" max-width="400" min-width="400" hover rounded outlined>
							<v-list-item three-line>
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title class="headline mb-1">Mobile Web Development</v-list-item-title>
									<v-list-item-subtitle
										>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully
										v</v-list-item-subtitle
									>
								</v-list-item-content>
							</v-list-item>

							<v-card-actions>
								<v-btn shaped rounded class="white--text font-weight-black" color="#ff4f40" width="120px"
									>View Pricing</v-btn
								>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="auto">
						<v-card class="mx-auto" max-width="400" min-width="400" hover rounded outlined disabled>
							<v-list-item three-line>
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title class="headline mb-1">Online Shop</v-list-item-title>
									<v-list-item-subtitle
										>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully
										v</v-list-item-subtitle
									>
								</v-list-item-content>
							</v-list-item>

							<v-card-actions>
								<v-btn shaped rounded class="white--text font-weight-black" color="#ff4f40" width="120px">Soon</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="auto">
						<v-card class="mx-auto" max-width="400" min-width="400" hover outlined>
							<v-list-item three-line>
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title class="headline mb-1">UX/UI</v-list-item-title>
									<v-list-item-subtitle
										>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully
										v</v-list-item-subtitle
									>
								</v-list-item-content>
							</v-list-item>

							<v-card-actions>
								<v-btn shaped rounded class="white--text font-weight-black" color="#ff4f40" width="120px">Button</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="auto">
						<v-card class="mx-auto" max-width="400" min-width="400" hover rounded outlined>
							<v-list-item three-line>
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title class="headline mb-1">SEO</v-list-item-title>
									<v-list-item-subtitle
										>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully
										v</v-list-item-subtitle
									>
								</v-list-item-content>
							</v-list-item>

							<v-card-actions>
								<v-btn shaped rounded class="white--text font-weight-black" color="#ff4f40" width="120px">Button</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="auto">
						<v-card class="mx-auto" max-width="400" min-width="400" hover rounded outlined>
							<v-list-item three-line>
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title class="headline mb-1">Social Media Marketing</v-list-item-title>
									<v-list-item-subtitle
										>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully
										v</v-list-item-subtitle
									>
								</v-list-item-content>
							</v-list-item>

							<v-card-actions>
								<v-btn shaped rounded class="white--text font-weight-black" color="#ff4f40" width="120px"
									>View Pricing</v-btn
								>
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
}
.v-card__actions {
	padding: 16px;
}
</style>

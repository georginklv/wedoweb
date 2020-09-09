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
						<v-card class="mx-auto" max-width="400" min-width="400" hover rounded outlined>
							<v-list-item three-line>
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title class="headline mb-1">First type</v-list-item-title>
									<v-list-item-subtitle
										>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully
										v</v-list-item-subtitle
									>
								</v-list-item-content>
							</v-list-item>

							<v-card-actions>
								<v-btn text>Button</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="auto">
						<v-card class="mx-auto" max-width="400" min-width="400" hover rounded outlined>
							<v-list-item three-line>
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title class="headline mb-1">First type</v-list-item-title>
									<v-list-item-subtitle
										>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully
										v</v-list-item-subtitle
									>
								</v-list-item-content>
							</v-list-item>

							<v-card-actions>
								<v-btn text>Button</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col cols="auto">
						<v-card class="mx-auto" max-width="400" min-width="400" hover rounded outlined>
							<v-list-item three-line>
								<v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title class="headline mb-1">First type</v-list-item-title>
									<v-list-item-subtitle
										>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully
										v</v-list-item-subtitle
									>
								</v-list-item-content>
							</v-list-item>

							<v-card-actions>
								<v-btn text>Button</v-btn>
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
</style>

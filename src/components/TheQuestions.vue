<template>
	<v-app>
		<div class="wrapper mt-16">
			<v-col class="pa-0">
				<div class="title">
					<p class="font-weight-black text-uppercase">FAQ</p>
					<div class="line"></div>
				</div>
				<v-row class="card-wrapper my-10">
					<v-col cols="12">
						<v-expansion-panels accordion>
							<v-expansion-panel v-for="(item, i) in 5" :key="i">
								<v-expansion-panel-header>Item</v-expansion-panel-header>
								<v-expansion-panel-content>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat.
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels></v-col
					>
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
</style>

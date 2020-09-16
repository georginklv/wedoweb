<template>
	<v-app>
		<div class="wrapper mt-16">
			<v-col class="pa-0">
				<div class="title">
					<p class="font-weight-medium text-uppercase">the</p>
					<p class="font-weight-black text-uppercase">questions</p>
					<div class="line"></div>
				</div>
				<v-row class="card-wrapper my-10">
					<v-col cols="auto"> </v-col>
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

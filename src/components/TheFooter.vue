<template>
	<v-footer>
		<v-row justify="center">
			<v-col cols="4">
				<div class="content-wrapper">
					<h2>We Do Web</h2>
					<p>
						We are a creative web design studio which develops boutique websites, awesome brands and graphic design.
					</p>
				</div>
			</v-col>

			<v-col cols="3">
				<div class="">
					<h2>Follow us</h2>
					<v-icon>mdi-instagram</v-icon>
					<v-icon>mdi-facebook</v-icon>
				</div>
			</v-col>
		</v-row>
		<v-row justify="center">
			<span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
			<img src="../assets/logoHorizontal50x146.svg" alt="" />
		</v-row>
	</v-footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.row {
	width: 100%;
}
.footer {
	flex-direction: column;
}
img {
	width: 80px;
}
.content-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}
.v-btn {
	min-width: 50px !important;
	&:before {
		background-color: transparent !important;
	}
	&:hover {
		background-color: transparent !important;
		color: #301aff !important;
	}
}
</style>

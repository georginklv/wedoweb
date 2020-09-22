<template>
	<v-footer>
		<v-row justify="center" align="center">
			<v-col cols="3">
				<h2>We Do Web</h2>
			</v-col>
			<v-col cols="3">
				<h2>Menu</h2>
			</v-col>
			<v-col cols="3"> </v-col>
			<v-col cols="3">
				<h2>Follow us</h2>
				<v-icon>mdi-instagram</v-icon>
				<v-icon>mdi-instagram</v-icon>
				<v-icon>mdi-instagram</v-icon>
				<v-icon>mdi-instagram</v-icon>
			</v-col>
		</v-row>
		<v-row justify="center" align="center">
			<span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
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
</style>

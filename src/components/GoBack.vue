<template>
	<span class="go-back">
		<v-btn class="mx-2" fab dark large color="purple" @click="goBack">
			<v-icon dark>
				mdi-arrow-left
			</v-icon>
		</v-btn>
	</span>
</template>

<script>
export default {
	methods: {
		goBack() {
			return this.$router.go(-1);
		},
	},
};
</script>

<style scoped>
.go-back {
	padding: 10px 0;
	display: flex;
	cursor: pointer;
}
button {
	border: 0;
}
</style>

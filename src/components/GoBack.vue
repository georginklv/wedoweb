<template>
	<span class="go-back">
		<v-btn color="teal accent-3" @click="goBack">go back</v-btn>
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
	padding-top: 10px;
	display: flex;
	cursor: pointer;
}
button {
	border: 0;
}
</style>

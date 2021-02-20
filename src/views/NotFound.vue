<template>
	<div class="style-notfound">
		<h1>Not Found</h1>
		<p>
			Oops we couldn't find that page. Try going
			<router-link :to="{ name: 'Home' }">home</router-link>
		</p>
	</div>
</template>
<style scoped>
.style-notfound {
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	height: 70vh;
}
</style>

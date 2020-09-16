<template>
	<v-app>
		<div class="wrapper">
			<v-col cols="auto" class="pa-0">
				<img src="../assets/headerPic.png" class="headerImg" alt="header-image" />
				<v-row class="btn-wrapper">
					<div class="line"></div>
					<v-btn shaped rounded class="white--text font-weight-black" color="#ff4f40" width="120px">let's talk </v-btn>
				</v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.headerImg {
	background-size: cover;
	width: 100%;
	background-repeat: no-repeat;
	position: relative;
}
.line {
	width: 500px;
}
.v-btn {
	font-size: 20px !important;
	top: 10px !important;
}
.btn-wrapper {
	position: relative;
	top: -80px;
}
</style>

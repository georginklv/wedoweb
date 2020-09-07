<template>
	<v-app>
		<div class="wrapper">
			<v-col cols="auto" class="pa-0">
				<img src="../assets/headerPic.png" class="headerImg" alt="header-image" />
				<v-row class="btn-wrapper">
					<div class="line"></div>
					<v-btn shaped rounded class="white--text font-weight-black" color="orange" width="120px">let's talk </v-btn>
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
.v-btn {
	font-size: 20px !important;
	top: 10px !important;
	&:active,
	&:focus,
	&:hover {
		background-color: blue !important;
	}
}
.btn-wrapper {
	position: relative;
	top: -80px;
}
</style>

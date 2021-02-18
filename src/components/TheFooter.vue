<template>
	<v-footer>
		<div class="footer-wrapper">
			<v-col lg="4" md="4" sm="6" xs="12">
				<div class="content-wrapper">
					<h2>We Do Web</h2>
					<p>
						We are a creative web design studio with individual approach and eye for the detail. <br>
						We think, we design, we develop, we seek new ideas and solutions and that is what drives us forward. 
					</p>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6" xs="12">
				<div>
					<h2>Follow us</h2>
					<v-btn
						icon
						large
						color="purple"
						target="_blank"
						href="https://www.instagram.com/wedoweb.website/"
					>
						<v-icon>mdi-instagram</v-icon>
					</v-btn>
					<v-btn
						icon
						large
						color="blue"
						target="_blank"
						href="https://www.facebook.com/Wedoweb.website"
					>
						<v-icon>mdi-facebook</v-icon>
					</v-btn>
				</div>
			</v-col>
		</div>
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
.footer-wrapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
}
.footer {
	flex-direction: column;
	max-height: 170px;
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
@media (max-width: 768px) {
	.footer-wrapper {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}
</style>

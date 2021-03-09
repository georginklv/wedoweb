<template>
	<v-footer>
		<div class="footer-wrapper">
			<v-col lg="4" md="4" sm="6" xs="12">
				<div class="content-wrapper">
					<h4>We Do Web</h4>
					<p>
						We are a creative web design studio with individual approach and eye for the detail. <br>
						We think, we design, we develop, we seek new ideas and solutions and that is what drives us forward. 
					</p>
					<v-row justify="left" class="logoyear">
						<img src="../assets/logoHorizontal50x146.svg" alt="" class="logo"/>
						<span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
					</v-row>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6" xs="12">
				<div>
					<h4>Follow us</h4>
					<div class="social">
						<v-btn
							icon
							large
							color="purple"
							target="_blank"
							href="https://www.instagram.com/wedoweb.website/"
						>
							<v-icon class="insta">mdi-instagram</v-icon>
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
					<div class="contacts">
						<div class="call">
							<h4>Contact us</h4>
							<div class="digits">
								<v-icon 
									class="phone"
									color="blue darken-2"
									small
								>
								mdi-phone
								</v-icon>
								<p>+359 878 67 48 25</p>
							</div>
						</div>
						<div class="mail">
							<div class="digits">
								<v-icon 
									class="msg"
									color="blue darken-2"
									small
								>
								mdi-email-multiple-outline
								</v-icon>
									<p class="mails">georginklv@wedoweb.info</p>
							</div>
							<div class="digits">
								<v-icon 
									class="msg"
									color="blue darken-2"
									small
								>
								mdi-email-multiple-outline
								</v-icon>
									<p class="mails">diyanarsv@wedoweb.info</p>
							</div>
						</div>
					</div>
				</div>
			</v-col>
		</div>
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
.social {
	margin-left: -14px;
}
.logo {
	transform: translateY(-9px);
}
.logoyear {
	transform: translateX(10px);
	filter: invert(40%) sepia(30%) saturate(2333%) hue-rotate(210deg) brightness(91%) contrast(150%);
}
.digits {
	display: flex;
	flex-direction: row;
}
.mail {
	margin-top: -15px;
}
.mails {
	margin-bottom: 0px;
}
.phone {
	transform: translateY(-5px);
}
.msg {
	margin-right: 5px;
	transform: translateY(5px);
}
.footer {
	flex-direction: column;
	max-height: 170px;
}
img {
	width: 110px;
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

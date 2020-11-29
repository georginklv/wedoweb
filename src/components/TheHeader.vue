<template>
	<v-app>
		<div class="wrapper">
			<v-col cols="auto" class="pa-0">
				<!-- <div class="wrap">
					<div class="shape"></div>
					<div class="shape"></div>
					<div class="shape"></div>
					<div class="shape"></div>
					<div class="shape"></div>
					<div class="shape"></div>
				</div> -->
				<!-- <img src="../assets/greenBubble.png" class="headerImg SecondaryImg" alt="header-image" /> -->
				<img src="../assets/headerText2.png" class="headerImg" alt="header-image" />
				<v-row class="btn-wrapper">
					<div class="line"></div>
					<v-row>
						<v-dialog v-model="dialog" persistent max-width="600px" class="pa-8">
							<template v-slot:activator="{ on, attrs }">
								<v-btn
									chaped
									rounded
									class="white--text font-weight-black"
									color="#ff4f40"
									width="120px"
									v-bind="attrs"
									v-on="on"
								>
									let's talk
								</v-btn>
							</template>
							<v-card>
								<form
									class="gform"
									method="POST"
									action="https://script.google.com/macros/s/AKfycbxrlj1HqBSAePhj8V2DEpapYJd5zP-fN8PaN0GEdslr4I1mE31Z/exec"
								>
									<v-card-title>
										<span class="headline mb-4">Information about your project</span>
										<div class="line form-line mb-53"></div>
									</v-card-title>
									<v-card-text>
										<v-container class="pa-0">
											<v-col class="pa-0" cols="12">
												<small>*indicates required field</small>
												<v-text-field
													class="mt-1"
													label="What is your company main activity?*"
													placeholder=""
													outlined
												></v-text-field>
												<v-autocomplete
													v-model="values"
													:items="items"
													outlined
													chips
													label="What kind of services interest you the most?"
													multiple
												></v-autocomplete>
												<v-text-field class="mt-1" label="Other" placeholder="" outlined></v-text-field>
												<v-text-field
													class="mt-1"
													label="Whats your project budget (leva)?*"
													placeholder="Numbers only"
													outlined
												></v-text-field>
												<v-menu
													ref="menu"
													v-model="menu"
													:close-on-content-click="false"
													:return-value.sync="date"
													transition="scale-transition"
													offset-y
													min-width="290px"
												>
													<template v-slot:activator="{ on, attrs }">
														<v-text-field
															v-model="date"
															label="What's your deadline?*"
															prepend-icon="mdi-calendar"
															readonly
															v-bind="attrs"
															v-on="on"
														></v-text-field>
													</template>
													<v-date-picker v-model="date" no-title scrollable>
														<v-spacer></v-spacer>
														<v-btn text color="primary" @click="menu = false">Cancel</v-btn>
														<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
													</v-date-picker>
												</v-menu>
												<span class="headline mb-4">Contacts</span>
												<div class="line form-line mb-5"></div>
												<v-text-field class="mt-3" label="Name:*" placeholder="First & Last" outlined></v-text-field>
												<v-text-field class="mt-1" label="Phone*" outlined></v-text-field>
												<v-text-field class="mt-1" label="Email*" outlined></v-text-field>
												<v-text-field class="mt-1" label="Website" outlined></v-text-field>
												<span class="headline mb-4">GDPR</span>
												<div class="line form-line mb-3"></div>
												<v-checkbox
													v-model="checkbox"
													label="Become acquainted with personal data protection and agree to the data I have provided to be processed for the purpose of the inquiry."
												></v-checkbox>
											</v-col>
										</v-container>
									</v-card-text>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
										<v-btn color="blue darken-1" text @click="dialog = false">Submit</v-btn>
									</v-card-actions>
								</form>
							</v-card>
						</v-dialog>
					</v-row>
				</v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		values: [],
		checkbox: false,
		date: new Date().toISOString().substr(0, 10),
		menu: false,
		dialog: false,
		items: [
			'Web Design & Development',
			'Corporate Identity',
			'Web Site Re-design',
			'SEO Optimization',
			'UX/UI',
			'Online Shop',
			'Social Media Marketing',
			'Other',
		],
	}),
};
</script>

<style scoped lang="scss">
.headerImg {
	background-size: cover;
	width: 100%;
	background-repeat: no-repeat;
	position: relative;
	display: flex;
	margin: 0 auto;
	max-width: 1300px;
}
.SecondaryImg {
	position: absolute;
	max-width: 1450px;
	-webkit-animation: heart-pulse 3s infinite ease-out;
	animation: heart-pulse 3s infinite ease-out;
}
.line {
	width: 500px;
}
.wrap {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
}
// .shape:nth-of-type(1) {
// 	width: 1590px;
// 	height: 730px;
// 	top: -80px;
// 	left: 0px;
// 	position: absolute;
// 	background: linear-gradient(64deg, #f34868 23%, #f24768 23%, #9e00ec 79%);
// 	-webkit-animation: wave-data-v-9a9f6144 8s ease-in-out infinite;
// 	animation: wave-data-v-9a9f6144 8s ease-in-out infinite;
// 	transform: rotate3d(0, 4, 1, 28deg);
// }
// .shape:nth-of-type(2) {
// 	width: 800px;
// 	height: 800px;
// 	position: absolute;
// 	top: -200px;
// 	left: -400px;
// 	opacity: 0.2;
// 	z-index: -1;
// 	background-color: #7998ff;
// 	animation: wave 5s ease-in-out infinite;
// }
// .shape:nth-of-type(3) {
// 	width: 500px;
// 	height: 500px;
// 	position: absolute;
// 	bottom: -25%;
// 	right: -5%;
// 	opacity: 0.3;
// 	z-index: -1;
// 	background-color: #379eff;
// 	animation: wave 12s ease-in-out infinite;
// }
// .shape:nth-of-type(4) {
// 	width: 250px;
// 	height: 250px;
// 	position: absolute;
// 	bottom: -120px;
// 	left: 20%;
// 	opacity: 0.4;
// 	z-index: -1;
// 	background-color: #fbff0d;
// 	animation: wave 6s ease-in-out infinite;
// }
// .shape:nth-of-type(5) {
// 	width: 350px;
// 	height: 350px;
// 	position: absolute;
// 	top: -8px;
// 	left: 10%;
// 	opacity: 0.2;
// 	z-index: -1;
// 	background-color: #ff4343;
// 	animation: wave 15s ease-in-out infinite;
// }
// .shape:nth-of-type(6) {
// 	width: 100px;
// 	height: 100px;
// 	position: absolute;
// 	top: 40px;
// 	left: 25%;
// 	transform: rotate(90deg);
// 	opacity: 0.5;
// 	z-index: -1;
// 	background-color: #ff4343;
// 	animation: wave 10s ease-in-out infinite;
// }
// @keyframes wave {
// 	0%,
// 	100% {
// 		border-radius: 26% 74% 27% 63% / 47% 71% 39% 63%;
// 	}
// 	50% {
// 		border-radius: 46% 84% 47% 83% / 67% 81% 59% 83%;
// 	}
// }
@keyframes heart-pulse {
	from {
		transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
	to {
		transform: scale(1);
	}
}
.v-btn {
	font-size: 20px !important;
	top: 10px !important;
	&:hover {
		color: #fff !important ;
	}
}
.v-application .blue--text.text--darken-1 {
	&:hover {
		color: #fff !important ;
	}
}
.btn-wrapper {
	position: relative;
	top: -150px;
}
.form-line {
	width: 280px;
	height: 5px;
}
.v-card {
	padding: 10px;
}
</style>

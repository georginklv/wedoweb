<template>
	<v-app>
		<v-row>
			<v-dialog
				v-model="dialog"
				persistent
				max-width="600px"
				class="pa-8 dialog-box"
			>
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
					<form @submit.prevent="sendEmail">
						<v-row>
							<v-card-title>
								<span class="headline mb-4"
									>Information about your project</span
								>
								<div class="line form-line mb-53"></div>
							</v-card-title>
							<v-btn icon @click="dialog = false">
								<v-icon>mdi-close</v-icon>
							</v-btn>
						</v-row>
						<v-card-text>
							<v-container class="pa-0">
								<v-col class="pa-0" cols="12">
									<small>*indicates required field</small>
									<v-text-field
										class="mt-1"
										label="What is your company main activity?*"
										placeholder=""
										outlined
										name="activity"
									></v-text-field>
									<v-autocomplete
										v-model="values"
										:items="items"
										outlined
										chips
										label="What kind of services interest you the most?"
										multiple
										name="interest"
									></v-autocomplete>
									<v-text-field
										class="mt-1"
										label="Other"
										placeholder=""
										outlined
										name="other activity"
									></v-text-field>
									<v-text-field
										class="mt-1"
										label="Whats your project budget (leva)?*"
										placeholder="Numbers only"
										outlined
										name="budget"
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
												name="deadline"
											></v-text-field>
										</template>
										<v-date-picker v-model="date" no-title scrollable>
											<v-spacer></v-spacer>
											<v-btn text color="primary" @click="menu = false"
												>Cancel</v-btn
											>
											<v-btn text color="primary" @click="$refs.menu.save(date)"
												>OK</v-btn
											>
										</v-date-picker>
									</v-menu>
									<span class="headline mb-4">Contacts</span>
									<div class="line form-line mb-5"></div>
									<v-text-field
										class="mt-3"
										name="name"
										label="Name:*"
										placeholder="First & Last"
										outlined
									></v-text-field>
									<v-text-field
										class="mt-1"
										name="phone"
										label="Phone*"
										outlined
									></v-text-field>
									<v-text-field
										class="mt-1"
										name="email"
										label="Email*"
										outlined
									></v-text-field>
									<v-textarea
										outlined
										name="message"
										label="Message"
										class="mt-1"
									></v-textarea>
									<v-text-field
										class="mt-1"
										name="website"
										label="Website"
										outlined
									></v-text-field>
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
							<v-btn color="blue darken-1" text @click="dialog = false"
								>Close</v-btn
							>
							<v-btn
								color="blue darken-1 white--text"
								type="submit"
								value="Send"
								text
								@click="dialog = false"
								:disabled="!checkbox"
								>Submit</v-btn
							>
						</v-card-actions>
					</form>
				</v-card>
			</v-dialog>
		</v-row>
	</v-app>
</template>

<script>
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init('user_qW52qoo8J4mejwWU8ndCk');
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
	methods: {
		sendEmail: (e) => {
			emailjs.sendForm('service_oceveqa', 'template_63mcyxs', e.target).then(
				(result) => {
					console.log('SUCCESS!', result.status, result.text);
				},
				(error) => {
					console.log('FAILED...', error);
				},
			);
		},
	},
};
</script>

<style scoped lang="scss">
.v-btn {
	font-size: 20px !important;
	top: 10px !important;
	z-index: 100;
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
	z-index: 100;
}
.form-line {
	width: 280px;
	height: 5px;
}
.v-card {
	padding: 15px;
}
.v-card.v-sheet {
	backdrop-filter: blur(9px);
	background: #ffffffa6;
}
.dialog-box {
	z-index: 1000;
}
@media screen and (max-width: 1200px) {
	.btn-wrapper {
		top: 0px;
	}
}
@media screen and (max-width: 800px) {
	.btn-wrapper {
		top: 0px;
	}
}
</style>

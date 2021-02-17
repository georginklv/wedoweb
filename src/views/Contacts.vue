<template>
	<div class="background-wrapper">
		<div class="wrapper">
			<div class="title">
				<p class="font-weight-black text-uppercase mt-10">Contact us</p>
				<div class="line mb-6"></div>
			</div>
			<v-row>
				<v-col cols="12" class="form-element ">
					<form
						@submit.prevent="sendEmail"
						ref="form"
						lazy-validation
						class=" mb-4 "
					>
						<v-col class="pa-0">
							<small>*indicates required field</small>
							<v-text-field
								class="mt-3"
								name="name"
								label="Name:*"
								placeholder="First & Last"
								outlined
								:rules="rules.textField"
							></v-text-field>
							<v-text-field
								class="mt-1"
								name="phone"
								label="Phone*"
								outlined
								:rules="rules.textField"
							></v-text-field>
							<v-text-field
								class="mt-1"
								name="email"
								label="Email*"
								outlined
								:rules="rules.email"
							></v-text-field>
							<v-textarea
								outlined
								name="message"
								label="Message"
								class="mt-1"
							></v-textarea>

							<span class="headline mb-4">GDPR</span>
							<div class="line form-line mb-3"></div>
							<small>*check the GDPR box if you want to continue</small>

							<v-checkbox
								v-model="checkbox"
								label="Become acquainted with personal data protection and agree to the data I have provided to be processed for the purpose of the inquiry."
							></v-checkbox>
							<v-btn
								color="blue darken-1 white--text  mb-4 "
								type="submit"
								value="Send"
								:disabled="!checkbox"
								>Submit</v-btn
							>
						</v-col>
					</form>

					<span class="headline mb-4 ">To contact us</span>
					<div class="line form-line mb-3"></div>
					<p><b>Phone: </b> 0878674825</p>
					<p>
						<b>Email: </b
						><a href="mailto:georginklv@wedoweb.info"
							>georginklv@wedoweb.info</a
						>
					</p>
				</v-col>
			</v-row>
		</div>
	</div>
</template>
<script>
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init('user_qW52qoo8J4mejwWU8ndCk');
export default {
	metaInfo: {
		// title will be injected into parent titleTemplate
		title: 'Contacts',
	},
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
		rules: {
			email: [
				(v) => !!v || 'E-mail is required',
				(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			textField: [(val) => (val || '').length > 0 || 'This field is required'],
		},
	}),
	methods: {
		sendEmail: (e) => {
			emailjs.sendForm('service_oceveqa', 'template_63mcyxs', e.target).then(
				(result) => {
					console.log('SUCCESS!', result.status, result.text);
					this.$refs.form.reset();
				},
				(error) => {
					console.log('FAILED...', error);
				},
			);
		},
	},
};
</script>

<style scoped>
.form-element {
	max-width: 600px;
}
</style>

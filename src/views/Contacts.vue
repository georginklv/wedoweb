<template>
	<div class="background-wrapper wrapper">
		<div class="title">
			<p class="font-weight-black text-uppercase mt-16">Contact us</p>
			<div class="line mb-16"></div>
		</div>
		<v-row>
			<v-col cols="6">
				<form @submit.prevent="sendEmail">
					<v-col class="pa-0">
						<small>*indicates required field</small>

						<v-text-field class="mt-3" name="name" label="Name:*" placeholder="First & Last" outlined></v-text-field>
						<v-text-field class="mt-1" name="phone" label="Phone*" outlined></v-text-field>
						<v-text-field class="mt-1" name="email" label="Email*" outlined></v-text-field>
						<v-textarea outlined name="message" label="Message" class="mt-1"></v-textarea>

						<span class="headline mb-4">GDPR</span>
						<div class="line form-line mb-3"></div>
						<small>*check the GDPR box if you want to continue</small>

						<v-checkbox
							v-model="checkbox"
							label="Become acquainted with personal data protection and agree to the data I have provided to be processed for the purpose of the inquiry."
						></v-checkbox>
						<v-btn color="blue darken-1 white--text" type="submit" value="Send" :disabled="!checkbox">Submit</v-btn>
					</v-col>
				</form>

				<span class="headline mb-4">To contact us</span>
				<div class="line form-line mb-3"></div>
				<p><b>Phone: </b> 0878674825</p>
				<p><b>Email: </b><a href="mailto:someone@yoursite.com">asdasd@asdasd.bg</a></p>
			</v-col>
		</v-row>
	</div>
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

<style scoped></style>

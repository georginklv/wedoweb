<template>
	<div class="background-wrapper wrapper">
		<div class="title">
			<p class="font-weight-black text-uppercase mt-16">Contact us</p>
			<div class="line mb-16"></div>
		</div>
		<v-row>
			<v-col md6 sm12 xs12>
				<form
					class="gform"
					method="POST"
					action="https://script.google.com/macros/s/AKfycbxrlj1HqBSAePhj8V2DEpapYJd5zP-fN8PaN0GEdslr4I1mE31Z/exec"
				>
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

					<v-btn color="blue darken-1 white--text">Submit</v-btn>
				</form>
			</v-col>
			<v-col md6 sm12 xs12>
				<h2>To contact us</h2>
				<p>phone: 0878674825</p>
				<p>email: asdasd@asdasd.bg</p>
			</v-col>
		</v-row>
	</div>
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

<style scoped></style>

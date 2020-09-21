<template>
	<v-app>
		<div class="wrapper">
			<v-col cols="auto" class="pa-0">
				<img src="../assets/headerPic.png" class="headerImg" alt="header-image" />
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
								<v-card-title>
									<span class="headline mb-4">Web Design & Development Offer</span>
									<div class="line form-line mb-3"></div>
								</v-card-title>
								<v-card-text>
									<v-container class="pa-0">
										<v-col class="pa-0" cols="12">
											<v-text-field label="Outlined" placeholder="Placeholder" outlined></v-text-field>

											<v-autocomplete :items="items" label="Interests" multiple></v-autocomplete>
											<v-autocomplete
												v-model="values"
												:items="items"
												outlined
												chips
												label="Outlined"
												multiple
											></v-autocomplete>
										</v-col>
									</v-container>
									<small>*indicates required field</small>
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
									<v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
								</v-card-actions>
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
		dialog: false,
		items: ["Skiing", "Ice hockey", "Soccer", "Basketball", "Hockey", "Reading", "Writing", "Coding", "Basejump"],
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
	top: -150px;
}
.form-line {
	width: 280px;
	height: 5px;
}
</style>

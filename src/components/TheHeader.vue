<template>
	<v-app>
		<div class="wrapper">
			<v-col cols="auto" class="pa-0">
				<img src="../assets/headerPic.png" class="headerImg" alt="header-image" />
				<v-row class="btn-wrapper">
					<div class="line"></div>
					<v-row>
						<v-dialog v-model="dialog" persistent max-width="600px">
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
									<span class="headline">User Profile</span>
								</v-card-title>
								<v-card-text>
									<v-container>
										<v-col cols="6">
											<v-text-field label="Legal first name*" required></v-text-field>
										</v-col>
										<v-col cols="6">
											<v-text-field
												label="Legal middle name"
												hint="example of helper text only on focus"
											></v-text-field>
										</v-col>
										<v-col cols="6">
											<v-text-field
												label="Legal last name*"
												hint="example of persistent helper text"
												persistent-hint
												required
											></v-text-field>
										</v-col>
										<v-col cols="6">
											<v-text-field label="Email*" required></v-text-field>
										</v-col>
										<v-col cols="6">
											<v-text-field label="Password*" type="password" required></v-text-field>
										</v-col>
										<v-col cols="6">
											<v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
										</v-col>
										<v-col cols="6">
											<v-autocomplete
												:items="[
													'Skiing',
													'Ice hockey',
													'Soccer',
													'Basketball',
													'Hockey',
													'Reading',
													'Writing',
													'Coding',
													'Basejump',
												]"
												label="Interests"
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
	}),
};
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

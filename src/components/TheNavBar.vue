<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" app temporary>
			<v-list dense>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-email</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Contact</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="indigo" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>
			<v-toolbar-title>We Do Web</v-toolbar-title>

			<v-row align="center" justify="end">
				<v-col cols="auto" class="pa-0 mx-2 ">
					<v-btn text to="/contacts" class="nav-btns d-none d-lg-block">Contact</v-btn>
				</v-col>
				<v-col cols="auto" class="pa-0 mx-2 ">
					<v-btn text to="/contacts" class="nav-btns d-none d-lg-block">Contact</v-btn>
				</v-col>
				<v-col cols="auto" class="pa-0 mx-2 ">
					<v-btn text to="/contacts" class="nav-btns d-none d-lg-block">Contact</v-btn>
				</v-col>
				<v-col cols="auto" class="pa-0 mx-2 ">
					<v-btn text to="/contacts" class="nav-btns d-none d-lg-block">Contact</v-btn>
				</v-col>
			</v-row>
		</v-app-bar>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: null,
	}),
};
</script>

<style lang="scss" scoped>
.nav-btns {
	// &:after {
	// 	content: '';
	// 	height: 10px;
	// 	width: 10px;
	// 	background-color: red;
	// 	top: 14px;
	// 	left: -5px;
	// 	bottom: 0;
	// 	border-radius: 20px;
	// 	position: absolute;
	// }
	background-color: unset;
	&:hover {
		background-color: #ff4f40 !important;
	}
}
.v-btn:before {
	background-color: unset;
}
@media (min-width: 1264px) {
	.v-application .d-lg-block {
		display: flex !important;
	}
}
</style>

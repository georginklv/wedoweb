<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" app temporary>
			<v-list>
				<v-list-item to="/" link>
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item to="/portfolio" link>
					<v-list-item-action>
						<v-icon>mdi-image-outline</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Portflio</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item to="/blog" link>
					<v-list-item-action>
						<v-icon>mdi-newspaper-variant</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Blog</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="#f5f5f5" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>
			<v-toolbar-title>
				<router-link to="/"> <img src="../assets/logoHorizontal50x146.svg" alt=""/></router-link
			></v-toolbar-title>

			<v-row align="center" justify="end">
				<v-col cols="auto" class="pa-0 mx-2 ">
					<v-btn text to="/contacts" class="nav-btns d-none d-lg-block">what we do</v-btn>
				</v-col>
				<v-col cols="auto" class="pa-0 mx-2 ">
					<v-btn text to="/portfolio" class="nav-btns d-none d-lg-block">portfolio</v-btn>
				</v-col>
				<v-col cols="auto" class="pa-0 mx-2 ">
					<v-btn text to="/blog" class="nav-btns d-none d-lg-block">blog</v-btn>
				</v-col>
				<v-col cols="auto" class="pa-0 mx-2 ">
					<v-btn text to="/contacts" class="nav-btns d-none d-lg-block">contact us</v-btn>
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
header {
	z-index: 1000 !important;
}
a {
	text-decoration: none;
	color: #000 !important;
	&:hover {
		color: #301aff !important;
	}
}
.v-app-bar {
	color: #000;
}
.nav-btns {
	color: #000;
	background-color: unset;
	&:hover {
		background-color: unset !important;
		color: #301aff !important;
	}
}
.v-btn:before {
	background-color: unset;
}
.v-btn--round .v-btn__content .v-icon {
	color: #000 !important;
}
img {
	width: 130px;
}
.v-list {
	margin-top: 50px;
}

@media (min-width: 1264px) {
	.v-application .d-lg-block {
		display: flex !important;
	}
}
</style>

<template v-slot:activator="{ on, attrs }">
	<v-app>
		<div class="wrapper background-wrapper">
			<div class="title">
				<p class="font-weight-black text-uppercase mt-16">Blog</p>
				<div class="line mb-16"></div>
			</div>

			<v-flex d-flex>
				<v-layout wrap justify-space-between>
					<v-flex class="box-wrapper" md4 sm6 xs12 v-for="blog in blogs" :key="blog.name">
						<v-card class="mx-auto " elevation="0">
							<v-row justify="center">
								<v-list-item-avatar
									><img :src="require(`@/assets/${blog.image}`)" :alt="blog.name"
								/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4 title-blog">{{ blog.name }}</v-list-item-title>
							<v-card-text class="text--primary description">
								<div>{{ blog.shortDescription }}</div>
							</v-card-text>
							<figure>
								<v-card-actions class="btn-wrapper">
									<v-btn color="white" class="rounded-pill" text>
										Explore
									</v-btn>
								</v-card-actions>
							</figure>
						</v-card>
					</v-flex>
				</v-layout>
			</v-flex>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
	color: #545454 !important;
}
.theme--light.v-card {
	background-color: unset;
}
.v-card {
	margin: 0px !important;
	border-radius: 10px 10px 0px 0px !important;
	cursor: unset;
	transition: 0.2s linear;
	&:hover {
		box-shadow: 0 0 35px -2px rgba(0, 0, 0, 0.2) !important;
		.v-list-item__avatar {
			transition: color 0.3s, transform 0.3s ease-out;
		}
	}
}
.v-card__actions {
	padding: 20px;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
	margin-right: 0 !important;
}

.v-btn {
	background-color: #ff4f40;
	padding: 0 30px !important;
}
.btn-wrapper {
	justify-content: center;
}
.v-avatar {
	max-width: 300px !important;
	width: 100% !important;
	height: 100% !important ;
	margin-top: 0px;
	border-radius: 10px 10px 0px 0px !important;
}
.box-wrapper {
	max-width: 300px;
	margin-bottom: 40px;
}
.title-blog {
	text-align: center;
	font-weight: 600;
	font-size: 2em !important;
}
.description {
	text-align: center;
	font-weight: 500;
	font-size: 1.2em !important;
	color: #ccc;
}
@media screen and (max-width: 600px) {
	.layout {
		justify-content: center !important;
	}
}
</style>

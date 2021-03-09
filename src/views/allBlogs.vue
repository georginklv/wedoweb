<template v-slot:activator="{ on, attrs }">
	<v-app>
		<div class="background-wrapper">
			<div class="wrapper">
				<div class="title" data-aos="fade-up" data-aos-duration="500">
					<p class="font-weight-black text-uppercase mt-16">Blog</p>
					<div class="line mb-16"></div>
				</div>

				<v-flex d-flex>
					<v-layout wrap justify-space-between>
						<v-flex
							class="box-wrapper"
							md4
							sm6
							xs12
							v-for="blog in blogs"
							:key="blog.name"
						>
							<v-card class="mx-auto " elevation="0">
								<router-link
									:to="{
										name: 'BlogDetails',
										params: { slug: blog.slug },
									}"
								>
									<!-- Avatar -->
									<v-row justify="center">
										<v-list-item-avatar
											><img
												:src="require(`@/assets/${blog.image}`)"
												:alt="blog.name"
										/></v-list-item-avatar>
									</v-row>

									<!-- Title -->
									<v-list-item-title class="mb-1 pa-3 title-blog">{{
										blog.name
									}}</v-list-item-title>
								</router-link>

								<!-- Descrition -->
								<v-card-text class="text--primary description">
									<div>{{ blog.shortDescription }}</div>
								</v-card-text>
								<figure>
									<router-link
										:to="{
											name: 'BlogDetails',
											params: { slug: blog.slug },
										}"
									>
										<!-- Button -->
										<v-card-actions class="btn-wrapper">
											<v-btn color="white" class="rounded-pill" text>
												Explore
											</v-btn>
										</v-card-actions>
									</router-link>
								</figure>
							</v-card>
						</v-flex>
					</v-layout>
				</v-flex>
			</div>
		</div>
	</v-app>
</template>

<script>
import storeBlogs from '@/data/storeBlogs.js';
export default {
	metaInfo: {
		// title will be injected into parent titleTemplate
		title: 'Blog page',
	},
	data() {
		return {
			blogs: storeBlogs.blogs,
		};
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
	height: 40px;
	min-width: 40px;
	width: 40px;
	max-height: 200px;
	overflow: hidden;
	justify-content: left !important;
}
.v-avatar img {
	display: flex !important;
	height: 210px !important;
	width: auto !important;
	min-height: auto !important;
	justify-content: left !important;
}
.box-wrapper {
	max-width: 300px;
	margin-bottom: 40px;
	margin-right: 10px;
}
.title-blog {
	text-align: center;
	font-weight: 600;
	font-size: 1.6em !important;
}
.description {
	text-align: center;
	font-weight: 500;
	font-size: 1.2em !important;
	color: #ccc;
}
@media screen and (max-width: 790px) {
	.layout {
		justify-content: center !important;
	}

	.line {
		width: 250px;
	}
}
</style>

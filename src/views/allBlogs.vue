<template v-slot:activator="{ on, attrs }">
	<v-app>
		<div class="wrapper background-wrapper">
			<v-col class="pa-0">
				<div class="title">
					<p class="font-weight-black text-uppercase mt-16">Blog</p>
					<div class="line mb-16"></div>
				</div>

				<v-row class="card-wrapper">
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" min-width="250" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar size="250" max-height="170"
									><img src="../assets/blogimg.jpg" alt=""
								/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">SEO Optimization</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" min-width="250" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar size="250" max-height="170"
									><img src="../assets/blogimg.jpg" alt=""
								/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">SEO Optimization</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" min-width="250" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar size="250" max-height="170"
									><img src="../assets/blogimg.jpg" alt=""
								/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">SEO Optimization</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" min-width="250" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar size="250" max-height="170"
									><img src="../assets/blogimg.jpg" alt=""
								/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">SEO Optimization</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" min-width="250" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar size="250" max-height="170"
									><img src="../assets/blogimg.jpg" alt=""
								/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">SEO Optimization</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" min-width="250" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar size="250" max-height="170"
									><img src="../assets/blogimg.jpg" alt=""
								/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">SEO Optimization</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Whitehaven Beach</div>

								<div>Whitsunday Island, Whitsunday Islands</div>
							</v-card-text>

							<v-card-actions class="btn-wrapper">
								<v-btn color="white" class="rounded-pill" text>
									Explore
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
				<div v-for="blog in blogs" :key="blog.name">
					<router-link
						:to="{
							name: 'BlogDetails',
							params: { slug: blog.slug },
						}"
					>
						<h2>{{ blog.name }}</h2>
					</router-link>
					<figure>
						<router-link
							:to="{
								name: 'BlogDetails',
								params: { slug: blog.slug },
							}"
						>
							<img :src="require(`@/assets/${blog.image}`)" :alt="blog.name" />
						</router-link>
					</figure>
				</div>
			</v-col>
		</div>
	</v-app>
</template>

<script>
import store from '@/store.js';
export default {
	data() {
		return {
			blogs: store.blogs,
		};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	flex-wrap: wrap !important;
	flex: 0 1 auto;
	justify-content: space-around;
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
.boxes {
	justify-content: center;
	display: flex;
	text-align: center;
}
.v-btn {
	background-color: #ff4f40;
	padding: 0 30px !important;
}
.btn-wrapper {
	justify-content: center;
}
.v-avatar {
	margin-top: 0px;
	border-radius: 10px 10px 0px 0px !important;
}
</style>

<template v-slot:activator="{ on, attrs }">
	<v-app>
		<div class="background-wrapper">
			<div class="wrapper">
				<div class="title" data-aos="fade-up" data-aos-duration="1000">
					<p class="font-weight-black text-uppercase mt-16">Portfolio</p>
					<div class="line mb-16"></div>
				</div>

				<v-flex d-flex>
					<v-layout wrap justify-space-between>
						<v-flex
							class=""
							md4
							sm12
							xs12
							v-for="project in projects"
							:key="project.title"
						>
							<v-card class="ma-3">
								<v-img
									:src="require(`@/assets/${project.image}`)"
									class="white--text "
									gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
									height="200px"
								>
									<div class="text-wrapper">
										<v-card-title v-text="project.title"></v-card-title>
										<v-card-text class="white--text description">
											<div>{{ project.description }}</div>
										</v-card-text>
									</div>
								</v-img>

								<v-card-actions>
									<v-spacer></v-spacer>

									<v-btn :href="project.demo" target="_blank"
										>go to site
									</v-btn>
								</v-card-actions>
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
import storePortfolio from '@/data/storePortfolio.js';

export default {
	metaInfo: {
		title: 'Portoflio',
	},
	data() {
		return {
			blogs: storeBlogs.blogs,
			projects: storePortfolio.projects,
		};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.line {
	width: 300px;
}
a {
	text-decoration: none;
	color: #545454 !important;
}
.text-wrapper {
	display: none;
	transition: 0.2s linear;
}
.v-card__title {
	font-size: 3rem;
	font-weight: 600;
	filter: drop-shadow(3px 4px 6px black);
}
.v-card__text {
	width: 100%;
	font-size: 1.6rem;
	margin-top: 20px;
	filter: drop-shadow(3px 4px 6px black);
}
.description {
	padding: 16px;
	line-height: 30px;
}
.v-card {
	border-radius: 10px !important;
	cursor: unset;
	transition: 0.2s linear;

	&:hover {
		box-shadow: 0 0 35px -2px rgba(0, 0, 0, 0.2) !important;
		.v-list-item__avatar {
			transition: color 0.3s, transform 0.3s ease-out;
		}
		.text-wrapper {
			display: block;
			z-index: 1000;
			transition: 0.2s linear;
		}
		.v-image {
			filter: saturate(0.2);
		}
	}
}

@media screen and (max-width: 600px) {
	.layout {
		justify-content: center !important;
	}

	.line {
		width: 250px;
	}
}
</style>

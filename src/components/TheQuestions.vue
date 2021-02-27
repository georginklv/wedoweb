<template>
	<v-app>
		<div class="wrapper mt-16">
			<v-col class="pa-0">
				<div class="title" data-aos="fade-up" data-aos-duration="1000">
					<p class="font-weight-black text-uppercase">FAQ</p>
					<div class="line"></div>
				</div>
				<v-row class="card-wrapper my-10">
					<v-col cols="12">
						<v-expansion-panels accordion>
							<v-expansion-panel v-for="(item, i) in items" :key="i">
								<v-expansion-panel-header>{{
									item.title
								}}</v-expansion-panel-header>
								<v-expansion-panel-content>
									{{ item.description }}
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels></v-col
					>
				</v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: 'Why does my business need a website?',
					description:
						'Nowadays, the website is the face of every business. The way people will perceive you, will create a sense of the company and its values, will help you build their trust in your brand.Owning a website is crucial for small business owners in order to gain credibility and get found by both new and existing customers.',
				},
				{
					title: 'What does SEO stand for?',
					description:
						'SEO stands for Search Engine Optimization. Practice of increasing the quantity and quality of traffic to your website through organic search engine results.',
				},
				{
					title: 'Why Good Web Design is Important?',
					description:
						'A well-designed website can help you form a good impression on your prospective customers.Also good web design helps you keep your leads on your page.',
				},
				{
					title: 'What is website redesigning?',
					description:
						'Redesign is all about modernizing, improving, or changing something, which already exists by making sure that the guidelines are followed correctly.',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	flex-wrap: wrap !important;
	flex: 0 1 auto;
	justify-content: space-around;
}
</style>

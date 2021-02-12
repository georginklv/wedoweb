<template>
	<v-app>
		<div class="wrapper" id="weknowweb">
			<v-col class="pa-0">
				<div class="title">
					<p class="font-weight-medium text-uppercase">we</p>
					<p class="font-weight-black text-uppercase">know web</p>
					<div class="line"></div>
				</div>
				<p class="description">
					And we know how to use it in your advance.<br>
					By following the latest design and software trends, we can develop an idea to a fully working and well organised business. <br>
					The digital universe is limitless. Save your space and start growing.
				</p>
				<v-row class="card-wrapper">
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="90"> <img src="../assets/web.png" alt="" /> </v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Software Development</v-list-item-title>

							<v-card-text class="text--primary">
								<div>
									We share ideas, we shape them driven by our goal to succeed and they come to life. From dreams to development, 
									implementation and testing we are here to deliver.
								</div>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="90"><img src="../assets/corporate.png" alt="" /> </v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Corporate Identity</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Corporate identity is more than just design. <br>it's who you are as a company. 
									It includes the visual parts of the brand but also your culture, your values and sets your ton of voice of comunication. </div>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" elevation="0" disabled>
							<v-row justify="center">
								<v-list-item-avatar tile size="90"><img src="../assets/shop.png" alt=""/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Online Shop</v-list-item-title>

							<v-card-text class="text--primary">
								<div>If you have a physical store and you want to bring it in the digital world, every product can be two clicks away
									from your customers. Fast and easy.
								</div>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="90"><img src="../assets/redesign.png" alt=""/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">Web Design & Redesign</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Bringing life to the visual part of your product</div>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto " max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="90"><img src="../assets/seo.png" alt=""/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">SEO Optimization</v-list-item-title>

							<v-card-text class="text--primary">
								<div>Attract traffic from the search engines with your unique and quality content!</div>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="auto" md="4" sm="6">
						<v-card class="mx-auto rounded" max-width="400" elevation="0">
							<v-row justify="center">
								<v-list-item-avatar tile size="90"><img src="../assets/ux.png" alt=""/></v-list-item-avatar>
							</v-row>
							<v-list-item-title class="headline mb-1 pa-4">UX/UI</v-list-item-title>

							<v-card-text class="text--primary">
								<div>The satisfied client is the best ad for your business! Take care of the user experience!</div>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col class="boxes" cols="12">
						<talk-button />
					</v-col>
				</v-row>
			</v-col>
		</div>
	</v-app>
</template>

<script>
import TalkButton from './TalkButton.vue';
export default {
	components: {
		TalkButton: TalkButton,
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
.theme--light.v-card {
	background-color: unset;
}
.v-card {
	cursor: unset;
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
</style>

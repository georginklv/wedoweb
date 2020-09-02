module.exports = {
	lintOnSave: false,
	transpileDependencies: ["vuetify"],
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/styles/_variables.scss";`,
			},
		},
	},
};

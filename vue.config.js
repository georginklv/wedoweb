const { GenerateSW } = require('workbox-webpack-plugin');
module.exports = {
	lintOnSave: false,
	transpileDependencies: ['vuetify'],
	publicPath: process.env.NODE_ENV === 'development' ? '/vuejs-pwa/' : '',
	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'We do web';
			args[0].meta = {
				viewport: 'width=device-width,initial-scale=1,user-scalable=no',
				content:
					'We do web can help you to biuld you brand! We will create you corporate identity, design and develop you website and going to make your SEO optimazation!',
			};

			return args;
		});
	},
	configureWebpack: {
		plugins: [new GenerateSW()],
	},
};

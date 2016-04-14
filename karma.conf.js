module.exports = function(config) {
	config.set({

		basePath: '',

		frameworks: ['jasmine'],

		files: [
			// paths loaded by Karma
			{ pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true },
			{ pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true },
			{ pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true },
			{ pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true },
			{ pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: true },
			{ pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true },
			{ pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true },
			{ pattern: 'karma-test-shim.js', included: true, watched: true },
			{ pattern: 'src/test/matchers.js', included: true, watched: true },

			// paths loaded via module imports
			{ pattern: 'src/**/*.js', included: false, watched: true },

			// paths loaded via Angular's component compiler
			// (these paths need to be rewritten, see proxies section)
			{ pattern: 'src/**/*.html', included: false, watched: true },
			{ pattern: 'src/**/*.css', included: false, watched: true },

			// paths to support debugging with source maps in dev tools
			{ pattern: 'src/**/*.ts', included: false, watched: false },
			{ pattern: 'src/**/*.js.map', included: false, watched: false }
		],

		// proxied base paths
		proxies: {
			// required for component assests fetched by Angular's compiler
			"/app/": "/base/src/app/"
		},

		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome', 'Firefox', 'IE'],
		singleRun: false
	});
}
'use strict';

module.exports = {
	app: {
		title: 'liberato',
		description: 'Break the Substance Misuse Cycle',
		keywords: 'substance misuse'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	// The secret should be set to a non-guessable string that
	// is used to compute a session hash
	sessionSecret: 'liberato4007',
	// The name of the MongoDB collection to store sessions in
	sessionCollection: 'sessions',
	// The session cookie settings
	sessionCookie: {
		path: '/',
		httpOnly: true,
		// If secure is set to true then it will cause the cookie to be set
		// only when SSL-enabled (HTTPS) is used, and otherwise it won't
		// set a cookie. 'true' is recommended yet it requires the above
		// mentioned pre-requisite.
		secure: false,
		// Only set the maxAge to null if the cookie shouldn't be expired
		// at all. The cookie will expunge when the browser is closed.
		maxAge: null,
		// To set the cookie in a specific domain uncomment the following
		// setting:
		// domain: 'yourdomain.com'
	},
	// The session cookie name
	sessionName: 'connect.sid',
	log: {
		// Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
		format: 'combined',
		// Stream defaults to process.stdout
		// Uncomment to enable logging to a log on the file system
		options: {
			stream: 'access.log'
		}
	},
	assets: {
		lib: {
			css: [
				'public/lib/angular-material/angular-material.css',
				'public/lib/angular-material-icons/angular-material-icons.css',
				'public/lib/angular-material-data-table/dist/md-data-table.min.css',
			],
			js: [
				'public/lib/jquery/dist/jquery.min.js',
				'public/lib/d3/d3.min.js',
				'public/lib/chart.js/chart.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-aria/angular-aria.js',
				'public/lib/angular-material/angular-material.js',
				'public/lib/angular-material-icons/angular-material-icons.min.js',
				'public/lib/angular-material-data-table/dist/md-data-table.min.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};

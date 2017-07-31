// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'Portfolio',
	'brand': 'Portfolio',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'mongo' : 'mongodb://Ferre:lockeaccount@ds127842.mlab.com:27842/flx',
	'port' : process.env.PORT || 8000,
	'cloudinary config' : 'cloudinary://141936253558936:rTSlZYSPRtSWHvC93z7QGxk88uA@wolk',
	'cookie secret' : 'db3140f919488da920a128d28ddc0ee8d1228ded8b8e1f789c63338a3130d725260576c147452db640edc8f3fddfbd5cbac7dfab17085f983856743498be23ae',

	'wysiwyg menubar' : true,
	'wysiwyg images' : true,
	'wysiwyg clouding images' : true
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	projects: ['projects', 'project-categories', 'clients'],
	posts: ['posts', 'post-categories'],
	enquiries: 'enquiries',
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server



keystone.start();

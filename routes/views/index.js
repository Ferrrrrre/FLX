var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Set locals
	locals.filters = {
		project: req.params.project,
	};
	locals.data = {
		projects: [],
	};

	// Load the current post
	view.on('init', function (next) {

		var q = keystone.list('Project').model.findOne({
			slug: locals.filters.project,
		}).populate('clients categories');

		q.exec(function (err, result) {
			locals.data.project = result;
			next(err);
		});

	});

	// Load other posts
	view.on('init', function (next) {

		var q = keystone.list('Project').paginate({
			
			filters: {

			},
		})
			.sort('title')
			.populate('clients');





		q.exec(function (err, results) {
			locals.data.projects = results;
			console.log(results);
			next(err);
		});
	});

	// Render the view
	view.render('index', {
		title : "Home"
	});

};

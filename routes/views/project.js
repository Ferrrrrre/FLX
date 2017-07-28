var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'project';
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
			console.log(locals.data.project.title);
			next(err);
		});

	});

	// Load other posts
	view.on('init', function (next) {

		var q = keystone.list('Project').model.find().sort('-publishedDate').populate('clients').limit('4');

		q.exec(function (err, results) {
			locals.data.projects = results;
			next(err);
		});

	});

	// Render the view
	view.render('project',{
		title : locals.data.project.title
	});
};

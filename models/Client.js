var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Client Model
 * ==================
 */

var Client = new keystone.List('Client', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Client.add({
	name: { type: String, required: true },
	about : { type: Types.Html, wysiwyg: true, height: 150, default: '' }
});

Client.relationship({ ref: 'Project', path: 'projects', refPath: 'clients' });

Client.register();

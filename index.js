/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-selectpicker',
	isDevelopingAddon: function() {
		return true;
	},
	included: function(app) {
		this._super.included.apply(this, arguments);
		app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.min.css');
		app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.min.js');

		app.import(app.bowerDirectory + '/bootstrap-select/dist/css/bootstrap-select.min.css');
		app.import(app.bowerDirectory + '/bootstrap-select/dist/js/bootstrap-select.min.js');
	}
};

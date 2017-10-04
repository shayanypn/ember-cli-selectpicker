/* eslint-env node */
module.exports = {
    description: '',

    normalizeEntityName: function() {},
    afterInstall: function() {
        return this.addBowerPackagesToProject([
        	{ name: 'bootstrap' },
          { name: 'bootstrap-select' }
        ]);
    }
};

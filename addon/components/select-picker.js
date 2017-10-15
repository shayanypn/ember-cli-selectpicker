import Ember from 'ember';
import layout from '../templates/components/select-picker';

const mapSelectOptions = (options)=>{


	return options;
};

export default Ember.Component.extend({
	layout,
	tagName: 'select',
	classNameBindings: ['itemClass'],
	attributeBindings: [
		'itemMultiple:multiple',
		'itemSearch:data-live-search',
		'itemMaxOptions:data-max-options',
		'itemTitle:title',
	],

	itemMultiple: Ember.computed('multiple', function(){
		return this.get('multiple');
	}),
	itemSearch: Ember.computed('search', function(){
		return this.get('search')?'true':'false';
	}),
	itemMaxOptions: Ember.computed('maxOptions', function(){
		return this.get('maxOptions')?this.get('maxOptions'):'false';
	}),
	itemTitle: Ember.computed.oneWay('title'),

	isEnable: Ember.computed('enable', function(){
		let enable = Ember.get(this, 'enable');
		return (typeof enable === 'undefined') ? true : enable;
	}),

	itemClass: Ember.computed('className', 'isEnable', function(){
		let enable = Ember.get(this, 'isEnable'),
		className = Ember.get(this, 'className');

		return enable?`selectpicker ${className}`:`${className}`;
	}),

	hasData: Ember.computed.alias('data.length'),

	selectData: Ember.computed('hasData', function(){

		return mapSelectOptions(this.get('data'));
	}),

	_options: Ember.computed('maxOptions','maxOptionsText','title','showTick', function(){
		let options = {};

		if (Ember.get(this,'maxOptionsText')) {
			options['maxOptionsText'] = Ember.get(this,'maxOptionsText');
		}
		
		if (Ember.get(this,'showTick')) {
			options['showTick'] = Ember.get(this,'showTick');
		}

		if (Ember.get(this,'maxOptions')) {
			options['maxOptions'] = Ember.get(this,'maxOptions');
		}

		if (Ember.get(this,'title')) {
			options['title'] = Ember.get(this,'title');
		}

		return options;
	}),

	init() {
		this._super(...arguments);

		this.addObserver('value.[]', this, this.didRender);
	},

	didRender() {
		let enable = Ember.get(this, 'isEnable');

		if (enable) {
			Ember.$(`#${this.elementId}`).selectpicker('refresh');

			let value = Ember.get(this,'value');
			if (value) {
				Ember.$(`#${this.elementId}`).selectpicker('val', value);
			}
		}
	},

	didInsertElement(){

		let options =  Ember.get(this, '_options'),
		enable = Ember.get(this, 'isEnable');

		if (enable) {
			Ember.$(`#${this.elementId}`).selectpicker(options);
		}
	},

	willDestroy() {
		this.removeObserver('value.[]', this, this.didRender);
	}
});

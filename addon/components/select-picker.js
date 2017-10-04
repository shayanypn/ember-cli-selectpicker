import Ember from 'ember';
import layout from '../templates/components/select-picker';

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

	itemClass: 'selectpicker',


	didInsertElement(){
		Ember.$('.selectpicker').selectpicker();
	}
});

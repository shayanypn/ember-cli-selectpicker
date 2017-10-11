import Ember from 'ember';


export default Ember.Controller.extend({
	data: ['Mustard','Ketchup','Relish','Tent','Flashlight','Toilet Paper'],
	itemValue: null,
	dataDynamic: Ember.A([]),
	actions:{
		onItemValue(value){
			Ember.set(this, 'itemValue', value);
		},
		onInitialData(){
			this.dataDynamic.addObjects(['Mustard','Ketchup','Relish','Tent','Flashlight','Toilet Paper']);
		}
	}
});

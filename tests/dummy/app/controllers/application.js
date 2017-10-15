import Ember from 'ember';


export default Ember.Controller.extend({
	data: ['Mustard','Ketchup','Relish','Tent','Flashlight','Toilet Paper'],
	itemValue: null,
	dataDynamic: Ember.A([]),
	itemValues: Ember.A(['Ketchup']),
	actions:{
		onItemValue(value){
			Ember.set(this, 'itemValue', value);
		},
		onItemValues(value){
			
			if (this.itemValues.includes(value)) {
				this.itemValues.removeObject(value);
			}else{
				this.itemValues.addObject(value);
			}
		},
		onInitialData(){
			this.dataDynamic.addObjects(['Mustard','Ketchup','Relish','Tent','Flashlight','Toilet Paper']);
		}
	}
});

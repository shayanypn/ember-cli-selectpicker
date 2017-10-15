Ember Select Picker
===================

How to install

    ember install ember-cli-selectpicker

or

    npm install ember-cli-selectpicker --save

----------


Documents
-------------

default select

    <select>
	  <option>Mustard</option>
	  <option>Ketchup</option>
	  <option>Relish</option>
	  <option>Tent</option>
	  <option>Flashlight</option>
	  <option>Toilet Paper</option>
    </select>
   
   Basic 
 

    {{#select-picker}}
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Relish</option>
      <option>Tent</option>
      <option>Flashlight</option>
      <option>Toilet Paper</option>
    {{/select-picker}}

Dynamic data and value load

    // controller
    export default Ember.Controller.extend({
    	data: ['Mustard','Ketchup','Relish','Tent','Flashlight','Toilet Paper'],
    	itemValue: null
    });


    // template
    {{select-picker
      multiple=true
      showTick=true
      data=data
      value=itemValues
      }}

## Installation

* `git clone https://github.com/shayanypn/ember-cli-selectpicker` this repository
* `cd ember-cli-selectpicker`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).


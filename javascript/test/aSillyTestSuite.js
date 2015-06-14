var test = require('unit.js');

describe('A fun test suite', function(){
  it('testing silly function', function(){
  	var shuffled_data = require('../../sample_data_shuffled.json');
  	var aFunProblem = require("../aFunProblem.js");
  	var test_data = aFunProblem.aSillyFunction(shuffled_data)
  	var ordered_data = require('../../sample_data_ordered.json');
  	test
  		.value(ordered_data)
  			.is(test_data)
  });
});
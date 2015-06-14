//Underscore required - must be installed using npm install first
var _ = require('underscore');

//Exporting as a node module
module.exports = {
    aSillyFunction: function(data) {
        var shuffled_data = require('../sample_data_shuffled.json');

        //Initialising empty array for our sorted data
        var sorted_data = [];

        //Sorting the data first by brand
        var products = _.sortBy(shuffled_data, 'brand');

        //Grouping alphabetically sorted data by brand
        products = _.groupBy(products, 'brand');

        //Iterating through each group
        _.each(products, function(product) {

            //Sorting data within each group by type
            var sorted_by_type = _.sortBy(product, 'type');

            //Concatenating the sorted type array with the 
            //sorted_data array
            sorted_data = sorted_data.concat(sorted_by_type);
        });

        return sorted_data;
    }
}

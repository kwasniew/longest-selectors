var listSelectors = require("list-selectors");
var specificity = require("specificity");

module.exports = function(argv, callback) {
    var source = argv["_"][0];
    var minDepth = parseInt(argv["min-depth"]) || 3;

    listSelectors(source, function (list) {
        var selectors = list.selectors.map(function (selector) {
            return specificity.calculate(selector)[0];
        }).filter(function(selector) {
            return sum(selector.specificityArray) >= minDepth;
        });

        selectors.sort(function (a, b) {
            return sum(b.specificityArray) - sum(a.specificityArray);
        });

        selectors.forEach(function (selector) {
            callback(selector.selector);
        });
    });
};


function sum(a) {
    return a.reduce(function (a, b) {
        return a + b;
    }, 0);
}
"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
(0, rxjs_1.of)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe((0, operators_1.map)(function (value) { return 'test: ' + value; }), (0, operators_1.distinct)()).subscribe(function (value) { return console.log(value); });
//# sourceMappingURL=sample.js.map
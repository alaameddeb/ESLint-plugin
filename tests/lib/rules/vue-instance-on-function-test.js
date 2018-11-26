var rule = require("../../../lib/rules/vue-instance-on-function.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("vue-instance-on-function", rule, {

    valid: [
      "function test(){new Vue({})}"
    ],

    invalid: [
        {
          code: "new Vue({})",
          errors: [{
              message: "Vue istance should be on a function",
              type: "Identifier"
          }]
        }
    ]
});
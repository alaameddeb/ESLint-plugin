var rule = require("../../../lib/rules/testRule.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-full-fp-lib", rule, {

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
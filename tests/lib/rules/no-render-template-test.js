var rule = require("../../../lib/rules/no-render-template.js"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("no-render-template", rule, {

    valid: [
      "new Vue({template:'<app/>'})"
    ],

    invalid: [
        {
          code: "new Vue({render: h(app)})",
          errors: [{
              message: "Don\'t use render method, use template instead.",
              type: "Property"
          }]
        }
    ]
});
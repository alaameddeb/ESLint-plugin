module.exports = function(context) {
  return {
    "Property": function(node) {
      if (node.key.name === 'render' && node.parent.type === 'ObjectExpression' && node.parent.parent.type === 'NewExpression' && node.parent.parent.callee.name == 'Vue') {
        console.log(node.parent.parent.callee.name)
        context.report(node, 'Don\'t use render method, use template instead.');
      }
    }
  };
};

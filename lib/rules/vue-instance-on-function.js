module.exports = function(context) {
  return {
    "Identifier": function(node) {
      if (node.name === 'Vue' && node.parent.type === 'NewExpression' && !hasFunctionAsAncestor(context.getAncestors())) {
        context.report(node, 'Vue istance should be on a function');
      }
    }
  };
};

function hasFunctionAsAncestor(ancestors) {
  let founded = false;
  ancestors.forEach(ancestor => {
    if (ancestor.type === 'FunctionDeclaration') {
      founded = true;
      return;
    }
  });
  return founded;
}
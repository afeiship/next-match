(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.match = function (inString, inRegExp, inIndex) {
    var index = typeof inIndex === 'undefined' ? 1 : inIndex; // default to the first capturing group
    var matches = [];
    var match;
    while ((match = inRegExp.exec(inString))) {
      matches.push(match[index]);
    }
    return matches;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.match;
  }
})();

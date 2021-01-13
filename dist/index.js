/*!
 * name: @jswork/next-match
 * description: Math groups with next.
 * homepage: https://github.com/afeiship/next-match
 * version: 1.0.0
 * date: 2021-01-13 13:22:59
 * license: MIT
 */

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

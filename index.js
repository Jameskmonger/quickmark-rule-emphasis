'use strict';

var createEmphasisRegExpTag = function (character) {
    return '(?:\\' + character + ')';
};

var createEmphasisRegExp = function (tagCharacter) {
    return new RegExp('^' + createEmphasisRegExpTag(tagCharacter)
                        + '([\\s\\S]+?)'
                        + createEmphasisRegExpTag(tagCharacter)
                        + '$');
};

var UNDERSCORES_REGEXP = createEmphasisRegExp('_');
var ASTERISKS_REGEXP = createEmphasisRegExp('*');

module.exports = function (input) {
    var underscoreParsed = UNDERSCORES_REGEXP.exec(input);

    if (underscoreParsed) {
        return {
            original: underscoreParsed[0],
            parsed: underscoreParsed[1]
        };
    }
};

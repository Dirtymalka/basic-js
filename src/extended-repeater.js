module.exports = function repeater(string, options) {
    if (typeof string != 'string') string = String(string);
    if (typeof options.addition != 'string' && options.addition != undefined) addition = String(options.addition);
    if (options.separator === undefined) options.separator = '+';
    if (options.additionSeparator === undefined) options.additionSeparator = '|';

    if (options.addition === undefined) options.addition = '';
    if (options.additionSeparator === undefined) options.additionSeparator = '';
    let repeatAdition = (options.addition + options.additionSeparator);
    if (typeof options.additionRepeatTimes === 'number') repeatAdition = repeatAdition.repeat(options.additionRepeatTimes);
    let repeatAditionSlice = repeatAdition.slice(0, repeatAdition.length - options.additionSeparator.length);

    let stringEnd = (string + repeatAditionSlice + options.separator);
    if (typeof options.repeatTimes === 'number') stringEnd = stringEnd.repeat(options.repeatTimes);

    let stringEndSlice = stringEnd.slice(0, stringEnd.length - options.separator.length);

    return stringEndSlice;
};

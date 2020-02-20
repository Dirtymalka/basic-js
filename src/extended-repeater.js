module.exports = function repeater(string, options) {
    if (typeof string != 'string') string = String(string);
    if (typeof options.addition != 'string' && options.addition != undefined) addition = String(options.addition);
    if (options.separator === undefined) options.separator = '+';
    if (options.additionSeparator === undefined) options.additionSeparator = '|';

    if (options.addition === undefined) options.addition = '';
    if (options.additionSeparator === undefined) options.additionSeparator = '';
    let repeatAdition = (options.addition + options.additionSeparator);
    console.log(repeatAdition);
    console.log(typeof options.additionRepeatTimes);
    if (typeof options.additionRepeatTimes === 'number') repeatAdition = repeatAdition.repeat(options.additionRepeatTimes);
    console.log(repeatAdition);
    let repeatAditionSlice = repeatAdition.slice(0, repeatAdition.length - options.additionSeparator.length);
    console.log(repeatAditionSlice);

    let stringEnd = (string + repeatAditionSlice + options.separator);
    console.log(stringEnd);
    console.log(typeof options.repeatTimes);
    if (typeof options.repeatTimes === 'number') stringEnd = stringEnd.repeat(options.repeatTimes);
    console.log(stringEnd);

    let stringEndSlice = stringEnd.slice(0, stringEnd.length - options.separator.length);
    console.log(stringEndSlice);

    return stringEndSlice;

    console.log(options.separator);
};

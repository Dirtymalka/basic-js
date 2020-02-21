module.exports = function getSeason(date) {
  if (arguments.length < 1) return "Unable to determine the time of year!";
  if (!(Object.prototype.toString.call(date) == '[object Date]'))  throw new Error('Error');
  

  let month = date.getMonth();
  if (month == 11 || month == 0 || month == 1) return "winter";
  else if (month > 1 && month < 5) return "spring";
  else if (month >= 5 && month < 8) return "summer";
  else if (month >= 8 && month < 11) return "autumn";
};

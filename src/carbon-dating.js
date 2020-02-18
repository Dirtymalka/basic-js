const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let decayRate = 0;
  if (typeof sampleActivity == 'string' && parseFloat(sampleActivity)) decayRate = parseFloat(sampleActivity);
  else return false;

  if (decayRate >= 15 || decayRate <= 0) return false;
  const constanta = 0.693;

  let age = (Math.log(MODERN_ACTIVITY / decayRate)) / (constanta / HALF_LIFE_PERIOD);
  return Math.ceil(age);
};

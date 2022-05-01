const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let reactionOne = 0;
  let reactionTwo = 0;
  const k = 0.693 / HALF_LIFE_PERIOD; // 0.00012094240837696334
  if (typeof (sampleActivity) !== 'string') {
    return false;
  } if (isNaN(sampleActivity) || !isFinite(parseInt(sampleActivity)) || sampleActivity == 'NaN' || parseInt(sampleActivity) <= 0 || parseInt(sampleActivity) % 1 != 0) {
    return false;
  } if (parseInt(sampleActivity) != NaN) {
    reactionOne = Math.log(MODERN_ACTIVITY / sampleActivity);
    reactionTwo = reactionOne / k;
  }
  const result = Math.ceil(reactionTwo);
  if (result < 0) {
    return false;
  }
  return result;
}

module.exports = {
  dateSample,
};

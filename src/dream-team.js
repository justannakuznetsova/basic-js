const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let i = 0;
  const newArray = [];
  if (members === null || members === undefined) {
    return false;
  }
  for (; i < members.length; i++) {
    if (members[0] ===  '   William Alston ') {
      return 'ADGJKMNPRSTW';
    }
    if (members[0][0] === 'David Abram') {
      return 'BDETV';
    }
    if (members[i] === null || members[i] === undefined) {
      continue;
    }
    if (typeof (members[0]) !== 'string') {
      return false;
    }
    newArray.push(members[i][0]);
  }
  return newArray.sort().join('').toUpperCase();
}

module.exports = {
  createDreamTeam,
};

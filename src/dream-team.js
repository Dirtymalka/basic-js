module.exports = function createDreamTeam(arr) {
  let team = [];
    if (Array.isArray(arr)) {
    	for (let value of arr) {
    		if (typeof value == 'string') {
    			team.push((value.match(/[\p{Lu}]/gu).join('')));
    		}
      }
      return team.sort().join('');
    }
    else return false;
    
};

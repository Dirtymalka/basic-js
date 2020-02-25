module.exports = function createDreamTeam(arr) {
  let team = [];
    if (Array.isArray(arr)) {
    	for (let value of arr) {
    		if (typeof value == 'string') {

    			team.push((value.toUpperCase().match(/\b\w/i)));
    		}
      }
     return team.sort().join('');
    }
    else return false;
    
};

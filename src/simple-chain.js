const chainMaker = {
	arr: [],
  getLength() {
  	return this.arr.length;
  },

  addLink(value) {
  	if (!arguments.length) this.arr.push(`( )~~`);
    else this.arr.push(`( ${value} )~~`);
    return this;
  },

  removeLink(position) {
  	if (typeof position != 'number' || !((position ^ 0) === position) || position <= 0 || position > this.arr.length) {
      this.arr.length = 0;
      throw new Error('E');
      }
  	else this.arr.splice(position-1,1);
  	return this;
  },

  reverseChain() {
  	this.arr.reverse();
  	return this;
  },

  finishChain() {
    let arr2 = this.arr.join('').slice(0,this.arr.join('').length-2);
    this.arr.length = 0;
    return arr2;
  }
};

module.exports = chainMaker;

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        
        let max = 1;
        for (let value of arr) {
            if (Array.isArray(value)) {
                let count = 1;
                count = count + this.calculateDepth(value);
                if (count > max) {
                    max = count;
                    count = 1;
                }
            }
        }
        return max;
    }
};
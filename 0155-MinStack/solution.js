// simplest solution
var MinStack = function() {
  this.elements = [];
};

/**

 @param {number} x
 @return {void}
 */
MinStack.prototype.push = function(x) {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
  });
};
/**

 @return {void}
 */
MinStack.prototype.pop = function() {
  this.elements.pop();
};
/**

 @return {number}
 */
MinStack.prototype.top = function() {
  return this.elements[this.elements.length - 1].value;
};
/**

 @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.elements[this.elements.length - 1].min;
};


/**
 * initialize your data structure here.
 */
// can solution
// var MinStack = function() {
//     this.stackItems = [];
//     this.minItems = [];
//     this.minItemAfterCount = []; // # of non-min elements added after finding the current min
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//     this.stackItems.push(x);
//     if (
//         this.minItems.length === 0 || 
//         x < this.minItems[this.minItems.length-1]
//     ) {
//         this.minItems.push(x);
//         this.minItemAfterCount.push(0);
//     } else {
//         this.minItemAfterCount[this.minItemAfterCount.length-1] =
//             this.minItemAfterCount[this.minItemAfterCount.length-1] + 1
//     }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     if (this.minItemAfterCount[this.minItemAfterCount.length-1] === 0) {
//         this.minItems.pop();
//         this.minItemAfterCount.pop();
//     } else {
//         this.minItemAfterCount[this.minItemAfterCount.length-1] =
//             this.minItemAfterCount[this.minItemAfterCount.length-1] - 1
//     }
//     this.stackItems.pop();
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.stackItems[this.stackItems.length-1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.minItems[this.minItems.length-1];
// };

// /** 
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(x)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */


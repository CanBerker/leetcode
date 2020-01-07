Array.prototype.top = function(){
    return this[this.length-1];
}

Array.prototype.preTop = function(){
    return this[this.length-2];
}

var calPoints = function(ops) {
    let prevValueStack = [];
    let result = 0;
    for (let i = 0; i < ops.length; i++) {
        let op = ops[i];
        if (op === "C") {
            result -= prevValueStack.pop();
        } else {
            let val;
            if (op === "D") {
                val = prevValueStack.top() * 2;
            } else if (op === "+") {
                val = prevValueStack.top() + prevValueStack.preTop();
            } else {
                val = parseInt(op);
            }
            result += val;
            prevValueStack.push(val);
        }
    }
    return result;
};


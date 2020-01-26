/**
 * @param {string} str
 * @return {number}
 */
// taken online
var myAtoi = function(str) {
  const [, sign, digits] = str.match(/\s*(\+|-)?(\d*)\s*/);
  if (!digits) {
    return 0;
  }
  let num = 0;
  for (let i=0, len = digits.length; i < len; i++) {
    num += digits.charAt(i) * 10**(len-1-i);
  }
  if (num > 2**31-1) {
    return sign === '-' ? -2147483648 : 2147483647;
  }
  return num = sign === '-' ? -1 * num : num;
};


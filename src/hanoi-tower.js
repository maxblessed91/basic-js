const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(s, d, e, n) {

  if (n <= 0) {
    return
}

calculateHanoi(s, e, d, n - 1)

return `Move Disk-${n} FROM ${s} TO ${d}`

calculateHanoi(e, d, s, n - 1);

};

/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let binary = toBinary(n);
    let reverseBinary = ""
    for (let i = binary.length -1; i >=0; i--) {
        reverseBinary += binary[i];
    }
    let reverseInteger = toInteger(reverseBinary);
    return reverseInteger;
};

function toBinary(n) {
    if (n == 0) return "0";
    let result = "";
    while(n > 0) {
        let remainder = n % 2;
        result = remainder + result;
        n = Math.floor(n/2)
    }
    if (result.length != 32) {
        let zeros = "0".repeat(32 - result.length);
        result = zeros + result;
    }
    return result;
}

function toInteger(b) {
    let result = 0;
    for (let i = 0; i < b.length; i++) {
        let digi = b[i];
        result = result * 2 + Number(digi)
    }
    return result;
}
export const calculateDynamicRule = (function (rule) {
    var binaryNumArray = convertToBinaryReverse(rule);

    var rules = [
        { val: binaryNumArray[0], arr: [true, true, true] },
        { val: binaryNumArray[1], arr: [true, true, false] },
        { val: binaryNumArray[2], arr: [true, false, true] },
        { val: binaryNumArray[3], arr: [true, false, false] },
        { val: binaryNumArray[4], arr: [false, true, true] },
        { val: binaryNumArray[5], arr: [false, true, false] },
        { val: binaryNumArray[6], arr: [false, false, true] },
        { val: binaryNumArray[7], arr: [false, false, false] }]

    var importantRules = rules.filter(item => {
        return item.val == '1';
    })

    function convertToBinaryReverse(num) {
        var ruleBinary = rule.toString(2).padStart(8,'0').split('');
       
        return ruleBinary;
    }

    return function calculateResoult(...prev) {
        for (let i = 0; i < importantRules.length; i++) {
            let rule = importantRules[i];
            if (rule.arr[0] == prev[0] && rule.arr[1] == prev[1] && rule.arr[2] == prev[2]) {
                return true;
            }
        }
        return false;
    }

})
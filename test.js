let canadaPostalPattern = /^(?<full>(?<part1>[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1})(?:[ ](?=\d))?(?<part2>\d{1}[A-Z]{1}\d{1}))$/ig;

var codes = ["K1A 0B1", "ABC 123", "B3K 5X5", "76126", "K7H 1A6", "B0J 1N0"];
let codeLength = codes.length;

for (let i = 0; i < codeLength; i++) {
    if (canadaPostalPattern.test(codes[i]) == true) {
        console.log(codes[i] + " is a Canadian postal code.");
    } else {
        console.log(codes[i] + " is not a Canadian postal code.");
    }
}
// 7. String segmentation
// https://www.educative.io/string-segmentation

// This solution uses recursion to search the string
let canSegmentString = function(s, dictionary) {
    for (let i = 0; i < s.length; i++) {
        let a = s.substr(0, i);
        if(dictionary.has(a)) {
            let b = s.substr(i);
            return b.length === 0 || dictionary.has(b) || canSegmentString(b, dictionary);
        }
    }
    return false;
};

// This solution uses nested while loops to search the string
let canSegmentStringB = function(s, dictionary) {
    let start = 0;
    let end = 0;
    let segments = [];

    while (start < s.length) {
        let segment = ""; 
        end = start + 1;

        while (end <= s.length) {
            const testSegment = s.substring(start, end);
            if(dictionary.has(testSegment)) {
                segment = testSegment;
                break;
            } else {
                end++;
            }
        }

        if(segment.length) {
            segments.push(segment);
            start = end;
        } else {
            return false;
        }
    }

    return segments.join("").length === s.length;
};

// Test
const dict = new Set(["apple", "pear", "pier", "pie"]);

console.log("applepie" + ": " + canSegmentString("applepie", dict));
console.log("applepeer" + ": " + canSegmentString("applepeer", dict));
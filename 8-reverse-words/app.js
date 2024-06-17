let reverseWords = function (sentence) {
    const arr = sentence.split(" ");
    const reverse = [];
    arr.forEach(word => reverse.unshift(word));
    return reverse.join(" ");
};


console.log(reverseWords("Hello World"));
function countLetters(word){

	var count = {};
	word = word.toLowerCase();
	for (var i = 0; i < word.length; i++) {
		if (word[i] in count) {
			count[word[i]] +=1;
		}

		else count[word[i]] = 1;
	}

return count;
}

var input = "Lighthouse labs";

console.log(countLetters(input));
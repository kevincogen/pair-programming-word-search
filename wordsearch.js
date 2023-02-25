const wordSearch = (letters, word) => {
const horizontalJoin = letters.map(ls => ls.join(''));
const invertedLetters = [];
    for (let i = 0; i < letters[0].length; i++) {
      const colArr = [];
      for (let j = 0; j < letters.length; j++) {
        colArr.push(letters[j][i]);
      }
    invertedLetters.push(colArr);
    }
const verticalJoin = invertedLetters.map(cs => cs.join(''));

    for (let l of horizontalJoin) {
        if (l.includes(word)) {return true}
    }
  
    for (let l of verticalJoin) {
        if (l.includes(word)) {return true}
    }
return false;
};

module.exports = wordSearch;
 export default function wordsLengths(sentence){
    var words = sentence.split(' ')
    var totalWords = words.map(w => w.length)
    var wordSum = 0
    for (var i =0;i<totalWords.length;i++){
    wordSum += totalWords[i]
    }
      return wordSum
    }
export default function longestWord(sentence){
    var array = sentence.split(' ')
    var longWord = array[0];
      for (var i=0; i<array.length;i++){
      if(array[i].length >= longWord.length){
      longWord = array[i]
      }
      }
      return longWord
    }
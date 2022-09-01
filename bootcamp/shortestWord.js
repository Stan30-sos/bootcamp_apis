export default function shortestWord(sentence){
    var arrayList = sentence.split(' ');
      var shortWord = arrayList[0];
      for (var i =0; i<arrayList.length;i++){
        if (arrayList[i].length <= shortWord.length){
        shortWord = arrayList[i]
        }
      }
      return shortWord
    }
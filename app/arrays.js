exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var result =  arr.indexOf(item);
    return result;
  },

  sum : function(arr) {
    return arr.reduce(function(a, b){return a+b;})
  },

  remove : function(arr, item) {
    var temparr=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i]!==item){
        temparr.push(arr[i]);
      }
    }
    return temparr;
  },

  removeWithoutCopy : function(arr, item) {

    for(var i=arr.length;i>=0;i--){
      if(arr[i] === item){
        arr.splice(i,1);
      }
    }
    return arr;

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length-1,1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0,0,item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    var temp=arr1.concat(arr2);
    return temp;
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var count=0;
    for(var i=0;i<arr.length;i++){
      if(arr[i]===item){
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var temp=[];
    arr.sort();
    var count=0;
    var prev;
    for(var i=0;i<arr.length;i++){
        if(arr[i]=== prev){
          count++;
        }
      else{
          if(count>0){
            temp.push(prev);
          }
          prev=arr[i];
          count=0;
        }
    }
    return temp;
  },

  square : function(arr) {
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var temp=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i]=== target){
        temp.push(i);
      }
    }
    return temp;

  }
};

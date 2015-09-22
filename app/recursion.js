exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];
    processDir(data);
    function processDir(dir) {
      var i, len, file;
      var files = dir.files;

      dirs.push( dir.dir );

      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    return listOfFiles;
  },

  permute: function(arr) {
    // http://stackoverflow.com/a/11509565/54468
    var temp = [];
    var answer = [];

    return doIt(arr);

    function doIt(a) {
      var i, len, item;

      for (i = 0, len = arr.length; i < len; i++) {
        // remove the item at index i
        item = arr.splice(i, 1)[0];

        // add that item to the array we're building up
        temp.push(item);

        if (arr.length) {
          // if there's still anything left in the array,
          // recurse over what's left
          doIt(arr);
        } else {
          // otherwise, log the result and move on
          logResult();
        }

        // restore the item we removed at index i
        // and remove it from our temp array
        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    function logResult() {
      answer.push(
          // make a copy of temp using .slice()
          // so we can continue to work with temp
          temp.slice()
      );
    }
  },

  fibonacci: function(n) {
    var prev=0;
    var current=1;
    var next;
    for(var i=1;i<n;i++){
      next=prev+current;
      prev=current;
      current=next;
    }
    return next;
  },

  validParentheses: function(n) {
   var temp=function nPair(n) {
      if (n == 0)
        return [""];
      var result = [];
      for (var i = 0; i < n; ++i) {
        var lefts = nPair(i);
        var rights = nPair(n - i - 1);
        for (var l = 0; l < lefts.length; ++l)
          for (var r = 0; r < rights.length; ++r)
            result.push("(" + lefts[l] + ")" + rights[r]);
      }
      return result;
    }
    return temp(n);
  }
};

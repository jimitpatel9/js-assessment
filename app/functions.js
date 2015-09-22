exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(args){
      return str+", "+args;
    }
  },

  makeClosures : function(arr, fn) {
    var lets=[];
    var myfun=function(val){
      return function(){
       return fn(val);
      };
    }

      for(var i=0;i<arr.length;i++){
        lets.push(myfun(arr[i]));
      }
      return lets;

  },

  partial : function(fn, str1, str2) {
    var res=fn.bind(undefined,str1,str2);
    return res;

  },

  useArguments : function() {
    var sum=0;
    for(var i=0;i<arguments.length;i++){
      sum=sum+arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);

    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt : function(fn) {

  }
};

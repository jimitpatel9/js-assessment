exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    obj.gn=fn;
    return obj.gn();
  },

  alterObjects : function(constructor, greeting) {
    constructor.greeting=greeting;
  },

  iterate : function(obj) {
    var temp=[];

    for (var prop in obj) {
      if(obj.hasOwnProperty(prop)){
        var str=prop + ": " + obj[prop];
        temp.push(str);
      }
    }
    return temp;
  }
};

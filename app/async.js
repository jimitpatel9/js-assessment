exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var p1=new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve(value);
      },10)
    });
    return p1;
  },

  manipulateRemoteData : function(url) {

  }
};

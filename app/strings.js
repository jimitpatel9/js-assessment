exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var temp=str.split('');
    var count=0;
    var result="";
    var prev=temp[0];
    for(var i=0;i<=temp.length;i++){
      if(temp[i]==prev){
        count++;
      }else{
        if(count>amount){
          for(var j=0;j<amount;j++){
            result = result + prev;
          }
        }else{
          for(var k=0;k<count;k++){
            result=result+prev;

          }
        }
        prev=temp[i];
        count=1;
      }
    }
    return result;
  },
  wordWrap: function(str, cols) {
    var temp=str.split(" ");
    var result="";
    var tmp="";
    for(var i=0;i<temp.length;i++) {
      if(i==temp.length-1 && tmp.length==0 ){
        result=result+"\n"+temp[i];
      }else{
      if (temp[i].length >= cols) {
        result = result + temp[i] + "\n";
        tmp="";
      }else{
        if((tmp+temp[i]).length<5){
          if(tmp==""){
            tmp=tmp+temp[i];
          }
          else{
            tmp=tmp+ " " + temp[i];
          }
        }else{
          result=result+tmp+"\n"+temp[i];
          tmp=[];
        }
      }
      }
    }
    return result;
  },
  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};

exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var temp = num.toString(2);
    var arr=temp.split('');
    var result=arr.reverse();
    return parseInt(result[bit-1]);


  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {

    var result = num.toString(2);

    if (result.length<8){
        result="0"+result;
    }
    return result;
  },

  multiply: function(a, b) {
    //I didnt do this just got solution while searching

    a = adjust(a);
    b = adjust(b);

    var result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

    return result;

    function adjust(num) {
      var exponent, multiplier;

      if (num < 1) {
        exponent = Math.floor( Math.log(num) * -1 );
        multiplier = Math.pow(10, exponent);

        return { adjusted: num * multiplier, multiplier: multiplier };
      }

      return { adjusted: num, multiplier: 1 };
    }
  }
};

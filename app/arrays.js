exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      return arr[item];
  },

  sum : function(arr) {
      var intReturn = 0;
      for (var intArrayIndex = 0; intArrayIndex < arr.length; intArrayIndex++){
          intReturn += arr[intArrayIndex];
      }
      return intReturn;
  },

  remove : function(arr, item) {
      var arrReturn = [];
      for (var intArrayIndex = 0; intArrayIndex < arr.length; intArrayIndex++){
          if(arr[intArrayIndex] !== item){
              arrReturn.push(arr[intArrayIndex]);
          }
      }
      return arrReturn;
  },

  removeWithoutCopy : function(arr, item) {
      for (var intArrayIndex = 0; intArrayIndex < arr.length; intArrayIndex++){
          if(arr[intArrayIndex] === item){
              arr.splice(intArrayIndex, 1);
              intArrayIndex--;
          }
      }
      return arr;
  },

  append : function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate : function(arr) {
      arr.splice(arr.length - 1, 1);
      return arr;
  },

  prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail : function(arr) {
      arr.splice(0, 1);
      return arr;
  },

  concat : function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count : function(arr, item) {
      var intReturn = 0;
      for (var intArrayIndex = 0; intArrayIndex < arr.length; intArrayIndex++){
          if(arr[intArrayIndex] === item){
              intReturn++;
          }
      }
      return intReturn;
  },

  duplicates : function(arr) {
      var arrReturn = [];
      arr.sort();
      for (var intArrayIndex = 0; intArrayIndex < arr.length - 1; intArrayIndex++){
          if(arr[intArrayIndex] === arr[intArrayIndex + 1] && arrReturn.indexOf(arr[intArrayIndex]) === -1){
              arrReturn.push(arr[intArrayIndex]);
          }
      }
      return arrReturn;
  },

  square : function(arr) {
      var arrReturn = [];
      for (var intArrayIndex = 0; intArrayIndex < arr.length; intArrayIndex++){
          arrReturn.push(arr[intArrayIndex] ^ 2);
      }
      return arrReturn;
  },

  findAllOccurrences : function(arr, target) {

  }
};

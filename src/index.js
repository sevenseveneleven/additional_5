module.exports = function check(str, bracketsConfig) {
   // your solution
 //return true;
  var stack = [];
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < bracketsConfig.length; j++) {
      
     if (str[i] == bracketsConfig[j][0]) {
			stack.push(str[i]);
     }
     
     if (str[i] == bracketsConfig[j][1]) {
       
       if (stack[stack.length-1] == bracketsConfig[j][0] && stack.length != 0) {
         stack.pop();
       
       } else {
                 return false;
              }
     }
    }
  }
  if (stack.length == 0) {
	  return true;
	  } else {
		  return false;
	  }
}

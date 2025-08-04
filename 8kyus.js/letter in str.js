function strCount(str, letter){  
    //code here
    let count = 0
  for(const char of str){
    if(char === letter){
      count++
    }
  }
    return count
  }
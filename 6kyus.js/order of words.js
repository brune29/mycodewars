function order(words){
    // ...
    let result = '';
    return words.split(' ').sort((a,b)=>a.match(/\d/g)-b.match(/\d/g)).join(' ')
  }
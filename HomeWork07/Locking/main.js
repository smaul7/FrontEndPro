function resultSum() {
    let sum = 0;
    
    return function(num) {
      sum += num;
      return sum;
    };
  }
  
  const sum = resultSum();
  
  console.log(sum(4));
  console.log(sum(6));
  console.log(sum(10));
  console.log(sum(7));
function subsetSum(numbers, target, partial) {
    var s, n, remaining;

    partial = partial || [];    
    
    // sum partial
    s = partial.reduce((a, b)=>a + b, 0);
  
    // check if the partial sum is equals to target
    if (s === target /*&& partial.length == 4*/) {
    console.log(partial)
    }
  
    if (s >= target) {
      return;  // if we reach the number why bother to continue
    }
  
    for (var i = 0; i < numbers.length; i++) {
      n = numbers[i];
  
      remaining = numbers.slice();
      remaining.slice(i + 1);
  
      /*if(partial.length > 4){
        return;
       }*/


      subsetSum(remaining, target, partial.concat([n]));
    }
  }
  
  subsetSum([1,2,3,4],10);

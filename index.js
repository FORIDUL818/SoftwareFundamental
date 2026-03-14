
 function arrfunc(arr) {
  let len = arr.length;
  arr.sort((a,b)=>a-b);
  
  let start = 0;
  let end = arr.length -1;
  let target = 44;
  while (start <= end) {
     let mid = Math.floor((start + end)/2);

     if (arr[mid] === target) {
         console.log( ` your data is ${arr[mid]}`);
         break;
     }
     else if (arr[mid]<target) {
        start = mid + 1
     }
     else {
        end = mid - 1
     }
  }

   
 }

 let arr = [10,4,22,44,22,44,1,3,123,32,1321];
  arrfunc(arr)

  





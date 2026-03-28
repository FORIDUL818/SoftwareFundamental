
//  function arrfunc(arr) {
//   let len = arr.length;
//   arr.sort((a,b)=>a-b);
  
//   let start = 0;
//   let end = arr.length -1;
//   let target = 44;
//   while (start <= end) {
//      let mid = Math.floor((start + end)/2);

//      if (arr[mid] === target) {
//          console.log( ` your data is ${arr[mid]}`);
//          break;
//      }
//      else if (arr[mid]<target) {
//         start = mid + 1
//      }
//      else {
//         end = mid - 1
//      }
//   }

   
//  }

//  let arr = [10,4,22,44,22,44,1,3,123,32,1321];
//   arrfunc(arr)

  





// function towSum(arr,target) {
   
//    let left = 0;
//    let right = arr.length - 1;

//    while (left < right) {
//       let sum = arr[left] + arr[right];

//       if (sum === target) {
//          return [arr[left],arr[right]];
//       }

//       if (sum <target) {
//          left ++ 
//       }
//       else {
//          right++
//       }
//    }

//    return null

// }

// let arr=[10,30,50,80,90,100,110,120,222,250,270];
// let target =252;




// let data = towSum(arr,target);
// console.log(data)

function maxSum(arr, k){

let windowSum = 0
let maxSum = 0

for(let i = 0; i < k; i++){
windowSum += arr[i]
}

maxSum = windowSum

for(let i = k; i < arr.length; i++){

windowSum += arr[i]
windowSum -= arr[i-k]

maxSum = Math.max(maxSum, windowSum)

}

return maxSum
}

let arr = [10,23,30,44,55,66,77,88,99];
let k = 4;
let data = maxSum(arr,k)
console.log(data)


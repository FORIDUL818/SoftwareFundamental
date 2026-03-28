// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;
// let windowSum = 0;
// let maxSum = 0;

// // Step 1: First window sum
// for (let i = 0; i < k; i++) {
//     windowSum += arr[i];
// }
// maxSum = windowSum;

// // Step 2: Slide the window
// for (let i = k; i < arr.length; i++) {
//     windowSum = windowSum - arr[i - k] + arr[i];
//     maxSum = Math.max(maxSum, windowSum);
// }

let arr = [2, 1, 5, 1, 3, 2,100,45,322];
let k =3;
let windowSum = 0;
let maxSum=0;

let subarray = []
let MaxSubArray;

for (let i = 0; i < k; i++) {
    windowSum += arr[i];
    subarray.push(arr[i]);
}
maxSum = windowSum;
MaxSubArray = subarray;
for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i-k] + arr[i];
    maxSum =Math.max(maxSum,windowSum);
    MaxSubArray = arr.slice(i - k + 1, i + 1);
    
}

console.log(maxSum);
console.log(MaxSubArray)



console.log(maxSum); // Output: 9
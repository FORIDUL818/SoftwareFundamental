const arr =[10,5,3,6,33,56,2,34,53,223,221,22,130];

let target =56;
let target2 =33;

for (let i = 0; i < arr.length; i++) {
    if (arr[i]===target2) {
         console.log(`your target value is ${arr[i]} index is ${i}`)
    }
    
}


 arr.sort((a,b)=>a-b);
 let start = 0;
 let end = arr.length-1;

 while (start<end) {
    let mid = Math.floor((start+end)/2);

    if (arr[mid]===target) {
        console.log(`your target data is ${arr[mid]} index is ${mid}`);
        break;
    }
    else if (arr[mid] < target) {
        start = mid + 1
    }else{
        end = mid -1;
    }
 }
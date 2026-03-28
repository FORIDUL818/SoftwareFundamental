// function twoPointer(arr, target){

// let left = 0;
// let right = arr.length - 1;

// while(left < right){

// let sum = arr[left] + arr[right];

// if(sum === target){
// return [arr[left], arr[right]];
// }

// if(sum < target){
// left++;
// }else{
// right--;
// }

// }

// return null;
// }

// console.log(twoPointer([1,2,3,4,6],6));



function twoPoint(arr,target) {
    
    let left = 0;
    let right = arr.length - 1;

    while (left<right) {
        let sum = arr[left] + arr[right];
 
        if (sum === target) {
            let data =[arr[left],arr[right]]
            console.log("result array",data)
            return `array sum ${sum}`
        }
        if (sum < target) {
            left++
        } else {
            right--
        }
    }

    return null;

}

let arr =[10,12,14,16,20,30,40,50,60,70,80,90,100];
let target=72;

 let result = twoPoint(arr,target);

 console.log(result)
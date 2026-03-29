const arr =[10,5,3,6,33,56,2,34,53,223,221,22,130,2,22,33];

// bubble sort 

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
        if (arr[j]>arr[j+1]) {
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1] =temp;
        }
        
    }
    
}

console.log(arr)








const freq = {};           
const duplicatesAll = [];  


for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    freq[num]=(freq[num] || 0) + 1;
    
}

for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] > 1) {
        duplicatesAll.push(arr[i]);
    }
    
}

console.log(duplicatesAll);
let uniqueArr = [];
let duplicateValue =[]
for (let i = 0; i < arr.length; i++) {
   let isDuplicate =false;

   for (let j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
         isDuplicate =true;
         break
    }
    
   }

   if (!isDuplicate) {
    uniqueArr.push(arr[i])
   }
   else {
    duplicateValue.push(arr[i])
   }
    
}
console.log(uniqueArr)
console.log(duplicateValue)



// নতুন array যেখানে duplicates remove হবে

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false; // flag ধরছি

    // check করবো current element আগে uniqueArr-এ আছে কি না
    for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
            isDuplicate = true; // duplicate পাওয়া গেছে
            break; // inner loop বন্ধ
        }
    }

    if (!isDuplicate) {
        uniqueArr.push(arr[i]); // যদি duplicate না হয়, push করি
    }
}

console.log(uniqueArr);
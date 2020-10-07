// Given a list of numbers, return whether any two sums to k.
//  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function twoNumberSum(arr, k){
    for(let i=0; i< arr.length; i++){
        let diff = Math.abs(arr[i]-k)
        if(arr.indexOf(diff) > -1){
            return `${diff} and ${arr[i]}`;
        }
    }
}
let arr = [10, 15, 3, 7];
let k = 17;
console.log(twoNumberSum(arr,k));
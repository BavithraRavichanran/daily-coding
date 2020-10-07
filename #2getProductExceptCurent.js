/* function getProductExceptCurrent(arr){
    let newArr = [];
    let multiple = arr.reduce((acc,cur)=> acc*cur);
    console.log(multiple);
    for(let i=0; i<arr.length; i++){
        let productOthers = multiple / arr[i];
        newArr.push(productOthers);
    }
    return newArr
}
console.log(getProductExceptCurrent( [1, 2, 3, 4, 5])); */

function getProductExceptCurrent(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        let productOthers = 1;
        for(let j=0; j<arr.length; j++){
            if(arr[j]!== arr[i]){
                productOthers = productOthers * arr[j];
            }
        }
        newArr.push(productOthers);
    }
    return newArr
}
console.log(getProductExceptCurrent( [1, 2, 3, 4, 5])); 
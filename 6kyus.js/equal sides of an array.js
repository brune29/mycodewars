/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
*/ 

function findIndex(arr){
    const totalSum = arr.reduce((acc,val)=>acc+val,0)
    let leftSum = 0;
    for(let i =0; i<arr.length; i++){
      const rightSum = totalSum-leftSum-arr[i]
      if(leftSum=== rightSum){
        return i
      }
      leftSum += arr[i]
    }
    }
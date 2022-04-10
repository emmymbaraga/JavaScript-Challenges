const primeNumber=(array)=>{
    const newArray=[]
    for(let i=0;i<array.length;i++)
    {
        let d =parseInt(array[i]/2)
        let isPrime=true
        for(let j=2;j<=d;j++){
           if(array[i]%j==0)
           {
              isPrime=false
           } 
        }
        if(isPrime)
        {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(primeNumber([1,2,3,4,5,6,7,8,9,11,12,13,14,15]))
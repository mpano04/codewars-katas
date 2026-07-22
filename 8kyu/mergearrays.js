const mergeArrays = (arr1,arr2) => {
    
    let result = [];
    for(let i=0; i<arr1.length; i++){
        result.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++){

        let found = false;
    
        for(let j = 0; j < result.length; j++){
    
            if(arr2[i] === result[j]){
                found = true;
                break;
            }
    
        }
    
        if(!found){
            result.push(arr2[i]);
        }
    
    }
    for(let i = 0; i < result.length; i++){

        for(let j = i + 1; j < result.length; j++){

            if(result[i] > result[j]){

                let temp = result[i];

                result[i] = result[j];

                result[j] = temp;

            }

        }

    }
        
    
    

    return result;
}


console.log(mergeArrays([1,2,3,4], [5,6,7,8]))
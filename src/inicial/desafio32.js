//Recebe um array  e quebra e 2 partes grando um novo array

const arr=['a','b','c','d','e']

let arr1 = []

let arr2 = []

for(let i = 0; i< arr.length; i++){
    
    if( i<= (arr.length/2)){
        arr1[arr1.length] = arr[i]
    }else{
        arr2[arr2.length] = arr[i]
    }
    
  
}

console.log(arr1)
console.log(arr2)

/*Prestar atenção se vou usar i ou arr[i],
se eu preciso da posição uso o i, se eu preciso do valor do array, uso arr[i]
*/


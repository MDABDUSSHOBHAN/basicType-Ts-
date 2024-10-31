// Normal funciton 


function add(num1:number,num2:number){

    return num1+num2;
}

console.log(add(2,5))

const addArrow = (num1:number,num2:number):number =>{

      return (num1+num2);

}

console.log(addArrow(2,56));


//  object ---> function() ----> Method()
// callBack Function in ts

let array:number[] = [1,3,4,5];

array.map( (number:number) => 
    
    {

        console.log( number*number)
    }
   )
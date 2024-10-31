// sperate operator in ts
// distructing

{

    const brost1:string[] = [
        
        'Abida',
        'Tonmoy',
        'sojib'
    ];

    const brost2:string[] = ['shobhan','sojib','nahid'];


    brost2.push(...brost1);
    console.log(brost2)


//  learn rest operator

 const greetFriends = (...friends:string[]) =>{

   friends.forEach((friend:string) =>console.log(friend))
}


greetFriends('abul','badul','kabul');

}

{


    // object discretfion in ts 

   const  user = {

    id:345,
    name: {

    firstName: "abdus",
    middleName:"shohan",
    lastName:"Ali",
    },
    contactNo: "01345566787",
    address:"Ullapara",
    }
// distructing in ts formate 
const {address,
  name:{lastName:ln}
 }  = user;



}
{

    type Student = {
    name:string,
    age:number,
    contactNo?: string,
    gender:string,
    address:string,
    }


    const student1:Student= {

        name:"MD Abdus Shobhan",
        age:34,
        gender:'Male',
        address:'Ullapara'
    }
}

{

    // union type

type FrontendDevloper = 'faikibazDevloper' | 'juniorDevloper';

const newdevloper : FrontendDevloper = 'faikibazDevloper'



}


// value defiend using unioun type:------->

type User = {

    name:string,
    email?:string,
    gender:"male"|"female",
    bloodGroup: "o+"|"A+",
}


let person1:User = {

    name:"abdus_shobhan",
    gender:"male",
    bloodGroup:"A+"
    
}
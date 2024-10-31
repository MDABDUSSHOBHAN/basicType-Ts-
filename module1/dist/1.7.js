"use strict";
// sperate operator in ts
// distructing
{
    const brost1 = [
        'Abida',
        'Tonmoy',
        'sojib'
    ];
    const brost2 = ['shobhan', 'sojib', 'nahid'];
    brost2.push(...brost1);
    console.log(brost2);
    //  learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(friend));
    };
    greetFriends('abul', 'badul', 'kabul');
}
{
    // object discretfion in ts 
    const user = {
        id: 345,
        name: {
            firstName: "abdus",
            middleName: "shohan",
            lastName: "Ali",
        },
        contactNo: "01345566787",
        address: "Ullapara",
    };
    // distructing in ts formate 
    const { address, name: { lastName: ln } } = user;
}
{
    const student1 = {
        name: "MD Abdus Shobhan",
        age: 34,
        gender: 'Male',
        address: 'Ullapara'
    };
}
{
    const newdevloper = 'faikibazDevloper';
}
let person1 = {
    name: "abdus_shobhan",
    gender: "male",
    bloodGroup: "A+"
};

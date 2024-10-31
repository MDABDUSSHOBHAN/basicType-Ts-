// sperate operator in ts
// distructing
{
    var brost1 = [
        'Abida',
        'Tonmoy',
        'sojib'
    ];
    var brost2 = ['shobhan', 'sojib', 'nahid'];
    brost2.push.apply(brost2, brost1);
    console.log(brost2);
    //  learn rest operator
    var greetFriends = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) { return console.log(friend); });
    };
    greetFriends('abul', 'badul', 'kabul');
}
{
    // object discretfion in ts 
    var user = {
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
    var address = user.address, ln = user.name.lastName;
}
{
    var student1 = {
        name: "MD Abdus Shobhan",
        age: 34,
        gender: 'Male',
        address: 'Ullapara'
    };
}
{
    var newdevloper = 'faikibazDevloper';
}
var person1 = {
    name: "abdus_shobhan",
    gender: "male",
    bloodGroup: "A+"
};

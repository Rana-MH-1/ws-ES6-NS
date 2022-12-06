var found = true;
if(found){
    let a = 4;
}
    console.log(a)
    //output : ReferenceError: a is not defined ==> let has a local scope

    // var ==> global Scope 

    //const
    const a =3;
    a=4;
    //TypeError: Assignment to constant variable.

    /* var /let a = 3;
    a=4; 
    output : 4 */

    //array
    
const arr = [1,56,12,39,57,24];
//arr = [1,2,35,5] //TypeError: Assignment to constant variable.
//console.log(arr)

arr[0]=2
console.log(arr)

const Person = {
    name:'Raed',
    age:27,
    Address: 'Tunis'
}

Person.name='Mounir'
Person.gender = 'male'
console.log(Person)
// we cannot assign a new value to the hall array/obj 
//but we can change el/key of array/obj or add or delete
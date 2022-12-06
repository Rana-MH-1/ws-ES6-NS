/* --------------- Spreading Operator ----------------------- */

console.log([...ages])
//add an el in the ages
//ES5
//ages.push(25)
//console.log(ages)

const newTab = [...ages, 25]
//console.log(newTab)

const Person ={
    name:'Raed',
    age:27,const ages = [1,201,5000,420,560,7000,2];

    Address:'Tunis'
}
const copiedPerson = {...Person}
//console.log(copiedPerson)
//add a key
//ES5
Person.gender = 'male';
//console.log(Person)
//ES6
const NewPerson = {...Person, gender:'male'}
//console.log(NewPerson)
//modify a value 
const newName = {...Person, name:'Achref'}
console.log(newName)
// it's an oprator to access directly to the el/keys of array/obj
//creates a copy

/* -------------------- Destructuring ------------------- */

const Person ={
    name:'Raed',
    age:27,
    Address:{
        country:'Tunisia',
        city:'Tunis'
    }
}

//Concat +
/*console.log('My name is' + ' ' + Person.name + ' ' + 'I am '+ ' ' + Person.age + ' ' +'years old and I am from' +' '+Person.Address) */

const {name, age, Address} = Person

//Template Literals
console.log(`My name is ${name} , I am ${age} years old and I am from ${Address.city}`)

const ages = [1,201,5000,420,560,7000,2];
//console.log(ages[0])
const [el1,el2,el3,...rest] = ages
console.log(...rest)
// Destructuring operator puts the el/keys of tab/obj in a variable ==> Simplification






const ages = [22,1,56,47,98,12,6];
//ES5
for(let i in ages){
   // console.log(ages[i])
}

//forEach()
const affichage = ages.forEach(age=> age)
//output : Undefined ==> traitemnet
const affichage = ages.forEach(age=> console.log(age))

const mapped = ages.map(el=> el+1)
console.log(mapped)
//map ==> create a copy of arr 
//return ==> new array

//filter
const paired = ages.map((age,i)=>{
    if(i%2==0){
        return age
    }
})
//output: [ 22, undefined, 56, undefined, 98, undefined, 6 ]

const pairedIndEL = ages.filter((el,i)=> i%2 == 0)
console.log(pairedIndEL)
//output : [ 22, 56, 98, 6 ]

//sort (tri)
const sorted = ages.sort()
//ouput : [ 1000, 12, 22, 47, 56, 6, 800, 98 ]
const sorted = ages.sort((a,b)=> a - b)// tri ascendant
const sorted = ages.sort((a,b)=> b - a)//tri descendant

//reduce
const Sum = ages.reduce((a,b)=> a +b)
console.log(Sum)

const ages = [1,201,5000,420,560,7000,2];
console.log(ages.some(el=> el>1000))
//output : true ==> some returns true if one el satisfy the condition

console.log(ages.every(el=> el>1000))
//output : false ==> Each el should satisfy the condition

//combined Methods
const ages = [1,201,5000,420,560,7000,2];
const Summ = ages.map(el=> el+1)

.sort((a,b)=> a - b)
.reduce((acc,val)=> acc + val)
console.log(Summ)
//we can combine array functions
//we cannot use ForEach in the combination bcz it's has an undefined return





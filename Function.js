//ES5
//1)
function Sum (a,b){
    return a + b ;
}

//2)

//ES6 ARROW FUNC ==> Fct anonyme
const Sum =  (a,b) => {
    return a + b ;
}

//call the function
Sum(2,3)
//1 instruction ==> we can remove the {return}
// 1 seul paramêtre ==> remove the ()
const affichage =  a =>  a  ;

//call the function
console.log(affichage('hello this is a ws of ES6'))

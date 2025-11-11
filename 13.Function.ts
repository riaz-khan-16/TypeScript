// the `: number` here specifies that this function returns a number
function getTime(): number {
  return 9
}

console.log(getTime())


// use void if it doesn't return anything


function Hello(): void{
  console.log("Hello")
}

Hello()


// pass parameter

function add(a:number, b:number){

    return a+b
}

console.log(add(5,0))


// add optional parameter

function add1(a:number, b:number, c?:number){

    return a+b+(c||0)
}

console.log(add1(5,0))
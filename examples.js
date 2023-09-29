console.log("Hello");

const SayHi = function Hello(){
    console.log("Hi");
}

//Hello();

SayHi();

let sayBye = ()=>{ //Can use => instead of function (lambda)
    console.log("Bye");
}

sayBye();

let test = (myValue) =>{
    console.log(myValue);
}

test("Bonjour");
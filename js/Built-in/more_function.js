// Call back function 
function div(x,y){
    return y(x);
};
console.log(div(5,function (x){
    return x+5;
}))

// Arrow Funtion 
const one=x=>x+3
// Two parameter & one line 
const run=(x,y)=>x+y;
console.log(run(2,3));
// one line & one parameter
console.log(one(10));
// Multiple line with code block
const three=(x,y)=>{
    let result=x+y;
    return result;
};
console.log(three(28,93));

const sum=new Function("a","b", "return a+b");
console.dir(sum);
console.log(sum(2,5));
function iolCal(x,y){
    console.log(arguments);
    return x*y;
};

// Bind and call 
console.log(iolCal(2,2));
console.log(iolCal.bind(null,2,2).call());
console.log(sum.toString());

function add(x,y){
    console.log(arguments);
    return x+y;
}
console.log(add(2,3));
console.log(add.call(3,2));
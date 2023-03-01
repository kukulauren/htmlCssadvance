const obj={a:"aa",b:"bb",c:"cc"};
console.log(obj);

// tostring \\\\\\\\
console.log(obj.toString());

// has own property 
console.log(obj.hasOwnProperty("a"));

// Extracting Keys 
console.log(Object.keys(obj));

// Rest parameter
function run(...x){
    console.log(x);
    return "This is rest parameter";
};
console.log(run(3,234,235,235345));

const total=(pv,cv)=> {
    return pv+cv;
}
function sum(...nums){
    return nums.reduce(total,0)
}

console.log(sum(1,2,4,23,43));

// Array Destructuring with spread syntax
const arr=[23,12,453,342,234,3456,567];
const [a,o,c,...nos]=arr;
console.log(a);
console.log(o);
console.log(c);
console.log(nos);

const obje={
    g:"aaa",
    t:"bbb",
    q:"ccc"
}
const {g,t,q}=obje;
console.log(g);
console.log(t);
console.log(q);
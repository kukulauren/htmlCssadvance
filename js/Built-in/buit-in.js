// Date 
// To,set and get method 
const d=new Date;
console.log(d);
console.log(d.toDateString());
console.dir(d);
console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getMonth());
d.setDate(27);
console.log(d);

// Calculation
let total=50;
let studyHour=2;
let dayCount=total/studyHour;
d.setDate(d.getDate()+dayCount);
console.log(d);

// String 
const str=new String("Hello Everyone");
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str[3]);
console.log(str.substring(4,10));
console.log(str.search("ll"));
console.log(str.search("za")); 
// Za doesn't exist in that string 

console.log(str.replace("ello","ola"));
console.log(str.replace("e","a"));
console.log(str.replaceAll("e","a"));

const bola=new String("      Bolarama Pulpn Olf Umn Tyew    ");
console.log(bola);
console.log(bola.trim());
console.log(bola.trim().split(" "))

const lotteryNum="21K49R2";
console.log(lotteryNum.padEnd(16,"M"));
 
let num=new Number(231.5298);
console.log(num);
console.log(num.toString());
console.log(num.toFixed(2));
console.log(parseInt(num));
console.log(parseFloat(num));

// isNaN,eval and isFinite
console.log(isNaN("laok"-"Kila"));
console.log(eval("2+6"));
console.log(isFinite(2/1));
function div(x){
    if(isFinite(100/x)){
        return "Number is not infinity";
    }
    return "Numver is infinity";
}
console.log(div(0));
console.log(div(4));

// MAth 
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-3));
console.log(Math.floor(Math.random()*10000000000));
console.log(Math.ceil(Math.random()*10000000000));
console.log(2**5);
console.log(Math.pow(2,5));
console.log(Math.sqrt(7));

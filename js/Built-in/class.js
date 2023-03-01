// Classes
class Student{};
let st1= new Student;
st1.name="MA Ma";
st1.age=16;
st1.brain=()=>{
    return `He has 130 IQ level`
};
console.log(st1);

let st2= new Student;
st2.name="Lauren";
st2.age=18;
st2.brain=()=>{
    return `He has 150 IQ level`
};
console.log(st2);

// constructor
class Myinfo{
    constructor(x){
        console.log("I am constructor "+x);
    };
};
let myinfo=new Myinfo("Lauren");

class Info{
    constructor(x,y,z,s){
        this.name=x;
        this.age=y;
        this.IQ=z;
        this.major=s;
        // Construtor run over ternary operator
        this.namePrefix=this.gender==="male"?"Mg"+" "+this.name:"Ma"+" "+this.name;
        this.birthYear=2023-this.age;
        this.subject=this.major==="bio"?`Chem, Physics, ${this.major}`:"Chem, Phys, ${this.major}"
        // this.subject=[
        //     "Chem","Physics", 
        //     this.major==="bio"?`${this.major} *`:`${this.major}*`
        // ] I know that sounds weird but I just want to test the output
        };
    // function in class
    learn(){
        return this.name+" "+"can learn"+" "+this.subject;
    } 
    about(){
        return `${this.name} is ${this.age} year${this.age>1 && "s"} old student`
    }
};
let stu1=new Info("Lauren",22,135,"bio");
console.log(stu1);
console.log(stu1.learn());
console.log(stu1.about());

let stu2=new Info("Mau",18,130,"eco");
console.log(stu2); 


// Inheritance
class A{
    a="aaa";
}
class B extends A{
    b="bbb";
};
let b=new B;
console.log(b)
class Monitor extends Student{
    room="Grade A"
};
let ga1= new Monitor("Molarea",21,"Female","Bio");
console.log(ga1);

// Private
class K{
    a="aa";
    #x="xx";
};
const k=new K;
console.log(k.x);

// Static Properties and Method 
class G{
    a="aa";
    // static property
    static x="bbb";
    static y(){
        return `This is static method`
    };
};
console.log(G.a);
console.log(G.x);
console.log(G.y());

// Method Chain 
class L {
    x(){
         console.log(`This is x`);
         return this;
    };
    y(){
        console.log(`This is y`);
        return this;

    };
    z(){
         console.log(`This is z`);
         return this;
    };
}

const aaa= new L;
aaa.x().y().z();


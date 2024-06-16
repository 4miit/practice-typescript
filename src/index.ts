/*
*/
console.log('hello world');

let age : number  = 20;


if (age < 50) 
    age += 10;
console.log(age);

let sales : number = 234_234_567;
let course : string = 'typescript';
let is_published :  boolean = true;

let sales  = 234_234_567;
let course  = 'typescript';
let is_published  = true;
let level;
level = 3;
level = 'r';

function render(document:any){
    console.log(document);
}


//ARRAY

let numbers = [1,2,3,'4'];
let number: number[] = [1,2,3,];

let numb : number[] = [];
numb[0] =3;


let numb : number[] = [];
numb.forEach(n => n.toLocaleString)

//TUPLE

let number: [number,string] = [3,'4'];
let numb: [number,string,number,boolean] = [3,'hello world',8,false];

//ENUM

const small = 1; 
const medium = 2; 
const larg = 3;

//pascalCase
enum Size{ small =1, medium ,larg};
let mysize:Size = Size.medium;
console.log(mysize);


const enum Size{ small=6 , medium ,larg};
let mysize:Size = Size.small;
console.log(mysize);

//FUNCTION

function calculateatax( income:number ){
    
    if(income<50_000)
        return income*2;
    return income*3;
}


function calculatetax( income:number ,taxyear=2022):number{
    
    if(taxyear<2022)
        return income*2;
    return income*3;
}

calculatetax(10_000);


//OBJECTS

let employee: {
    readonly id: number;
    name?: string;
    retire: (date: Date) => void;
    
} = { 
    id: 1,
    name: "mosh",
    retire:(date:Date) => {
        console.log(date);
    }
};
employee.name = "amit kumar";
console.log(employee);
console.log(employee.name);


//type ALIASES

type employee ={
    readonly id: number;
    name?: string;
    retire: (date: Date) => void;
    
}


//union types

function kgTolbs(weight: number | string): number{
    if(typeof weight === 'number')
        return weight*2.2;
    else
    return parseInt(weight)*2.2;
}

kgTolbs(23);
kgTolbs('amit');


//intersection Type

type dragable = {
    drag: () => void
}

type resizeable ={
    size: () => void
}

type widget = dragable & resizeable;
let textbox: widget = {
    drag: () => {},
    size: () => {}
} 


//literal types


type quantity = 46 | 78;
let qty: quantity = 78;

//nullable types
let quantity:50 | 45 = 45;

function greet(name: string | null | undefined){
    console.log(name.toUpperCase());
    if(name)
        console.log(name.toUpperCase());
    else
    console.log('hola');
}

greet(null);

//optional chaining
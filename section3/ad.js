// let obj1 = {
//     name : "jhin",
//     age : 24,
//     job : "Dev"
// }

// let obj2 = {
//     name : "jinx",
//     age : 24,
//     job : "Dev"
// }

// let obj3 = {
//     name : "jin",
//     age : 24,
//     job : "Dev"
// }

// let obj4 = Object.assign(obj1,obj2,obj3);
// console.log("obj4 :", obj4);


// let arr = [1,2,3,4,5,6];
// let arrP = arr.map(item => item*2)
// console.log("arrP: ", arrP);
// const printName = (students) =>{
    
//     let getName= [];
//     for (let key of students){
//         getName.push(key.name);

//     }
//     return getName.join(",")
// }

// console.log();

// let students = [
//     {
//     name : "quang anh",
//     age : 17,
//     hobbies: ["cầu lông","đọc truyện"]
// },
// {
//     name : "phan anh",
//     age : 17,
//     hobbies: ["bóng đá","đọc truyện"]
// },
// {
//     name : "lê anh",
//     age : 16,
//     hobbies: ["bóng đá","bóng rổ"]
// }
// ]
//  let stuAge = students.filter (item => item.age >=17)
// console.log( printName(stuAge));

// let sameHobbies = students.filter (item => item.hobbies.includes("đọc truyện"))
// console.log( sameHobbies);

// let sameHobbies1 = students.filter (item => item.hobbies.includes("bóng đá"))
// console.log( sameHobbies1);


// class Person {

//     constructor(_name, _age, _address, _cccd){
//         this.name = _name
//         this.age = _age
//         this.address = _address
//         this.cccd = _cccd

//     }
//     say(){
//         alert("hello")
//     }
// }

// let a = new Person("le anh", 16, "cau giay", "012345678");

// console.log(a.name);
// console.log(a.age);
// console.log(a.address);
// console.log(a.cccd);\





// const pi = 3.14;
// class circle {
//     constructor(_bankinh ){
//         this.bankinh= _bankinh

//     }
//     dtht(){
//         return pi * this.bankinh * this.bankinh;
//     }

//     cvht(){
//         return pi * this.bankinh * 2;
//     }
// }

// let circle1 = new circle(2)
// console.log("diện tích: ", circle1.dtht());
// console.log("Chu vi :", circle1.cvht() );


class rectangle{
    constructor(_chieudai, _chieurong){
        this.chieudai= _chieudai;
        this.chieurong= _chieurong;

    }
    dthcn(){
        return this.chieudai * this.chieurong
    }

    cvhcn(){
        return (this.chieudai + this.chieurong) *2
    }
}

let rec = new rectangle(2)
console.log("diện tích: ",rec.dthcn );
console.log("Chu vi :", rec.cvhcn );


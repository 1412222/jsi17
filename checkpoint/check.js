//Bai 9
// let m = [1,2,3,4,5,6,"hh",9 ,80,100]

// let filterM = m.filter (item => {
//     return typeof item == "number"
// } )
// console.log(filterM);
// //bai10
// let a = ("High knowledge" , "high return")

//  let b = a.split (" ")
//  console.log(b);

// //Bai 11
// class People {
//     constructor(_name, _age, _address){
//         this.name = _name
//         this.age = _age
//         this.address = _address
//     }
//     GioiThieu(){
//                 return `Xin chao ten toi la ${this.name} , va toi ${this.age}`
        
//              }
        
    
// }

// let me = new People ("me", "17", "Hanoi" )
// console.log(me);


// class Students extends People {
//     constructor(_name, _age, _address, _math, _physical, _chemistry){
//         super(_name, _age, _address)
//         this.math= _math
//         this.physical = _physical
//         this.chemistry = _chemistry
//     }
//     GioiThieu(){
//         return super.GioiThieu + `diem Toan ${this.math}, diem Li ${this.physical}, diem Hoa ${this.chemistry}`

//     }
// }

// let student = new Students ("me", "17", "Hanoi", 9.5, 10 , 8.25)
// console.log(student);
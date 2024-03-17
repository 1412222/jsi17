// class Nguoi {
//     constructor(_name, _age, _job , _id,_hobbies, _hometown){
//         this.name =_name
//         this.age=  _age
//         this.job=_job
//         this.id=_id
//         this.hobbies=_hobbies
//         this.hometown=_hometown
//     }

//     GioiThieu(){
//         return `Xin chao ten toi la ${this.name} , va toi ${this.age} toi lam nghe ${this.job}`

//     }

//     SinhNhat(){
//         return `Chuc mung sinh nhat , ban da ${this.age}`
//     }


    
// }

// let Me = new Nguoi ("Me", 18, "programmer", "012346789", ("doc sach","choi game"), "ha noi")
// console.log(Me.GioiThieu());
// console.log(Me.SinhNhat());



// class GiaoVien extends Nguoi  {
//     constructor(_name, _age, _job , _id,_hobbies, _hometown, _monhoc, _capbac){
//         super (_name, _age, _job , _id,_hobbies, _hometown)
//         this.monhoc= _monhoc
//         this.capbac = _capbac

//     }
//     gioithieu(){
//         return super.GioiThieu + `Nhung nam gan day toi da chuyen sang bo phan giang day vs cap bac ${this.capbac}`
//     }

//     sinhnhat(){
//         return `Sinh nhat giao vien ${this.name} dang giang day tai bo mon ${this.monhoc} tuoi ${this.age}!!!!`
//     }
// }

// let me = new GiaoVien ("Me", 18, "programmer", "012346789", ("doc sach","choi game"), "ha noi","Tin hoc", "cap 3")
// console.log(me.sinhnhat());
// console.log(me.gioithieu());


// class Nguoi {
//     constructor(_ten, _tuoi){
//         this.ten = _ten
//         this.tuoi = _tuoi 

//     }
//     get ten(){
//         return this._ten
//     }


//     set tuoi(tuoiMoi){
//         if (tuoiMoi != parseInt(tuoiMoi)){
//             if(tuoiMoi >0){
//                 this.tuoi = tuoiMoi
//             }
//         }


        
//         else{
//             console.log("tuoi moi la mot so nguyen duong");
//         }
      
//     }
// }

// let a =2 
// console.log(
//     (a== parseInt(a))? `${a} la so nguyen `: `${a} ko la so nguyen`
// );

// let ME = new Nguoi("ME", 25)
// console.log(Nguoi.name);
// console.log(Nguoi.tuoi);


class PhanSo {
    constructor(_tu , _mau){
        this.tu = _tu
        this.mau= _mau
    }

    cong(){
        return 
    }
}
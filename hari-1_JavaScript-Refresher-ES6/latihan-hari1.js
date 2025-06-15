// // Function
// function hitungPersegi(panjang, lebar){
//     const hitungLuasPersegi = panjang * lebar
//     return hitungLuasPersegi
// }

// alert(hitungPersegi(7, 5));


// // Ternary operation
// let angka = prompt("berapa tebakan anda : ");
// let tebakAngka = (angka == 7) ? "Anda Benar" :
//   (angka < 5) ? "tebakan tidak ada diantara 1-5" :
//   (angka = 5) ? "tebakan berada di antara 5-10" :
//   (angka >= 10) ? "tebakan hanya ada diantara 1-10" :
//   "Jawaban anda salah";

// alert(tebakAngka);


// // Arrow Function
// let yes = () => alert("You agreed.");
// let no = () => alert("You canceled the execution.");

// let ask = (question) => {
//   ask = confirm(question) ? yes() : no();
//   return ask;
// }

// ask("did you like sport?");




// // Object
// let name = "Apri";
// let lastname = "Wijayanto";

// const person = {
//   name: "Vian",
//   lastname: "Aprilianto",
//   age: 21,
//   fullname: () => person.name + " " + person.lastname
// }

// document.getElementById("demo").innerHTML = "nama dia adalah " + person.fullname() + "dan umur-nya " + person.age + " tahun";


// // Object Manipulation
// const Xperson = person;
// Xperson.age = 10;
// alert("Mengubah isi dalam objek Person, properties age mejadi " + Xperson.age + " tahun")



// // Object Looping text
// const fruits = {
//   bananas: 200,
//   oranges: 100,
//   jackfruit: 50
// }
// delete fruits.jackfruit;

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + " : " + value + " <br>";
// }

// document.getElementById("sub").innerHTML = text;



// *Object Constructor Function*

// // // -Tanpa Arrow Function-
// function Car(name, price, condition, color, isAutomatic) {
//   this.name = name;
//   this.price = price;
//   this.condition = condition;
//   this.color = color;
//   this.isAutomatic = isAutomatic;
// }

// // // -Dengan Arrow Function-
// // (Incorrected) Hasil-nya akan "undefined" karena tidak mengembalikan objek dan hanya mengembalikan nilai terakhir dari fungsi, yaitu `jalan()`.
// const Car = (nm, hrg, stts, clr, isEltrc) => {
//   let name = nm;
//   let price = hrg;
//   let condition = stts;
//   let color = clr;
//   let isElectric = isEltrc;
//   let jalan = () => {
//     return "Mobil " + this.name + " berjalan";
//   }

//   return name, price, condition, color, isElectric, jalan();
// } 

// // // (Corrected) Solusi yang benar adalah "return" sebagai objek dengan properti dan metode yang diinginkan.
// const Car = (nm, hrg, stts, clr, isEltrc) => {
//   const mobil = {
//     name: nm,
//     price: hrg,
//     condition: stts,
//     color: clr,
//     isElectric: isEltrc,
//     jalan: () => {
//       return (stts === "New") ? "berjalan" : "tidak berjalan";
//     }
//   }

//   setTimeout(() => {
//     mobil.color = "Red";
//     document.getElementById("car").innerHTML = "Saya memiliki mobil " + mustang.name + " dan dia masih bisa " + BMW.jalan() + " dijalan raya. <br>" + "Dan dalam waktu 5 detik mobil akan berubah warna menjadi " + mustang.color;
//   }, 5000);
  
//   return mobil;

// } 

// let mustang = Car("Porsche", 700, "New", "Yellow", true);
// let BMW = Car("BMW", 800, "Sec", "Black", true);


// document.getElementById("car").innerHTML = "Saya memiliki mobil " + mustang.name + " dan dia masih bisa " + BMW.jalan() + " dijalan raya. <br>" + "Dan dalam waktu 5 detik mobil akan berubah warna menjadi " + mustang.color;

// // // // -Tanpa Arrow Function-
// // BMW.changeColor = function (clr) {
// //   this.color = clr;
// // }

// // // // -Dengan Arrow Function-
// // // // (Corrected) Mengubah dengan merujuk langsung ke objek `BMW`
// BMW.changeColor = (clr) => {
//   return BMW.color = clr;
// }

// BMW.changeColor("Blue");

// document.getElementById("car2").innerHTML = "Mobil pertama adalah " + mustang.name + " dengan warna " + mustang.color + " dan mobil kedua adalah " + BMW.name + " dengan warna " + BMW.color + ".";

let manusia = "";

const human = (Firstname, Lastname, Age, Height, Weight) => {
  let BMI = Weight / ((Height / 100) * (Height / 100));

  let manusia = {
    firstName: Firstname,
    lastName: Lastname,
    age: Age,
    height: Height,
    weight: Weight,

    sayHello: () => {
      return "Hello, my name is " + Firstname + " " + Lastname + ". i am " + Age + " years old, my height is " + Height + " cm and my weight is " + Weight + " kg."
    },
    myBMI: () => {
      return "my BMI is " + BMI.toFixed(2);
    },
    fullName: () => {
      return "Hi, my fullname is " + Firstname + " " + Lastname;
    },
    cekBMI: () => {
      let hitungBMI = (BMI < 18.5) ? "\"berat badan kurang\"" :
        (BMI >= 18.5 && BMI <= 24.9) ? "\"berat badan normal\"" :
        (BMI >= 25 && BMI <= 29.9) ? " \"berat badan berlebih\"" :
        (BMI >= 30) ? "\"obesitas\"" : "\"tidak diketahui\""
      
      return "my status BMI is " + hitungBMI;
    }
  };

  return manusia;
}

setTimeout(() => {
    vian.height = 172;
    vian.weight = 80;
    document.getElementById("demo").innerHTML = vian.sayHello() + " and " + vian.myBMI() + ", " + vian.cekBMI() + ". <br> And now my height is " + vian.height + " cm and my weight is " + vian.weight + " kg.";
  }, 5000);


let vian = human("Vian", "Aprilianto", 21, 150, 60);
let apri = human("Apri", "Wijayanto", 23, 180, 80);

document.getElementById("demo").innerHTML = vian.sayHello() + " and " + vian.myBMI() + ", " + vian.cekBMI();
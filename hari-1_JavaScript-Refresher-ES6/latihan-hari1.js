// Function
function hitungPersegi(panjang, lebar){
    const hitungLuasPersegi = panjang * lebar
    return hitungLuasPersegi
}

alert(hitungPersegi(7, 5));


// Ternary operation
let angka = prompt("berapa tebakan anda : ");
let tebakAngka = (angka == 7) ? "Anda Benar" :
  (angka < 5) ? "tebakan tidak ada diantara 1-5" :
  (angka = 5) ? "tebakan berada di antara 5-10" :
  (angka >= 10) ? "tebakan hanya ada diantara 1-10" :
  "Jawaban anda salah";

alert(tebakAngka);


// Arrow Function
let yes = () => alert("You agreed.");
let no = () => alert("You canceled the execution.");

let ask = (question) => {
  ask = confirm(question) ? yes() : no();
  return ask;
}

ask("did you like sport?");




// Object
let name = "Apri";
let lastname = "Wijayanto";

const person = {
  name: "Vian",
  lastname: "Aprilianto",
  age: 21,
  fullname: () => person.name + " " + person.lastname
}

document.getElementById("demo").innerHTML = "nama dia adalah " + person.fullname() + "dan umur-nya " + person.age + " tahun";


// Object Manipulation
const Xperson = person;
Xperson.age = 10;
alert("Mengubah isi dalam objek Person, properties age mejadi " + Xperson.age + " tahun")



// Object Looping text
const fruits = {
  bananas: 200,
  oranges: 100,
  jackfruit: 50
}
delete fruits.jackfruit;

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + " : " + value + " <br>";
}

document.getElementById("sub").innerHTML = text;



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
const Car = (nm, hrg, stts, clr, isEltrc) => {
  let changeColor = (clr) => {
    setTimeout(() => {
      clr = "Red";
      console.log("Warna mobil berubah menjadi " + clr);
      document.getElementById("car").innerHTML = "Warna mobil berubah menjadi " + clr;
    }, 5000); // 5 detik

    changeColor();
}


  return {
    name: nm,
    price: hrg,
    condition: stts,
    color: changeColor(clr) || clr,
    isElectric: isEltrc,
    jalan: () => {
      return (stts === "New") ? "berjalan" : "tidak berjalan";
    }
  }
} 

let mustang = Car("Mustang", 700, "New", "Yellow", true);
let BMW = Car("BMW", 800, "Sec", "Black", true);

document.getElementById("car").innerHTML = "Saya memiliki mobil " + mustang.name + " dan dia masih bisa " + BMW.jalan() + " dijalan raya. <br>" + "Dan dalam waktu 5 detik mobil akan berubah warna menjadi " + mustang.color;


// BMW.changeColor = function (clr) {
//   this.color = clr;
// }

// BMW.changeColor("Red");

// Car.prototype.year = 2023;

// document.getElementById("car").innerHTML = "Mobil pertama adalah " + mustang.name + " dengan warna " + mustang.color + " dan mobil kedua adalah " + BMW.name + " dengan warna " + BMW.color + " dan tahun pembuatan " + BMW.year;
let age = prompt("umur berapa?", 18);

let message = (age < 3) ? "Hi baby!" : 
(age < 16) ? "Hello!!" : 
(age < 100) ? "Greetings!" : 
"Your not human"

alert(message);
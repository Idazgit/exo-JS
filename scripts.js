// let a = 5;
// let b = 3;
// console.log(a + b);

// let c = 10;
// let d = 7;
// console.log(c - d);

// let e = 4;
// let f = 6;
// console.log(4 * 6);

// const prenom = "John";
// const nom = "Doe";
// const type1 = prenom + " " + nom;
// console.log(type1);

// const sujet = "Le chat";
// const verbe = "mange";
// const objet = "la souris";
// const phrase2 = `${sujet} ${verbe} ${objet}`;
// console.log(phrase2);

// let tableau = ["1", "2", "3", "4", "5"];
// console.log(tableau);

// const chiffre = ["10", "20", "30"];
// let tableau1 = [];
// tableau1.push(chiffre);
// chiffre.shift();
// console.log(tableau1);

// function saluer(nom) {
//   return `Bonjour, ${nom}!`;
// }
// console.log(saluer("Alice"));

// function multiplication(number1, number2) {
//   return number1 * number2;
// }

// console.log(multiplication(7, 8));

// function age(age) {
//   if (age >= 18) {
//     console.log("Majeur");
//   } else {
//     console.log("Mineur");
//   }
// }
// age(19);

// let age = 1;

// let i = 0;

// while (age < 18) {
//   console.log("Super c'est mon anniversaire , j'ai " + age + "ans");
//   age++;
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// const choixOrdi = Math.floor(Math.random() * 10 + 1);
// console.log(choixOrdi);
// const fin = true;
// const choixU = prompt("Deviner un nombre entre 1 et 10");
// while (choixOrdi != choixU) {
//   if (choixU < choixOrdi) {
//     console.log("plus grand");
//   } else {
//     console.log("plus petit");

//     const choixU = prompt("Deviner un nombre entre 0 et 10");
//   }
// }
// console.log("Vous avez trouvé le bon chiffre");

// function devinenombre() {
//   let randomNr = Math.floor(Math.random() * 100);
//   let guess;

//   do {
//     guess = prompt("Devine un nombre entre 1 et 100 ");
//     console.log(guess, randomNr);
//     if (randomNr > guess) {
//       alert("Trop Petit");
//     } else if (randomNr < guess) {
//       alert("Trop Grand");
//     }
//   } while (guess != randomNr);
//   {
//     alert("Bravo");
//   }
// }
// devinenombre();

// function dmois(mois, annee) {
//   switch (mois) {
//     case "1":
//       return "31 jours";

//     case "2":
//       if (annee % 4 == 0) {
//         return "29 jours";
//       } else {
//         return "28 jours";
//       }

//     case "3":
//       return "31 jours";

//     case "4":
//       return "30 jours";

//     case "5":
//       return "31 jours";

//     case "6":
//       return "30 jours";

//     case "7":
//       return "31 jours";

//     case "8":
//       return "31 jours";

//     case "9":
//       return "30 jours";

//     case "10":
//       return "31 jours";

//     case "11":
//       return "30 jours";

//     case "12":
//       return "31 jours";
//   }
// }
// console.log(dmois("2", 2023));

const button = document.createElement("button");
const para = document.createElement("p");

const element = document.querySelector("body");

button.textContent = "bonjour";

element.appendChild(button);
element.appendChild(para);
button.addEventListener("click", () => {
  para.textContent = "Hello World";
});

const button2 = document.createElement("button");
const para2 = document.createElement("p");

button2.textContent = "bonjour";
para2.textContent = "Blyat";

element.appendChild(button2);
element.appendChild(para2);

button2.addEventListener("click", () => {
  para2.style.color = "red";
});

const button3 = document.createElement("button");
button3.textContent = "bonjour";
element.appendChild(button3);

const ulParent = document.createElement("ul");
element.appendChild(ulParent);

button3.addEventListener("click", () => {
  const list1 = document.createElement("li");
  list1.textContent = "Nouvel élément";
  ulParent.appendChild(list1);
});

const button4 = document.createElement("button");
button4.textContent = "liste Suppr";
element.appendChild(button4);

button4.addEventListener("click", () => {
  ulParent.removeChild(ulParent.firstElementChild);
});

const buttonA = document.createElement("button");
const buttonB = document.createElement("button");
const buttonC = document.createElement("button");
element.appendChild(buttonA);
element.appendChild(buttonB);
element.appendChild(buttonC);
function gestionnaire() {}

const colors = ['yellow', 'blue', 'red', 'orange'];
console.log('While loop:');

// While loop
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}
console.log('For loop:');

// For loop
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
console.log('forEach loop:');

// forEach loop
colors.forEach(color => {
    console.log(color);
});

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// A: 3

// Hoeveel regels neemt mijn forEach method in beslag?
// A: 1

// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// A: Overzichtelijker
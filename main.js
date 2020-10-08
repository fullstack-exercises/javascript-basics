 const age = 25;
 const isFemale = true;
 const totalAmount = 99;
 const name = 'Sarah';
 const driverStatus = 'bob';

 // Age check for bar
 if (age >= 18) {
     console.log('Welcome');
 } else {
     console.log('Sorry you\'re not allowed to come in');
 }

 // 50% discount for young people
 if (age >= 18 && age <= 25) {
     console.log('You get 50% off!!');
 } else {
     console.log('No discount for you');
 }


 // Check for ladysnight
 if (isFemale) {
     console.log('So nice that you come join our ladys night!');
 } else {
     console.log('Sorry, this night is for ladys only. Please come back another day.');
 }

 // Check for Sarah or Bram (Abraham)
 if (name === 'Sarah' || name === 'Bram') {
     console.log('Congratulations! This bar is also 50 years old, so you will get a free beer!')
 } else {
     // if person is not 50 years, no action

 }

 // Check amount
 if (totalAmount <= 25) {
     console.log('You\'ll get free bitterballs');
 } else if (totalAmount <= 50 || totalAmount <= 99) {
     console.log('You\'ll get free nachos!');
 } else if (totalAmount >= 100) {
     console.log('You\'ll get a free bottle of champaign!!')
 } else {
     console.log('Thank you for your order!')
 }

 // Who drives?
 if (driverStatus === 'bob') {
     console.log('Wonderful, you are the bob and you can drive home');
 } else {
     console.log('Are yoy crazy? Don\'t drive when you had a couple of drinks! Order a taxi and go home!');
 }
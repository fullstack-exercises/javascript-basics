//// Objects
let person = {
    name: 'Jessica',
    age: 27
};

person.evaluations = [7, 10, 9];

// Log object
console.log(person);
// Log object name dot notation
console.log(person.name);
// Log object age bracket notation
console.log(person['age']);
// Log object evaluations
console.log(person.evaluations);

//// Arrays
let colors = ['purple', 'blue', 'red'];
// log array
console.log(colors);
// log length of array
console.log(colors.length);
// Log first index of array
console.log('log first index: ' + colors[0]);
// Log last index of array
console.log('log last index: ' + colors[colors.length - 1]);
// add 4th elemet to array
colors.push('green');
console.log(colors);
// add 5th element to array
colors.push('8');
console.log(colors);
// add new object as 6th element to array(object)
colors.push('{greeting: "hi ik ben een object"}');
console.log(colors);
// Log only last array from the object
console.log('Last item: ' + colors[colors.length - 1]);

//// Real-life objects
const catBreeds = [{
        name: "Abyssinian",
        description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
        dog_friendly: 4,
        energy_level: 5,
        life_span: "14 - 15",
        origin: "Egypt",
        temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
        wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
        food: {
            favourite_food: "fish",
            medium_liked_food: "dried fruits",
            disliked_food: "walnuts"
        }
    },
    {
        name: "Aegean",
        description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
        dog_friendly: 4,
        energy_level: 53,
        life_span: "9- 12",
        origin: "Greece",
        temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
        wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
        food: {
            favourite_food: "tuna",
            medium_liked_food: "canned food",
            disliked_food: "all fruits"
        }
    },
    {
        name: "American Bobtail",
        description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
        dog_friendly: 5,
        energy_level: 3,
        life_span: "11 - 15",
        origin: "United States",
        temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
        wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
        food: {
            favourite_food: "meaty things",
            medium_liked_food: "tuna",
            disliked_food: "canned food"
        }
    }
]

// Log breed of last cat
console.log('Name of last cat breed: ' + catBreeds[catBreeds.length - 1].name);
// Log energy level of first cat
console.log('Energy level of first cat: ' + catBreeds[0].energy_level);
// Log first temperament of second cat
console.log('First temperament of second cat: ' + catBreeds[1].temperament[0]);
// Log last temperament of third cat
console.log('Last temperament of third cat: ' + catBreeds[2].temperament[catBreeds[2].temperament.length - 1]);
// Log favorite food of third cat
console.log('Favorite food of third cat: ' + catBreeds[2].food.favourite_food);
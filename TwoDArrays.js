/*
Challenge 1: Student Scores 
You need to organize scores for three students, each of whom has taken three 
tests. Create a 2D array named allScores where each inner array contains three 
test scores for a single student. 
1. Write the code to create the allScores array with three inner arrays. 
2. Each inner array should contain three numeric scores of your choice. */

let allScores = [
    [89, 95, 76],
    [72, 71, 65],
    [82, 91, 84],
];
console.log(allScores);

/*Challenge 2: Build a Seating Grid 
"You want to model three rows of seats in a theater with four seats per row. Create 
a 2D array called theaterSeating that has an outer array of three inner arrays, 
each inner array representing a row of four seat labels. (For instance, seat labels 
could be "A1", "A2", etc.) 
1. Use nested array literals to define the structure. 
2. Ensure each inner array has exactly four seat labels. */

let theaterSeating =[
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"],
];
console.log(theaterSeating);

/*Challenge 3: Form a Multi-Dimensional Contact List 
Create a 2D array named contactsList where each inner array represents one 
contact’s info. For now, store three pieces of information in each inner array, such 
as ["Name", "Email", "Phone"]. Create two of these inner arrays in 
contactsList. 
1. Define the outer array contactsList. 
2. Insert two inner arrays, each with three strings representing a contact’s 
details. */

let contactsList =[
    ["Lindsay", "lindsayow@gmail.com", "314-842-5715"],
    ["Gayle", "gylarson@yahoo.com", "314-518-8801"],
  //  ["Sheri", "sherimyers@live.com", "314-701-4594"],
];

console.log(contactsList);
#!/usr/bin/env node

//Question 1
// let message = "Hello World, how are you";
// console.log(message);

//Question 2
// let personName: string = "Eric";
// console.log(`Hellow ${personName}, would you like to learn some python today?`);

//Question 3
// let personName = "sobia A.haq";

// console.log(personName . toLowerCase());

// console.log(personName . toUpperCase());

// console.log(personName.replace(/\b\w/g, (char)  => char.toUpperCase()));

//Question 4
// console.log("Albert Einstine once said,\"A person who never made a mistake never tried anything new.\"")

//Question 5
// let quote = "A person who never made a mistake never tried anything new";
// let famous_person = "Albert Einstine";
// let message = `${famous_person} once said, ${quote}`;
// console.log(message);

//Question 6
// let personName = `\n\t BABAR AZAM\t\n`;
// console.log(personName);
// let stripped = personName.trim();
// console.log(stripped);

//Question 7,8
// console.log(5+3);
// console.log(11-3);
// console.log(4*2);
// console.log(16/2);

//Question 9
// let favouriteNumber: number = 4;
// console.log(`My favourite number is ${favouriteNumber}`);

//Question 10
// My name is SOBIA
// Date: 15/03/2024
// This program will run simple code just like hello world
// console.log('Hello world simple program');

//Question 11
// let members: string[] =['Ufaq' ,'Aaouz' ,'Sobia' ,'Ainee' ,'Hafsa'];
// for(let i=0; i<members.length; i++){
//     console.log(members[i]);
// }

//Question 12
// let members: string[] =['Ufaq' ,'Aaouz' ,'Sobia' ,'Ainee' ,'Hafsa'];
// let message: string = "Tomorrow will be my Birth day:";
// for(let i=0; i<members.length; i++){
//     console.log(message + members[i]);
// }

//Question 13
// let transportation: string[] = ["civic" ,"bike" ,"bus" ,"suzuki" ,"horse cart"];
// for (let i=0; i < transportation.length; i++) {
//     console.log("I would like to own a "  + transportation[i]);
// }

//Question 14
// let guest_list: string[] = ['Shazia' ,'Sadia' ,'Rabia' ,'Afshan'];
// for(let i=0; i<guest_list.length; i++){
//     console.log(" Respected Mam "  + guest_list[i] + ' ,\nWe invited you on dinner tomorrow.\n\nThank you');
// }

//Question 15
// let guestlist = ["Rabia" , "Shazia" , "Sadia" , "Afshan"];

// let dontcome = guestlist[0];

// console.log(dontcome, "Nai Aah Skti");

// guestlist.splice(0, 1, "Aaouz");

// guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me?`));

//Question 16
//creating a guestlist array

//let guestList = ["sadia" ,"shazia" ,"Rabia" ,"Afshan"];
//making variable for those guest who cant come

//let dontCome = guestList[0];
//printing the guest name who cant come

//console.log(dontCome, "Nai Aa sKti hai");
//add or remove guest from guestlist array

//guestList.splice(0, 1, "Sadia");
//message print for bigger table

//console.log("Good News ! We have found a bigger table for Dinner");
//adding a new guest at starting index of array

//guestList.unshift("Ufaq");

//adding a new guest at ending indexof array
//guestList.push("Hafsa");

// get a middleindex for our guestlist array
//let middleIndex: number = Math.floor(guestList.length / 2);

//adding a new guest to middleindex of array
//guestList.splice(middleIndex, 0, "Ainee");

//print message of update list
//console.log("updated list of our guest");

//sending a invitation message to our guests by one with their names
//guestList.forEach(oneguest =>console.log(`Salam ${oneguest} , would you like to have dinner with me`));

//Question 17
//creating a guestlist array

//let guestList = ["sadia", "shazia", "Rabia", "Afshan"];
//making variable for those guest who cant come

//let dontCome = guestList[0];
//printing the guest name who cant come

//console.log(dontCome, "Nai Aa sKti hai");
//add or remove guest from guestlist array

//guestList.splice(0, 1, "Sadia");
//message print for bigger table

//console.log("Good News ! We have found a bigger table for Dinner");
//adding a new guest at starting index of array

//guestList.unshift("Ufaq");

//adding a new guest at ending indexof array
//guestList.push("Hafsa");

// get a middleindex for our guestlist array
//let middleIndex: number = Math.floor(guestList.length / 2);

//adding a new guest to middleindex of array
//guestList.splice(middleIndex, 0, "Ainee");

//print message of update list
//console.log("updated list of our guest");

//sending a invitation message to our guests by one with their names
//guestList.forEach((oneguest) =>
 // console.log(`Salam ${oneguest} , would you like to have dinner with me`)
//);

//Inform that only two guests can be invited for dinner
//console.log(
 // "Unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me"
//);
//

// while(guestList.length > 2){
//     let removedGuest = guestList.pop();
//     console.log(`Sorry, ${removedGuest} i cant invite you for dinner`);
// }

//sending a invitations to the last two guest on the list
// console.log("invitation to the last 2 guests");
// guestList.forEach(lasttwo => console.log('Luckly ${lasttwo}, you are still invited to dinner'));

//for removing last 2 guests from the list
// guestList.pop();
// guestList.pop();

// console.log("empty list:", guestList);

//Question 18
//making a array of countries and print its original order

// let countriesToVisit: string[] = ["China" , "Denmark" , "Brazil" ,"Argentina"];
// console.log("Original Order:" , countriesToVisit);

// //print the array in alphabetical order without modifing the actual array list
// console.log("Alphabetical order:" , [...countriesToVisit].sort());

// //show that the array is still in its original order
// console.log("Still in original order:" , countriesToVisit);

// //print the array in reverse order without modifing the actual array list
// console.log("Reverse order:" , [... countriesToVisit].reverse());

// //show again that the array is still in its original order
// console.log("Still in original order:" , countriesToVisit);

// //we have changed the original Array order now
// console.log("Original Array Reversed:", countriesToVisit.reverse());

// //print the array show that its back to original order
// console.log("Back to original order:" , countriesToVisit.reverse());

// //print the array to show that its order has been change in alphabetical order now
// console.log("sorted in Alphabetical order:", countriesToVisit.sort());


// //we have changed again the original Array order again
// console.log("Original Array Reversed:", countriesToVisit.reverse());

// //Question 19
// let guestList = ['Sadia' ,'Shazia', 'Rabia', 'Sobia' ,'Hafsa'];
// let lengthGuests: number = guestList.length;

// console.log(`We are inviting total ${lengthGuests} guests.`);

// //Question 20
// //making a programming languages in Array
// let programmingLanguage: string[] = ["Typescript" , "Javascript" , "Python" , "PHP"];

// //print the message of list
// console.log("List of programming Language:");

// //print a values of array in the array
// programmingLanguage.forEach(lnguage => console.log(lnguage));

//Question 21

// interface itCourse {
//     courseName: string;
//     location: string;
//     onsiteStudents: number;
// }

// let itCourse = {
//     courseName : "Typescript and Javascript",
//     location : "Governor House Sindh",
//     onsiteStudents :50000
// };

// console.log(itCourse);

//Question 22
//creating a array
// let errorArray: string[] = ["A", "B", "C", "D"];

// //producing error ! by accessing invalid index of array

// //console.log(errorArray[10]);
 
// //error removed
// console.log(errorArray[1]);

//Question 23
//making variables
// let five = 5;

// let ten = 10;

// //test 1
// console.log("test 1: five is equal to 5?");
// console.log(five == 5);

// //test 2
// console.log("\ntest 2: ten is equal to 10?");
// console.log(ten == 10);

// //test 3
// console.log("\ntest 3: 5 is not equal to 10");
// console.log(five!=10);

// //test 4
// console.log("\ntest 4: 10 is greater than 5 ?");
// console.log(10>5);

// //test 5
// console.log("\ntest 5: 5 is smaller than 10?");
// console.log(5<10);

// //test 6
// console.log("\ntest 6: 10 is smaller than 5?")
// console.log(10<5);

// //test 7
// console.log("\ntest 7: 5 is equal to 10?");
// console.log(five==10);

// //test 8
// console.log("\ntest 8: 10 is not equal to 10 ?");
// console.log(10!=10);

// //test 9
// console.log("\n test 9: 5 is greater than 10?");
// console.log(5>10);

// //test 10
// console.log("\n test 10: 100 is smaller than 50?");
// console.log(100<50);

//Question 24
// //Define variables
// let apple = "apple";
// let uppercaseApple = "APPLE"

// //test for equality and inequality with strings"

// console.log("is apple is equal to apple?");
// console.log(apple == "apple");


// console.log("\n is apple is not equal to apple?");
// console.log(apple != "apple");

// //tests using lower case functions

// console.log("\nis APPLE is equal to apple after converting to lowerCase?");
// console.log(uppercaseApple.toLowerCase() == "apple");

// console.log("\n is APPLE is not  equal to apple after converting to lowerCase?");
// console.log(uppercaseApple.toLowerCase() != "apple");


// let ten = 10;
// let twenty = 20;
// //numerical tests
// //equals to
// console.log("is ten is equal to twenty?");
// console.log(ten == twenty);
// // not equals to
// console.log("\nis ten is not equal to twenty?");
// console.log(ten != twenty);
// //greater than
// console.log("\n is ten is greater than zero?");
// console.log(ten > 0);
// //less than

// console.log("\n is twenty is less than ten?");
// console.log(twenty < 10);

// //greater than or equal to
// console.log("\n is tenis greater than or equal to 5?");
// console.log(ten >= 5);
// //lessthan or equal to
// console.log("\n is ten is less than or equal to 5?");
// console.log(ten <= 5);

// //tests using and operators

// console.log ("\n twenty is not equals to 10 and twenty is greay=ter than 10?");
// console.log(twenty != 10 && twenty > 10);


// console.log("\n is twenty is not equal to ten and twenty is greater than 30?");
// console.log(twenty != 10 && twenty >30);

// //using OR operator
// console.log("\n is twenty is greater than 50 OR twenty is equal to 20?");
// console.log(twenty > 50 || twenty == 20);

// console.log("\n is twenty is greater than 50 OR twenty is not equal to 20?");
// console.log(twenty >50 || twenty != 20);

// //tests wether item is include in array
// let fruits = ["apple" ,"banana", "orange"];
// console.log("\n is orange include in my fruits array?")
// console.log(fruits.includes("orange"));
// //not includes
// console.log("\n is orange is not include in mt fruits array? ");
// console.log(!fruits.includes("orange"));

//Question 25
//define variable
// let allianColour = "Black";

// if(allianColour === "Black"){
// //code Block
// console.log("Allian colour is Black player just earned 5 points.");
// }
// if(allianColour = "white"){
//     console.log("AllianColour is white");
// }

//Question 26
//define variable
// let allianColour = "green"
// //first version
// if(allianColour === "green"){
//     console.log("player just earned 5 points for shooting the allian.")
// }
// else{
//     console.log("player just earned 10 points.");
// }
// //second version
// if(allianColour === "blue"){
//     console.log("I am come from if statement.");
// }
// else{
//     console.log('I am come from else Statement.');
// }

//Question 27
//define variable
// let allianColour = "green";

// //using if and else statment
// if(allianColour === "green"){
//     console.log("(version 1)you shot down green allian you have earned 5 points");
// }
// else if(allianColour === "yellow"){
//     console.log("you shot down yellow allian you have earned 10 points");
// }
// else if(allianColour === "red"){
//     console.log("you shot down red allian you have earned 15 points");
// }

// //version 2

// let allianColour2 = "yellow";

// if(allianColour2 === "green"){
//     console.log("you shot down green allian you have earned 5 points");
// }
// else if(allianColour2 === "yellow"){
//     console.log("(version 2)you shot down yellow allian you have earned 10 points");
// }
// else if(allianColour2 === "red"){
//     console.log("you shot down red allian you have earned 15 points")
// }

//version 3
// let allianColour3 = "red";

// if(allianColour3 === "green"){
//     console.log("you shot down green allian you have earned 5 points");
// }
// else if(allianColour3 === "yellow"){
//     console.log("you shot down yellow allian you have earned 10 points");
// }
// else if(allianColour3 === "red"){
//     console.log("(version 3) you shot down red allian you have earned 15 points");
// }

//Question 28
// creating a variable
// let age = 22;
// //creating a program for determining the stage of life using if/else chain
// if(age < 2){
//     console.log("you are a Baby.");
// }
// else if(age >= 2 && age < 4){
//     console.log("you are a Toddler.");
// }
// else if(age >= 4 && age < 13){
//     console.log("you are a Kid.");
// }
// else if(age >= 13 && age < 18){
//     console.log("you are a Teenager.");
// }
// else if(age >= 20 && age < 65){
//     console.log("ypu are an Adult.");
// }
// else if(age >= 65){
//     console.log("you are Elder.");
// }

//Question 29
// //creating array

// let favouriteFruits = ["Mango", "Orange" ,"Apple"];
// //using 5 independent statement
// if(favouriteFruits.includes('Mango')){
//     console.log("I really like Mangos");
// }
// if(favouriteFruits.includes('Apple')){
//     console.log("I really like Apple");
// }if(favouriteFruits.includes("strawberry")){
//     console.log("I really like strawberry");
// }
// if(favouriteFruits.includes("Orange")){
// console.log("I really like Orange");
// }
// if(favouriteFruits.includes('Banana')){
// console.log("I really like Banana");
// }

//Question 30
//creating a array
// let userNames = ["Sadia" ,"Shazia", "Rabia", "Admin", "Afshan"];

// //using forEach loop on array
// userNames.forEach(oneUser =>{
//     if(oneUser ==="Admin"){
//         console.log(`Hello ${oneUser}, would you like to seea status report?`)
//     }else{
//         console.log(`Hello ${oneUser}, thank you for logging in again.`)
//     }
// })

//Question 31
//creating a array
// let userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"]

// userNames = []

//   if(userNames.length === 0){
// console.log("Your Arrary is Empty We need to find some users")
//  }else{
//     //using forEach loop on array
//     userNames.forEach(oneUser =>{
//         if(oneUser ==="Admin"){
//             console.log(`Hello ${oneUser}, would you like to seea status report?`)
//         }else{
//             console.log(`Hello ${oneUser}, thank you for logging in again.`)
//         }
//     })
// }
 

//Question32 
//Array of current users
// let current_users = ["Usman", "ali", "Areeba", "Zain","Areeba"]

// // Array of new users
// let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]

// //loop through new users to check for usernames availibility
// new_users.forEach(new_one_user => {
  
//     //Making a conditionfor username already exist and save in our_condition variable

//     let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

//     //print different messages using if_Else ststements
//     if(our_condition){
//     console.log(`Sorry ${new_one_user} is already taken!`)
// }else{
//     console.log(`This Username ${new_one_user} is available`)
// }
// })

//Question 33
//creating a Array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //using foe.loop
// for(let oneNumber of numbers){
//     let ordinalEnding: string;
//     if(oneNumber === 1){
//         ordinalEnding = "st"
//     }else if(oneNumber === 2){
//         ordinalEnding = "nd"
//     }else if(oneNumber === 3){
//         ordinalEnding = "rd"
//     }
//     else{
//         ordinalEnding = "th"
//     }
//     console.log(`${oneNumber}${ordinalEnding}`);
//     }

//Question 34
// //creating a Array
// let pizza = ["chiken Tikka", "Malai Cheese", "Fajita"];

// //using for.loop
// for(let onePizza of pizza){
//     console.log(`I Like ${onePizza} pizza`);
// }

// //print a message outside of the for.loop
// console.log("Pizza is Love");
// console.log("I eat Pizza");

//Question35
// //creating an Array

// let petAnimals = ["Cat", "Dog", "Rabbit"];

// //using for.loop
// for(let onePet of petAnimals){
// console.log(`A ${onePet} Would make a great pet.`)
// }

// //print a message outside of for.loop

// console.log("Any of these animals would make a great pet!")

//Question 36
// //creating a function
// function make_shirt (size: string, print_message: string){
//     console.log(`You Selected ${size} size shirt with ${print_message} prints on shirt`)
// }

// make_shirt("Large", "Code with Sobia")

// make_shirt("Small" , "Governor House")

//Question 37
// Making a function
// function make_shirt (size: string = "Large", print_message: string = "I LOve Typescript"){
//     console.log(`Creating a ${size} shirt with the ${print_message} prints on shirt`)
// }
// //Calling a function with by_default values
// make_shirt()

// //calling a function now with medium size and default message
// make_shirt("Medium")

// //Calling a function now with small size and different print message
// make_shirt("Small", "I Love Javascript")

//Question 38
// //creating  a function
// function describe_city (city: string ,country: string = "Pakistan"){
//     console.log(`${city} is in ${country}`);
//     }
    
//     //calling the function
//     describe_city("Karachi");
    
//     describe_city("Lahore");
    
//     describe_city("Berlin", "Germany");

//Question 39
//making a function with parameters which return a value in string

// function city_country (city: string, country: string) : string{
//     return `${city}, ${country}`;
//     }
    
//     //calling a function and print the returned value
    
//     console.log(city_country("Karachi", "Pakistan"));
    
//     console.log(city_country("Tokoyo", "Japan"));
    
//     console.log(city_country("Berlin" , "Germany"));

//Question 40
// define the makeAlbum function
// function makeAlbum(artistName: string, albumTitle: string, tracks?: number){
//     let album: {artist: string, title: string, tracks?: number} = {
//         artist: artistName,
//         title: albumTitle,
//     };
//     if(tracks !== undefined){
//         album.tracks = tracks;

//     }

//     return album;

// }
// //calling three functions  and creating 3 variables with different values
// //makeAlbum("Sobia", "Album title 1");

// let album1 = makeAlbum("Sobia", "Album title 1");

// let album2 = makeAlbum("Ufaq", "Album title 2");

// //calling a makeAlbum function with third parameter
// let album3 = makeAlbum("Aaouz" , "Album title 3" , 10);

// //printing the variables
// console.log(album1);

// console.log(album2);

// console.log(album3);

//Question 41
// define a function to print each magician name from an array

// function show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name));
// }
// // define an array containing magicians name
// let magician_names = ["Hamza", "Sohail", "Ahsan"]

// //call the function to print each magician name
// show_magicians(magician_names);

//Question 42
// define the function to show magicians names
// function show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name));
// }
// // function to make magicians great through .map() it will modify array
// function make_great(magicians: string[]){
//     return magicians.map(name => `The Great ${name}`);

// }


// //define an array of magician names
// let magician_names = ["Ahsan", "Hamza", "Sohail"]
// //call the function make_great to modify magicians names

// let great_magicians = make_great(magician_names);
// //call show_magician function that show modify list of magicians
// show_magicians(great_magicians)

// console.log(great_magicians);

//Question 43
// define the function to show magicians names
// function show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name));
// }
// // function to make magicians great through .map() it will modify array
// function make_great(magicians: string[]){
//     return magicians.map(name => `The Great ${name}`);

// }


// //define an array of magician names
// let magician_names = ["Ahsan", "Hamza", "Sohail"]

// //making a copy of original array through. slice() function

// let copy_magicians_names = magician_names.slice()

// //modify the copied array to include "The Great" with their names
// let copy_great_magicians = make_great(copy_magicians_names);

// //shoe both arrays original and copied
// //original
// console.log("Original Array\n")
// show_magicians(magician_names);
// //copied
// console.log("\n Copied Array\n")
// show_magicians(copy_great_magicians);

//Question 44
//define a function with a rest parameter that accept items arguments representing our sandwich
// function make_sandwich(...items: string[]){
//     console.log("\nMaking a Sandwich with the following items: \n")


//     items.forEach(singleItem => console.log(singleItem));

//     console.log("\nNow Enjoy Sandwich");
// }

// //call the function3 times with 3 different number of arguements

// make_sandwich("Chiken", "Cheese", "Mayo", "Egg");

// make_sandwich("Bread", "Butter");

// make_sandwich("Bread", "Butter", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");

//Question 45
// import { features } from "process";

// function storeCar(manufacturer:string,modelName:string,...extraOption:{ [key: string]:any} []):Object{
//     const carinfo = {
//         manufacturer ,
//         modelName ,
//         ...Object.assign({},...extraOption)
//     }
//     return carinfo;
// };
//  let answer = storeCar("Honda", "Civic", {colour: "black"}, {features:["Navigation", "Power window"]});
//  console.log(answer);


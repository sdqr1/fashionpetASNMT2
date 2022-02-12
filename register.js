let salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K"
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[]
}

function displayPetNames(){
    alert(`You have ${salon.pets.length} pets.`);
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i]);
    }
}
// create the constructor
function Pet(name,age,gender,breed,service,owner,contact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner;
    this.contact=contact;
}
// create three pets using the constructor 
let scooby = new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy",555-555-5555);
let scrappy = new Pet("Scrappy",55,"Male","Dane","Bath","None",555-555-5554);
let rupert = new Pet("Rupert",5,"Male","Beagle","Bath","Daniel",222-222-2222);
let guera = new Pet("Guera",7,"Female","Mutt","Nail Cutting","Antuanet",333-333-3333);
let rocky = new Pet("Rocky",9,"Male","Boxer","Allergies","Gerardo",444-444-4444);
let galina = new Pet("Galina",9,"Female","Chihuaha","Bath","Daniel",222-222-2222);
salon.pets.push(scooby,scrappy,rupert,guera,rocky,galina); // push the element into the array


//getting the inputs from the html
let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBred = document.getElementById("txtBreed");
let petService = document.getElementById("txtService");
let petOwner = document.getElementById("txtOwner");
let petContact = document.getElementById("txtContact");

function register(){
    console.log("Register");
    //create an obj
    let thePet = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwner.value,petContact.value);
    console.log(thePet);
    //push the obj into the array 
    salon.pets.push(thePet);
    //display the array 
    console.log(salon.pets);
    //alert
}

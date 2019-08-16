class pet {
  constructor(name, type, size){
    this._name = name;
    this._type = type;
    this._size = size
  }
  get name () {
    return this._name
//     function namingPet() {
//   const person = prompt("Please enter your pets name", " ");
//   if (person != null) {
//     document.getElementById("name").innerHTML =
//     "Say Hello to " + person + "remember to look after your new friend";
//   }
// }
  }
  get type () {
    return this._type
  }
  get size () {
    return this._size
  }
  hunger (i) {
    if(i == 3){
    return alert(`${this._name} is happy`)
  } else if(i == 2){
  return(`${this._name} is content`)
  } else if (i == 1){
    return(`${this._name} is hungry`)
  } else if (i <=0){
    return alert(`${this._name} has died`)
  }
} 
  petCare (petting){
  if(petting > 3){
  return alert(`${this.name} thinks your getting too close`)
  
}else if(3 == petting){
   return(`${this.name} looks up lovingly`)
 }
  else if(2 == petting){
    return(` ${this.name}is happy to be around you`)
  } 
  else if(1 == petting){
    return(`${this.name} notices you`)
  } 
  else{
    return (`${this.name} snarls at you`)
  }
  }
}

let dog1 = new pet ('fluffy','dog','big');

alert(dog1.petCare(0),dog1.hunger(0))

// document.getElementById("pet").onclick = displayName;
// console.log("test")
// const displayName = () =>{
// document.getElementById("demo").innerHTML = "Alex";
// }

// let mybutton = document.getElementById("pet")

// mybutton.addEventListener("click", () => {
//   document.getElementById("demo").innerHTML = (`Your ${dog1.type} ${dog1.hunger(1)}`)
// })
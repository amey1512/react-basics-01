class Vehicle {
  constructor(){
    this.type   = "Hatchback"
    this.glass  = 2
  }
}

class Ford extends Vehicle {
  constructor(){
    super()
    this.wheels = 4
  }
  colour = "black"
}

const ford = new Ford();

console.log(ford.type);
console.log(ford.glass);
console.log(ford.wheels);
console.log(ford.colour);
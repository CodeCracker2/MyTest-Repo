/*Code goes here

******************************************   MODULE-6    ***************************************************

*/

//Intersection

type a = string | number;
type b = number | boolean;

type c = a & b;

const d: c = 2;
console.log(typeof d);

type admin = {
  name: string;
  Id: number;
};

type user = {
  name: string;
  password: number;
};

type combine = admin & user;

const user1: combine = {
  name: "peter",
  Id: 87,
  password: 904004,
};
console.log(typeof user1);

//Type Guards

class Car {
  drive() {
    console.log("Driving a Car...");
  }
}
class Truck {
  drive() {
    console.log("Driving a a Truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading the cargo .." + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if("loadCargo" in vehicle){
  //     vehicle.loadCargo(28)

  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
console.log(useVehicle(v1));
console.log(useVehicle(v2));

//Discriminated Unions

interface bird {
  type: "bird";
  flyingSpeed: number;
}
interface dog {
  type: "dog";
  runningSpeed: number;
}

type Animal = bird | dog;

function moveAnimal(animal: Animal) {
  let speed;
  // if('flyingSpeed' in animal)
  // console.log(`${animal.type} Running at speed : ${animal.flyingSpeed} km/hr`)

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "dog":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Animal:${animal.type} running at speed ":${speed} km/hr`);
}

moveAnimal({ type: "bird", flyingSpeed: 100 });

//Type Casting

const button = document.querySelector("button")! as HTMLElement;

button.addEventListener("click",()=>{
    alert("Hi!I am learning Ts");
})

//Index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  UserName: "Must start with capital letter",
  2: "log",
};

//Function Overloads
//Function Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(2005, 5, 5);
const d3 = makeDate(2, 3,1999);
console.log(d1);
console.log(d2);
console.log(d3);

//Optional Chaining

let jobDesc = {
  position: "Flutter developer",
  salary: 70000,
  skill: ["flutter", "dart", "firebase"],
};

console.log(jobDesc.skill);
console.log(jobDesc?.salary);
console.log(jobDesc.position);

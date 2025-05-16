```TypeScript


(()=>{
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName())

interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

//Object with properties
let planet: Planet = {
    name : "Earth",
    galaxy : "Milky Way",
    numberOfMoons : 1,
    weight : 100000
};

console.log("Planet Name :- " + planet.name);
console.log("Planet Galaxy :- " + planet.galaxy);
console.log("Planet Number of Moons :- " + planet.numberOfMoons);
console.log("Planet Weight :- " + planet.weight);
})();

(()=>{
interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

// Iterating properties.
let planet: Planet = {
	name : "Earth",
	galaxy: "Milky Way",
	numberOfMoons : 1,
	weight : 100000
};

for(let prop in planet)
{
	console.log("Planet " + prop + " :- " + planet[prop]);
}
})()

```

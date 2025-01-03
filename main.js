/*let names=["ahmed","mahmoed","samey","mahmoud","sayed"];
console.log(names)
console.log("*******************************")
*/
//*****************************
let name = ["ahmed", "mahmoud", ["samey", "sayed", ["mustafa"]]];
console.log(name);
console.log(name[2]);
console.log(name[2][1]);
console.log(name[2][2]);
console.log(name[2][2][0]);
console.log("**********************************");
name.push("ali", "Sameh");
name[2].unshift("Abdullah");
name[2].push("Mutaz", "Saleh");
name[2].pop()
console.log(name);
console.log(name[2]);

console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = ["apples", "carrots"];
console.log(basket);

// - Create a function called `addItem`. It should:
// - take an input parameter for a string `item`
// - add the new item to the global array `basket`.
// - return `true` indicating the item was added


// function addItem(items) {
// 	let itemInBasket = basket.push(basket);
// 	for (let item of items) {
// 		if (itemInBasket === item){
// 			itemInBasket = true;
// 		}
// 	}
// }

function addItem(foodToAdd){
	let addFood = foodToAdd
	basket.push(foodToAdd);
	console.log(addFood)
	return true;
}

addItem("potatoes");
addItem('brocoli');

console.log(`Basket is ${basket}`);

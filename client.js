let aragorn = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_charge: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33
				
			},
			10: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			11: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			12: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			13: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			14: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}	
	}
};

let legolas = {
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_charge: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: { 
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
};

let frodo = {
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_charge: 6,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: { 
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}
			
		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
};

let restaurants = [aragorn, legolas, frodo];
let choice; 	//the chosen restaurant
let myOrder = [];	//array of items ordered
/*
This function dynamically creates to the drop down menu on the page
*/
function init(){
	//create drop down list
	let select = document.getElementById("select");
	select.onchange = youSure;
	for(let i=0; i<restaurants.length; i++){
		let option = document.createElement("option");
		option.value = restaurants[i].name;
		let text = document.createTextNode(restaurants[i].name);
		option.appendChild(text);
		select.appendChild(option);
	}
	display()
}
/*
This function calls the functino to display the menu, 
clears any current orders in the array of orders, 
and calls the function the display the order summary
*/
function display(){
	displayMenu();
	myOrder = []; 
	displayOrder();
}

/*
This function displays the name of restaurant, minimum order, 
categories of the different menu items with links to jump to different sections, 
and dispays each individual menu item with its description and price 
*/
function displayMenu(){
	//clear whatever is already in categories and menu
	let categories = document.getElementById("categories");
	let food = document.getElementById("food");
	categories.innerHTML = "";
	food.innerHTML = "";
	//determine the selected restaurant
	let value = document.getElementById("select").value;
	for(let i=0; i<restaurants.length; i++){
		if(value == restaurants[i].name){
			choice = restaurants[i];
		}
	}
	//display name, minimum order and delivery fee of restaurant
	let name = document.getElementById("name");
	name.innerHTML = choice.name;
	let min = document.getElementById("min");
	min.innerHTML = "Minimum order: $" + choice.min_order.toFixed(2);
	let fee = document.getElementById("fee");
	fee.innerHTML = "Delivery fee: $" + choice.delivery_charge.toFixed(2);
	//display categories header
	let div = document.createElement("div");
	let subhead = document.createTextNode("Categories");
	div.appendChild(subhead);
	div.className = "heading";
	categories.appendChild(div);
	//display menu categories
	let ul = document.createElement("ul");
	for(let key in choice.menu){
		let li = document.createElement("li");
		let a = document.createElement("a");
		a.href = ("#"+key);
		let text = document.createTextNode(key);
		a.appendChild(text);
		li.appendChild(a);
		ul.appendChild(li)
	}
	categories.appendChild(ul);
	//display menu items
	for(let key in choice.menu){
		//create menu category
		let br = document.createElement("br");
		let div = document.createElement("div");
		div.id = key;
		let div0 = document.createElement("div");
		div0.className = "menuHeading";
		let text = document.createTextNode(key);
		div0.appendChild(text);
		div.appendChild(div0);
		food.appendChild(div);
		food.appendChild(br);

		for(let subkey in choice.menu[key]){
			//create add button
			let img = document.createElement("img");
			img.src = "add.jpg";
			img.alt = "add";
			img.className = "imgClass";
			img.addEventListener("click", function(){
				adjustQuantity(choice.menu[key][subkey].name, choice.menu[key][subkey].price, 1);
			});	
			//create specific menu item with description and price
			let br = document.createElement("br");
			let name = document.createTextNode(choice.menu[key][subkey].name);
			let description = document.createTextNode(choice.menu[key][subkey].description);
			let price = document.createTextNode("$"+choice.menu[key][subkey].price.toFixed(2));
			let div1 = document.createElement("div");
			div1.className = "nameClass";
			let div2 = document.createElement("div");
			div2.className = "descriptionClass";
			let div3 = document.createElement("div");
			div3.className = "priceClass";
			div1.appendChild(name);
			div1.appendChild(img);
			div2.appendChild(description);
			div3.appendChild(price);
			div.appendChild(div1);
			div.appendChild(div2);
			div.appendChild(div3);
			div.appendChild(br);
		}
	}
	
}
/*
This function displays the summary of items that have been added to the order,
the subtotal, delivery fee, tax and total,
along with a cancel and submit button
*/
function displayOrder(){
	//clear current summary
	let title = document.getElementById("title");
	let table = document.getElementById("table");
	let subtotal = document.getElementById("subtotal");
	title.innerHTML = "";
	table.innerHTML = "";
	subtotal.innerHTML = "";
	//create title
	let summary = document.createTextNode("Summary");
	title.className = "heading";
	title.appendChild(summary);

	//create order summary table
	if(myOrder.length>0){

		subtotal.appendChild(document.createElement("br"));
		//create headers
		let tr = document.createElement("tr");
		let th1 = document.createElement("th");
		let th2 = document.createElement("th");
		let th3 = document.createElement("th");
		let name = document.createTextNode("Name");
		let quan = document.createTextNode("Quantity");
		let tot = document.createTextNode("Total");
		th1.appendChild(name);
		th2.appendChild(quan);
		th3.appendChild(tot);
		tr.appendChild(th1);
		tr.appendChild(th2);
		tr.appendChild(th3);
		table.appendChild(tr);
		//create table of items
		for(let i=0; i<myOrder.length; i++){
			let tr = document.createElement("tr");
			let td1 = document.createElement("td");
			let td2 = document.createElement("td");
			let td3 = document.createElement("td");
			let name = document.createTextNode(myOrder[i].name);
			let quan = document.createTextNode(myOrder[i].quantity);
			let tot = document.createTextNode("$" + (myOrder[i].quantity*myOrder[i].price).toFixed(2));
			//add and remove images
			let img1 = document.createElement("img");
			img1.src = "add.jpg";
			img1.alt = "add";
			img1.className="imgClass";
			img1.addEventListener("click", function(){
					adjustQuantity(myOrder[i].name, myOrder[i].price, 1);
				});	
			let img2 = document.createElement("img");
			img2.src = "remove.jpg";
			img2.alt = "remove";
			img2.className="imgClass";
			img2.addEventListener("click", function(){
					adjustQuantity(myOrder[i].name, myOrder[i].price, -1);
				});	
			//add elements to table
			td1.appendChild(name);
			td2.appendChild(img2);
			td2.appendChild(quan);
			td2.appendChild(img1);
			td3.appendChild(tot);
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			table.appendChild(tr);

		}
	}
	
	//create price summary table
	//subtotal
	let div01 = document.createElement("div");
	let text01 = document.createTextNode("Subtotal: $" + subTotal());
	div01.appendChild(text01);
	subtotal.appendChild(div01);
	//delivery fee
	let div02 = document.createElement("div");
	let text02 = document.createTextNode("Delivery fee: $" + choice.delivery_charge.toFixed(2));
	div02.appendChild(text02);
	subtotal.appendChild(div02);
	//tax
	let div03 = document.createElement("div");
	let text03 = document.createTextNode("Tax: $" + (subTotal()*0.1).toFixed(2));
	div03.appendChild(text03);
	subtotal.appendChild(div03);
	//total
	let div04 = document.createElement("div");
	let text04 = document.createTextNode("Total: $" + (subTotal()*1.1+choice.delivery_charge).toFixed(2));
	div04.appendChild(text04);
	subtotal.appendChild(div04);

	//cancel button
	let cancel = document.createElement("input");
	cancel.type = "submit";
	cancel.value = "Cancel";
	cancel.onclick = display;
	subtotal.appendChild(cancel);

	//create submit button or display message
	if(subTotal() >= choice.min_order){
		let submit = document.createElement("input");
		submit.type = "submit";
		submit.value = "Submit";
		submit.onclick = submitOrder;
		subtotal.appendChild(submit);
	}else{
		let div = document.createElement("div");
		let text = document.createTextNode("You must add $" + (choice.min_order - subTotal()).toFixed(2) + " more to your order before submitting.");
		div.appendChild(text);
		subtotal.appendChild(div);
	}
}

/*
This function adds new order to the myOrder array
and adjusts the quantity of an order based on when the "-" or "+"
image has been clicked, then displays an updated summary table 
by calling displayOrder()
*/
function adjustQuantity(n, p, q){
	if(myOrder.length ==0){
		myOrder.push({name: n, price: p, quantity: q});
		displayOrder();
		return;
	}
	for(let i=0; i<myOrder.length; i++){
		if(myOrder[i].name == n){
			if(q==1){
				myOrder[i].quantity += 1;
				displayOrder();
				return;
			}else if(q==-1){
				myOrder[i].quantity -= 1;
				if(myOrder[i].quantity == 0) clear(myOrder[i].name);
				displayOrder();
				return;
			}
			
		}
	}
	myOrder.push({name: n, price: p, quantity: q});
	displayOrder();
	return;
}
/*
This function calculates and returns the subtotal based on the 
prices and quantities in the myOrder array
*/
function subTotal(){
	let sum = 0;
	for(let i=0; i<myOrder.length; i++){
		sum += myOrder[i].price*myOrder[i].quantity;
	}
	return sum.toFixed(2);
}
/*
This function alerts the user that their order has been submitted 
and resets the page
*/
function submitOrder(){
	alert("Your order has been submitted!");
	display();
}
/*
This function is called if the user tries to select a new restaurant while they
have items in their order. It cancels order is they hit ok, or remains unchanged if they hit cancel.
*/
function youSure(){
	if((myOrder.length>0)){
		let c = confirm("Are you sure?");
		if(c==true){
			display();
		}else{
			document.getElementById("select").value = choice.name; //so that select value isn't changed
		}
	}else{
		display();
	}
}
/*
This function clears an item from the myOrder array if its quantity has dropped to 0, 
so that it is no longer displayed in the summary table.
*/
function clear(n){
	for(let i=myOrder.length-1; i>=0; i--){
		if(myOrder[i].name == n){
			myOrder.splice(i,1);
		}
	}
}








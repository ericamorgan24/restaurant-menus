# restaurant-menus

README

Description

A web page that allows a user to browse menus for several restaurants, add items from a restaurant to an order, and simulate placing an order. Everything involves client-side programming within the browser and is implemented using plain Javascript.


Instructions

  Open order.html directly in browser


Overall Page Quality

	Changing browser dimension:
		The website shrinks to fit the browser dimensions, until it reaches a minimum size, then the scroll option appears.
		There is never any overlap between the columns on the page.

	Easy to find information
		All titles are clearly visible. Categories and summary sections are labelled.
		The important info about the restaurant can be found at top, below the name.

	Fomatting is clear
		Menu items are in bold, and prices are in italics. 
		Distict and separate sections for different bodies of information.

	Additional features
		There is a pointer that appears whenever cursor hovers over any clickable parts. 
			e.g. select restaurant, categories sections all plus/minus images, cancel and submit button
		There is a colour change whenever the cursor goes over a section in the categories.
		There is a fixed button image at the bottom so that the client can jump back to the top of the page, no matter where they are in the menu
		The brightness of the add/remove and jump-to-top images increase when the cursor goes over them.
		There is a well-formatted table to display a summary of the items in the cart


Design Decisions

	I created two variables - one to store the chosen restaurant and one to store an array of orders - so they would be in scope to be accessed from my functions.

	Four main functions were used to build this website along with five helper functions. 
	The init() is used to create the select menu and then call display. I separated the display() from the init() because I would need to access display() even after the first onload event as well.
	I decided to break down the construction of the main display into 3 parts because depending on the situation, I could call one function to change one portion of the page. 
	The display() is used when I need to redisplay the menu and the summary when the client is changing pages, so the order array is reset and the summary is cleared, and the new menu is displayed.
	The displayOrder() is used when only the order needs to be redisplayed as a result of adding or subtracting an item, and the menu can stay the same.

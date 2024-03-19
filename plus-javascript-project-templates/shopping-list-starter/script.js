// Have this function at the top becasue you are calling it first?
function updateItems() {
    // First we get the list elementlet 
    listElement =document.getElementById("shopping-list-items");
    // Then we clear it of any existing items - if you dont it keeps duplicating
    listElement.innerHTML="";
    
    // Then we loop through the shopping list items and add them to the list
    for (const shoppingItem of shoppingListItems) {
        let itemElement =document.createElement("li");
        itemElement.innerText= shoppingItem;
        listElement.appendChild(itemElement);
    }
}

// task - add a clear function and ass and clear function that empties the array
function clearList() {
    shoppingListItems = [];
    console.log(shoppingListItems);
    updateItems();
}



function addItem() {
    let item =document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    // Clear the input field after a new item is added to the list
    updateItems();
    // reference the documentHTML first then use methos get element by id(ID in string form) - dot notation to reference the value of the input which we want to set to 0
    document.getElementById("new-item-text").value = "";
}






let shoppingListItems = ["milk","eggs","bread"];
updateItems()

// // Here we grab the ul from the HTML
// let listElement = document.getElementById("shopping-list-items")

// for (const shoppingItem of shoppingListItems) {
//     console.log(shoppingItem);

// // We create a list element - 
// let itemElement = document.createElement("li");

// // Add the inner text to the list element - sets the content of the list itme to an item from the array
// itemElement.innerText = shoppingItem;

// // Add the list element to the ul
// listElement.appendChild(itemElement);
// }




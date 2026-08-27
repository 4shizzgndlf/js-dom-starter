// ===============================
// EXAMPLE
// ===============================
// This example shows how to create and append a new element to the DOM.
// It creates a new <span> element with the text "Hello, World!" and appends it to a <p> element.
// const parent = document.querySelector("p");
// const newElement = document.createElement("span");
// newElement.textContent = "Hello, World!";
// parent.appendChild(newElement);

// REMOVING LAST ELEMENT
// parent.lastElementChild.remove():
// NOTE: If no child, then parent.lastElementChild is null!

// ===============================
// Instructions
// ===============================
// 1. When #addBtn is clicked, add a new <li> to #itemList with the text "Item N",
//    where N is the number of <li> elements already in #itemList plus one (see getNextItemNo).
// 2. When #removeBtn is clicked, remove the last <li> from #itemList (if any).
// 3. Use createElement(), appendChild(), and remove() as shown in the example above.
// 4. Use getNextItemNo() to determine the correct number for the new item.

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  // TODO: Add event listeners to #addBtn and #removeBtn
  const addBtn = document.querySelector("#addBtn");
  const removeBtn = document.querySelector("#removeBtn");

  addBtn.addEventListener("click", handleAddClick);
	removeBtn.addEventListener("click", handleRemoveClick);
}

function getNextItemNo(number) {
  // TODO: return the number based one the current list size.
  const itemList = document.querySelector("#itemList");

  return itemList.children.length + 1;
}

function handleAddClick() {
  // TODO: Add a new <li> to #itemList, with the text "Item N" where N is the new item number
  const itemList = document.querySelector("#itemList");
  const item = document.createElement("li");
  const itemNo = getNextItemNo();

	item.textContent = `Item ${itemNo}`;
  itemList.appendChild(item);
}

function handleRemoveClick() {
  // TODO: Remove the last <li> from #itemList
	const itemList = document.querySelector("#itemList");

	if (itemList.lastElementChild) {
        itemList.lastElementChild.remove();
    }
}

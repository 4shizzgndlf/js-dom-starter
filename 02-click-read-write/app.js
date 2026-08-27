// Intro DOM Exercise
// ==================
// 1. When #showBtn is clicked trigger handleShowClick
// 2. Retrieve all paragraphs with class "msg" and id "message".
// 3. Show the combined (concatenated) text content of all these elements in #output.

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
    // TODO: Add event listener to #showBtn
    // Add event listener to #showBtn
    const showBtn = document.querySelector("#showBtn");

    showBtn.addEventListener("click", handleShowClick);
}

function handleShowClick() {
    // TODO: Read and show the combined text in #output
    // Get the output element
    const output = document.querySelector("#output");

    // Get #message and all elements with class .msg
    const message = document.querySelector("#message");
    const messages = document.querySelectorAll(".msg");

    // Combine all text content
    let combinedText = message.textContent;

    messages.forEach((msg) => {
        combinedText += " " + msg.textContent;
    });

    // Show the combined text in #output
    output.textContent = combinedText;
}

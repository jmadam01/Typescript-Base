"use strict";
console.log("something goes here");
const userName = "Person One";
console.log(userName);
const button = document.querySelector(".btn");
if (button !== null) {
    console.log(button);
    button.addEventListener("click", () => {
        console.log("Hello");
    });
}
//# sourceMappingURL=app.js.map
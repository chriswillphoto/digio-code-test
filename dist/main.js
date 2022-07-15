"use strict";
function sayMyName(name) {
    if (name === "Heisenberg") {
        console.log("You're right 👍");
        console.log(process.argv);
    }
    else {
        console.log("You're wrong 👎");
    }
}
sayMyName("Heisenberg");

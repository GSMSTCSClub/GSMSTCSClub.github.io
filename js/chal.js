const chalQ = document.querySelector("span#chal-q");
const chalA = document.querySelector("input#chal-a");
const chalDifficulty = document.querySelector("input#chal-difficulty");
const chalAForm = document.querySelector("form");
const chalStatus = document.querySelector("h1#chal-status");
const OPERATIONS = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.floor(a / b)
};
const HARD_MODE_LENGTH = 20;
const EASY_MODE_RANGE = [1, 11];
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randBig(nDigits) {
    const digitStr = Array.from({ length: nDigits }, () => randInt(0, 10)).join("");
    return BigInt(digitStr);
}
function choose(arr) {
    return arr[randInt(0, arr.length)];
}
{
    let eqData;
    let hideChalStatus = -1;
    /**
     * Generate a question-answer pair and update the page to use the new pair.
     * @returns the two operands, the answer, and the operator in a list
     */
    function generateEq() {
        let a, b;
        if (chalDifficulty.checked) {
            a = randBig(HARD_MODE_LENGTH);
            b = randBig(HARD_MODE_LENGTH);
        }
        else {
            a = randInt(...EASY_MODE_RANGE);
            b = randInt(...EASY_MODE_RANGE);
        }
        let op = choose(Object.keys(OPERATIONS));
        if (op === "/") {
            let answer = a * b;
            chalQ.textContent = `${answer} / ${a}`;
            eqData = [answer, a, b, op];
        }
        else {
            chalQ.textContent = `${a} ${op} ${b}`;
            let answer = OPERATIONS[op](a, b);
            if ((a == 9) && (b == 10) && op === "+")
                answer = 21;
            eqData = [a, b, answer, op];
        }
        return eqData;
    }
    /**
     * Check if the input answer is correct and display a status on the page.
     * @param ans Answer to check
     */
    function tryAnswer(ans) {
        let inputAnswer;
        try {
            inputAnswer = chalDifficulty.checked ? BigInt(ans) : +ans;
        }
        catch (e) {
            // in case of BigInt parse error
            inputAnswer = NaN;
        }
        const [_a, _b, expected] = eqData;
        clearTimeout(hideChalStatus);
        chalStatus.classList.remove("hidden");
        if (inputAnswer == expected) {
            chalStatus.textContent = "Correct! ok now go get your bingo and join cs club :)";
            hideChalStatus = setTimeout(() => {
                chalStatus.classList.add("hidden");
                // reset to hard mode for whoever's next
                chalDifficulty.checked = true;
                generateEq();
            }, 3000);
        }
        else {
            chalStatus.textContent = `Wrong! It's ${expected}.`;
            hideChalStatus = setTimeout(() => { chalStatus.classList.add("hidden"); }, 1000);
        }
        chalA.value = "";
    }
    generateEq();
    chalAForm.addEventListener("submit", e => {
        e.preventDefault();
        tryAnswer(chalA.value);
        generateEq();
    });
    chalDifficulty.addEventListener("input", () => {
        generateEq();
    });
}

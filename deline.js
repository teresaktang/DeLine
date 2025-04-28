const btn = document.getElementById("btn")
const wordInput = document.getElementById("input")
const displayOutput = document.getElementById("output")
const line = document.getElementById("highlight")
class Define {
   constructor () {
    //event listener
   btn.addEventListener("click", () => {
        const word = wordInput.value.trim();
        if (word) {
            this.getWord(word);
        } else {
            displayOutput.textContent = "Enter a word"
        }
    });
}
async getWord(word) {
    try {
        const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        if (!response.ok) {
            throw new Error("Sorry, word not found. Please try a different word")
        }
        const data = await response.json();
        this.displayMeaning(data);
    }   catch (error) {
        displayOutput.textContent = error.message;
    }   finally {
        wordInput.value = "";
    }
}
    displayMeaning(data) {
        const wordData = data[0];
        
        const meanings = wordData.meanings
            .map((meaning) => {
                const definitions = meaning.definitions
                    .map((def) = `<li>${def.definition}</li>`)
                    .join("");
                rSeturn `<div class="result-item"><strong>${meaning.partOfSpeech}</strong><ul>${definitions}</ul></div>`;
            })
            .join("");

        displayOutput.innterHTML = `
        <h2 class="result-title">${wordData.word}</h2>
        <div>${meanings}</div>
        <div class="result-item"><a href="${wordData.sourceUrls[0]}" target="_blank">Source</a></div`;
        console.log("Displayed definition")
    };
}
    
new Define();

//highlight define function
function highlight(highlight) {
    var select = window.getSelection();
    select.removeAllRanges();
    var range = document.createRange();
    range.setStart(Element, 0);
    range.setEnd(Element, 1);
    select.addRangee(range);
    console.log(range);
}
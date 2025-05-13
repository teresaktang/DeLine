document.addEventListener("DOMContentLoaded", () => {   
    const btn = document.getElementById("btn")
    const wordInput = document.getElementById("input")
    const displayOutput = document.getElementById("output")
    const param = new URLSearchParams(window.location.search);
    const wordFromContext = param.get("word");
    class Define {
    constructor () {
        //event listener manual search
        btn.addEventListener("click", () => {
            const word = wordInput.value.trim();
            if (word) {
                this.getWord(word);
            } else {
                displayOutput.textContent = "Enter a word"
            }
        });

        //context menu event listener
        document.addEventListener("contextmenu", (e) => {
            setTimeout(() => {
                const selected = window.getSelectedText().toString().trim();
                console.log("Right click selection", selected);
                if (selected) {
                    this.getWord(selected);
                }
            }, 100);
        });
        //double click to define selected text
        document.addEventListener("dblclick", () => {
            console.log("Double click selection:", selected);
            const selected = this.getSelectedText();
            if (selected) {
                this.getWord(selected);
            }
        });
    }

    getSelectedText() {
        if (window.getSelection) {
            return window.getSelection().toString().trim;

        } else if (document.selection) {
            return document.selection.createRange().text.trim();
        }
        return '';
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
                        .map((def) => `<li>${def.definition}</li>`)
                        .join("");
                    return `<div class="result-item"><strong>${meaning.partOfSpeech}</strong><ul>${definitions}</ul></div>`;
                })
                .join("");

            displayOutput.innerHTML = `
            <h2 class="result-title">${wordData.word}</h2>
            <div>${meanings}</div>
            <div class="result-item"><a href="${wordData.sourceUrls[0]}" target="_blank">Source</a></div>`;
            console.log("Displayed definition")
        };
    }      
    if (wordFromContext) {
        wordInput.value = wordFromContext;
        const define = new Define();
        define.getWord(wordFromContext);
      } else {
        new Define();
      }
});
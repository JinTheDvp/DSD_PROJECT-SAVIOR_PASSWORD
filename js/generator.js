const checkboxSpecials = document.getElementById("specials-checkbox")
const checkboxMayus = document.getElementById("mayus-checkbox")
const checkboxMinus = document.getElementById("minus-checkbox")
const checkboxNums = document.getElementById("nums-checkbox")
const patternSelect = document.getElementById("pattern-select")

const clipboardButton = document.getElementById("clipboard-button")
const copyP = document.getElementById("succesfulCopy")
const copyPClose = document.getElementById("closeCopiedMessage")

const slider = document.getElementById("rangePassword")
const outputSlider = document.getElementById("output-rangePassword")

outputSlider.innerHTML = slider.value
slider.oninput = () => {
    outputSlider.innerHTML = slider.value
    if (slider.value == 5) {outputSlider.innerHTML += " <small>(min)</small>"}
    if (slider.value == 20) {outputSlider.innerHTML += " <small>(max)</small>"}
}

const generateButton = document.getElementById("generatePassword-button")
const resultP = document.getElementById("result-p")
generateButton.addEventListener("click", () => {
    let alphabetMinus = "abcdefghijklmnopqrstuvwxyz" // no ñ
    let alphabetMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // no ñ
    let numbers = "1234567890"
    let specials = "&%$:_-"

    let vowels = "aeiou"
    let consonants = "bcdfghjklmnpqrstvwxyz"
        
    let final = ""

    if (checkboxMayus.value == "on") {final += alphabetMayus}
    if (checkboxMinus.value == "on") {final += alphabetMinus}
    if (checkboxNums.value == "on") {final += numbers}
    if (checkboxSpecials.value == "on") {final += specials}

    let result = ""

    if (patternSelect.value == "Sin Patron") {
        for (let i=0; i<slider.value; i++) {
            result += final[Math.floor(Math.random() * final.length)]
        }
    } else if (patternSelect.value == "1") {
        result += alphabetMayus[Math.floor(Math.random() * alphabetMayus.length)]
        for (let i=0; i<slider.value-2; i++) {
            if (i % 2 == 0) {result += vowels[Math.floor(Math.random() * vowels.length)]}
            else {result += consonants[Math.floor(Math.random() * consonants.length)]}
        }
        for (let i=0; i<2; i++) {
            result += numbers[Math.floor(Math.random() * numbers.length)]
        }
    }

        resultP.innerHTML = result
})

clipboardButton.addEventListener("click", () => {
    navigator.clipboard.writeText(resultP.textContent)

    copyP.style.display = "block"

    setTimeout( () => {copyP.style.display = "none"} , 5000)
})

copyPClose.addEventListener("click", () => {
    copyP.style.display = "none"
})
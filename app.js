let fact = document.querySelector("#fact");
let mathFact = document.querySelector("#math-fact");
let yearFact = document.querySelector("#year-fact");
let factText = document.querySelector("#fact-text");
let numberInput = document.querySelector("#number-input");
let mathText = document.querySelector("#math-text");
let yearText = document.querySelector("#year-text");
numberInput.addEventListener('input', getFactFetch);

function getFactFetch() {
    let num = numberInput.value;
    fetch('http://numbersapi.com/' + num)
        .then(response => response.text())
        .then(data => {
            if (num != '') {
                //console.log(data);
                fact.style.display = 'block';
                factText.innerText = data;
            }
        })
        .then(getMathFetch)
        .then(getYearFetch)
        .catch(err => console.log(err));
}

function getMathFetch() {
    let num = numberInput.value;
    fetch('http://numbersapi.com/' + num + '/math')
        .then(response => response.text())
        .then(data => {
            if (num != '') {
                //console.log(data);
                mathFact.style.display = 'block';
                mathText.innerText = data;
            }
        })
        .catch(err => console.log(err));
}

function getYearFetch() {
    let num = numberInput.value;
    fetch('http://numbersapi.com/' + num + '/year')
        .then(response => response.text())
        .then(data => {
            if (num != '') {
                //console.log(data);
                yearFact.style.display = 'block';
                yearText.innerText = data;
            }
        })
        .catch(err => console.log(err));
}
/* Reset CSS */
document.body.style.boxSizing = "border-box";
document.body.style.margin = "0";
document.body.style.border = "0";
document.body.style.outline = "0";

document.body.style.display = "flex";
document.body.style.minHeight = "100vh";
document.body.style.flexFlow = "column nowrap";

/* Create the row-section */
const rowSection = document.createElement("section");
for (let rowNumber = 1; rowNumber < 6; rowNumber++) {
    const row = document.createElement("p");
    row.innerText = "Rad " + rowNumber;
    const color = rowNumber * 10;
    const fontSize = rowNumber * 8 + "px";
    row.style.backgroundColor = `hsl(180, ${color}%, 60%)`;
    row.style.textAlign = 'center';
    row.style.fontSize = fontSize;
    row.style.color = 'purple';
    rowSection.append(row);
};


/* Create the numbers-section */
const numberSection = document.createElement("section");
numberSection.style.flex = "50%";
numberSection.style.border = 'solid black 1px';
numberSection.style.margin = '10px';
numberSection.style.display = "flex";
numberSection.style.flexFlow = "row nowrap";
numberSection.style.justifyContent = "space-around";
numberSection.style.alignItems = "center";


/* Create number columns*/
for (let i = 1; i < 4; i++) {
    const numberColumn = document.createElement("div");
    numberColumn.style.display = "flex";
    numberColumn.style.flexFlow = "column nowrap";
    numberColumn.style.backgroundColor = "purple";
    numberColumn.style.width = '5%';
    numberColumn.classList.add('numberColumn');

    numberSection.append(numberColumn);
};


/* First column */
const numbersColumns = numberSection.querySelectorAll(".numberColumn");

for (let number = 0; number < 10; number++) {
    const num = document.createElement("p");
    num.innerText = number;

    if (number % 2 == 0) {
        num.style.color = "white";
        if (number == 4) {
            num.style.backgroundColor = 'inherit';
        } else {
            num.style.backgroundColor = "black";
        }
    } else {
        num.style.backgroundColor = "white";
    }

/* Fix the margins */
    num.style.margin = '0px 5px 0px 5px';
    if (number == 0) { num.style.margin = '5px 5px 0px 5px'; };
    if (number == 9) { num.style.margin = '0px 5px 5px 5px'; };


    numbersColumns[0].append(num);
}


/* Second column */

for (let number = 9; number >= 0; number--) {

    let num = document.createElement("p");
    num.innerText = number;
    num.style.margin = '5px';
    num.style.textAlign = "center";

    if (number % 2 == 0) {

        num.style.color = "white";
        if (number == 8) {
            num.style.backgroundColor = 'inherit';
        } else {
            num.style.backgroundColor = "black";
        }
    } else {
        num.style.backgroundColor = "white";
    }

/* Fix the margins */
    num.style.margin = '0px 5px 0px 5px';
    if (number == 9) { num.style.margin = '5px 5px 0px 5px'; };
    if (number == 0) { num.style.margin = '0px 5px 5px 5px'; };


    numbersColumns[1].append(num);
}

/* third column */
const numbersAsWords = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

for (let number = 0; number <= numbersAsWords.length - 1; number++) {
    let num = document.createElement("p");
    num.innerText = numbersAsWords[number];
    num.style.textAlign = "right";
    num.style.margin = '5px';

    if (number % 2 != 0) {
        num.style.color = "black";
        if (number == 5) {
            num.style.backgroundColor = 'inherit';
        } else {
            num.style.backgroundColor = "white";
        }
    } else {
        num.style.color = "white";
        num.style.backgroundColor = "black";
    }

/* Fix the margins */
    num.style.margin = '0px 5px 0px 5px';
    if (number == 0) { num.style.margin = '5px 5px 0px 5px'; };
    if (number == 9) { num.style.margin = '0px 5px 5px 5px'; };


    numbersColumns[2].append(num);
};

/* add elements to body */
document.body.append(rowSection);
document.body.append(numberSection);
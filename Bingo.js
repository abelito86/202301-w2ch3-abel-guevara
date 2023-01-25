

const randomCard = () => Math.floor(Math.random() * 90 + 1);

const bingoCardFunc = () => ({ number: randomCard(), matched: false });

let showBingoCard = Array.from({ length: 15 }, () => bingoCardFunc());

let usedNumbers = [];

const saveName = [];

let turns = 0;

let won = false;

const changesBingoCard = () => {

    showBingoCard = Array.from({ length: 15 }, () => bingoCardFunc());

};

const bingoCard = () => {

    console.log(`Línea 1 `);
    console.log(`${showBingoCard[0].number} ${showBingoCard[1].number} ${showBingoCard[2].number} ${showBingoCard[3].number} ${showBingoCard[4].number}`)
    console.log(`Línea 2 `);
    console.log(`${showBingoCard[5].number} ${showBingoCard[6].number} ${showBingoCard[7].number} ${showBingoCard[8].number} ${showBingoCard[9].number}`)
    console.log(`Línea 3 `);
    console.log(`${showBingoCard[10].number} ${showBingoCard[11].number} ${showBingoCard[12].number} ${showBingoCard[13].number} ${showBingoCard[14].number}`)
}


const bingoPlayer = () => {

    let namePlayer = prompt("Bienvenido al Bingo: introduzca su nombre");

    saveName.push(namePlayer);

    while (namePlayer === "" || namePlayer === null) {

        namePlayer = prompt("Bienvenido al Bingo: introduzca su nombre");

    }
    console.log(`Hola ${namePlayer.toUpperCase()} su cartón es: `);

    bingoCard();

    changesCard();

};


const changesCard = () => {

    let askCard = prompt(`Quieres este cartón? y/n`);

    while (askCard === "" || askCard === null || +askCard) {

        askCard = prompt(`Quieres este cartón? y/n`);

    }
    while (askCard === "n") {

        console.log(`Su nuevo cartón es: `);

        changesBingoCard();
        bingoCard()

        askCard = prompt(`Quieres este cartón? y/n`);

        if (askCard === "y") {
            break;
        }

    };

};



const rounds = () => {

    do {
        let roundsRandom = Math.floor(Math.random() * 90 + 1);

        if (usedNumbers.includes(roundsRandom)) {
            return rounds();
        };

        usedNumbers.push(roundsRandom);

        nextround = confirm(`El número salido es: ${roundsRandom}`);

        for (i = 0; i < showBingoCard.length; i++) {

            if (roundsRandom === showBingoCard[i].number) {

                showBingoCard[i].matched = true

            };
            if (showBingoCard[i].matched === true) {

                console.log(`El numero encontrado es el ${showBingoCard[i].number}`);
                showBingoCard[i].number = "X"

            };

        };


        bingoCard();


        if (showBingoCard[0].matched === true && showBingoCard[1].matched === true && showBingoCard[2].matched === true
            && showBingoCard[3].matched === true && showBingoCard[4].matched === true) {

            console.log("LINEA=>1 €");

        };
        if (showBingoCard[5].matched === true && showBingoCard[6].matched === true && showBingoCard[7].matched === true
            && showBingoCard[8].matched === true && showBingoCard[9].matched === true) {

            console.log("LINEA=>2 €");

        };
        if (showBingoCard[10].matched === true && showBingoCard[11].matched === true && showBingoCard[12].matched === true
            && showBingoCard[13].matched === true && showBingoCard[14].matched === true) {

            console.log("LINEA=>3 €");

        };

        turns++
        won = showBingoCard.every((element) => element.matched);

        if (won === true) {

            alert(`€ BINGOOOO €, has ganado en ${turns} turnos`);
            break;


        };



        console.log("***************************************************");

    } while (nextround !== false);

};


const bingo = () => {

    bingoPlayer();

    rounds();

    let playAgain = prompt("¿Desea volver a jugar? s/n");

    switch (playAgain) {

        case "s":
            
            changesBingoCard();
            console.log("***************************************************");
            return bingo();


        case "n":
            alert("Hasta luego");

    };

};

bingo();
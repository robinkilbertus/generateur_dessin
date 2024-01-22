document.addEventListener("DOMContentLoaded", function () {
    const characters = "-. "; // Déplacer la déclaration de characters à l'extérieur des fonctions

    function generateRandomString(rows, columns, percentageSpecial, specialCharacter) {
        let result = "";

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                const randomValue = Math.random();
                let character;
                if (randomValue < percentageSpecial) {
                    character = specialCharacter; // Utilisation du caractère spécial (point, tiret ou espace)
                } else if (randomValue < percentageSpecial + 0.1) {
                    character = characters.charAt(2); // 10% pour les espaces
                } else if (randomValue < percentageSpecial + 0.2) {
                    character = characters.charAt(0); // 10% pour les tirets
                } else {
                    character = characters.charAt(1); // 80% pour les points
                }
                result += character;
            }

            if (row < rows - 1) {
                result += "\n"; // Ajout d'un saut de ligne après chaque ligne générée, sauf pour la dernière ligne
            }
        }

        return result;
    }

    const paragraphElementCan1 = document.querySelector('#can1 h1');
    const paragraphElementCan2 = document.querySelector('#can2 h1');
    const generateButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');

    generateButton.addEventListener('click', function () {
        const divHeightCan1 = document.querySelector('#can1').offsetHeight;
        const divWidthCan1 = document.querySelector('#can1').offsetWidth;
        const divHeightCan2 = document.querySelector('#can2').offsetHeight;
        const divWidthCan2 = document.querySelector('#can2').offsetWidth;

        const rowsCan1 = Math.floor(divHeightCan1 / 1.5); // Utilisation de la taille de la police comme référence
        const columnsCan1 = Math.floor(divWidthCan1 / 1.5); // Utilisation de la taille de la police comme référence

        const rowsCan2 = Math.floor(divHeightCan2 / 1.5); // Utilisation de la taille de la police comme référence
        const columnsCan2 = Math.floor(divWidthCan2 / 1.5); // Utilisation de la taille de la police comme référence

        const percentagePointsTopInput = document.getElementById('percentagePointsTop').value;
        const percentageDashesBottomInput = document.getElementById('percentageDashesBottom').value;

        const percentagePointsTop = percentagePointsTopInput !== '' ? parseFloat(percentagePointsTopInput) : getRandomPercentage();
        const percentageDashesBottom = percentageDashesBottomInput !== '' ? parseFloat(percentageDashesBottomInput) : getRandomPercentage();

        const randomStringCan1 = generateRandomString(rowsCan1, columnsCan1, percentagePointsTop / 100, characters.charAt(1));
        const randomStringCan2 = generateRandomString(rowsCan2, columnsCan2, percentageDashesBottom / 100, characters.charAt(0));

        paragraphElementCan1.textContent = randomStringCan1;
        paragraphElementCan2.textContent = randomStringCan2;
    });

    resetButton.addEventListener('click', function () {
        paragraphElementCan1.textContent = '';
        paragraphElementCan2.textContent = '';
    });

    // Fonction pour générer un pourcentage aléatoire équilibré
    function getRandomPercentage() {
        const randomValue = Math.random();
        if (randomValue < 0.33) {
            return 33.33;
        } else if (randomValue < 0.66) {
            return 66.67;
        } else {
            return 100;
        }
    }
});

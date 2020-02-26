class VigenereCipheringMachine {
    constructor(name) {this.name = name}
    encrypt() {
        if (arguments[0] == undefined || arguments[1] == undefined) throw new Error('Error');

        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let message = arguments[0].split('');
        let messageInNumb = [];

        let key = arguments[1].repeat(15).split('');
        key.splice(message.length, key.length - message.length);
        let keyInNumber = [];

        for (let i = 0; i < message.length; i++) {
            if (message[i].match(/[^a-zA-Z]/)) messageInNumb.push(message[i]);
            for (let j = 0; j < alphabet.length; j++) {
                if (message[i].toUpperCase() === alphabet[j]) messageInNumb.push(j);
            }
        }

        for (let i = 0; i < message.length; i++) {
            if (message[i].match(/[^a-zA-Z]/)) {
                keyInNumber.push(message[i]);
                key.unshift(1);
                continue;
            }
            for (let j = 0; j < alphabet.length; j++) {
                if (key[i].toUpperCase() === alphabet[j]) keyInNumber.push(j);
            }
        }

        let cipher = [];
        for (let i = 0; i < message.length; i++) {
            if (message[i].match(/[^a-zA-Z]/)) cipher.push(message[i]);
            else {
                let resultNumbs = (keyInNumber[i] + messageInNumb[i] <= 25) ? keyInNumber[i] + messageInNumb[i] : keyInNumber[i] + messageInNumb[i] - 26;
                cipher.push(alphabet[resultNumbs]);
            }

        }
        if (this.name == false) return cipher.reverse().join('');
        else return cipher.join('');
    }

    decrypt() {
        if (arguments[0] == undefined || arguments[1] == undefined) throw new Error('Error');

        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let message = arguments[0].split('');
        let messageInNumb = [];

        let key = arguments[1].repeat(15).split('');
        key.splice(message.length, key.length - message.length);
        let keyInNumber = [];

        for (let i = 0; i < message.length; i++) {
            if (message[i].match(/[^a-zA-Z]/)) messageInNumb.push(message[i]);
            for (let j = 0; j < alphabet.length; j++) {
                if (message[i].toUpperCase() === alphabet[j]) messageInNumb.push(j);
            }
        }

        for (let i = 0; i < message.length; i++) {
            if (message[i].match(/[^a-zA-Z]/)) {
                keyInNumber.push(message[i]);
                key.unshift(1);
                continue;
            }
            for (let j = 0; j < alphabet.length; j++) {
                if (key[i].toUpperCase() === alphabet[j]) keyInNumber.push(j);
            }
        }

        let cipher = [];
        for (let i = 0; i < message.length; i++) {
            if (message[i].match(/[^a-zA-Z]/)) cipher.push(message[i]);
            else {
                let resultNumbs = (messageInNumb[i] >= keyInNumber[i]) ? messageInNumb[i] - keyInNumber[i] : 26 - (keyInNumber[i] - messageInNumb[i]);
                cipher.push(alphabet[resultNumbs]);
            }

        }
        if (this.name == false) return cipher.reverse().join('');
        else return cipher.join('');
    }
}

module.exports = VigenereCipheringMachine;

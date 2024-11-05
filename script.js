const place = document.querySelector("p");
const alphabet = "ёйцукенгшщзхъфывапролджэячсмитьбю";

function showWord() {
    let index1 = Math.floor(Math.random() * (alphabet.length + 1));
    let index2 = Math.floor(Math.random() * (alphabet.length + 1));
    let index3 = Math.floor(Math.random() * (alphabet.length + 1));
    let index4 = Math.floor(Math.random() * (alphabet.length + 1));
    let word = alphabet[index1] + alphabet[index2] + alphabet[index3] + alphabet[index4];
    place.textContent =  word;
    console.log(place);
}

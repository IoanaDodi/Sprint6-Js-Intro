function divizibilCu10(numar) {
    if (numar % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

const n = 100; 
const x = 23;
const z = 15;

console.log(n + " este divizibil cu 10? " + divizibilCu10(n));
console.log(x + " este divizibil cu 10? " + divizibilCu10(x));
console.log(z + " este divizibil cu 10? " + divizibilCu10(z));

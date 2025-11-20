let angka1 = 10;
let angka2 = 3;
let operator = "/";
let hasil;

if(operator === "+") {
    hasil = angka1 + angka2
}
else if(operator === "-") {
    hasil = angka1 - angka2
}
else if(operator === "*") {
    hasil = angka1 * angka2
}
else if(operator === "/") {
    hasil = angka1 / angka2
}
else("Operator tidak valid!")

console.log(`${angka1} ${operator} ${angka2} = ${hasil}`)
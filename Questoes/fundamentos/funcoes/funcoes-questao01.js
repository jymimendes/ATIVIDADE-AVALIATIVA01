function inverterNumero(num) {
    let numStr = num.toString();
    let invertido = "";
    for (let i = numStr.length - 1; i >= 0; i--) {
        switch (numStr[i]) {
            default:
                invertido += numStr[i];
                break;
        }
    }
    return parseInt(invertido);
}
console.log(inverterNumero(12356));

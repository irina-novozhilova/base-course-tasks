export function showDigitsSum() {
    let number = +prompt('Введите трехзначное число ');
    let hundreds = +((number / 100).toFixed(0));
    number = number - ( hundreds*100 );
    let dozens = +((number / 10).toFixed(0));
    let units = number - ( dozens*10);
    console.log(hundreds + dozens + units);
}
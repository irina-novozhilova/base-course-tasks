export function determineCircleFitsInSquare(circle,square) {
    let r = Math.sqrt(circle / 3.14);
    let a = Math.sqrt(square);
    return ((2*r) <= a) ?  'Круг поместится в квадрат': 'Круг не поместиться в квадрат';
}
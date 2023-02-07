export function findSumFrom50To100() {
    let sum = 0;
    let count = 50;
    while (count <= 100) {
        sum +=count;
        count++;
    }
    console.log(sum);
}
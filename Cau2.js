let n = +prompt("Nhap mot so nguyen duong")
while (n<=0) {
    n = +prompt("Nhap mot so nguyen duong")
}
function perfectNum(a) {
    let sum = 0;
    for (let i = 1; i <= a / 2; i++) {
        if (a % i === 0) {
            sum += i;
        }
    }
    return sum === a;
}
let result = perfectNum(n);
document.write(result);


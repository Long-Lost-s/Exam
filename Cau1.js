let n = +prompt("Nhap so luong phan tu khong qua 50");
while (n<=0 || n>50) {
    n = +prompt("nhap so luong phan tu");
}
let arr=[];
for(let i=0;i<n;i++){
    arr.push(+prompt("Nhap phan tu"));
}
function sumNum(arr1){
    let sum = 0;
    let count = 0;
    for (let i=0;i<arr1.length;i++){
        if (arr1[i] % 3 === 0) {
            sum += arr1[i];
            count++;
        }
    }
    let avg = sum % count;
    return avg;
}
let result=sumNum(arr);
document.write(result);